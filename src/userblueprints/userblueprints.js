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
import Blueprint_add from '../popups/blueprint_add.js';
import Blueprint_change from '../popups/blueprint_change.js';
import Blueprint_run from '../popups/blueprint_run.js';
//data models
//component state
import appstore from '../appstore.js';
import storeBlueprints from './store.js';

export default function Userblueprints(props) {

  //variables with App scope
  const [appState] = appstore();
  //variables with component scope
  const [compState, compActions] = storeBlueprints();

  const [loading, setLoading] = useState(false);
  const [blueprintadd, setBlueprintadd] = useState(false);
  const [blueprintchange, setBlueprintchange] = useState(false);
  const [blueprintrun, setBlueprintrun] = useState(false);
  const [bpmaterial, setBpmaterial] = useState(new Viewbpmaterial());
  const [totalprice, setTotalprice] = useState(0);

  useEffect(async () => {
    compActions.loadUserblueprints();
  }, []);

  useEffect(async () => {
    let price = 0;
/*    compState.bpmateriallist.forEach(function myFunction(item) {
      price += parseInt(item.amount) * item.average;
    });*/
    setTotalprice(price);
  }, [compState.bpmateriallist]);

  const onBlueprintclick = (viewblueprint) => {
    compActions.setBlueprint(viewblueprint);
  }

  const openBlueprintadd = () => {
    setBlueprintadd(true);
  }

  const onBlueprintaddCancel = () => {
    setBlueprintadd(false);
  }  

  const onBlueprintadd = async (blueprint, original, amount, bpprice, researchcost, stationfee) => {
    const result = await compActions.addBlueprint(blueprint, original, amount, bpprice, researchcost, stationfee);
    setBlueprintadd(false);
  }

  const openBlueprintchange = (item) => {
    compActions.setBlueprint(item);
    setBlueprintchange(true);
  }

  const onUserbpchange = async (totalamount, amountproduced, efficiency, researchcost) => {
    const result = await compActions.changeUserbp(totalamount, amountproduced, efficiency, researchcost);
    setBlueprintchange(false);
  }

  const onUserbpchangeCancel = () => {
    setBlueprintchange(false);
  }

  const removeBlueprint = (item) => {
    compActions.removeBlueprint(item);
  }

  const openrunBlueprint = (item) => {
    compActions.setBlueprint(item);
    setBlueprintrun(true);
  }

  const onUserbprun = async (amount) => {
    const result = await compActions.runUserbp(amount);
    setBlueprintrun(false);
  }

  const openrunBlueprintCancel = () => {
    setBlueprintrun(false);
  }

  const format_price = (p) => {
    const rounded = Math.round(p);
    return "" + rounded;
  };

  const format_2digits = (n) => {
    return n.toFixed(2);
  };

  const col_group = {width: '8rem'};
  const col_name = {width: '12rem'};
  const col_bpo = {width: '2rem'};
  const col_totamount = {width: '4rem'};
  const col_amount = {width: '4rem'};
  const col_mate = {width: '3rem'};
  const col_used = {width: '4rem'};

  const col_matname = {width: '12rem'};
  const col_matamount = {width: '4rem'};
  const col_matunitprice = {width: '4rem'};
  
  return (
    <div className="root fullheight">
      <div className="containercontent container-relative">
        <div className="row h-100">
          <div className="col-5">
            <div className="root fullheight">

      <div className="containerheader">
        <div className="mx-auto bg-light p-1">

          <div className="d-flex">

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-12 d-flex">
                  <button type="button" className="btn btn-sm small btn-primary" onClick={() => openBlueprintadd()}>add blueprint</button>
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
                        <th style={col_group}>group</th>
                        <th style={col_name}>type</th>
                        <th style={col_bpo}>bpo</th>
                        <th style={col_mate}><span className='float-right'>mat.e</span></th>
                        <th style={col_totamount}><span className='float-right'>#tot</span></th>
                        <th style={col_amount}><span className='float-right'>#prod</span></th>
                        <th></th>
                        <th className="dummyscroll"></th>
                      </tr>
                    </thead>
                    <tbody className="overflow text-body">

    {compState.userblueprintlist.map((item, index) => (
                      <tr className={item.bp===compState.userblueprint.bp && item.serialnumber===compState.userblueprint.serialnumber ? "table-active" : "table-info"} key={index}  onClick={() => { onBlueprintclick(item); } }>
                        <td style={col_group}>{item.typegroupname}</td>
                        <td style={col_name}>{item.blueprintname} ({item.serialnumber})</td>
                        <td style={col_bpo}><input type="checkbox" checked={item.original} readOnly className="form-check-input"/></td>
                        <td style={col_mate}><span className='float-right'>{item.materialefficiency}</span></td>
                        <td style={col_totamount}><span className='float-right'>{item.totalamount}</span></td>
                        <td style={col_amount}><span className='float-right'>{item.amountproduced}</span></td>
                        <td>
                          <button type="button" className="btn btn-sm small btn-primary mx-1" onClick={() => openBlueprintchange(item)}>**</button>
                          <button type="button" className="btn btn-sm small btn-primary mx-1" onClick={() => removeBlueprint(item)}>-</button>
                          <button type="button" className="btn btn-sm small btn-primary mx-1" onClick={() => openrunBlueprint(item)}>run bp</button>
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

          <div className="col-7 root fullheight">

      <div className="containerheader">
        <div className="mx-auto bg-light p-1">

          <div className="d-flex">

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-3 d-flex">
                  <span className="mx-2">Production price (user input)</span>
                </div>
                <div className="col col-sm-9 d-flex">
                  <span className="mx-2">{format_price(compState.bpprices.totalprice_user)} ISK</span>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-3 d-flex">
                  <span className="mx-2">Production price (market)</span>
                </div>
                <div className="col col-sm-9 d-flex">
                  <span className="mx-2">{format_price(compState.bpprices.totalprice_market)} ISK</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div className="containercontent container-relative">
        <div className="row h-100">

          <div className="col-12">
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
                        <th style={col_matunitprice}><span className='float-right'>market u.p.</span></th>
                        <th style={col_matunitprice}><span className='float-right'>user u.p.</span></th>
                        <th></th>
                        <th className="dummyscroll"></th>
                      </tr>
                    </thead>
                    <tbody className="overflow text-body">
    {compState.bpprices.material.map((item, index) => (
                      <tr className="table-info" key={index}>
                        <td style={col_matname}>{item.typegroupname}</td>
                        <td style={col_matname}>{item.name}</td>
                        <td style={col_matamount}><span className='float-right'>{item.amount}</span></td>
                        <td style={col_matunitprice}><span className='float-right'>{format_2digits(item.marketaverage)}</span></td>
                        <td style={col_matunitprice}><span className='float-right'>{format_2digits(item.materialinputaverage)}</span></td>
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
        </div>
      </div>

      <Blueprint_add 
        show={blueprintadd} 
        onBlueprintadd={onBlueprintadd}
        onCancel={onBlueprintaddCancel} 
        />
      <Blueprint_change
        show={blueprintchange} 
        viewuserbp={compState.userblueprint}
        onUserbpchange={onUserbpchange}
        onCancel={onUserbpchangeCancel} 
        />
      <Blueprint_run
        show={blueprintrun} 
        viewuserbp={compState.userblueprint}
        onUserbprun={onUserbprun}
        onCancel={openrunBlueprintCancel} 
        />

    </div>

    );
}
