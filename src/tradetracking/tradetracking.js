import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Col, Row, Form } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Select from 'react-select';

import Store from '../services/store.js';
import './tradetracking.scss';

//components
//services
import Rsloadroute from '../services/eve/rest/custom/rsloadroute.js';
import Rsviewtrade from '../services/eve/rest/view/rsviewtrade.js';
import Rsloadorderupdate from '../services/eve/rest/custom/rsloadorderupdate.js';
import Rsvieworder from '../services/eve/rest/view/rsvieworder.js';
import Rsevetype from '../services/eve/rest/table/rsevetype.js';
//data models
import { Systempk } from '../data/eve/table/super/systemsuper.js';
import Orders, { Orderspk } from '../data/eve/table/super/orderssuper.js';
import { Tradepk } from '../data/eve/table/super/tradesuper.js';

export default function Tradetracking(props) {
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
  const [secure, setSecure] = useState(true);
  const [viasystems, setViasystems] = useState([]);
  const [avoidsystems, setAvoidsystems] = useState([]);
  const [list, setList] = useState([]);
  const [sellvieworder, setSellvieworder] = useState(new Orders());
  const [buyvieworder, setBuyvieworder] = useState(new Orders());
  const [sellremain, setSellremain] = useState('?');
  const [buyremain, setBuyremain] = useState('?');

  useEffect(async () => {
    await loadlist();
  }, []);

  //construct trade list data
  const loadlist = async () => {
    try {
        if(Store.tradetrackingdata.sellorderid!=null) {
          let result = await Rsvieworder.getone(Store.tradetrackingdata.sellorderid);
          setSellvieworder(result);
        }
        if(Store.tradetrackingdata.buyorderid!==null) {
          let result = await Rsvieworder.getone(Store.tradetrackingdata.buyorderid);
          setBuyvieworder(result);
        }
        let result = await Rsloadroute.getroute(Store.tradetrackingdata.viewtrade.sell_systemid, Store.tradetrackingdata.viewtrade.buy_systemid, viasystems, avoidsystems, secure);
        setList(result);
    } catch (e) {
      console.log("loadlist failed");
      setLoading(false);
    }
  };

  const addSystem = (selection) => { 
    if(viasystems.findIndex(v => v.value === selection.value)===-1) {
      setViasystems(viasystems.concat(selection));
    }
  };

  const removeSystem = (viasystem) => {
    setViasystems(viasystems.filter(item => item.value !== viasystem.value));
  }

  const addAvoidsystem = (selection) => { 
    if(avoidsystems.findIndex(v => v.value === selection.value)===-1) {
      setAvoidsystems(avoidsystems.concat(selection));
    }
  };

  const removeAvoidsystem = (avoidsystem) => {
    setAvoidsystems(avoidsystems.filter(item => item.value !== avoidsystem.value));
  }

  const loadupdate = async (event) => {
    if(sellvieworder!=null && buyvieworder!=null) {
      const result = await Rsloadorderupdate.getorderupdate(sellvieworder.id, buyvieworder.id);
      setSellremain(result.sellamount);
      setBuyremain(result.buyamount);
      const resultroute = await Rsloadroute.getroute(Store.tradetrackingdata.viewtrade.sell_systemid, Store.tradetrackingdata.viewtrade.buy_systemid, viasystems, avoidsystems, secure);
      setList(resultroute);
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

  const rendergatekills = (system) => {
    let gatearray = [];
    if(system.killmailgatecount>0) {
      gatearray = Object.keys(system.killmaildata).map(key => (
        <div key={key}>{key} - {system.killmaildata[key].killCount} {system.killmaildata[key].checks.smartbombs!==null ? "smartbombs" : ""} {system.killmaildata[key].checks.dictors!==null ? "dictors" : ""} {system.killmaildata[key].checks.hictors!==null ? "hictors" : ""}</div>
      ));
      return gatearray;
    }
  }

  const col_system = {width: '10rem'};
  const col_systemsec = {width: '3rem'};
  const col_npc_kills = {width: '3rem'};
  const col_pod_kills = {width: '3rem'};
  const col_ship_kills = {width: '3rem'};
  const col_killmails = {width: '3rem'};
  const col_killmailgates = {width: '3rem'};

  return (
    <div className="root fullheight">
      <div className="containerheader">
        <div className="mx-auto bg-light p-1">

          <div class="d-flex">

            <div class="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">type</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{sellvieworder.evetypename}</label>
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

            <div class="p-2 flex-fill bg-info">
              <div className="row m-0">
                <button type="button" className="btn btn-sm btn-primary m-1" onClick={loadupdate}>refresh</button>
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
                  <label className="input-group-text">{format_price(Store.tradetrackingdata.viewtrade.buy_total)}</label>
                </div>
              </div>
              <div className="row m-0">
                  <label className="input-group-text">°</label>
              </div>
              <div className="row m-0">
                  <label className="input-group-text">- {sellvieworder.stationname}</label>
              </div>
              <div className="row m-0">
                  <label className="input-group-text">- {sellvieworder.locationname}</label>
              </div>
            </div>

            <div class="p-2 flex-fill bg-info">
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

            <div class="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">total (m3)</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{totalvolume(Store.tradetrackingdata.viewtrade)}</label>
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
                  <label className={buyvieworder.volume_remain>buyremain ? "input-group-text bg-warning" : "input-group-text"}>{buyremain}</label>
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
                  <label className="input-group-text">{format_price(Store.tradetrackingdata.viewtrade.buy_total)}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">profit</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{format_price(Store.tradetrackingdata.viewtrade.trade_profit)}</label>
                </div>
              </div>
              <div className="row m-0">
                <label className="input-group-text">- {buyvieworder.stationname}</label>
              </div>
              <div className="row m-0">
                <label className="input-group-text">- {buyvieworder.locationname}</label>
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
                <input type="checkbox" checked={secure} className="form-check-input" onClick={() => setSecure(!secure)}/>
              </div>
              <label className="input-group-text bg-light mr-2">via</label>
    {viasystems.map((viasystem, index) => (
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
    {avoidsystems.map((avoidsystem, index) => (
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
                        <th style={col_system}>system</th>
                        <th style={col_systemsec}>sec</th>
                        <th style={col_npc_kills}>npc</th>
                        <th style={col_pod_kills}>pods</th>
                        <th style={col_ship_kills}>ships</th>
                        <th style={col_killmails}>mails</th>
                        <th style={col_killmailgates}>@gates</th>
                        <th></th>
                        <th className="dummyscroll"></th>
                      </tr>
                    </thead>
                    <tbody className="overflow text-body">

    {list.map((item, index) => (
                      <tr className={item.ship_kills>0 ? "table-danger" : "table-info"} key={index}>
                        <td style={col_system}>{item.name}</td>
                        <td className={item.security_status<0.5 ? "bg-danger" : ""} style={col_systemsec}>{format_2digits(item.security_status)}</td>
                        <td style={col_npc_kills}>{item.npc_kills}</td>
                        <td style={col_pod_kills}>{item.pod_kills}</td>
                        <td className={item.ship_kills>0 ? "bg-danger" : ""} style={col_ship_kills}>{item.ship_kills}</td>
                        <td className={item.killmailcount>0 ? "bg-danger" : ""} style={col_killmails}>{item.killmailcount}</td>
                        <td className={item.killmailgatecount>0 ? "bg-danger" : ""} style={col_killmailgates}>{item.killmailgatecount}</td>
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
        </div>
        <div className="col-8">
        </div>
      </div>
    </div>

    );
}
