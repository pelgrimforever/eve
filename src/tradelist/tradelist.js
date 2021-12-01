import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Col, Row, Form } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Select from 'react-select';

import Store from '../services/store.js';
import './tradelist.scss';

//components
import Sortmode from '../utilities/sortmode.js';
import Tradeline from '../popups/tradeline.js';
import Combinedtradeorders from '../popups/combinedtradeorders.js';
import Pagecomponent from '../utilities/pagecomponent.js';
//data models
import { Systempk } from '../data/eve/table/super/systemsuper.js';
import { Orderspk } from '../data/eve/table/super/orderssuper.js';
import { Tradepk } from '../data/eve/table/super/tradesuper.js';
import { Tradecombinedpk } from '../data/eve/table/super/tradecombinedsuper.js';
//services
import Rsviewtradecombined from '../services/eve/rest/view/rsviewtradecombined.js';

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

  const changeSystem = (selection) => { 
    const selectedsystemid = selection.value;
    const name = selection.label;
    compActions.setSystem(selectedsystemid, name);
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

  //update trade list when startsystemid is updated
  useEffect(() => {
    if(compState.startsystemid !== null) {
      loadlist();
    }
  }, [compState.startsystemid]);

  //filter list
  useEffect(() => {
      let result = compActions.filtertradelist(compState.unfilteredtradelist);
      compActions.sorttradelist(result);
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

  const showCombinedtrade = async (trade) => {
    let tradecombinedpk = new Tradecombinedpk();
    tradecombinedpk.init();
    tradecombinedpk.evetypePK.id = trade.evetype_id;
    tradecombinedpk.systemBuysystemPK.id = trade.buy_systemid;
    tradecombinedpk.systemSellsystemPK.id = trade.sell_systemid;
    let tradecombined = await Rsviewtradecombined.getViewtradecombined(tradecombinedpk);
    appActions.setActivetradecombined(tradecombined);
    appActions.setActivemenu('Trade tools', 'Combined trade tracking');    
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
    const dummy2 = await loadlist();
  }

  const onSortfieldselected = (sortfield) => {
    compActions.setFiltersortfield(sortfield);
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
                    <FormControl type="number" id="maxcargo" name="maxcargo" value={compState.filtercargo} onChange={changeCargo} onBlur={exitCargo} />
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
                    <td style={coltrade_jumps}><span className='float-right'>{trade.trade_jumps}</span></td>
                    <td style={coltrade_profit_per_jump}><span className='float-right'>{format_price(trade.trade_profit_per_jump)}</span></td>
                    <td style={coltrade_runs}><span className='float-right'>{trade.trade_runs}</span></td>
                    <td style={coltrade_total_jumps}><span className='float-right'>{trade.trade_total_jumps}</span></td>
                    <td style={coltrade_singlerunprofit}><span className='float-right'>{format_price(trade.trade_singlerunprofit)}</span></td>
                    <td style={coltrade_maxunits_per_run}><span className='float-right'>{format_price(trade.trade_maxunits_per_run)}</span></td>
                    <td>
                      <button type="button" className="btn btn-sm small btn-primary mx-1" onClick={() => showTradeline(trade)}>sel.</button>
                      <button type="button" className="btn btn-sm small btn-primary mx-1" onClick={() => showCombinedtrade(trade)}>C.</button>
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
