import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Col, Row, Form } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Select from 'react-select';

import Store from '../services/store.js';

//components
import Sortmode from '../utilities/sortmode.js';
import Tradeline from '../popups/tradeline.js';
import Pagecomponent from '../utilities/pagecomponent.js';
//data models
import { Systempk } from '../data/eve/table/super/systemsuper.js';
import { Orderspk } from '../data/eve/table/super/orderssuper.js';
import { Tradepk } from '../data/eve/table/super/tradesuper.js';
//services

//component state
import appstore from '../appstore.js';
import storeTradelist, { sortmodes } from './store.js';

export default function Tradelist(props) {
  //variables with App scope
  const [appState, appActions] = appstore();
  //variables with component scope
  const [compState, compActions] = storeTradelist();

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
  //need useEffect on pageLength
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
    const name = selection.label;
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

  const changeProfitperrun = (profitperrunevent) => {
    compActions.setFilterprofitperrun(Number(profitperrunevent.target.value)); 
  }

  const resetProfitperrun = () => {
    compActions.setFilterprofitperrun(0); 
  }

  const exitProfitperrun = (selection) => { 
    compActions.setFilterprofitperrun(Number(selection.target.value)); 
  };

  const changeFiltermaxlowsec = (filtermaxlowsecevent) => {
    compActions.setFiltermaxlowsec(Number(filtermaxlowsecevent.target.value)); 
  }

  const resetFiltermaxlowsec = () => {
    compActions.setFiltermaxlowsec(0); 
  }

  const exitFiltermaxlowsec = (selection) => { 
    compActions.setFiltermaxlowsec(Number(selection.target.value)); 
  };

  //update system select data if systemlist is updated
  useEffect(() => {
    setSystems(getsystemoptions());
  }, [Store.codetables.systemlist]);

  //filter list
  useEffect(() => {
      let result = compActions.filtertradelist(compState.unfilteredtradelist);
      compActions.sorttradelist(result);
      setTradelist(result);
  }, [compState.unfilteredtradelist, compState.filterstartsystemid, compState.filterendsystemid, 
      compState.filtercargo, compState.filterprofitperrun, compState.filtermaxlowsec]);

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
    compActions.sorttradelist(tradelist);
    showpage_(compState.paginationconfig.currentPage, true);
  }, [compState.filtersortfield]);

  //construct trade list data
  const loadlist = async () => {
    setLoading(true);
    const dummy = await compActions.loadTradelist();
    setLoading(false);
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
    compActions.setPaginationconfig(
      {
        ...compState.paginationconfig,
        pageLength: newpagelength
      }
    );    
  }

  const showTradeline = (viewtradeline) => {
    appActions.setActivetrade(viewtradeline);
    appActions.setActivemenu('Trade tools', 'Trade tracking');
  }

  const delTradeline = (viewtradeline) => {
    appActions.setActivetrade(viewtradeline);
    setShowtradeline(true);
  }

  const onTradelineCancel = () => {
    setShowtradeline(false);
  }

  const onTradeclick = (viewtradeline) => {
    appActions.setActivetrade(viewtradeline);
  }

  const onUpdatetrade = async (volume) => {
    const dummy = await compActions.updateTrade(appState.viewtrade.sell_id, appState.viewtrade.buy_id, volume);
    setShowtradeline(false);
  }

  const onSortfieldselected = (sortfield) => {
    compActions.setFiltersortfield(sortfield);
  }

  const colstart_system_jumps = {width: '1rem'};
  const colsell_regionname = {width: '4rem' };
  const colsell_systemname = {width: '4rem'};
  const colsell_stationname = {width: '14rem'};
  const colevetype_name = {width: '12rem'};
  const colpackaged_volume = {width: '3rem'};
  const colsell_volume_remain = {width: '3rem'};
  const colsell_price = {width: '3rem'};
  const colbuy_price = {width: '3rem'};
  const colbuy_systemname = {width: '4rem'};
  const colbuy_stationname = {width: '14rem'};
  const coltotal_volume = {width: '5rem'};
  const coltotal_m3 = {width: '5rem'};
  const colsell_total = {width: '5rem'};
  const colbuy_total = {width: '5rem'};
  const coltrade_profit = {width: '5rem'};
  const coltrade_jumps= {width: '3rem'};
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
                <div className="col col-sm-2 d-flex">
                  <div style={{width:'200px'}}>
                    <Select options={systems} value={systems.find(option => option.value === compState.startsystemid)} onChange={changeSystem}/>
                  </div>
                  <button type="button" className="btn btn-sm btn-primary m-1" onClick={loadlist}>refresh</button>
                </div>
                <div className="col col-sm-3">
                  <Sortmode title="sort" modes={sortmodes} sortmode={compState.filtersortfield} onModeselected={onSortfieldselected} />
                </div>
                <div className="col col-sm-2 d-flex">
                  <span className="mx-2">start</span>
                  <div style={{width:'200px'}}>
                    <Select options={systems} value={systems.find(option => option.value === compState.filterstartsystemid)} onChange={changeStartsystem}/>
                  </div>
                  <button type="button" className="btn btn-sm btn-secondary" onClick={resetStartsystem}>X</button>
                </div>
                <div className="col col-sm-2 d-flex">
                  <span className="mx-2">end</span>
                  <div style={{width:'200px'}}>
                    <Select options={systems} value={systems.find(option => option.value === compState.filterendsystemid)} onChange={changeEndsystem}/>
                  </div>
                  <button type="button" className="btn btn-sm btn-secondary" onClick={resetEndsystem}>X</button>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-2 d-flex">
                  <span className="mx-2">cargo</span>
                  <div style={{width:'100px'}}>
                    <FormControl type="number" id="maxcargo" name="maxcargo" value={compState.filtercargo} onChange={changeCargo} onBlur={exitCargo} />
                  </div>
                  <button type="button" className="btn btn-sm btn-secondary" onClick={resetCargo}>X</button>
                </div>
                <div className="col col-sm-2 d-flex">
                  <span className="mx-2" style={{width:'120px'}}>min profit/run</span>
                  <div style={{width:'120px'}}>
                    <FormControl type="number" id="profitperrun" name="profitperrun" value={compState.filterprofitperrun} onChange={changeProfitperrun} onBlur={exitProfitperrun} />
                  </div>
                  <button type="button" className="btn btn-sm btn-secondary" onClick={resetProfitperrun}>X</button>
                </div>
                <div className="col col-sm-2 d-flex">
                  <span className="mx-2" style={{width:'200px'}}>max lowsec jumps</span>
                  <div style={{width:'120px'}}>
                    <FormControl type="number" id="lowsecjumps" name="lowsecjumps" value={compState.filtermaxlowsec} onChange={changeFiltermaxlowsec} onBlur={exitFiltermaxlowsec} />
                  </div>
                  <button type="button" className="btn btn-sm btn-secondary" onClick={resetFiltermaxlowsec}>X</button>
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
                    <th style={coltrade_jumps}>jumps</th>
                    <th style={coltrade_jumps}><span className='float-right'>low/null</span></th>
                    <th style={coltrade_profit_per_jump}><span className='float-right'>profit/jump</span></th>
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
                  <tr className={trade.sell_id===appState.viewtrade.sell_id && trade.buy_id===appState.viewtrade.buy_id ? "table-active" : "table-info"} key={index} onClick={() => { onTradeclick(trade); } }>
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
                    <td style={coltrade_jumps}><span className="float-right">{trade.trade_jumps}</span></td>
                    <td style={coltrade_jumps}><span className={trade.trade_jumpslowsec>0 || trade.trade_jumpsnullsec>0 ? "float-right bg-danger empty_fill float-right" : "float-right"}>{trade.trade_jumpslowsec} / {trade.trade_jumpsnullsec}</span></td>
                    <td style={coltrade_profit_per_jump}><span className='float-right'>{format_price(trade.trade_profit_per_jump)}</span></td>
                    <td style={coltrade_runs}><span className='float-right'>{trade.trade_runs}</span></td>
                    <td style={coltrade_total_jumps}><span className='float-right'>{trade.trade_total_jumps}</span></td>
                    <td style={coltrade_singlerunprofit}><span className='float-right'>{format_price(trade.trade_singlerunprofit)}</span></td>
                    <td style={coltrade_maxunits_per_run}><span className='float-right'>{format_price(trade.trade_maxunits_per_run)}</span></td>
                    <td>
                      <button type="button" className="btn btn-sm small btn-primary mx-1" onClick={() => showTradeline(trade)}>sel.</button>
                      <button type="button" className="btn btn-sm small btn-primary" onClick={() => delTradeline(trade)}>X</button>

                    </td>
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

      <Tradeline 
        trade={appState.viewtrade}
        startsystemid={compState.startsystemid}
        startsystemname={compState.startsystemname}
        show={showtradeline} 
        onUpdatetrade={onUpdatetrade}
        onCancel={onTradelineCancel} 
        />

    </div>

    );
}
