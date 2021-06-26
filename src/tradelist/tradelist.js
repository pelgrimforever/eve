import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Col, Row, Form } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Select from 'react-select';

import Store from '../services/store.js';
import './tradelist.scss';

//components
import Tradeline from '../popups/tradeline.js';
import Pagecomponent from '../utilities/pagecomponent.js';
//services
import Rstrade from '../services/eve/rest/table/rstrade.js';
import Rsviewtrade from '../services/eve/rest/view/rsviewtrade.js';
//data models
import { Systempk } from '../data/eve/table/super/systemsuper.js';
import { Orderspk } from '../data/eve/table/super/orderssuper.js';
import { Tradepk } from '../data/eve/table/super/tradesuper.js';
import { Viewtrade } from '../data/eve/view/viewtrade.js';

export default function Tradelist(props) {
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
  const [tradelist, setTradelist] = useState([]);
  const [viewtrade, setViewtrade] = useState(new Viewtrade());
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
        totalPages: Math.ceil(tradelist.length / pagelength),
        currentPage: pagenr,
        showMax: maxpagecontrols,
        size: "sm",
        threeDots: true,
        prevNext: true,
      }
    );    
  }

  const showpage_ = (pagenr, override) => {
    if(pagenr!==paginationconfig.currentPage && pagenr>0 && pagenr<=Math.ceil(tradelist.length / pagelength) || override) {
      updatePageconfig(pagenr);
      setList(tradelist.slice((pagenr-1) * pagelength + 1, pagenr * pagelength + 1));
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

  //update trade list when systemid is updated
  useEffect(() => {
    if(systemid !== null) {
      setSystemname(Store.codetables.findSystem(systemid).name)
      loadlist();
    }
  }, [systemid]);

  //update page properties after updating the tradelist
  useEffect(() => {
    showpage_(1, true);
  }, [tradelist]);

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
          const result = await Rsviewtrade.getall_startsystem(Store.user, systempk);
          result.sort((a, b) => (a.trade_profit_per_jump<b.trade_profit_per_jump) ? 1 : -1);
          setTradelist(result);
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
    return format_2digits(trade.total_volume * trade.packaged_volume);
  };

  const changePagelength = (newpagelength) => {
    setPagelength(newpagelength);
  }

  const showTradeline = (trade) => {
    setViewtrade(trade);
    setShowtradeline(true);
  }

  const onTradelineCancel = () => {
    setShowtradeline(false);
  }

  const onUpdatetrade = async (volume) => {
    let tradepk = new Tradepk();
    tradepk.ordersSellorderidPK = new Orderspk();
    tradepk.ordersSellorderidPK.id = viewtrade.sell_id;
    tradepk.ordersBuyorderidPK = new Orderspk();
    tradepk.ordersBuyorderidPK.id = viewtrade.buy_id;
    const traderesult = await Rstrade.executetrade(tradepk, volume);
    setShowtradeline(false);
    const dummy = await loadlist();
  }

  const colstart_system_jumps = {width: '1rem'};
  const colsell_regionname = {width: '4rem' };
  const colsell_systemname = {width: '4rem'};
  const colsell_stationname = {width: '15rem'};
  const colevetype_name = {width: '12rem'};
  const colpackaged_volume = {width: '3rem'};
  const colsell_volume_remain = {width: '3rem'};
  const colsell_price = {width: '3rem'};
  const colbuy_price = {width: '3rem'};
  const colbuy_systemname = {width: '4rem'};
  const colbuy_stationname = {width: '15rem'};
  const coltotal_volume = {width: '5rem'};
  const coltotal_m3 = {width: '6rem'};
  const colsell_total = {width: '5rem'};
  const colbuy_total = {width: '5rem'};
  const coltrade_profit = {width: '5rem'};
  const coltrade_jumps= {width: '1rem'};
  const coltrade_profit_per_jump= {width: '5rem'};
  const coltrade_runs = {width: '1rem'};
  const coltrade_total_jumps = {width: '1.5rem'};
  const coltrade_singlerunprofit = {width: '4rem'};
  const coltrade_maxunits_per_run = {width: '4rem'};

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
                    <th style={colsell_regionname}>from region</th>
                    <th style={colsell_systemname}>system</th>
                    <th style={colsell_stationname}>station</th>
                    <th style={colevetype_name}>type</th>
                    <th style={colpackaged_volume}>unit m3</th>
                    <th style={colsell_volume_remain}># rem</th>
                    <th style={colsell_price}>sell o price</th>
                    <th style={colbuy_price}>buy o price</th>
                    <th style={colbuy_systemname}>to system</th>
                    <th style={colbuy_stationname}>station</th>
                    <th style={coltotal_volume}>volume asked</th>
                    <th style={coltotal_m3}>m3 asked</th>
                    <th style={colsell_total}>tot. sell price</th>
                    <th style={colbuy_total}>tot. buy price</th>
                    <th style={coltrade_profit}>est. profit</th>
                    <th style={coltrade_jumps}>jumps / run</th>
                    <th style={coltrade_profit_per_jump}>profit/jump</th>
                    <th style={coltrade_runs}>runs</th>
                    <th style={coltrade_total_jumps}>t.j</th>
                    <th style={coltrade_singlerunprofit}>profit / run</th>
                    <th style={coltrade_maxunits_per_run}>volume / run</th>
                    <th></th>
                    <th className="dummyscroll"></th>
                  </tr>
                </thead>
                <tbody className="overflow text-body">

    {list.map((trade, index) => (
                  <tr className={trade.sell_id===viewtrade.sell_id && trade.buy_id===viewtrade.buy_id ? "table-active" : "table-info"} key={index} onClick={() => setViewtrade(trade)}>
                    <td style={colstart_system_jumps}>{trade.start_system_jumps}</td>
                    <td style={colsell_regionname}>{trade.sell_regionname}</td>
                    <td style={colsell_systemname}>{trade.sell_systemname}</td>
                    <td style={colsell_stationname}>{trade.sell_stationname}</td>
                    <td style={colevetype_name}>{trade.evetype_name}</td>
                    <td style={colpackaged_volume}><span className='float-right'>{trade.packaged_volume}</span></td>
                    <td style={colsell_volume_remain}><span className='float-right'>{trade.sell_volume_remain}</span></td>
                    <td style={colsell_price}><span className='float-right'>{trade.sell_price}</span></td>
                    <td style={colbuy_price}><span className='float-right'>{trade.buy_price}</span></td>
                    <td style={colbuy_systemname}>{trade.buy_systemname}</td>
                    <td style={colbuy_stationname}>{trade.buy_stationname}</td>
                    <td style={coltotal_volume}><span className='float-right'>{trade.total_volume}</span></td>
                    <td style={coltotal_m3}><span className='float-right'>{totalvolume(trade)}</span></td>
                    <td style={colsell_total}><span className='float-right'>{format_price(trade.sell_total)}</span></td>
                    <td style={colbuy_total}><span className='float-right'>{format_price(trade.buy_total)}</span></td>
                    <td style={coltrade_profit}><span className='float-right'>{format_price(trade.trade_profit)}</span></td>
                    <td style={coltrade_jumps}><span className='float-right'>{trade.trade_jumps}</span></td>
                    <td style={coltrade_profit_per_jump}><span className='float-right'>{format_price(trade.trade_profit_per_jump)}</span></td>
                    <td style={coltrade_runs}><span className='float-right'>{trade.trade_runs}</span></td>
                    <td style={coltrade_total_jumps}><span className='float-right'>{trade.trade_total_jumps}</span></td>
                    <td style={coltrade_singlerunprofit}><span className='float-right'>{format_price(trade.trade_singlerunprofit)}</span></td>
                    <td style={coltrade_maxunits_per_run}><span className='float-right'>{format_price(trade.trade_maxunits_per_run)}</span></td>
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

      <Tradeline 
        trade={viewtrade}
        startsystemid={systemid}
        startsystemname={systemname}
        show={showtradeline} 
        onUpdatetrade={onUpdatetrade}
        onCancel={onTradelineCancel} 
        />
    </div>

    );
}
