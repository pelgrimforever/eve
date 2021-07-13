import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Col, Row, Form } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Select from 'react-select';

import Store from '../services/store.js';
import './combinedtradelist.scss';

//components
import Sortmode from './sortmode.js';
import Combinedtradeorders from '../popups/combinedtradeorders.js';
import Pagecomponent from '../utilities/pagecomponent.js';
//services
import Rstrade from '../services/eve/rest/table/rstrade.js';
import Rsviewcombinedtrade from '../services/eve/rest/view/rsviewcombinedtrade.js';
//data models
import { Systempk } from '../data/eve/table/super/systemsuper.js';
import { Orderspk } from '../data/eve/table/super/orderssuper.js';
import { Tradepk } from '../data/eve/table/super/tradesuper.js';
import { Viewcombinedtrade } from '../data/eve/view/viewcombinedtrade.js';

const maxpagecontrols = 20;

const sort_jumps = 'jumps';
const sort_m3 = 'volume';
const sort_profit = 'profit';
const sort_profitperjump = 'profitperjump';
const sortmodes = [ 
    { name:sort_jumps, text: 'jumps' }, 
    { name:sort_m3, text: 'cargo vol.' }, 
    { name:sort_profit, text: 'profit' }, 
  ];
const sortmode_default = 2;

export default function Combinedtradelist(props) {
  const getsystemoptions = () => {
    let systemlist = [];
    Store.codetables.systemlist.map(s => {
      systemlist.push({ value: s.PK.id, label: s.name });
    });
    return systemlist;
  }

  const [loggedin, setLoggedin] = useState(Store.user.loggedin);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [systems, setSystems] = useState(getsystemoptions());
  const [systemid, setSystemid] = useState(null);
  const [systemname, setSystemname] = useState(null);
  const [unfilteredtradelist, setUnfilteredtradelist] = useState([]);
  const [tradelist, setTradelist] = useState([]);
  const [viewcombinedtrade, setViewcombinedtrade] = useState(new Viewcombinedtrade());
  const [showtradeline, setShowtradeline] = useState(false);
  const [pagelength, setPagelength] = useState(maxpagecontrols);
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
  const [sortfield, setSortfield] = useState(sortmodes[sortmode_default]);
  const [filterstartsystem, setFilterstartsystem] = useState(null);
  const [filterendsystem, setFilterendsystem] = useState(null);
  const [filtercargo, setFiltercargo] = useState(0);

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

  const changeStartsystem = (selection) => { 
    setFilterstartsystem(selection); 
  };

  const resetStartsystem = () => {
    setFilterstartsystem(null); 
  }

  const changeEndsystem = (selection) => { 
    setFilterendsystem(selection); 
  };

  const resetEndsystem = () => {
    setFilterendsystem(null); 
  }

  const resetCargo = () => {
    setFiltercargo(0); 
  }

  const exitCargo = (selection) => { 
    setFiltercargo(selection.target.value); 
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

  //filter list
  useEffect(() => {
      let result = filtertradelist(unfilteredtradelist);
      sorttradelist(result);
      setTradelist(result);
  }, [unfilteredtradelist, filterstartsystem, filterendsystem, filtercargo]);

  //update page properties after updating the tradelist
  useEffect(() => {
    showpage_(1, true);
  }, [tradelist]);

  //update page properties and list content after updating pagelength
  useEffect(() => {
    showpage_(1, true);
  }, [pagelength]);

  //update page properties and list content after updating pagelength
  useEffect(() => {
    sorttradelist(tradelist);
    showpage_(1, true);
  }, [sortfield]);

  //construct trade list data
  const loadlist = async () => {
    try {
        if(systemid!=null) {
          setLoading(true);
          let systempk = new Systempk();
          systempk.id = systemid;
          const result = await Rsviewcombinedtrade.getall_startsystem(Store.user, systempk);
          setUnfilteredtradelist(result);
          setLoading(false);
        }
    } catch (e) {
      console.log("loadlist failed");
      setLoading(false);
    }
  };

  const filtertradelist = (list) => {
    let result = list.filter(obj => {
      let systemstartok = filterstartsystem===null || obj.sell_systemid===filterstartsystem.value;
      let systemendok = filterendsystem===null || obj.buy_systemid===filterendsystem.value;
      let cargook = filtercargo===0 || obj.total_volume<=filtercargo;
      return systemstartok && systemendok && cargook;
    });
    return result;
  }

  const sorttradelist = (listref) => {
    switch(sortfield.name) {
      case sort_jumps:
        listref.sort((a, b) => (a.start_system_jumps<b.start_system_jumps) ? -1 : 1);
        break;
      case sort_m3:
        listref.sort((a, b) => (a.total_volume<b.total_volume) ? 1 : -1);
        break;
      case sort_profit:
        listref.sort((a, b) => (a.profit<b.profit) ? 1 : -1);
        break;
    }
  }

  const format_price = (p) => {
    const rounded = Math.round(p);
    return "" + rounded;
  };

  const format_2digits = (n) => {
    return n.toFixed(2);
  };

  const changePagelength = (newpagelength) => {
    setPagelength(newpagelength);
  }

  const showTradeline = (trade) => {
    setViewcombinedtrade(trade);
    setShowtradeline(true);
  }

  const onTradelineCancel = () => {
    setShowtradeline(false);
  }

  const onUpdatetrade = async (volume) => {
/*    let tradepk = new Tradepk();
    tradepk.ordersSellorderidPK = new Orderspk();
    tradepk.ordersSellorderidPK.id = viewcombinedtrade.sell_id;
    tradepk.ordersBuyorderidPK = new Orderspk();
    tradepk.ordersBuyorderidPK.id = viewcombinedtrade.buy_id;
    const traderesult = await Rstrade.executetrade(tradepk, volume);
    setShowtradeline(false);
    const dummy = await loadlist();*/
  }

  const onSortfieldselected = (sortfield) => {
    setSortfield(sortfield);
  }

  const colstart_system_jumps = {width: '1rem'};
  const colordercount = {width: '3rem'};
  const colsell_regionname = {width: '4rem' };
  const colsell_systemname = {width: '4rem'};
  const colbuy_systemname = {width: '4rem'};
  const coltotal_m3 = {width: '6rem'};
  const colsell_total = {width: '5rem'};
  const colbuy_total = {width: '5rem'};
  const coltrade_profit = {width: '5rem'};
  const coltrade_jumps= {width: '3rem'};
  const coltrade_runs = {width: '3rem'};

    return (
    <div className="root fullheight">
        <div className="containerheader">
          <div className="mx-auto bg-light p-1">
              <div className="row m-0">
                <div className="col col-sm-1">
                  <Select options={systems} onChange={changeSystem}/>
                </div>
                <div className="col col-sm-1">
                  <button type="button" className="btn btn-sm btn-primary m-1" onClick={loadlist}>refresh</button>
                </div>
                <div className="col col-sm-3">
                  <Sortmode title="sort" modes={sortmodes} sortmode_default={sortmode_default} onModeselected={onSortfieldselected} />
                </div>
                <div className="col col-sm-4 d-flex">
                  <span className="mx-2">start</span>
                  <div style={{width:'200px'}}>
                    <Select options={systems} value={filterstartsystem} onChange={changeStartsystem}/>
                  </div>
                  <button type="button" className="btn btn-sm btn-secondary" onClick={resetStartsystem}>X</button>
                  <span className="mx-2">end</span>
                  <div style={{width:'200px'}}>
                    <Select options={systems} value={filterendsystem} onChange={changeEndsystem}/>
                  </div>
                  <button type="button" className="btn btn-sm btn-secondary" onClick={resetEndsystem}>X</button>
                  <span className="mx-2">cargo</span>
                  <div style={{width:'200px'}}>
                    <Form.Control type="number" id="maxcargo" name="maxcargo" defaultValue={filtercargo} onBlur={exitCargo} />
                  </div>
                  <button type="button" className="btn btn-sm btn-secondary" onClick={resetCargo}>X</button>
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
                    <th style={coltrade_runs}>runs</th>
                    <th></th>
                    <th className="dummyscroll"></th>
                  </tr>
                </thead>
                <tbody className="overflow text-body">

    {list.map((trade, index) => (
                  <tr className={trade.sell_systemid===viewcombinedtrade.sell_systemid && trade.buy_systemid===viewcombinedtrade.buy_systemid ? "table-active" : "table-info"} key={index} onClick={() => setViewcombinedtrade(trade)}>
                    <td style={colstart_system_jumps}>{trade.start_system_jumps}</td>
                    <td style={colordercount}><span className='float-right'>{trade.ordercount}</span></td>
                    <td style={colsell_regionname}>{trade.sellregion}</td>
                    <td style={colsell_systemname}>{trade.sellsystem}</td>
                    <td style={colbuy_systemname}>{trade.buysystem}</td>
                    <td style={coltotal_m3}><span className='float-right'>{format_2digits(trade.total_volume)}</span></td>
                    <td style={colsell_total}><span className='float-right'>{format_price(trade.sell_order_value)}</span></td>
                    <td style={colbuy_total}><span className='float-right'>{format_price(trade.buy_order_value)}</span></td>
                    <td style={coltrade_profit}><span className='float-right'>{format_price(trade.profit)}</span></td>
                    <td style={coltrade_jumps}><span className='float-right'>{trade.jumps}</span></td>
                    <td style={coltrade_runs}><span className='float-right'>{trade.runs}</span></td>
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

      <Combinedtradeorders 
        trade={viewcombinedtrade}
        startsystemid={systemid}
        startsystemname={systemname}
        show={showtradeline} 
        onUpdatetrade={onUpdatetrade}
        onCancel={onTradelineCancel} 
        />
    </div>

    );
}
