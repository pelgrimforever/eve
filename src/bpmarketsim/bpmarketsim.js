import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Col, Row, Form } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Select from 'react-select';

import Store from '../services/store.js';

//components
import Blueprint_select from '../popups/blueprint_select.js';
//services
//data models
//component state
import appstore from '../appstore.js';
import storeBpmarketsim from './store.js';

export default function Bpmarketsim(props) {

  //variables with App scope
  const [appState, appActions] = appstore();
  //variables with component scope
  const [compState, compActions] = storeBpmarketsim();

  const highsec = 0.45;

  const [loading, setLoading] = useState(false);
  const [blueprintselect, setBlueprintselect] = useState(false);
  const [sellorders, setSellorders] = useState([]);
  const [buyorders, setBuyorders] = useState([]);

  useEffect(async () => {
    await loadlist();
  }, []);

  const openBlueprintselect = () => {
    setBlueprintselect(true);
  }

  const onBlueprintselectCancel = () => {
    setBlueprintselect(false);
  }  

  const onBlueprintselect = async (blueprint) => {
    setBlueprintselect(false);
    const result = await compActions.setBlueprint(blueprint);
  }

  const selectUserblueprint = async (userblueprint) => {
    compActions.selectUserblueprint(userblueprint);
  }

  const selectBlueprintorder = async (blueprintorder) => {
    compActions.selectBlueprintorder(blueprintorder);
  }

  const change_bpprice = async (e) => {
    compActions.setBpprice(Number(e.target.value)); 
  }

  const change_bpbreakeven = async (e) => {
    compActions.setBpbreakeven(Number(e.target.value)); 
  }

  const change_bpmaterialefficiency = async (e) => {
    compActions.setBpmaterialefficiency(Number(e.target.value)); 
  }

  const change_researchcost = async (e) => {
    compActions.setResearchcost(Number(e.target.value)); 
  }

  const change_stationfee = async (e) => {
    compActions.setStationfee(Number(e.target.value)); 
  }

  //construct trade list data
  const loadlist = async () => {
    try {
    } catch (e) {
      console.log("loadlist failed");
      setLoading(false);
    }
  };

  const updateprices = async () => {
    compActions.simulateprice();
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

  const displayfield = (content) => {
    if(content==null || content.length==0) {
      return '__________'
    } else {
      return content;
    }
  }

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

  const col_systemsec = {width: '3rem'};

  const colorder_systemsec = {width: '3rem'};
  const colorder_regionname = {width: '6rem' };
  const colorder_systemname = {width: '6rem'};
  const colorder_volume_remain = {width: '3rem'};
  const colorder_volume_min = {width: '3rem'};
  const colorder_price = {width: '5rem'};

  const colhist_regionname = {width: '6rem' };
  const colhist_volume = {width: '3rem'};
  const colhist_orders = {width: '3.5rem'};
  const colhist_price = {width: '5rem'};

  return (
    <div className="root fullheight">
      <div className="containerheader">
        <div className="mx-auto bg-light p-1">

          <div className="d-flex">

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <button type="button" className="btn btn-sm btn-primary btn-block" onClick={() => openBlueprintselect()}>Select BP</button>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{displayfield(compState.blueprint.name)}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">Output</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{displayfield(compState.bpresult.name)}</label>
                </div>
              </div>
            </div>

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">BP price</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <Form.Control type="number" id="bpprice" name="bpprice" value={compState.bpprice} onChange={change_bpprice} className="form-control" style={{width:'150px'}}/>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">BP break/even #</label>
                </div>
                <div className="col col-sm-6 input-group-prepend">
                  <Form.Control type="number" id="bpbreakeven" name="bpbreakeven" value={compState.bpbreakeven} onChange={change_bpbreakeven} className="form-control" style={{width:'100px'}}/>
                </div>
              </div>
            </div>

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">Material efficiency</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <Form.Control type="number" id="bpmaterialefficiency" name="bpmaterialefficiency" value={compState.bpmaterialefficiency} onChange={change_bpmaterialefficiency} className="form-control" style={{width:'60px'}}/>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">M.E. research cost</label>
                </div>
                <div className="col col-sm-4 input-group-prepend">
                  <Form.Control type="number" id="researchcost" name="researchcost" value={compState.researchcost} onChange={change_researchcost} className="form-control" style={{width:'100px'}}/>
                </div>
                <div className="col col-sm-4">
                  estimated 25% of BP
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">Prod station fee</label>
                </div>
                <div className="col col-sm-4 input-group-prepend">
                  <Form.Control type="number" id="stationfee" name="stationfee" value={compState.stationfee} onChange={change_stationfee} className="form-control" style={{width:'100px'}}/>
                </div>
                <div className="col col-sm-4">
                  estimated 1% of BP
                </div>
              </div>
            </div>

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <button type="button" className="btn btn-sm btn-primary btn-block" onClick={() => updateprices()}>Update</button>
              </div>
              <div className="row m-0">
                <div className="col col-sm-6 input-group-prepend">
                  <label className="input-group-text">Calculated unit price (input)</label>
                </div>
                <div className="col col-sm-6 input-group-prepend">
                  <label className="input-group-text">{format_price(compState.pricesim.totalprice_user)}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-6 input-group-prepend">
                  <label className="input-group-text">Calculated unit price (market)</label>
                </div>
                <div className="col col-sm-6 input-group-prepend">
                  <label className="input-group-text">{format_price(compState.pricesim.totalprice_market)}</label>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>


      <div className="containercontent container-relative">
        <div className="row h-100">
          <div className="col-4">
            <div className="root quarterheight">
              <div className="containerheader">
                <span>User blueprints</span>
              </div>
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
                      <tr className="table-info" key={index}>
                        <td style={col_group}>{item.typegroupname}</td>
                        <td style={col_name}>{item.blueprintname} ({item.serialnumber})</td>
                        <td style={col_bpo}><input type="checkbox" checked={item.original} readOnly className="form-check-input"/></td>
                        <td style={col_mate}><span className='float-right'>{item.materialefficiency}</span></td>
                        <td style={col_totamount}><span className='float-right'>{item.totalamount}</span></td>
                        <td style={col_amount}><span className='float-right'>{item.amountproduced}</span></td>
                        <td>
                          <button type="button" className="btn btn-sm small btn-primary mx-1" onClick={() => selectUserblueprint(item)}>use BP</button>
                        </td>
                      </tr>  
))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="root quarterheight">
              <div className="containerheader">
                <span>BP market prices</span>
              </div>
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
                        <th style={colorder_volume_remain}># rem</th>
                        <th style={colorder_volume_min}># min</th>
                        <th style={colorder_price}>sell</th>
                        <th></th>
                        <th className="dummyscroll"></th>
                      </tr>
                    </thead>
                    <tbody className="overflow text-body">
{compState.bpsellorders.map((item, index) => (
                      <tr className={item.ship_kills>0 ? "table-danger" : "table-info"} key={index}>
                        <td style={colorder_regionname}>{item.regionname}</td>
                        <td style={colorder_systemname}>{item.systemname}</td>
                        <td className={item.security_status<highsec ? "bg-danger" : ""} style={colorder_systemsec}>{format_2digits(item.security_status)}</td>
                        <td style={colorder_volume_remain}>{item.volume_remain}</td>
                        <td className={item.min_volume>1 ? "bg-danger" : ""} style={colorder_volume_min}>{item.min_volume}</td>
                        <td style={colorder_price}><span className='float-right'>{item.price}</span></td>
                        <td>
                          <button type="button" className="btn btn-sm small btn-primary mx-1" onClick={() => selectBlueprintorder(item)}>use estimates</button>
                        </td>
                      </tr>  
))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="root halfheight">
              <div className="containerheader">
                <span>Material prices (market / input)</span>
              </div>
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
                        <th style={col_matunitprice}><span className='float-right'>inputprice</span></th>
                        <th></th>
                        <th className="dummyscroll"></th>
                      </tr>
                    </thead>
                    <tbody className="overflow text-body">
{compState.pricesim.material.map((item, index) => (
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

          <div className="col-4">
            <div className="root fullheight">
              <div className="containerheader">
                <span>{displayfield(compState.bpresult.name)} price history</span>
              </div>
              <div className="containercontent container-relative">
                <div className="table-container container-fluid p-0">

{ compState.orderhistoryloading && 
                  <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status" />
                  </div>
}
                  <table className="table small table-dark table-bordered table-hover fillparent">
                    <thead>
                      <tr>
                        <th style={colhist_regionname}>region</th>
                        <th style={colhist_volume}><span className='float-right'># units</span></th>
                        <th style={colhist_orders}><span className='float-right'># orders</span></th>
                        <th style={colhist_price}><span className='float-right'>highest</span></th>
                        <th style={colhist_price}><span className='float-right'>average</span></th>
                        <th style={colhist_price}><span className='float-right'>lowest</span></th>
                        <th></th>
                        <th className="dummyscroll"></th>
                      </tr>
                    </thead>
                    <tbody className="overflow text-body">
{compState.orderhistory.map((item, index) => (
                      <tr className="table-info" key={index}>
                        <td style={colhist_regionname}>{item.regionname}</td>
                        <td style={colhist_volume}><span className='float-right'>{item.volume}</span></td>
                        <td style={colhist_orders}><span className='float-right'>{item.ordercount}</span></td>
                        <td style={colhist_price}><span className='float-right'>{format_2digits(item.highest)}</span></td>
                        <td style={colhist_price}><span className='float-right'>{format_2digits(item.average)}</span></td>
                        <td style={colhist_price}><span className='float-right'>{format_2digits(item.lowest)}</span></td>
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

          <div className="col-4">
            <div className="root fullheight">
              <div className="containerheader">
                <span>{displayfield(compState.bpresult.name)} current sell orders</span>
              </div>
              <div className="containercontent container-relative">
                <div className="table-container container-fluid p-0">

{ compState.resultsellordersloading && 
                  <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status" />
                  </div>
}
                  <table className="table small table-dark table-bordered table-hover fillparent">
                    <thead>
                      <tr>
                        <th style={colorder_regionname}>region</th>
                        <th style={colorder_systemname}>system</th>
                        <th style={col_systemsec}>sec</th>
                        <th style={colorder_volume_remain}># rem</th>
                        <th style={colorder_volume_min}># min</th>
                        <th style={colorder_price}>sell</th>
                        <th></th>
                        <th className="dummyscroll"></th>
                      </tr>
                    </thead>
                    <tbody className="overflow text-body">
{compState.resultsellorders.map((item, index) => (
                      <tr className={item.ship_kills>0 ? "table-danger" : "table-info"} key={index}>
                        <td style={colorder_regionname}>{item.regionname}</td>
                        <td style={colorder_systemname}>{item.systemname}</td>
                        <td className={item.security_status<highsec ? "bg-danger" : ""} style={col_systemsec}>{format_2digits(item.security_status)}</td>
                        <td style={colorder_volume_remain}>{item.volume_remain}</td>
                        <td className={item.min_volume>1 ? "bg-danger" : ""} style={colorder_volume_min}>{item.min_volume}</td>
                        <td style={colorder_price}><span className='float-right'>{item.price}</span></td>
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

      <Blueprint_select 
        show={blueprintselect} 
        onBpselect={onBlueprintselect}
        onCancel={onBlueprintselectCancel} 
        />

    </div>

    );
}
