import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Col, Row, Form } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Select from 'react-select';

import Store from '../services/store.js';

//components
//data models
import { Systempk } from '../data/eve/table/super/systemsuper.js';
//component state
import appstore from '../appstore.js';
import storeSystemkills from './store.js';

export default function Tradetracking(props) {

  //variables with App scope
  const [appState] = appstore();
  //variables with component scope
  const [compState, compActions] = storeSystemkills();

  const getallsystemoptions = () => {
    let allsystemlist = [];
    Store.codetables.allsystemlist.map(s => {
      allsystemlist.push({ value: s.PK.id, label: s.name, system: s });
    });
    return allsystemlist;
  }

  const [loading, setLoading] = useState(false);
  const [allsystems, setAllsystems] = useState(getallsystemoptions());

  useEffect(async () => {
    await loadupdate();
  }, []);

  const setStartsystem = (selection) => { 
    compActions.setStartsystem(selection.system);
  };

  const setEndsystem = (selection) => { 
    compActions.setEndsystem(selection.system);
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
    compActions.loadRoute();
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

  const col_systemnr = {width: '3rem'};
  const col_system = {width: '15rem'};
  const col_systemsec = {width: '5rem'};
  const col_npc_kills = {width: '5rem'};
  const col_pod_kills = {width: '5rem'};
  const col_ship_kills = {width: '5rem'};
  const col_killmails = {width: '5rem'};
  const col_killmailgates = {width: '8rem'};
  const col_killboard = {width: '15rem'};

  return (
    <div className="root fullheight">
      <div className="containerheader">
        <div className="mx-auto bg-light p-1">

          <div className="d-flex">

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">secure</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <div className="custom-control custom-checkbox cell-center mr-2">
                    <input type="checkbox" checked={compState.secure} className="form-check-input" onClick={() => compActions.setSecure(!compState.secure)}/>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">from</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <div style={{width:'200px'}}>
                    <Select options={allsystems} value={allsystems.find(option => option.value === compState.startsystemid)} onChange={setStartsystem}/>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">to</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <div style={{width:'200px'}}>
                    <Select options={allsystems} value={allsystems.find(option => option.value === compState.endsystemid)} onChange={setEndsystem}/>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <button type="button" className="btn btn-sm btn-primary m-1" onClick={loadupdate}>search</button>
              </div>
            </div>


          </div>

        </div>
      </div>

      <div className="containerheader">
        <div className="mx-auto bg-light p-1">
          <div className="row m-0">
            <div className="col col-sm-10 d-flex">
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
                  <table className="table table-dark table-bordered table-hover fillparent">
                    <thead>
                      <tr>
                        <th style={col_systemnr}>{compState.routelist.length}</th>
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

    {compState.routelist.map((item, index) => (
                      <tr className={item.ship_kills>0 ? "table-danger" : "table-info"} key={index}>
                        <td style={col_systemnr}>{index}</td>
                        <td style={col_system}>{item.name}</td>
                        <td className={item.security_status<0.5 ? "bg-danger" : ""} style={col_systemsec}>{format_2digits(item.security_status)}</td>
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
