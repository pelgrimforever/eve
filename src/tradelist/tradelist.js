import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Col, Row, Form } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Select from 'react-select';

import Store from '../services/store.js';
import './tradelist.scss';

//context
import { AppContext } from "../App.js";
//components
import Sortmode from '../utilities/sortmode.js';
import Tradeline from '../popups/tradeline.js';
import Combinedtradeorders from '../popups/combinedtradeorders.js';
import Pagecomponent from '../utilities/pagecomponent.js';
//services
import Rstrade from '../services/eve/rest/table/rstrade.js';
import Rsviewtrade from '../services/eve/rest/view/rsviewtrade.js';
import Rsviewcombinedtrade from '../services/eve/rest/view/rsviewcombinedtrade.js';
//data models
import { Systempk } from '../data/eve/table/super/systemsuper.js';
import { Orderspk } from '../data/eve/table/super/orderssuper.js';
import { Tradepk } from '../data/eve/table/super/tradesuper.js';
import { Viewtrade } from '../data/eve/view/viewtrade.js';
import { Viewcombinedtrade } from '../data/eve/view/viewcombinedtrade.js';

const sort_jumps = 'jumps';
const sort_m3 = 'volume';
const sort_profit = 'profit';
const sort_profitperjump = 'profitperjump';
const sortmodes = [ 
    { name:sort_jumps, text: 'jumps' }, 
    { name:sort_m3, text: 'cargo vol.' }, 
    { name:sort_profit, text: 'profit' }, 
    { name:sort_profitperjump, text: 'profit/jump' }, 
  ];
const sortmode_default = 3;

export default function Tradelist(props) {
  const { appstate, dispatch } = React.useContext(AppContext);

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
  const [startsystemid, setStartsystemid] = useState(appstate.startsystemid);
  const [startsystemname, setStartsystemname] = useState(appstate.systemname);
  const [unfilteredtradelist, setUnfilteredtradelist] = useState([]);
  const [tradelist, setTradelist] = useState([]);
  const [viewtrade, setViewtrade] = useState(appstate.tradelist_activeviewtrade);
  const [showtradeline, setShowtradeline] = useState(false);
  const [viewcombinedtrade, setViewcombinedtrade] = useState(new Viewcombinedtrade());
  const [showcombinedtradeline, setShowcombinedtradeline] = useState(false);
  const [pagelength, setPagelength] = useState(appstate.tradelist_pagination.showMax);
  const [paginationconfig, setPaginationconfig] = useState(appstate.tradelist_pagination);
  const [sortfield, setSortfield] = useState(appstate.filtersortfield);
  const [filterstartsystemid, setFilterstartsystemid] = useState(appstate.filterstartsystemid);
  const [filterendsystemid, setFilterendsystemid] = useState(appstate.filterendsystemid);
  const [filtercargo, setFiltercargo] = useState(appstate.filtercargo);

  const updatePageconfig = (pagenr) => {
    let newpagenr = pagenr;
    if(tradelist.length>0) {
      //pagenr can not be allowed greather then max pages
      newpagenr = Math.min(pagenr, Math.ceil(tradelist.length / pagelength));
    }
    setPaginationconfig(
      {
        ...paginationconfig,
        pageLength: pagelength,
        totalPages: Math.ceil(tradelist.length / pagelength),
        currentPage: newpagenr,
      }
    );    
    dispatch({
      type: "setTradelist_pagination",
      tradelist_pagination: {
        ...paginationconfig,
        pageLength: pagelength,
        totalPages: Math.ceil(tradelist.length / pagelength),
        currentPage: pagenr,
      }
    });
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
    const selectedsystemid = selection.value;
    const name = Store.codetables.findSystem(selectedsystemid).name;
    setStartsystemid(selectedsystemid); 
    setStartsystemname(name);
    dispatch({
      type: "setStartsystem",
      startsystemid: selectedsystemid,
      startsystemname: name
    });
  };

  const changeStartsystem = (selection) => { 
    setFilterstartsystemid(selection.value); 
    dispatch({
      type: "setFilterstartsystemid",
      filterstartsystemid: selection.value
    });
  };

  const resetStartsystem = () => {
    setFilterstartsystemid(null); 
    dispatch({
      type: "setFilterstartsystemid",
      filterstartsystemid: null
    });
  }

  const changeEndsystem = (selection) => { 
    setFilterendsystemid(selection.value); 
    dispatch({
      type: "setFilterendsystemid",
      filterendsystemid: selection.value
    });
  };

  const resetEndsystem = () => {
    setFilterendsystemid(null); 
    dispatch({
      type: "setFilterendsystemid",
      filterendsystemid: null
    });
  }

  const changeCargo = (cargoevent) => {
    setFiltercargo(Number(cargoevent.target.value)); 
    dispatch({
      type: "setFiltercargo",
      filtercargo: Number(cargoevent.target.value)
    });
  }

  const resetCargo = () => {
    setFiltercargo(0); 
    dispatch({
      type: "setFiltercargo",
      filtercargo: 0
    });
  }

  const exitCargo = (selection) => { 
    setFiltercargo(Number(selection.target.value)); 
    dispatch({
      type: "setFiltercargo",
      filtercargo: Number(selection.target.value)
    });
  };

  //update system select data if systemlist is updated
  useEffect(() => {
    setSystems(getsystemoptions());
  }, [Store.codetables.systemlist]);

  //update trade list when startsystemid is updated
  useEffect(() => {
    if(startsystemid !== null) {
      loadlist();
    }
  }, [startsystemid]);

  //filter list
  useEffect(() => {
      let result = filtertradelist(unfilteredtradelist);
      sorttradelist(result);
      setTradelist(result);
  }, [unfilteredtradelist, filterstartsystemid, filterendsystemid, filtercargo]);

  //update page properties after updating the tradelist
  useEffect(() => {
    showpage_(paginationconfig.currentPage, true);
  }, [tradelist]);

  //update page properties and list content after updating pagelength
  useEffect(() => {
    showpage_(paginationconfig.currentPage, true);
  }, [pagelength]);

  //update page properties and list content after updating pagelength
  useEffect(() => {
    sorttradelist(tradelist);
    showpage_(paginationconfig.currentPage, true);
  }, [sortfield]);

  //construct trade list data
  const loadlist = async () => {
    try {
        if(startsystemid!=null) {
          setLoading(true);
          let systempk = new Systempk();
          systempk.id = startsystemid;
          const result = await Rsviewtrade.getall_startsystem(Store.user, systempk);
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
      const systemstartok = filterstartsystemid==null || obj.sell_systemid===filterstartsystemid;
      const systemendok = filterendsystemid==null || obj.buy_systemid===filterendsystemid;
      const cargook = filtercargo===0 || obj.total_volume * obj.packaged_volume<=filtercargo;
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
        listref.sort((a, b) => (a.total_volume * a.packaged_volume<b.total_volume * b.packaged_volume) ? 1 : -1);
        break;
      case sort_profit:
        listref.sort((a, b) => (a.trade_profit<b.trade_profit) ? 1 : -1);
        break;
      case sort_profitperjump:
        listref.sort((a, b) => (a.trade_profit_per_jump<b.trade_profit_per_jump) ? 1 : -1);
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

  const showCombinedtrade = async (trade) => {
    let systempk = new Systempk();
    systempk.id = startsystemid;
    let startsystempk = new Systempk();
    startsystempk.id = trade.sell_systemid;
    let endsystempk = new Systempk();
    endsystempk.id = trade.buy_systemid;
    const result = await Rsviewcombinedtrade.get4_startendsystem(Store.user, systempk, startsystempk, endsystempk);
    setViewcombinedtrade(result);
    setShowcombinedtradeline(true);
  }

  const onTradelineCancel = () => {
    setShowtradeline(false);
  }

  const onCombinedtradelineCancel = () => {
    setShowcombinedtradeline(false);
  }

  const onTradeclick = (viewtradeline) => {
    setViewtrade(viewtradeline);
    dispatch({
      type: "setTradelist_activeviewtrade",
      tradelist_activeviewtrade: viewtradeline
    });
    Store.tradetrackingdata.setOrders(viewtradeline, viewtradeline.sell_id, viewtradeline.buy_id);
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

  const onSortfieldselected = (sortfield) => {
    setSortfield(sortfield);
    dispatch({
      type: "setFiltersortfield",
      filtersortfield: sortfield
    });
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
                  <Select options={systems} value={systems.find(option => option.value === startsystemid)} onChange={changeSystem}/>
                </div>
                <div className="col col-sm-1">
                  <button type="button" className="btn btn-sm btn-primary m-1" onClick={loadlist}>refresh</button>
                </div>
                <div className="col col-sm-3">
                  <Sortmode title="sort" modes={sortmodes} sortmode={sortfield} onModeselected={onSortfieldselected} />
                </div>
                <div className="col col-sm-4 d-flex">
                  <span className="mx-2">start</span>
                  <div style={{width:'200px'}}>
                    <Select options={systems} value={systems.find(option => option.value === filterstartsystemid)} onChange={changeStartsystem}/>
                  </div>
                  <button type="button" className="btn btn-sm btn-secondary" onClick={resetStartsystem}>X</button>
                  <span className="mx-2">end</span>
                  <div style={{width:'200px'}}>
                    <Select options={systems} value={systems.find(option => option.value === filterendsystemid)} onChange={changeEndsystem}/>
                  </div>
                  <button type="button" className="btn btn-sm btn-secondary" onClick={resetEndsystem}>X</button>
                  <span className="mx-2">cargo</span>
                  <div style={{width:'200px'}}>
                    <FormControl type="number" id="maxcargo" name="maxcargo" value={filtercargo} onChange={changeCargo} onBlur={exitCargo} />
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
                  <tr className={trade.sell_id===viewtrade.sell_id && trade.buy_id===viewtrade.buy_id ? "table-active" : "table-info"} key={index} onClick={() => { onTradeclick(trade); } }>
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
                      <button type="button" className="btn btn-sm small btn-primary" onClick={() => showTradeline(trade)}>show</button>
                      <button type="button" className="btn btn-sm small btn-primary" onClick={() => showCombinedtrade(trade)}>show combined</button>
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
          config={paginationconfig} 
          showpage={showpage}
          changePagelength={changePagelength}
          />
      </div>

      <Tradeline 
        trade={viewtrade}
        startsystemid={startsystemid}
        startsystemname={startsystemname}
        show={showtradeline} 
        onUpdatetrade={onUpdatetrade}
        onCancel={onTradelineCancel} 
        />

      <Combinedtradeorders 
        trade={viewcombinedtrade}
        startsystemid={startsystemid}
        startsystemname={startsystemname}
        show={showcombinedtradeline} 
        onUpdatetrade={onUpdatetrade}
        onCancel={onCombinedtradelineCancel} 
        />

    </div>

    );
}
