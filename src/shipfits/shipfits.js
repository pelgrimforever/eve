import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Col, Row, Form } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Select from 'react-select';

import Store from '../services/store.js';

//components
import Shipfit_add from '../popups/shipfit_add.js';
import Shipmodule_add from '../popups/shipmodule_add.js';
import Shipfitorder_addstock from '../popups/shipfitorder_addstock.js';
//data models
//component state
import appstore from '../appstore.js';
import storeShipfits from './store.js';

export default function Shipfits(props) {

  //variables with App scope
  const [appState] = appstore();
  //variables with component scope
  const [compState, compActions] = storeShipfits();

  const [loading, setLoading] = useState(false);
  const [shipfitadd, setShipfitadd] = useState(false);
  const [shipmoduleaddbuttonenabled, setShipmoduleaddbuttonenabled] = useState(false);
  const [shipmoduleadd, setShipmoduleadd] = useState(false);
  const [shipfitorderaddstock, setShipfitorderaddstock] = useState(false);

  useEffect(async () => {
    compActions.loadShipfits();
    compActions.loadShipfitorders();
  }, []);

  const openShipfit_add = () => {
    setShipfitadd(true);
  }

  const openShipfit = (item) => {
    compActions.setViewshipfit(item);
    setShipmoduleaddbuttonenabled(true);
  }

  const removeShipfit = (item) => {
    compActions.removeShipfit(item);
    setShipmoduleaddbuttonenabled(false);
  }

  const orderShipfit = (item) => {
    compActions.orderShipfit(item);
  }

  const onShipfitadd = async (activeship, shipname) => {
    compActions.addShipfit(activeship, shipname);
    setShipfitadd(false);
  }

  const onShipfitaddCancel = () => {
    setShipfitadd(false);
  }  

  const openShipmodule_add = () => {
    setShipmoduleadd(true);
  }

  const removeShipmodule = (item) => {
    compActions.removeShipmodule(item);
  }

  const onShipmoduleadd = async (activemodule, amount) => {
    compActions.addShipmodule(activemodule, amount);
    setShipmoduleadd(false);
  }

  const onShipmoduleaddCancel = () => {
    setShipmoduleadd(false);
  }  

  const addstockShiporder = (item) => {
    compActions.setShipfitorder(item);
    setShipfitorderaddstock(true);
  }

  const onShipfitorderaddstock = (amount) => {
    compActions.addstockShipfitorder(compState.shipfitorder, amount);
    setShipfitorderaddstock(false);
  }

  const onShipfitorderaddstockcancel = () => {
    setShipfitorderaddstock(false);
  }

  const col_name = {width: '15rem'};
  const col_type = {width: '10rem'};

  const colmod_name = {width: '22rem'};
  const colmod_amount = {width: '3rem'};

  const colsmall_name = {width: '10rem'};
  const colsmall_type = {width: '12rem'};
  const colsmall_amount = {width: '5rem'};
  const colsmall_pvolume = {width: '6rem'};

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
                  <button type="button" className="btn btn-sm small btn-primary" onClick={() => openShipfit_add()}>add ship fitting</button>
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
                  <table className="table table-dark table-bordered table-hover fillparent">
                    <thead>
                      <tr>
                        <th style={col_name}>name</th>
                        <th style={col_type}>type</th>
                        <th></th>
                        <th className="dummyscroll"></th>
                      </tr>
                    </thead>
                    <tbody className="overflow text-body">

    {compState.shipfitlist.map((item, index) => (
                      <tr className={compState.viewshipfit!==null && compState.viewshipfit.shipname===item.shipname ? "table-active" : "table-info"} key={index} onClick={() => { openShipfit(item); } }>
                        <td style={col_name}>{item.shipname}</td>
                        <td style={col_type}>{item.shiptype}</td>
                        <td>
                          <button type="button" className="btn btn-sm small btn-primary" onClick={() => removeShipfit(item)}>-</button>
                          <button type="button" className="mx-2 btn btn-sm small btn-primary bg-warning" onClick={() => orderShipfit(item)}>order</button>
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

          <div className="col-3 root fullheight">

      <div className="containerheader">
        <div className="mx-auto bg-light p-1">

          <div className="d-flex">

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-12 d-flex">
                  <button type="button" className="btn btn-sm small btn-primary" onClick={() => openShipmodule_add()} disabled={!shipmoduleaddbuttonenabled}>add ship module</button>
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
                  <table className="table table-dark table-bordered table-hover fillparent">
                    <thead>
                      <tr>
                        <th style={colmod_name}>module</th>
                        <th style={colmod_amount}><span className='float-right'>#</span></th>
                        <th></th>
                        <th className="dummyscroll"></th>
                      </tr>
                    </thead>
                    <tbody className="overflow text-body">

    {compState.shipfitmodules.map((item, index) => (
                      <tr className="table-info" key={index}>
                        <td style={colmod_name}>{item.modulename}</td>
                        <td style={colmod_amount}><span className='float-right'>{item.amount}</span></td>
                        <td>
                          <button type="button" className="btn btn-sm small btn-primary" onClick={() => removeShipmodule(item)}>-</button>
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

          <div className="col-5">
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
                        <th style={colsmall_name}>ship name</th>
                        <th style={colsmall_name}>type</th>
                        <th style={colsmall_amount}><span className='float-right'>needed</span></th>
                        <th style={colsmall_amount}><span className='float-right'>in stock</span></th>
                        <th style={colsmall_pvolume}><span className='float-right'>pack. vol</span></th>
                        <th></th>
                        <th className="dummyscroll"></th>
                      </tr>
                    </thead>
                    <tbody className="overflow text-body">
    {compState.shipfitorderlist.map((item, index) => (
                      <tr className="table-info" key={index}>
                        <td style={colsmall_name}>{item.shipname}</td>
                        <td style={colsmall_name}>{item.evetypename}</td>
                        <td style={colsmall_amount}><span className='float-right'>{item.amountwanted}</span></td>
                        <td style={colsmall_amount}><span className='float-right'>{item.amountinstock}</span></td>
                        <td style={colsmall_pvolume}><span className='float-right'>{item.packaged_volume}</span></td>
                        <td>
                          <button type="button" className="btn btn-sm small btn-primary" onClick={() => addstockShiporder(item)}>*</button>
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

      <Shipfit_add 
        show={shipfitadd} 
        onShipfitadd={onShipfitadd}
        onCancel={onShipfitaddCancel} 
        />

      <Shipmodule_add 
        show={shipmoduleadd} 
        onShipmoduleadd={onShipmoduleadd}
        onCancel={onShipmoduleaddCancel} 
        />

      <Shipfitorder_addstock
        show={shipfitorderaddstock} 
        shipfitorder={compState.shipfitorder}
        onShipfitorderaddstock={onShipfitorderaddstock}
        onCancel={onShipfitorderaddstockcancel} 
        />
    </div>

    );
}
