import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Col, Row, Form } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Select from 'react-select';

import Store from '../services/store.js';
import './combinedtradetracking.scss';

//components
//services
import Rsloadroute from '../services/eve/rest/custom/rsloadroute.js';
import Rsviewtradecombinedsell from '../services/eve/rest/view/rsviewtradecombinedsell.js';
import Rsloadorderupdate from '../services/eve/rest/custom/rsloadorderupdate.js';
import Rsvieworder from '../services/eve/rest/view/rsvieworder.js';
import Rsviewtradesystem from '../services/eve/rest/view/rsviewtradesystem.js';
//data models
import { Systempk } from '../data/eve/table/super/systemsuper.js';
import Orders, { Orderspk } from '../data/eve/table/super/orderssuper.js';
import { Tradecombinedpk } from '../data/eve/table/super/tradecombinedsuper.js';
import { Evetypepk } from '../data/eve/table/super/evetypesuper.js';
//component state
import appstore from '../appstore.js';
import storeCombinedtradetracking from './store.js';

export default function Combinedtradetracking(props) {

  //variables with App scope
  const [appState, appActions] = appstore();
  //variables with component scope
  const [compState, compActions] = storeCombinedtradetracking();

  const getsystemoptions = () => {
    let systemlist = [];
    Store.codetables.systemlist.map(s => {
      systemlist.push({ value: s.PK.id, label: s.name });
    });
    return systemlist;
  }

  const getallsystemoptions = () => {
    let allsystemlist = [];
    Store.codetables.allsystemlist.map(s => {
      allsystemlist.push({ value: s.PK.id, label: s.name });
    });
    return allsystemlist;
  }

  const [loading, setLoading] = useState(false);
  const [systems, setSystems] = useState(getsystemoptions());
  const [allsystems, setAllsystems] = useState(getallsystemoptions());
  const [list, setList] = useState([]);
  const [sellvieworder, setSellvieworder] = useState(new Orders());
  const [buyvieworder, setBuyvieworder] = useState(new Orders());
  const [sellremain, setSellremain] = useState('?');
  const [buyremain, setBuyremain] = useState('?');
  const [sellorders, setSellorders] = useState([]);
  const [buyorders, setBuyorders] = useState([]);

  const [tradelist, setTradelist] = useState([]);
  const [selltotalremain, setSelltotalremain] = useState(0);
  const [buytotalremain, setBuytotalremain] = useState(0);
  const [selltotalupdate, setSelltotalupdate] = useState(0);
  const [buytotalupdate, setBuytotalupdate] = useState(0);

  useEffect(async () => {
    await loadlist();
  }, []);

  //construct trade list data
  const loadlist = async () => {
    try {
        if(appState.viewtradecombined.sell_regionid!=null) {
          loadupdate();
        }
    } catch (e) {
      console.log("loadlist failed");
      setLoading(false);
    }
  };

  const addSystem = (selection) => { 
    if(compState.viasystems.findIndex(v => v.value === selection.value)===-1) {
      compActions.setViasystems(compState.viasystems.concat(selection));
    }
  };

  const removeSystem = (viasystem) => {
    compActions.setViasystems(compState.viasystems.filter(item => item.value !== viasystem.value));
  }

  const addAvoidsystem = (selection) => { 
    if(compState.avoidsystems.findIndex(v => v.value === selection.value)===-1) {
      compActions.setAvoidsystems(compState.avoidsystems.concat(selection));
    }
  };

  const removeAvoidsystem = (avoidsystem) => {
    compActions.setAvoidsystems(compState.avoidsystems.filter(item => item.value !== avoidsystem.value));
  }

  const loadupdate = async (event) => {
    if(appState.viewtradecombined.sell_regionid!=null) {
      let tradecombinedpk = new Tradecombinedpk();
      tradecombinedpk.init();
      tradecombinedpk.evetypePK.id = appState.viewtradecombined.evetype_id;
      tradecombinedpk.systemBuysystemPK.id = appState.viewtradecombined.buy_systemid;
      tradecombinedpk.systemSellsystemPK.id = appState.viewtradecombined.sell_systemid;
      const tradecombinedlist = await Rsviewtradecombinedsell.get4Tradecombined(tradecombinedpk);
      setTradelist(tradecombinedlist);
      //count updated sell/buy
      let sumsellremain = 0;
      let sumbuyremain = 0;
      let sumsellupdate = 0;
      let sumbuyupdate = 0;
      tradecombinedlist.forEach(function myFunction(item) {
        sumsellremain += parseInt(item.sell_volume_remain);
        sumbuyremain += parseInt(item.buy_volume_remain);
        sumsellupdate += parseInt(item.sell_updated);
        sumbuyupdate += parseInt(item.buy_updated);
      });
      setSelltotalremain(sumsellremain);
      setBuytotalremain(sumbuyremain);
      setSelltotalupdate(sumsellupdate);
      setBuytotalupdate(sumbuyupdate);
      const resultroute = await Rsloadroute.getroute(appState.viewtradecombined.sell_systemid, appState.viewtradecombined.buy_systemid, compState.viasystems, compState.avoidsystems, compState.secure);
      setList(resultroute);
      const dummy = await load4evetype();
    }
  }

  const showSystemtrade = async (event) => {
    if(appState.viewtradecombined.sell_regionid!=null) {
      let buy_systempk = new Systempk();
      buy_systempk.id = appState.viewtradecombined.buy_systemid;
      let sell_systempk = new Systempk();
      sell_systempk.id = appState.viewtradecombined.sell_systemid;
      const viewsystemtrade = await Rsviewtradesystem.getviewtradesellbuysystem(sell_systempk, buy_systempk);
      appActions.setActivetradesystem(viewsystemtrade);
      appActions.setActivemenu('Trade tools', 'System trade tracking');
    }
  }

  const load4evetype = async () => {
    const evetypepk = new Evetypepk();
    evetypepk.id = appState.viewtradecombined.evetype_id;
    const result_sellorders = await Rsvieworder.getevetypesell(evetypepk);
    const result_buyorders = await Rsvieworder.getevetypebuy(evetypepk);
    setSellorders(result_sellorders);
    setBuyorders(result_buyorders);
  }

  const format_price = (p) => {
    const rounded = Math.round(p);
    return "" + rounded;
  };

  const format_2digits = (n) => {
    return n.toFixed(2);
  };

  const ottotalvolume = (trade) => {
    return format_2digits(trade.orderamount * trade.packaged_volume);
  };

  const totalvolume = (trade) => {
    return format_2digits(trade.totalamount * trade.packaged_volume);
  };

  const rendergatekills = (system) => {
    let gatearray = [];
    if(system.killmailgatecount>0) {
      gatearray = Object.keys(system.killmaildata).map(key => (
        <div key={key}>{key} - {system.killmaildata[key].killCount} {system.killmaildata[key].checks.smartbombs!==null ? "smartbombs" : ""} {system.killmaildata[key].checks.dictors!==null ? "dictors" : ""} {system.killmaildata[key].checks.hictors!==null ? "hictors" : ""}</div>
      ));
      return gatearray;
    }
  }

  const sec_highsec = 0.45;

  const ordertableheight = {height: '50rem'};

  //ot -> order table
  const otcolsell_stationname = {width: '15rem'};
  const otcolsell_volume_total = {width: '3rem'};
  const otcolsell_volume_remain = {width: '3rem'};
  const otcolsell_volume_min = {width: '3rem'};
  const otcolsell_volume_update = {width: '3rem'};
  const otcolsell_price = {width: '3rem'};
  const otcolbuy_volume_total = {width: '3rem'};
  const otcolbuy_volume_remain = {width: '3rem'};
  const otcolbuy_volume_min = {width: '3rem'};
  const otcolbuy_volume_update = {width: '3rem'};
  const otcolbuy_price = {width: '3rem'};
  const otcolbuy_stationname = {width: '15rem'};
  const otcoltotal_volume = {width: '5rem'};
  const otcoltotal_m3 = {width: '6rem'};
  const otcolsell_total = {width: '5rem'};
  const otcolbuy_total = {width: '5rem'};
  const otcoltrade_profit = {width: '5rem'};

  const col_systemnr = {width: '2rem'};
  const col_system = {width: '7rem'};
  const col_systemsec = {width: '3rem'};
  const col_npc_kills = {width: '3rem'};
  const col_pod_kills = {width: '3rem'};
  const col_ship_kills = {width: '3rem'};
  const col_killmails = {width: '3rem'};
  const col_killmailgates = {width: '3rem'};
  const col_killboard = {width: '5rem'};

  const colorder_regionname = {width: '6rem' };
  const colorder_systemname = {width: '6rem'};
  const colorder_volume_remain = {width: '3rem'};
  const colorder_volume_min = {width: '3rem'};
  const colorder_price = {width: '5rem'};

  return (
    <div className="root fullheight">

      <div className="containerheader h-25 container-relative">
        <div className="mx-auto bg-light p-1">
          <div className="d-flex">
            <div className="p-2 flex-fill bg-info table-container container-fluid">
              <table className="table small table-dark table-bordered table-hover fillparent">
                <thead>
                  <tr>
                    <th style={otcolsell_stationname}>sell station</th>
                    <th style={otcolsell_volume_total}># s.tot</th>
                    <th style={otcolsell_volume_remain}># s.rem</th>
                    <th style={otcolsell_volume_min}># s.min</th>
                    <th style={otcolsell_volume_update}># s.upd</th>
                    <th style={otcolsell_price}>sell o price</th>
                    <th style={otcolbuy_volume_total}># b.tot</th>
                    <th style={otcolbuy_volume_remain}># b.rem</th>
                    <th style={otcolbuy_volume_min}># b.min</th>
                    <th style={otcolbuy_volume_update}># b.upd</th>
                    <th style={otcolbuy_price}>buy o price</th>
                    <th style={otcolbuy_stationname}>station</th>
                    <th style={otcoltotal_volume}>volume asked</th>
                    <th style={otcoltotal_m3}>m3 asked</th>
                    <th style={otcolsell_total}>tot. sell price</th>
                    <th style={otcolbuy_total}>tot. buy price</th>
                    <th style={otcoltrade_profit}>est. profit</th>
                  </tr>
                </thead>
                <tbody className="overflow text-body">

    {tradelist.map((trade, index) => (
                  <tr className="table-info" key={index}>
                    <td style={otcolsell_stationname}>{trade.sell_stationname}</td>
                    <td style={otcolsell_volume_total}><span className='float-right'>{trade.sell_volume_total}</span></td>
                    <td style={otcolsell_volume_remain}><span className='float-right'>{trade.sell_volume_remain}</span></td>
                    <td className={trade.sell_volume_min>1 ? "bg-danger" : ""}
                      style={otcolsell_volume_min}><span className='float-right'>{trade.sell_min_volume}</span></td>
                    <td className={trade.sell_volume_remain>trade.sell_updated ? "bg-warning" : ""}
                      style={otcolsell_volume_update}><span className='float-right'>{trade.sell_updated}</span></td>
                    <td style={otcolsell_price}><span className='float-right'>{trade.sell_price}</span></td>
                    <td style={otcolbuy_volume_total}><span className='float-right'>{trade.buy_volume_total}</span></td>
                    <td style={otcolbuy_volume_remain}><span className='float-right'>{trade.buy_volume_remain}</span></td>
                    <td className={trade.buy_volume_min>1 ? "bg-danger" : ""}
                      style={otcolbuy_volume_min}><span className='float-right'>{trade.buy_min_volume}</span></td>
                    <td className={trade.buy_volume_remain>trade.buy_updated ? "bg-warning" : ""}
                      style={otcolbuy_volume_update}><span className='float-right'>{trade.buy_updated}</span></td>
                    <td style={otcolbuy_price}><span className='float-right'>{trade.buy_price}</span></td>
                    <td style={otcolbuy_stationname}>{trade.buy_stationname}</td>
                    <td style={otcoltotal_volume}><span className='float-right'>{trade.orderamount}</span></td>
                    <td style={otcoltotal_m3}><span className='float-right'>{ottotalvolume(trade)}</span></td>
                    <td style={otcolsell_total}><span className='float-right'>{format_price(trade.sell_price)}</span></td>
                    <td style={otcolbuy_total}><span className='float-right'>{format_price(trade.buy_price)}</span></td>
                    <td style={otcoltrade_profit}><span className='float-right'>{format_price(trade.profit)}</span></td>
                  </tr>  
    ))}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="containerheader">
        <div className="mx-auto bg-light p-1">

          <div className="d-flex">

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">type</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{appState.viewtradecombined.evetype_name}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">sell remain</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{selltotalremain}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">sell total</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{appState.viewtradecombined.totalamount}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">location</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{appState.viewtradecombined.sell_regionname}</label>
                </div>
              </div>
            </div>

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-6">
                  <button type="button" className="btn btn-sm btn-primary btn-block" onClick={loadupdate}>refresh</button>
                </div>
                <div className="col col-sm-6">
                  <button type="button" className="btn btn-sm btn-primary btn-block" onClick={showSystemtrade}>system</button>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">updated</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className={selltotalremain>selltotalupdate ? "input-group-text bg-warning" : "input-group-text"}>{selltotalupdate}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">total</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{format_price(appState.viewtradecombined.sell_order_total)}</label>
                </div>
              </div>
              <div className="row m-0">
                <label className="input-group-text">{appState.viewtradecombined.sell_systemname}</label>
              </div>
            </div>

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">volume (m3)</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{appState.viewtradecombined.packaged_volume}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">buy remain</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{buytotalremain}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">buy total</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{appState.viewtradecombined.totalamount}</label>
                </div>
              </div>
              <div className="row m-0">
                <label className="input-group-text">{appState.viewtradecombined.buy_systemname}</label>
              </div>
            </div>

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">total (m3)</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{totalvolume(appState.viewtradecombined)}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">updated</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className={buytotalremain>buytotalupdate ? "input-group-text bg-warning" : "input-group-text"}>{buytotalupdate}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">to buy ISK</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{format_price(appState.viewtradecombined.buy_order_total)}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">profit</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{format_price(appState.viewtradecombined.totalprofit)}</label>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className="containerheader">
        <div className="mx-auto bg-light p-1">
          <div className="row m-0">
            <div className="col col-sm-10 d-flex">
              <label className="input-group-text bg-light">secure</label>
              <div className="custom-control custom-checkbox cell-center mr-2">
                <input type="checkbox" checked={compState.secure} className="form-check-input" onClick={() => compActions.setSecure(!compState.secure)}/>
              </div>
              <label className="input-group-text bg-light mr-2">via</label>
    {compState.viasystems.map((viasystem, index) => (
              <>
              <label className="input-group-text">{viasystem.label}</label>
              <button type="button" className="btn btn-sm btn-secondary mr-2" onClick={() => removeSystem(viasystem)}>X</button>
              </>
    ))}
              <label className="input-group-text bg-light">add</label>
              <div style={{width:'200px'}}>
                <Select options={allsystems} onChange={addSystem}/>
              </div>
            </div>
          </div>
          <div className="row m-0">
            <div className="col col-sm-10 d-flex">
              <label className="input-group-text bg-light mr-2">avoid</label>
    {compState.avoidsystems.map((avoidsystem, index) => (
              <>
              <label className="input-group-text">{avoidsystem.label}</label>
              <button type="button" className="btn btn-sm btn-secondary mr-2" onClick={() => removeAvoidsystem(avoidsystem)}>X</button>
              </>
    ))}
              <label className="input-group-text bg-light">add</label>
              <div style={{width:'200px'}}>
                <Select options={allsystems} onChange={addAvoidsystem}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="containercontent container-relative">
        <div className="row h-100">
          <div className="col-4">
            <div className="root fullheight">
              <div className="containercontent container-relative">
                <div className="table-container container-fluid p-0">

{ loading && 
                  <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status" />
                  </div>
}
                  <table className="table small table-dark table-bordered table-hover fillparent">
                    <thead>
                      <tr>
                        <th style={col_systemnr}>{list.length}</th>
                        <th style={col_system}>systems</th>
                        <th style={col_systemsec}>sec</th>
                        <th style={col_npc_kills}>npc</th>
                        <th style={col_pod_kills}>pods</th>
                        <th style={col_ship_kills}>ships</th>
                        <th style={col_killmails}>mails</th>
                        <th style={col_killmailgates}>@gates</th>
                        <th style={col_killboard}>killboard</th>
                        <th></th>
                        <th className="dummyscroll"></th>
                      </tr>
                    </thead>
                    <tbody className="overflow text-body">

    {list.map((item, index) => (
                      <tr className={item.ship_kills>0 ? "table-danger" : "table-info"} key={index}>
                        <td style={col_systemnr}>{index}</td>
                        <td style={col_system}>{item.name}</td>
                        <td className={item.security_status<sec_highsec ? "bg-danger" : ""} style={col_systemsec}>{format_2digits(item.security_status)}</td>
                        <td style={col_npc_kills}>{item.npc_kills}</td>
                        <td style={col_pod_kills}>{item.pod_kills}</td>
                        <td className={item.ship_kills>0 ? "bg-danger" : ""} style={col_ship_kills}>{item.ship_kills}</td>
                        <td className={item.killmailcount>0 ? "bg-danger" : ""} style={col_killmails}>{item.killmailcount}</td>
                        <td className={item.killmailgatecount>0 ? "bg-danger" : ""} style={col_killmailgates}>{item.killmailgatecount}</td>
                        <td style={col_killboard}>
                          <a href={"https://zkillboard.com/system/" + item.PK.id} target="zkillboard">zKill</a> - <a href={"https://evemaps.dotlan.net/system/" + item.name} target="zkillboard">Dotan</a>
                        </td>
                        <td>
                          {rendergatekills(item)}
                        </td>
                      </tr>  
    ))}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="root fullheight">
              <div className="containercontent container-relative">
                <div className="table-container container-fluid p-0">

{ loading && 
                  <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status" />
                  </div>
}
                  <table className="table small table-dark table-bordered table-hover fillparent">
                    <thead>
                      <tr>
                        <th style={colorder_regionname}>region</th>
                        <th style={colorder_systemname}>system</th>
                        <th style={col_systemsec}>sec</th>
                        <th style={colorder_volume_remain}># rem</th>
                        <th style={colorder_volume_min}># min</th>
                        <th style={colorder_price}>sell</th>
                        <th></th>
                        <th className="dummyscroll"></th>
                      </tr>
                    </thead>
                    <tbody className="overflow text-body">

    {sellorders.map((item, index) => (
                      <tr className={item.ship_kills>0 ? "table-danger" : "table-info"} key={index}>
                        <td style={colorder_regionname}>{item.regionname}</td>
                        <td style={colorder_systemname}>{item.systemname}</td>
                        <td className={item.security_status<sec_highsec ? "bg-danger" : ""} style={col_systemsec}>{format_2digits(item.security_status)}</td>
                        <td style={colorder_volume_remain}>{item.volume_remain}</td>
                        <td className={item.min_volume>1 ? "bg-danger" : ""} style={colorder_volume_min}>{item.min_volume}</td>
                        <td style={colorder_price}><span className='float-right'>{item.price}</span></td>
                        <td>
                        </td>
                      </tr>  
    ))}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="root fullheight">
              <div className="containercontent container-relative">
                <div className="table-container container-fluid p-0">

{ loading && 
                  <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status" />
                  </div>
}
                  <table className="table small table-dark table-bordered table-hover fillparent">
                    <thead>
                      <tr>
                        <th style={colorder_regionname}>region</th>
                        <th style={colorder_systemname}>system</th>
                        <th style={col_systemsec}>sec</th>
                        <th style={colorder_volume_remain}># rem</th>
                        <th style={colorder_volume_min}># min</th>
                        <th style={colorder_price}>buy</th>
                        <th></th>
                        <th className="dummyscroll"></th>
                      </tr>
                    </thead>
                    <tbody className="overflow text-body">

    {buyorders.map((item, index) => (
                      <tr className={item.ship_kills>0 ? "table-danger" : "table-info"} key={index}>
                        <td style={colorder_regionname}>{item.regionname}</td>
                        <td style={colorder_systemname}>{item.systemname}</td>
                        <td className={item.security_status<sec_highsec ? "bg-danger" : ""} style={col_systemsec}>{format_2digits(item.security_status)}</td>
                        <td style={colorder_volume_remain}>{item.volume_remain}</td>
                        <td className={item.min_volume>1 ? "bg-danger" : ""} style={colorder_volume_min}>{item.min_volume}</td>
                        <td style={colorder_price}><span className='float-right'>{item.price}</span></td>
                        <td>
                        </td>
                      </tr>  
    ))}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    );
}
