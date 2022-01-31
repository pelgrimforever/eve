import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Col, Row, Form } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Select from 'react-select';

import Store from '../services/store.js';

//models
import Viewmaterialinput from '../data/eve/view/viewmaterialinput.js';
//components
import Material_add from '../popups/material_add.js';
import Material_change from '../popups/material_change.js';
import Material_usage from '../popups/material_usage.js';
//data models
//component state
import appstore from '../appstore.js';
import storeMaterialinput from './store.js';

export default function Materialinput(props) {

  //variables with App scope
  const [appState] = appstore();
  //variables with component scope
  const [compState, compActions] = storeMaterialinput();

  const [loading, setLoading] = useState(false);
  const [materialinputadd, setMaterialinputadd] = useState(false);
  const [materialinputchange, setMaterialinputchange] = useState(false);
  const [materialusage, setMaterialusage] = useState(false);
  const [viewmaterialinput, setViewmaterialinput] = useState(new Viewmaterialinput());

  useEffect(async () => {
    compActions.loadMaterialinputlist();
    compActions.loadViewmaterialinputavglist();
  }, []);

  const openMaterialinput = () => {
    setMaterialinputadd(true);
  }

  const onMaterialaddCancel = () => {
    setMaterialinputadd(false);
  }  

  const onMaterialadd = async (activematerial, amount, unitprice) => {
    compActions.addMaterial(activematerial, amount, unitprice);
    setMaterialinputadd(false);
  }

  const openMaterialinputchange = (item) => {
    setViewmaterialinput(item);
    setMaterialinputchange(true);
  }

  const onMaterialchange = async (amount, unitprice) => {
    const result = await compActions.changeMaterial(viewmaterialinput, amount, unitprice);
    setMaterialinputchange(false);
  }

  const onMaterialchangeCancel = () => {
    setMaterialinputchange(false);
  }

  const openMaterialusage = () => {
    setMaterialusage(true);
  }

  const onMaterialusageCancel = () => {
    setMaterialusage(false);
  }  

  const onMaterialuse = async (activematerial, amount) => {
    compActions.useMaterial(activematerial, amount);
    setMaterialusage(false);
  }

  const format_price = (p) => {
    const rounded = Math.round(p);
    return "" + rounded;
  };

  const format_2digits = (n) => {
    return n.toFixed(2);
  };

  const col_date = {width: '8rem'};
  const col_name = {width: '12rem'};
  const col_amount = {width: '4rem'};
  const col_price = {width: '4rem'};
  const col_used = {width: '4rem'};

  const col_avgdate = {width: '8rem'};
  const col_avgname = {width: '12rem'};
  const col_avgamount = {width: '5rem'};
  const col_avgprice = {width: '6rem'};
  const col_avgused = {width: '5rem'};

  return (
    <div className="root fullheight">
      <div className="containercontent container-relative">
        <div className="row h-100">
          <div className="col-4">
            <div className="root fullheight">

      <div className="containerheader">
        <div className="mx-auto bg-light p-1">

          <div className="d-flex">

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-12 d-flex">
                  <button type="button" className="btn btn-sm small btn-primary" onClick={() => openMaterialinput()}>add material purchase</button>
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
                        <th style={col_date}>time</th>
                        <th style={col_name}>type</th>
                        <th style={col_amount}><span className='float-right'>#input</span></th>
                        <th style={col_price}><span className='float-right'>pr/unit</span></th>
                        <th style={col_used}><span className='float-right'>#out</span></th>
                        <th></th>
                        <th className="dummyscroll"></th>
                      </tr>
                    </thead>
                    <tbody className="overflow text-body">

    {compState.materialinputlist.map((item, index) => (
                      <tr className="table-info" key={index}>
                        <td style={col_date}>{item.addtimestampUI}</td>
                        <td style={col_name}>{item.name}</td>
                        <td style={col_amount}><span className='float-right'>{item.amount}</span></td>
                        <td style={col_price}><span className='float-right'>{format_2digits(item.unitprice)}</span></td>
                        <td style={col_used}><span className='float-right'>{item.usedamount}</span></td>
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

          <div className="col-8 root fullheight">

      <div className="containerheader">
        <div className="mx-auto bg-light p-1">

          <div className="d-flex">

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-12 d-flex">
                  <button type="button" className="btn btn-sm small btn-primary" onClick={() => openMaterialusage()}>Material usage</button>
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
                        <th style={col_avgdate}>last buy date</th>
                        <th style={col_avgname}>type</th>
                        <th style={col_avgamount}><span className='float-right'>tot input</span></th>
                        <th style={col_avgprice}><span className='float-right'>avg pr/unit</span></th>
                        <th style={col_avgused}><span className='float-right'>tot out</span></th>
                        <th></th>
                        <th className="dummyscroll"></th>
                      </tr>
                    </thead>
                    <tbody className="overflow text-body">

    {compState.materialinputavglist.map((item, index) => (
                      <tr className="table-info" key={index}>
                        <td style={col_avgdate}>{item.lastbuytimestampUI}</td>
                        <td style={col_avgname}>{item.name}</td>
                        <td style={col_avgamount}><span className='float-right'>{item.totalamount}</span></td>
                        <td style={col_avgprice}><span className='float-right'>{format_2digits(item.avgunitprice)}</span></td>
                        <td style={col_avgused}><span className='float-right'>{item.totalusedamount}</span></td>
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

      <Material_add 
        show={materialinputadd} 
        onMaterialadd={onMaterialadd}
        onCancel={onMaterialaddCancel} 
        />
      <Material_change
        show={materialinputchange} 
        viewmaterialinput={viewmaterialinput}
        onMaterialchange={onMaterialchange}
        onCancel={onMaterialchangeCancel} 
        />
      <Material_usage
        show={materialusage} 
        onMaterialuse={onMaterialuse}
        onCancel={onMaterialusageCancel} 
        />

    </div>

    );
}
