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
import Copytoclipboard from '../components/copytoclipboard/copytoclipboard.js';
//data models
import { Systempk } from '../data/eve/table/super/systemsuper.js';
import { Orderspk } from '../data/eve/table/super/orderssuper.js';
//services

//component state
import appstore from '../appstore.js';
import storeSellorderslowprice, { sortmodes } from './store.js';

export default function Sellorderslowprice(props) {
  //variables with App scope
  const [appState, appActions] = appstore();
  //variables with component scope
  const [compState, compActions] = storeSellorderslowprice();

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
  const [sellorderlist, setTradelist] = useState([]);
  const [showtradeline, setShowtradeline] = useState(false);
  //need useEffect on pageLength
  const [pagelength, setPagelength] = useState(compState.paginationconfig.pageLength);

  const updatePageconfig = (pagenr) => {
    let newpagenr = pagenr;
    if(sellorderlist.length>0) {
      //pagenr can not be allowed greather then max pages
      newpagenr = Math.min(pagenr, Math.ceil(sellorderlist.length / pagelength));
    }
    compActions.setPaginationconfig(
      {
        ...compState.paginationconfig,
        totalPages: Math.ceil(sellorderlist.length / pagelength),
        currentPage: newpagenr,
      }
    );    
  }

  const showpage_ = (pagenr, override) => {
    if(pagenr!==compState.paginationconfig.currentPage && pagenr>0 && pagenr<=Math.ceil(sellorderlist.length / pagelength) || override) {
      updatePageconfig(pagenr);
      setList(sellorderlist.slice((pagenr-1) * pagelength, pagenr * pagelength));
    }
  }

  const showpage = (pagenr) => {
    showpage_(pagenr, false);
  }

  const changeSystem = (selection) => { 
    const selectedsystemid = selection.value;
    compActions.setSystem(selectedsystemid);
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
      let result = compActions.filtersellorderlist(compState.unfilteredsellorderlist);
      compActions.sortsellorderlist(result);
      setTradelist(result);
  }, [compState.unfilteredsellorderlist, compState.filterstartsystemid, compState.filterendsystemid, compState.filtercargo]);

  //update page properties after updating the sellorderlist
  useEffect(() => {
    showpage_(compState.paginationconfig.currentPage, true);
  }, [sellorderlist]);

  //update page properties and list content after updating pagelength
  useEffect(() => {
    showpage_(compState.paginationconfig.currentPage, true);
  }, [pagelength]);

  //update page properties and list content after updating pagelength
  useEffect(() => {
    compActions.sortsellorderlist(sellorderlist);
    showpage_(compState.paginationconfig.currentPage, true);
  }, [compState.filtersortfield]);

  //construct trade list data
  const loadlist = async () => {
    setLoading(true);
    const dummy = await compActions.loadSellorderlist();
    setLoading(false);
  };

  const format_price = (p) => {
    const rounded = Math.round(p);
    return "" + rounded;
  };

  const format_2digits = (n) => {
    return n.toFixed(2);
  };

  const remainvolume = (trade) => {
    return format_2digits(trade.volume_remain * trade.packaged_volume);
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

  const delTradeline = (viewtradeline) => {
/*    appActions.setActivetrade(viewtradeline);
    setShowtradeline(true);*/
  }

  const onTradelineCancel = () => {
    setShowtradeline(false);
  }

  const onOrderclick = (orderline) => {
    compActions.setActiveorderline(orderline);
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
  const colstart_low_jumps = {width: '2rem'};
  const colstart_null_jumps = {width: '2rem'};
  const colsell_regionname = {width: '6rem' };
  const colsell_systemname = {width: '6rem'};
  const colsell_stationname = {width: '22rem'};
  const colevetype_name = {width: '18rem'};
  const colpackaged_volume = {width: '3rem'};
  const colsell_volume_remain = {width: '3rem'};
  const colsell_price = {width: '3rem'};
  const colsell_avgprice = {width: '5rem'};
  const colsell_profit = {width: '5rem'};
  const coltotal_volume = {width: '5rem'};
  const coltotal_m3 = {width: '5rem'};
  const colsell_total = {width: '5rem'};

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
                    <th style={colstart_low_jumps}>j low</th>
                    <th style={colstart_null_jumps}>j null</th>
                    <th style={colsell_regionname}>from region</th>
                    <th style={colsell_systemname}>system</th>
                    <th style={colsell_stationname}>station</th>
                    <th style={colevetype_name}>type</th>
                    <th style={colpackaged_volume}>unit m3</th>
                    <th style={colsell_volume_remain}># rem</th>
                    <th style={colsell_price}>sell o price</th>
                    <th style={colsell_avgprice}>avg sell price</th>
                    <th style={colsell_avgprice}>avg buy price</th>
                    <th style={colsell_profit}>est. profit</th>
                    <th style={coltotal_volume}>volume asked</th>
                    <th style={coltotal_m3}>m3 asked</th>
                    <th style={colsell_total}>tot. sell price</th>
                    <th></th>
                    <th className="dummyscroll"></th>
                  </tr>
                </thead>
                <tbody className="overflow text-body">

    {list.map((trade, index) => (
                  <tr className={trade.id===compState.activeorderline.id ? "table-active" : "table-info"} key={index} onClick={() => { onOrderclick(trade); } }>
                    <td style={colstart_system_jumps}>{trade.startsystem_jumps}</td>
                    <td style={colstart_low_jumps}><span className={trade.startsystem_jumpslowsec>0 ? "bg-danger empty_fill" : "empty_fill"}>{trade.startsystem_jumpslowsec}</span></td>
                    <td style={colstart_null_jumps}><span className={trade.startsystem_jumpsnullsec>0 ? "bg-danger empty_fill" : "empty_fill"}>{trade.startsystem_jumpsnullsec}</span></td>
                    <td style={colsell_regionname}>{trade.regionname}</td>
                    <td style={colsell_systemname}>
                      <Copytoclipboard copytext={trade.systemname}/>
                      {trade.systemname}
                    </td>
                    <td style={colsell_stationname}>
                      <Copytoclipboard copytext={trade.stationname}/>
                      {trade.stationname}
                    </td>
                    <td style={colevetype_name}>
                      <Copytoclipboard copytext={trade.evetypename}/>
                      {trade.evetypename}
                    </td>
                    <td style={colpackaged_volume}><span className='float-right'>{trade.packaged_volume}</span></td>
                    <td style={colsell_volume_remain}><span className='float-right'>{trade.volume_remain}</span></td>
                    <td style={colsell_price}><span className='float-right'>{trade.price}</span></td>
                    <td style={colsell_avgprice}><span className='float-right'>{format_2digits(trade.avg_sellorder)}</span></td>
                    <td style={colsell_avgprice}><span className='float-right'>{format_2digits(trade.avg_buyorder)}</span></td>
                    <td style={colsell_avgprice}><span className='float-right'>{format_2digits((trade.avg_buyorder-trade.price)*trade.volume_remain)}</span></td>
                    <td style={coltotal_volume}><span className='float-right'>{trade.volume_total}</span></td>
                    <td style={coltotal_m3}><span className='float-right'>{remainvolume(trade)}</span></td>
                    <td style={colsell_total}><span className='float-right'>{format_price(trade.price*trade.volume_remain)}</span></td>
                    <td>
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

    </div>

    );
}
