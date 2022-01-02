import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import { Col, Row, Form } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Select from 'react-select';

import './routefinder.scss';

//components
//services
import Store from '../../services/store.js';
import Rsloadroute from '../../services/eve/rest/custom/rsloadroute.js';
//data models
//component state
import storeRoutefinder from './store.js';

export default function Routefinderlist(props) {

  //variables with component scope
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
  }, [props.startsystemid, props.endsystemid, props.viasystems, props.avoidsystems, props.secure]);

  const loadroute = async (event) => {
    if(props.startsystemid!=null && props.endsystemid!=null) {
      setLoading(true);
      const resultroute = await Rsloadroute.getroute(props.startsystemid, props.endsystemid, props.viasystems, props.avoidsystems, props.secure);
      setList(resultroute);
      setLoading(false);
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