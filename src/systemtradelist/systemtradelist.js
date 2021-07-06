import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Col, Row, Form } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Select from 'react-select';

import Store from '../services/store.js';
import './systemtradelist.scss';

//components
import Systemtradeorders from '../popups/systemtradeorders.js';
import Pagecomponent from '../utilities/pagecomponent.js';
//services
import Rstrade from '../services/eve/rest/table/rstrade.js';
import Rsviewsystemtrade from '../services/eve/rest/view/rsviewsystemtrade.js';
//data models
import { Systempk } from '../data/eve/table/super/systemsuper.js';
import { Orderspk } from '../data/eve/table/super/orderssuper.js';
import { Systemtradepk } from '../data/eve/table/super/systemtradesuper.js';
import { Viewsystemtrade } from '../data/eve/view/viewsystemtrade.js';

export default function Systemtradelist(props) {
  const getsystemoptions = () => {
    let systemlist = [];
    Store.codetables.systemlist.map(s => {
      systemlist.push({ value: s.PK.id, label: s.name });
    });
    return systemlist;
  }

  const maxpagecontrols = 20;

  const [loggedin, setLoggedin] = useState(Store.user.loggedin);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [systems, setSystems] = useState(getsystemoptions());
  const [systemid, setSystemid] = useState(null);
  const [systemname, setSystemname] = useState(null);
  const [systemtradelist, setSystemtradelist] = useState([]);
  const [viewsystemtrade, setViewsystemtrade] = useState(new Viewsystemtrade());
  const [showtradeline, setShowtradeline] = useState(false);
  const [pagelength, setPagelength] = useState(20);
  const [paginationconfig, setPaginationconfig] = useState(
    {
      pageLength: pagelength,
      totalPages: 1,
      currentPage: 0,
      pageLength: pagelength,
      showMax: maxpagecontrols,
      size: "sm",
      threeDots: true,
      prevNext: true,
    }
  );

  const updatePageconfig = (pagenr) => {
    setPaginationconfig(
      {
        pageLength: pagelength,
        totalPages: Math.ceil(systemtradelist.length / pagelength),
        currentPage: pagenr,
        showMax: maxpagecontrols,
        size: "sm",
        threeDots: true,
        prevNext: true,
      }
    );    
  }

  const showpage_ = (pagenr, override) => {
    if(pagenr!==paginationconfig.currentPage && pagenr>0 && pagenr<=Math.ceil(systemtradelist.length / pagelength) || override) {
      updatePageconfig(pagenr);
      setList(systemtradelist.slice((pagenr-1) * pagelength + 1, pagenr * pagelength + 1));
    }
  }

  const showpage = (pagenr) => {
    showpage_(pagenr, false);
  }

  const changeSystem = (selection) => { 
    setSystemid(selection.value); 
  };

  //update loggedin at login event
  useEffect(() => {
    setLoggedin(Store.user.loggedin);
  }, [Store.user.loggedin]);

  //update system select data if systemlist is updated
  useEffect(() => {
    setSystems(getsystemoptions());
  }, [Store.codetables.systemlist]);

  //update systemtrade list when systemid is updated
  useEffect(() => {
    if(systemid !== null) {
      setSystemname(Store.codetables.findSystem(systemid).name)
      loadlist();
    }
  }, [systemid]);

  //update page properties after updating the tradelist
  useEffect(() => {
    showpage_(1, true);
  }, [systemtradelist]);

  //update page properties and list content after updating pagelength
  useEffect(() => {
    showpage_(1, true);
  }, [pagelength]);

  //construct trade list data
  const loadlist = async () => {
    try {
        if(systemid!=null) {
          setLoading(true);
          let systempk = new Systempk();
          systempk.id = systemid;
          const result = await Rsviewsystemtrade.getall_startsystem(Store.user, systempk);
          result.sort((a, b) => (a.profit<b.profit) ? 1 : -1);
          setSystemtradelist(result);
          setLoading(false);
        }
    } catch (e) {
      console.log("loadlist failed");
      setLoading(false);
    }
  };

  const format_price = (p) => {
    const rounded = Math.round(p);
    return "" + rounded;
  };

  const format_2digits = (n) => {
    return n.toFixed(2);
  };

  const totalvolume = (trade) => {
    return format_2digits(trade.total_cargo_volume);
  };

  const changePagelength = (newpagelength) => {
    setPagelength(newpagelength);
  }

  const showTradeline = (trade) => {
    setViewsystemtrade(trade);
    setShowtradeline(true);
  }

  const onTradelineCancel = () => {
    setShowtradeline(false);
  }

  const onUpdatetrade = async (volume) => {
    let systemtradepk = new Systemtradepk();
    systemtradepk.systemSellsystemPK = new Systempk();
    systemtradepk.systemSellsystemPK.id = viewsystemtrade.sell_system;
    systemtradepk.systemBuysystemPK = new Systempk();
    systemtradepk.ordersBuyorderidPK.id = viewsystemtrade.buy_system;
    const systemtraderesult = await Rstrade.executetrade(systemtradepk, volume);
    setShowtradeline(false);
    const dummy = await loadlist();
  }

  const colstart_system_jumps = {width: '1rem'};
  const colsell_regionname = {width: '5rem' };
  const colsell_systemname = {width: '5rem'};
  const colbuy_systemname = {width: '5rem'};
  const colordercount = {width: '3rem'};
  const coltotal_m3 = {width: '6rem'};
  const colsell_total = {width: '5rem'};
  const colbuy_total = {width: '5rem'};
  const coltrade_profit = {width: '5rem'};
  const coltrade_jumps= {width: '1rem'};

    return (
    <div className="root fullheight">
        <div className="containerheader">
          <div className="mx-auto bg-light p-1">
              <div className="row m-0">
                <div className="col col-sm-4">
                  <Select options={systems} onChange={changeSystem}/>
                </div>
                <div className="col col-sm-4">
                  <button type="button" className="btn btn-sm btn-primary m-1" onClick={loadlist}>refresh</button>
                </div>
                <div className="col col-sm-4">
                </div>
              </div>
        </div>
      </div>

      <div className="containercontent container-relative">
        <div className="root fullheight">
          <div className="containercontent container-relative">
            <div className="table-container container-fluid p-0">

{ loading && 
              <div className="d-flex justify-content-center">
                <Spinner animation="border" role="status" />
              </div>
}
              <table className="table small table-dark table-striped table-bordered table-hover fillparent">
                <thead>
                  <tr>
                    <th style={colstart_system_jumps}>j</th>
                    <th style={colordercount}># ord</th>
                    <th style={colsell_regionname}>from region</th>
                    <th style={colsell_systemname}>system</th>
                    <th style={colbuy_systemname}>to system</th>
                    <th style={coltotal_m3}>m3 asked</th>
                    <th style={colsell_total}>tot. sell price</th>
                    <th style={colbuy_total}>tot. buy price</th>
                    <th style={coltrade_profit}>est. profit</th>
                    <th style={coltrade_jumps}>jumps / run</th>
                    <th></th>
                    <th className="dummyscroll"></th>
                  </tr>
                </thead>
                <tbody className="overflow text-body">

    {list.map((trade, index) => (
                  <tr className={trade.sell_system===viewsystemtrade.sell_system && trade.buy_system===viewsystemtrade.buy_system ? "table-active" : "table-info"} key={index} onClick={() => setViewsystemtrade(trade)}>
                    <td style={colstart_system_jumps}>{trade.start_system_jumps}</td>
                    <td style={colordercount}><span className='float-right'>{trade.ordercount}</span></td>
                    <td style={colsell_regionname}>{trade.regionsellname}</td>
                    <td style={colsell_systemname}>{trade.systemsellname}</td>
                    <td style={colbuy_systemname}>{trade.systembuyname}</td>
                    <td style={coltotal_m3}><span className='float-right'>{totalvolume(trade)}</span></td>
                    <td style={colsell_total}><span className='float-right'>{format_price(trade.totalsell)}</span></td>
                    <td style={colbuy_total}><span className='float-right'>{format_price(trade.totalbuy)}</span></td>
                    <td style={coltrade_profit}><span className='float-right'>{format_price(trade.profit)}</span></td>
                    <td style={coltrade_jumps}><span className='float-right'>{trade.jumps}</span></td>
                    <td><button type="button" className="btn btn-sm small btn-primary" onClick={() => showTradeline(trade)}>show</button></td>
                  </tr>  
    ))}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="containerfooter mx-auto bg-light p-1">
        <Pagecomponent 
          config={paginationconfig} 
          showpage={showpage}
          changePagelength={changePagelength}
          />
      </div>

      <Systemtradeorders 
        trade={viewsystemtrade}
        startsystemid={systemid}
        startsystemname={systemname}
        show={showtradeline} 
        onUpdatetrade={onUpdatetrade}
        onCancel={onTradelineCancel} 
        />
    </div>

    );
}
