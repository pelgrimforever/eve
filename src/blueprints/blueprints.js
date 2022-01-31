import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Col, Row, Form } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Select from 'react-select';

import Store from '../services/store.js';

//models
import Viewbpmaterial from '../data/eve/view/viewbpmaterial.js';
//components
import Bpmaterial_add from '../popups/bpmaterial_add.js';
import Bpmaterial_change from '../popups/bpmaterial_change.js';
//data models
//component state
import appstore from '../appstore.js';
import storeBlueprints from './store.js';

export default function Blueprints(props) {

  //variables with App scope
  const [appState] = appstore();
  //variables with component scope
  const [compState, compActions] = storeBlueprints();

  const [loading, setLoading] = useState(false);
  const [materialinputadd, setMaterialinputadd] = useState(false);
  const [materialinputchange, setMaterialinputchange] = useState(false);
  const [bpmaterial, setBpmaterial] = useState(new Viewbpmaterial());
  const [totalprice, setTotalprice] = useState(0);

  useEffect(async () => {
    compActions.loadBlueprints(compState.searchstring);
  }, []);

  useEffect(async () => {
    let price = 0;
    compState.bpmateriallist.forEach(function myFunction(item) {
      price += parseInt(item.amount) * item.average;
    });
    setTotalprice(price);
  }, [compState.bpmateriallist]);

  const searchtextChange = (searchtextevent) => {
    compActions.setSearchstring(searchtextevent.target.value); 
    compActions.loadBlueprints(searchtextevent.target.value);
  }

  const onBlueprintclick = (viewblueprint) => {
    compActions.setBlueprint(viewblueprint);
  }

  const openMaterialinput = () => {
    setMaterialinputadd(true);
  }

  const onMaterialaddCancel = () => {
    setMaterialinputadd(false);
  }  

  const onMaterialadd = async (activematerial, amount) => {
    compActions.addMaterial(activematerial, amount);
    setMaterialinputadd(false);
  }

  const openMaterialinputchange = (item) => {
    setBpmaterial(item);
    setMaterialinputchange(true);
  }

  const onMaterialchange = async () => {
    const result = await compActions.changeMaterial(bpmaterial);
    setMaterialinputchange(false);
  }

  const onMaterialchangeCancel = () => {
    setMaterialinputchange(false);
  }

  const format_price = (p) => {
    const rounded = Math.round(p);
    return "" + rounded;
  };

  const format_2digits = (n) => {
    return n.toFixed(2);
  };

  const col_name = {width: '12rem'};
  const col_amount = {width: '4rem'};
  const col_price = {width: '4rem'};
  const col_used = {width: '4rem'};

  const col_matname = {width: '12rem'};
  const col_matamount = {width: '4rem'};
  const col_matunitprice = {width: '4rem'};
  
  return (
    <div className="root fullheight">
      <div className="containercontent container-relative">
        <div className="row h-100">
          <div className="col-3">
            <div className="root fullheight">

      <div className="containerheader">
        <div className="mx-auto bg-light p-1">

          <div className="d-flex">

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-12 d-flex">
                  <span className="mx-2">BP</span>
                  <div style={{width:'200px'}}>
                    <input type="text" className="form-input" style={{width:'200px'}} onChange={searchtextChange} />
                  </div>
                </div>
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
                        <th style={col_name}>group</th>
                        <th style={col_name}>type</th>
                        <th></th>
                        <th className="dummyscroll"></th>
                      </tr>
                    </thead>
                    <tbody className="overflow text-body">

    {compState.blueprintlist.map((item, index) => (
                      <tr className={item.id===compState.blueprint.id ? "table-active" : "table-info"} key={index}  onClick={() => { onBlueprintclick(item); } }>
                        <td style={col_name}>{item.typegroupname}</td>
                        <td style={col_name}>{item.name}</td>
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

          <div className="col-9 root fullheight">

      <div className="containerheader">
        <div className="mx-auto bg-light p-1">

          <div className="d-flex">

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-12 d-flex">
                  <span className="mx-2">{compState.blueprint.name}</span>                  
                  <div style={{width:'200px'}}>
                    <button type="button" className="btn btn-sm small btn-primary" onClick={() => openMaterialinput()}>add material</button>
                  </div>
                  <span className="mx-2">material price: {format_price(totalprice)} ISK</span>

                </div>
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
                        <th style={col_matname}>group</th>
                        <th style={col_matname}>type</th>
                        <th style={col_matamount}><span className='float-right'>amount</span></th>
                        <th style={col_matunitprice}><span className='float-right'>unitprice</span></th>
                        <th></th>
                        <th className="dummyscroll"></th>
                      </tr>
                    </thead>
                    <tbody className="overflow text-body">

    {compState.bpmateriallist.map((item, index) => (
                      <tr className="table-info" key={index}>
                        <td style={col_matname}>{item.typegroupname}</td>
                        <td style={col_matname}>{item.name}</td>
                        <td style={col_matamount}><span className='float-right'>{item.amount}</span></td>
                        <td style={col_matunitprice}><span className='float-right'>{format_2digits(item.average)}</span></td>
                        <td>
                          <button type="button" className="btn btn-sm small btn-primary" onClick={() => openMaterialinputchange(item)}>**</button>
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

      <Bpmaterial_add 
        show={materialinputadd} 
        onMaterialadd={onMaterialadd}
        onCancel={onMaterialaddCancel} 
        />
      <Bpmaterial_change
        show={materialinputchange} 
        viewbpmaterial={bpmaterial}
        onMaterialchange={onMaterialchange}
        onCancel={onMaterialchangeCancel} 
        />

    </div>

    );
}
