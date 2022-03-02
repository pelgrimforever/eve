import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Col, Row, Form } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Select from 'react-select';

import Store from '../services/store.js';

//components
import Routefinderparameters from '../components/routefinder/routefinderparameters.js';
import Routefinderlist from '../components/routefinder/routefinderlist.js';
import Shipfirorder_confirm from '../popups/shipfirorder_confirm.js';
//data models
//services
//component state
import appstore from '../appstore.js';
import storeShipfitroute from './store.js';

export default function Shipfitroute(props) {

  //variables with App scope
  const [appState] = appstore();
  //variables with component scope
  const [compState, compActions] = storeShipfitroute();
  const [routereloadflag, setRoutereloadflag] = useState(0);

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

  const highsec = 0.45;

  const [loading, setLoading] = useState(false);
  const [systems, setSystems] = useState(getsystemoptions());
  const [allsystems, setAllsystems] = useState(getallsystemoptions());
  const [list, setList] = useState([]);
  const [showconfirmform, setShowconfirmform] = useState(false);

  useEffect(async () => {
    compActions.loadShipfitroute();
  }, []);

  const changeStartsystem = async (selection) => { 
    setLoading(true);
    await compActions.setStartsystemid(selection.value); 
    setLoading(false);
  };

  const changeEndsystem = async (selection) => { 
    setLoading(true);
    await compActions.setEndsystemid(selection.value); 
    setLoading(false);
  };

  const setSystem = (item) => {
    compActions.setSystem(item);
  }

  const removeordereditem = async (viewshipfitorderselected) => {
    compActions.deleteShipfitorderlist(viewshipfitorderselected);
  }

  const confirmordereditem = async (viewshipfitorderselected) => {
    compActions.setViewshipfitorderselected(viewshipfitorderselected);
    setShowconfirmform(true);
  }

  const onconfirmordereditem = async (amount) => {
    compActions.confirmShipfitorder(amount);
    setShowconfirmform(false);
  }

  const oncancelordereditem = () => {
    setShowconfirmform(false);
  }

  const triggerrouteupdate = () => {
    setRoutereloadflag(routereloadflag+1);
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

  const col_region = {width: '8rem'};
  const col_system = {width: '11rem'};
  const col_jumps= {width: '3rem'};

  const col2_systemnr = {width: '2rem'};
  const col2_system = {width: '7rem'};
  const col2_systemsec = {width: '3rem'};
  const col2_npc_kills = {width: '3rem'};
  const col2_pod_kills = {width: '3rem'};
  const col2_ship_kills = {width: '3rem'};
  const col2_killmails = {width: '3rem'};
  const col2_killmailgates = {width: '3rem'};
  const col2_killboard = {width: '5rem'};

  const colorder_regionname = {width: '6rem' };
  const colorder_systemname = {width: '6rem'};
  const colorder_systemsec = {width: '3rem'};
  const colorder_volume_remain = {width: '3rem'};
  const colorder_volume_min = {width: '3rem'};
  const colorder_price = {width: '5rem'};

  const colorder_volume_needed = {width: '3rem'};
  const colorder_typename = {width: '15rem'};

  return (
    <div className="root fullheight">
      <div className="containercontent container-relative">
        <div className="row h-100">
          <div className="col-3">
            <div className="root fullheight">

      <div className="containerheader">
        <div className="mx-auto bg-light p-1">
          <div className="row m-0">
            <div className="col col-sm-6 d-flex">
              <span className="mx-2">start</span>
              <div style={{width:'200px'}}>
                <Select options={systems} value={systems.find(option => option.value === compState.startsystemid)} onChange={changeStartsystem}/>
              </div>
            </div>
            <div className="col col-sm-6 d-flex">
              <span className="mx-2">end</span>
              <div style={{width:'200px'}}>
                <Select options={systems} value={systems.find(option => option.value === compState.endsystemid)} onChange={changeEndsystem}/>
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
                    <Spinner className="spinner-border-center" animation="border" role="status" />
                  </div>
}
                  <table className="table table-dark table-bordered table-hover fillparent">
                    <thead>
                      <tr>
                        <th style={col_region}>region</th>
                        <th style={col_system}>system</th>
                        <th style={col_jumps}>j.</th>
                        <th style={col_jumps}>low</th>
                        <th style={col_jumps}>null</th>
                        <th></th>
                        <th className="dummyscroll"></th>
                      </tr>
                    </thead>
                    <tbody className="overflow text-body">

    {compState.shipfitroute.map((item, index) => (
                      <tr className={compState.viewsystem!==null && compState.viewsystem.system_start===item.system_start && compState.viewsystem.system_end===item.system_end ? "table-active" : "table-info"} key={index} onClick={() => { setSystem(item); } }>
                        <td style={col_region}>{item.regionname}</td>
                        <td style={col_system}>{item.name}</td>
                        <td style={col_jumps}><span className="float-right">{item.jumpssafe}</span></td>
                        <td style={col_jumps}><span className="float-right">{item.jumpssafelowsec}</span></td>
                        <td style={col_jumps}><span className="float-right">{item.jumpssafenullsec}</span></td>
                        <td></td>
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

          <div className="col-9 root fullheight">

      <Routefinderparameters 
        viasystems={compState.viasystems} avoidsystems={compState.avoidsystems} secure={compState.secure}
        setViasystems={compActions.setViasystems} setAvoidsystems={compActions.setAvoidsystems} setSecure={compActions.setSecure}
        reloadroute={triggerrouteupdate} />

      <div className="containercontent container-relative">
        <div className="root halfheight">
{ compState.viewsystem!=null &&
            <Routefinderlist 
              startsystemid={compState.viewsystem.system_start} 
              endsystemid={compState.viewsystem.system_end} 
              viasystems={compState.viasystems}
              avoidsystems={compState.avoidsystems}
              secure={compState.secure}
              reloadflag={routereloadflag}
              />
}
        </div>

        <div className="root halfheight position-relative">
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
                        <th style={colorder_systemsec}>sec</th>
                        <th style={colorder_volume_needed}><span className='float-right'>#</span></th>
                        <th style={colorder_typename}>type</th>
                        <th></th>
                        <th className="dummyscroll"></th>
                      </tr>
                    </thead>
                    <tbody className="overflow text-body">
    {compState.shipfitorderselectedlist.map((item, index) => (
                      <tr className={item.ship_kills>0 ? "table-danger" : "table-info"} key={index}>
                        <td style={colorder_regionname}>{item.regionname}</td>
                        <td style={colorder_systemname}>{item.systemname}</td>
                        <td className={item.security_status<highsec ? "bg-danger" : ""} style={colorder_systemsec}>{format_2digits(item.security_status)}</td>
                        <td style={colorder_volume_needed}><span className='float-right'>{item.amountneeded}</span></td>
                        <td style={colorder_typename}>{item.evetypename}</td>
                        <td>
                          <button type="button" className="mx-2 btn btn-sm small btn-primary" onClick={() => removeordereditem(item)}>-</button>
                          <button type="button" className="mx-2 btn btn-sm small btn-primary" onClick={() => confirmordereditem(item)}>v</button>
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
      </div>

      <Shipfirorder_confirm 
        viewshipfitorderselected={compState.viewshipfitorderselected}
        show={showconfirmform} 
        onConfirm={onconfirmordereditem}
        onCancel={oncancelordereditem} 
        />

    </div>

    );
}
