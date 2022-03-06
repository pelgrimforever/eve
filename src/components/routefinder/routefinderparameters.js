import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import { Col, Row, Form } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Select from 'react-select';

//components
//services
import Store from '../../services/store.js';
//data models
//component state

export default function Routefinderparameters(props) {

  //variables with component scope
  const getallsystemoptions = () => {
    let allsystemlist = [];
    Store.codetables.allsystemlist.map(s => {
      allsystemlist.push({ value: s.PK.id, label: s.name });
    });
    return allsystemlist;
  }

  useEffect(async () => {
    setAllsystems(getallsystemoptions());
  }, [Store.codetables.allsystemlist]);

  const [loading, setLoading] = useState(false);
  const [allsystems, setAllsystems] = useState(getallsystemoptions());
  const [list, setList] = useState([]);

  const addSystem = (selection) => { 
    if(props.viasystems.findIndex(v => v.value === selection.value)===-1) {
      props.setViasystems(props.viasystems.concat(selection));
    }
  };

  const removeSystem = (viasystem) => {
    props.setViasystems(props.viasystems.filter(item => item.value !== viasystem.value));
  }

  const addAvoidsystem = (selection) => { 
    if(props.avoidsystems.findIndex(v => v.value === selection.value)===-1) {
      props.setAvoidsystems(props.avoidsystems.concat(selection));
    }
  };

  const removeAvoidsystem = (avoidsystem) => {
    props.setAvoidsystems(props.avoidsystems.filter(item => item.value !== avoidsystem.value));
  }

  const setSecure = () => {
    props.setSecure(!props.secure);
  }

  return (
      <div className="containerheader">
        <div className="mx-auto bg-light p-1">
          <div className="row m-1">
            <div className="d-flex">
              <button type="button" className="btn btn-primary mr-2" onClick={() => props.reloadroute()}>reload</button>
              <label className="input-group-text bg-light">secure</label>
              <div className="custom-control custom-checkbox cell-center mr-2">
                <input type="checkbox" checked={props.secure} className="form-check-input" onClick={() => setSecure()}/>
              </div>
              <label className="input-group-text bg-light mr-2">via</label>
    {props.viasystems.map((viasystem, index) => (
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
          <div className="row m-1">
            <div className="col col-sm-10 d-flex">
              <label className="input-group-text bg-light mr-2">avoid</label>
    {props.avoidsystems.map((avoidsystem, index) => (
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

  );

}