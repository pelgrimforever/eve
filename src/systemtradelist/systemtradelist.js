import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Col, Row, Form } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Select from 'react-select';

import Store from '../services/store.js';
import './systemtradelist.scss';

//context
import { AppContext } from "../App.js";
//components
import Sortmode from '../utilities/sortmode.js';
import Pagecomponent from '../utilities/pagecomponent.js';
//services
//data models
import { Systempk } from '../data/eve/table/super/systemsuper.js';
import { Orderspk } from '../data/eve/table/super/orderssuper.js';
import { Tradepk } from '../data/eve/table/super/tradesuper.js';
//component state
import appstore from '../appstore.js';
import storeSystemtradelist, { sort_jumps, sort_m3, sort_profit, sortmodes} from './store.js';

export default function Systemtradelist(props) {
  //variables with App scope
  const [appState, appActions] = appstore();
  //variables with component scope
  const [compState, compActions] = storeSystemtradelist();

  const getsystemoptions = () => {
    let systemlist = [];
    Store.codetables.systemlist.map(s => {
      systemlist.push({ value: s.PK.id, label: s.name });
    });
    return systemlist;
  }

  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [systems, setSystems] = useState(getsystemoptions());
  const [tradelist, setTradelist] = useState([]);
  const [showtradeline, setShowtradeline] = useState(false);
  const [pagelength, setPagelength] = useState(compState.paginationconfig.pageLength);

  const updatePageconfig = (pagenr) => {
    let newpagenr = pagenr;
    if(tradelist.length>0) {
      //pagenr can not be allowed greather then max pages
      newpagenr = Math.min(pagenr, Math.ceil(tradelist.length / pagelength));
    }
    compActions.setPaginationconfig(
      {
        ...compState.paginationconfig,
        totalPages: Math.ceil(tradelist.length / pagelength),
        currentPage: newpagenr,
      }
    );    
  }

  const showpage_ = (pagenr, override) => {
    if(pagenr!==compState.paginationconfig.currentPage && pagenr>0 && pagenr<=Math.ceil(tradelist.length / pagelength) || override) {
      updatePageconfig(pagenr);
      setList(tradelist.slice((pagenr-1) * pagelength, pagenr * pagelength));
    }
  }

  const showpage = (pagenr) => {
    showpage_(pagenr, false);
  }

  const changeSystem = async (selection) => { 
    setLoading(true);
    const selectedsystemid = selection.value;
    const name = Store.codetables.findSystem(selectedsystemid).name;
    const dummy = await compActions.setSystem(selectedsystemid, name);
    setLoading(false);
  };

  const changeStartsystem = (selection) => { 
    compActions.setFilterstartsystemid(selection.value);
  };

  const resetStartsystem = () => {
    compActions.setFilterstartsystemid(null);
  }

  const changeEndsystem = (selection) => { 
    compActions.setFilterendsystemid(selection.value); 
  };

  const resetEndsystem = () => {
    compActions.setFilterendsystemid(null); 
  }

  const changeCargo = (cargoevent) => {
    compActions.setFiltercargo(Number(cargoevent.target.value)); 
  }

  const resetCargo = () => {
    compActions.setFiltercargo(0); 
  }

  const exitCargo = (selection) => { 
    compActions.setFiltercargo(Number(selection.target.value)); 
  };

  //update system select data if systemlist is updated
  useEffect(() => {
    setSystems(getsystemoptions());
  }, [Store.codetables.systemlist]);

  //filter list
  useEffect(() => {
      let result = filtertradelist(compState.unfilteredtradelist);
      sorttradelist(result);
      setTradelist(result);
  }, [compState.unfilteredtradelist, compState.filterstartsystemid, compState.filterendsystemid, compState.filtercargo]);

  //update page properties after updating the tradelist
  useEffect(() => {
    showpage_(compState.paginationconfig.currentPage, true);
  }, [tradelist]);

  //update page properties and list content after updating pagelength
  useEffect(() => {
    showpage_(compState.paginationconfig.currentPage, true);
  }, [pagelength]);

  //update page properties and list content after updating pagelength
  useEffect(() => {
    sorttradelist(tradelist);
    showpage_(compState.paginationconfig.currentPage, true);
  }, [compState.filtersortfield]);

  //construct trade list data
  const loadlist = async () => {
    setLoading(true);
    const dummy = await compActions.loadTradelist();
    setLoading(false);
  };

  const filtertradelist = (list) => {
    let result = list.filter(obj => {
      const systemstartok = compState.filterstartsystemid==null || obj.sell_systemid===compState.filterstartsystemid;
      const systemendok = compState.filterendsystemid==null || obj.buy_systemid===compState.filterendsystemid;
      const cargook = compState.filtercargo===0 || obj.total_volume<=compState.filtercargo;
      return systemstartok && systemendok && cargook;
    });
    return result;
  }

  const sorttradelist = (listref) => {
    switch(compState.filtersortfield.name) {
      case sort_jumps:
        listref.sort((a, b) => (a.start_system_jumps<b.start_system_jumps) ? -1 : 1);
        break;
      case sort_m3:
        listref.sort((a, b) => (a.totalvolume<b.totalvolume) ? 1 : -1);
        break;
      case sort_profit:
        listref.sort((a, b) => (a.totalprofit<b.totalprofit) ? 1 : -1);
        break;
    }
  }

  const format_price = (p) => {
    const rounded = Math.round(p);
    return "" + rounded;
  };

  const format_int = (n) => {
    const rounded = Math.round(n);
    return "" + rounded;
  };

  const format_2digits = (n) => {
    return n.toFixed(2);
  };

  const changePagelength = (newpagelength) => {
    setPagelength(newpagelength);
    compActions.setPaginationconfig(
      {
        ...compState.paginationconfig,
        pageLength: newpagelength
      }
    );    
  }

  const setViewtradesystem = (tradesystem) => {
    appActions.setActivetradesystem(tradesystem);
  }

  const showTradeline = (tradesystem) => {
    appActions.setActivetradesystem(tradesystem);
    appActions.setActivemenu('Trade tools', 'System trade tracking');
  }

  const onTradelineCancel = () => {
    setShowtradeline(false);
  }

  const onSortfieldselected = (sortfield) => {
    compActions.setFiltersortfield(sortfield);
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
                  <Select options={systems} value={systems.find(option => option.value === compState.startsystemid)} onChange={changeSystem}/>
                </div>
                <div className="col col-sm-1">
                  <button type="button" className="btn btn-sm btn-primary m-1" onClick={loadlist}>refresh</button>
                </div>
                <div className="col col-sm-3">
                  <Sortmode title="sort" modes={sortmodes} sortmode={compState.filtersortfield} onModeselected={onSortfieldselected} />
                </div>
                <div className="col col-sm-4 d-flex">
                  <span className="mx-2">start</span>
                  <div style={{width:'200px'}}>
                    <Select options={systems} value={systems.find(option => option.value === compState.filterstartsystemid)} onChange={changeStartsystem}/>
                  </div>
                  <button type="button" className="btn btn-sm btn-secondary" onClick={resetStartsystem}>X</button>
                  <span className="mx-2">end</span>
                  <div style={{width:'200px'}}>
                    <Select options={systems} value={systems.find(option => option.value === compState.filterendsystemid)} onChange={changeEndsystem}/>
                  </div>
                  <button type="button" className="btn btn-sm btn-secondary" onClick={resetEndsystem}>X</button>
                  <span className="mx-2">cargo</span>
                  <div style={{width:'200px'}}>
                    <Form.Control type="number" id="maxcargo" name="maxcargo" value={compState.filtercargo} onChange={changeCargo} onBlur={exitCargo} />
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
                    <th style={coltrade_jumps}><span className='float-right'>jumps / run</span></th>
                    <th style={coltrade_jumps}><span className='float-right'>low/null</span></th>
                    <th></th>
                    <th className="dummyscroll"></th>
                  </tr>
                </thead>
                <tbody className="overflow text-body">

    {list.map((trade, index) => (
                  <tr className={trade.sell_systemid===appState.viewtradesystem.sell_systemid && trade.buy_systemid===appState.viewtradesystem.buy_systemid ? "table-active" : "table-info"} key={index} onClick={() => setViewtradesystem(trade)}>
                    <td style={colstart_system_jumps}>{trade.start_system_jumps}</td>
                    <td style={colordercount}><span className='float-right'>{trade.orders}</span></td>
                    <td style={colsell_regionname}>{trade.sell_regionname}</td>
                    <td style={colsell_systemname}>{trade.sell_systemname}</td>
                    <td style={colbuy_systemname}>{trade.buy_systemname}</td>
                    <td style={coltotal_m3}><span className='float-right'>{format_2digits(trade.totalvolume)}</span></td>
                    <td style={colsell_total}><span className='float-right'>{format_price(trade.sell_total)}</span></td>
                    <td style={colbuy_total}><span className='float-right'>{format_price(trade.buy_total)}</span></td>
                    <td style={coltrade_profit}><span className='float-right'>{format_price(trade.totalprofit)}</span></td>
                    <td style={coltrade_jumps}><span className="float-right">{trade.trade_jumps}</span></td>
                    <td style={coltrade_jumps}><span className={trade.trade_jumpslowsec>0 || trade.trade_jumpsnullsec>0 ? "float-right bg-danger empty_fill" : "float-right empty_fill"}>{trade.trade_jumpslowsec} / {trade.trade_jumpsnullsec}</span></td>
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
          config={compState.paginationconfig} 
          showpage={showpage}
          changePagelength={changePagelength}
          />
      </div>

    </div>

    );
}
