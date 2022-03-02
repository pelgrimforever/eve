import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Col, Row, Form } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Select from 'react-select';

import Store from '../services/store.js';
import './tradetracking.scss';

//components
import Routefinderparameters from '../components/routefinder/routefinderparameters.js';
import Routefinderlist from '../components/routefinder/routefinderlist.js';
//services
import Rsloadorderupdate from '../services/eve/rest/custom/rsloadorderupdate.js';
import Rsvieworder from '../services/eve/rest/view/rsvieworder.js';
import Rsviewtradecombined from '../services/eve/rest/view/rsviewtradecombined.js';
import Rsviewtradesystem from '../services/eve/rest/view/rsviewtradesystem.js';
//data models
import { Systempk } from '../data/eve/table/super/systemsuper.js';
import Orders, { Orderspk } from '../data/eve/table/super/orderssuper.js';
import { Tradepk } from '../data/eve/table/super/tradesuper.js';
import { Evetypepk } from '../data/eve/table/super/evetypesuper.js';
import { Tradecombinedpk } from '../data/eve/table/super/tradecombinedsuper.js';
//component state
import appstore from '../appstore.js';
import storeTradetracking from './store.js';

export default function Tradetracking(props) {

  //variables with App scope
  const [appState, appActions] = appstore();
  //variables with component scope
  const [compState, compActions] = storeTradetracking();

  const highsec = 0.45;

  const [loading, setLoading] = useState(false);
  const [sellvieworder, setSellvieworder] = useState(new Orders());
  const [buyvieworder, setBuyvieworder] = useState(new Orders());
  const [sellremain, setSellremain] = useState('?');
  const [buyremain, setBuyremain] = useState('?');
  const [sellorders, setSellorders] = useState([]);
  const [buyorders, setBuyorders] = useState([]);
  const [routereloadflag, setRoutereloadflag] = useState(0);

  useEffect(async () => {
    await loadlist();
  }, []);

  //construct trade list data
  const loadlist = async () => {
    try {
        if(appState.viewtrade.sell_id!=null) {
          let result1 = await Rsvieworder.getone(Store.user, appState.viewtrade.sell_id);
          setSellvieworder(result1);
          let result2 = await Rsvieworder.getone(Store.user, appState.viewtrade.buy_id);
          setBuyvieworder(result2);
          loadupdate();
          const dummy = await load4evetype();
        }
    } catch (e) {
      console.log("loadlist failed");
      setLoading(false);
    }
  };

  const loadupdate = async (event) => {
    if(appState.viewtrade.sell_id!=null) {
      const result = await Rsloadorderupdate.getorderupdate(Store.user, appState.viewtrade.sell_id, appState.viewtrade.buy_id);
      setSellremain(result.sellamount);
      setBuyremain(result.buyamount);
      const dummy = await load4evetype();
    }
  }

  const showCombinedtrade = async (event) => {
    if(appState.viewtrade.sell_id!=null) {
      let tradecombinedpk = new Tradecombinedpk();
      tradecombinedpk.init();
      tradecombinedpk.evetypePK.id = appState.viewtrade.evetype_id;
      tradecombinedpk.systemBuysystemPK.id = appState.viewtrade.buy_systemid;
      tradecombinedpk.systemSellsystemPK.id = appState.viewtrade.sell_systemid;
      let tradecombined = await Rsviewtradecombined.getViewtradecombined(Store.user, tradecombinedpk);
      appActions.setActivetradecombined(tradecombined);
      appActions.setActivemenu('Trade tools', 'Combined trade tracking');    
    }    
  }

  const showSystemtrade = async (event) => {
    if(appState.viewtrade.sell_id!=null) {
      let buy_systempk = new Systempk();
      buy_systempk.id = appState.viewtrade.buy_systemid;
      let sell_systempk = new Systempk();
      sell_systempk.id = appState.viewtrade.sell_systemid;
      const viewsystemtrade = await Rsviewtradesystem.getviewtradesellbuysystem(Store.user, sell_systempk, buy_systempk);
      appActions.setActivetradesystem(viewsystemtrade);
      appActions.setActivemenu('Trade tools', 'System trade tracking');
    }    
  }

  const load4evetype = async () => {
    const evetypepk = new Evetypepk();
    evetypepk.id = appState.viewtrade.evetype_id;
    const result_sellorders = await Rsvieworder.getevetypesell(Store.user, evetypepk);
    const result_buyorders = await Rsvieworder.getevetypebuy(Store.user, evetypepk);
    setSellorders(result_sellorders);
    setBuyorders(result_buyorders);
  }

  const triggerrouteupdate = () => {
    setRoutereloadflag(routereloadflag+1);
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

  const copyToClipboard = (str) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
      return navigator.clipboard.writeText(str);
    return Promise.reject('The Clipboard API is not available.');
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

  const col_systemsec = {width: '3rem'};

  const colorder_regionname = {width: '6rem' };
  const colorder_systemname = {width: '6rem'};
  const colorder_volume_remain = {width: '3rem'};
  const colorder_volume_min = {width: '3rem'};
  const colorder_price = {width: '5rem'};

  return (
    <div className="root fullheight">
      <div className="containerheader">
        <div className="mx-auto bg-light p-1">

          <div className="d-flex">

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">type</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text"><button type="button" className="badge badge-pill btn-secondary btn-block tiny mr-1" onClick={copyToClipboard(sellvieworder.evetypename)}>C</button>{sellvieworder.evetypename}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">sell total</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{sellvieworder.volume_total}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">sell remain</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{sellvieworder.volume_remain}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">sell min #</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className={sellvieworder.min_volume>1 ? "input-group-text bg-danger" : "input-group-text"}>{sellvieworder.min_volume}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">sell price/unit</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{format_price(sellvieworder.price)}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">sell range</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{sellvieworder.range}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">location</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{sellvieworder.regionname}</label>
                </div>
              </div>
              <div className="row m-0">
                <label className="input-group-text">{sellvieworder.systemname}</label>
              </div>
            </div>

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-4">
                  <button type="button" className="btn btn-sm btn-primary btn-block" onClick={loadupdate}>refresh</button>
                </div>
                <div className="col col-sm-4">
                  <button type="button" className="btn btn-sm btn-primary btn-block" onClick={showCombinedtrade}>combined</button>
                </div>
                <div className="col col-sm-4">
                  <button type="button" className="btn btn-sm btn-primary btn-block" onClick={showSystemtrade}>system</button>
                </div>
              </div>
              <div className="row m-0">
                  <label className="input-group-text">°</label>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">updated</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className={sellvieworder.volume_remain>sellremain ? "input-group-text bg-warning" : "input-group-text"}>{sellremain}</label>
                </div>
              </div>
              <div className="row m-0">
                  <label className="input-group-text">°</label>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">total</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{format_price(appState.viewtrade.sell_total)}</label>
                </div>
              </div>
              <div className="row m-0">
                  <label className="input-group-text">°</label>
              </div>
              <div className="row m-0">
                  <label className="input-group-text"><button type="button" className="badge badge-pill btn-secondary btn-block tiny mr-1" onClick={copyToClipboard(sellvieworder.stationname)}>C</button>{sellvieworder.stationname}</label>
              </div>
              <div className="row m-0">
                  <label className="input-group-text"><button type="button" className="badge badge-pill btn-secondary btn-block tiny mr-1" onClick={copyToClipboard(sellvieworder.locationname)}>C</button>{sellvieworder.locationname}</label>
              </div>
            </div>

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">volume (m3)</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{buyvieworder.packaged_volume}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">buy total</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{buyvieworder.volume_total}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">buy remain</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{buyvieworder.volume_remain}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">buy min #</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className={buyvieworder.min_volume>1 ? "input-group-text bg-danger" : "input-group-text"}>{buyvieworder.min_volume}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">buy price/unit</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{format_price(buyvieworder.price)}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">buy range</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{buyvieworder.range}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">location</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{buyvieworder.regionname}</label>
                </div>
              </div>
              <div className="row m-0">
                <label className="input-group-text">{buyvieworder.systemname}</label>
              </div>
            </div>

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">total (m3)</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{totalvolume(appState.viewtrade)}</label>
                </div>
              </div>
              <div className="row m-0">
                  <label className="input-group-text">°</label>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">updated</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className={buyvieworder.volume_remain>buyremain ? "input-group-text bg-warning" : "input-group-text"}>
                    <button type="button" className="badge badge-pill btn-secondary btn-block tiny mr-1" onClick={copyToClipboard(buyremain)}>C</button>
                    {buyremain}
                  </label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">to buy #</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className={buyvieworder.volume_remain<appState.viewtrade.total_volume ? "input-group-text bg-warning" : "input-group-text"}>{appState.viewtrade.total_volume}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">to buy ISK</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{format_price(appState.viewtrade.buy_total)}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">profit</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{format_price(appState.viewtrade.trade_profit)}</label>
                </div>
              </div>
              <div className="row m-0">
                <label className="input-group-text"><button type="button" className="badge badge-pill btn-secondary btn-block tiny mr-1" onClick={copyToClipboard(buyvieworder.stationname)}>C</button>{buyvieworder.stationname}</label>
              </div>
              <div className="row m-0">
                <label className="input-group-text"><button type="button" className="badge badge-pill btn-secondary btn-block tiny mr-1" onClick={copyToClipboard(buyvieworder.locationname)}>C</button>{buyvieworder.locationname}</label>
              </div>
            </div>

          </div>

        </div>
      </div>

      <Routefinderparameters 
        viasystems={compState.viasystems} avoidsystems={compState.avoidsystems} secure={compState.secure}
        setViasystems={compActions.setViasystems} setAvoidsystems={compActions.setAvoidsystems} setSecure={compActions.setSecure}
        reloadroute={triggerrouteupdate} />

      <div className="containercontent container-relative">
        <div className="row h-100">
          <div className="col-6">
            <Routefinderlist 
              startsystemid={appState.viewtrade.sell_systemid} 
              endsystemid={appState.viewtrade.buy_systemid} 
              viasystems={compState.viasystems}
              avoidsystems={compState.avoidsystems}
              secure={compState.secure}
              reloadflag={routereloadflag}
              />
          </div>

          <div className="col-3">
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
                        <td className={item.security_status<highsec ? "bg-danger" : ""} style={col_systemsec}>{format_2digits(item.security_status)}</td>
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

          <div className="col-3">
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
                        <td className={item.security_status<highsec ? "bg-danger" : ""} style={col_systemsec}>{format_2digits(item.security_status)}</td>
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
