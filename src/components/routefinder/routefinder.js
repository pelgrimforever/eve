import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import { Col, Row, Form } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Select from 'react-select';

//components
//services
import Store from '../../services/store.js';
import Rsloadroute from '../../services/eve/rest/custom/rsloadroute.js';
//data models
//component state
import storeRoutefinder from './store.js';

export default function Routefinder(props) {

  //variables with component scope
  const [compState, compActions] = storeRoutefinder();

  const getallsystemoptions = () => {
    let allsystemlist = [];
    Store.codetables.allsystemlist.map(s => {
      allsystemlist.push({ value: s.PK.id, label: s.name });
    });
    return allsystemlist;
  }

  const highsec = 0.45;

  const [loading, setLoading] = useState(false);
  const [allsystems, setAllsystems] = useState(getallsystemoptions());
  const [list, setList] = useState([]);

  useEffect(async () => {
    await loadroute();
  }, []);

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

  const loadroute = async (event) => {
    if(props.startsystemid!=null && props.endsystemid!=null) {
      const resultroute = await Rsloadroute.getroute(props.startsystemid, props.endsystemid, compState.viasystems, compState.avoidsystems, compState.secure);
      setList(resultroute);
    }
  }

  const format_2digits = (n) => {
    return n.toFixed(2);
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

  const col_systemnr = {width: '2rem'};
  const col_system = {width: '7rem'};
  const col_systemsec = {width: '3rem'};
  const col_npc_kills = {width: '3rem'};
  const col_pod_kills = {width: '3rem'};
  const col_ship_kills = {width: '3rem'};
  const col_killmails = {width: '3rem'};
  const col_killmailgates = {width: '3rem'};
  const col_killboard = {width: '5rem'};

  return (
    <div className="root fullheight">
      <div className="containerheader">
        <div className="mx-auto bg-light p-1">
          <div className="row m-0">
            <div className="d-flex">
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
                        <td className={item.security_status<highsec ? "bg-danger" : ""} style={col_systemsec}>{format_2digits(item.security_status)}</td>
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
    </div>
  );

}