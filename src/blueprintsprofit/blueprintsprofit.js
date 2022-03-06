import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Col, Row, Form } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Select from 'react-select';

import Store from '../services/store.js';

//models
//components
//services
//component state
import appstore from '../appstore.js';
import storeBlueprintsprofit from './store.js';

export default function Blueprintsprofit(props) {

  //variables with App scope
  const [appState] = appstore();
  //variables with component scope
  const [compState, compActions] = storeBlueprintsprofit();

  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    if(compState.bpcostlist.length===0) {
      setLoading(true);
      compState.viewbpprofitperregion.name = "Select line";
      compState.viewbpprofitperregion.regionname = "Select line";
      const result = await compActions.loadBlueprints();
      setLoading(false);
    }
  }, []);

  const calculateprices = async () => {
    setLoading(true);
    const result = await compActions.calculatebpproductioncost();
    setLoading(false);
  }

  const format_price = (p) => {
    const rounded = Math.round(p);
    return "" + rounded;
  };

  const format_2digits = (n) => {
    return n.toFixed(2);
  };

  const highsec = 0.45;

  const col_systemsec = {width: '3rem'};

  const col_groupname = {width: '12rem'};
  const col_name = {width: '18rem'};
  const col_amount = {width: '4rem'};
  const col_price = {width: '8rem'};
  const col_percprofit = {width: '4rem'};
  const col_volume = {width: '4rem'};

  const colorder_systemname = {width: '6rem'};
  const colorder_volume_remain = {width: '3rem'};
  const colorder_volume_min = {width: '3rem'};
  const colorder_price = {width: '5rem'};

  return (
    <div className="root fullheight">
      <div className="containercontent container-relative">
        <div className="row h-100">
          <div className="col-12">
            <div className="root fullheight">

              <div className="containerheader">
                <div className="mx-auto bg-light p-1">

                  <div className="d-flex">

                    <div className="p-2 flex-fill bg-info">
                      <div className="row m-0">
                        <div className="col col-sm-12 d-flex">
                          <span className="mx-2">BP</span>
                          <div style={{width:'200px'}}>
                            <button type="button" className="btn btn-sm small btn-primary mx-1" onClick={() => calculateprices()}>recalculate prices</button>
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
                    <div className="row h-100">
                      <div className="col-9">
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
                                    <th style={col_groupname}>group</th>
                                    <th style={col_name}>blueprint</th>
                                    <th style={col_price}><span className='float-right'>est. productioncost</span></th>
                                    <th style={col_name}>region</th>
                                    <th style={col_percprofit}><span className='float-right'>perc. profit</span></th>
                                    <th style={col_price}><span className='float-right'>region avg. price</span></th>
                                    <th style={col_amount}><span className='float-right'>order count</span></th>
                                    <th style={col_volume}><span className='float-right'># order units</span></th>
                                    <th></th>
                                    <th className="dummyscroll"></th>
                                  </tr>
                                </thead>
                                <tbody className="overflow text-body">

{compState.bpcostlist.map((item, index) => (
                                  <tr className={item.region===compState.viewbpprofitperregion.region && item.id===compState.viewbpprofitperregion.id ? "table-active" : "table-info"}  key={index} onClick={() => { compActions.setviewbpprofitperregion(item); } }>
                                    <td style={col_groupname}>{item.typegroupname}</td>
                                    <td style={col_name}>{item.name}</td>
                                    <td style={col_price}><span className='float-right'>{format_price(item.estimatedproductioncost)}</span></td>
                                    <td style={col_name}>{item.regionname}</td>
                                    <td style={col_percprofit}><span className='float-right'>{format_2digits(item.percprofit)}</span></td>
                                    <td style={col_price}><span className='float-right'>{format_price(item.average)}</span></td>
                                    <td style={col_amount}><span className='float-right'>{item.ordercount}</span></td>
                                    <td style={col_volume}><span className='float-right'>{item.volume}</span></td>
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

                      <div className="col-3">
                        <div className="root fullheight">
                          <div className="containerheader">
                            <div className="mx-auto bg-light p-1">

                              <div className="d-flex">

                                <div className="p-2 flex-fill bg-info">
                                  <div className="row m-0">
                                    <div className="col col-sm-6 input-group-prepend">
                                      <label className="input-group-text">type</label>
                                    </div>
                                    <div className="col col-sm-6 input-group-prepend">
                                      <label className="input-group-text">{compState.viewbpprofitperregion.name}</label>
                                    </div>
                                  </div>
                                  <div className="row m-0">
                                    <div className="col col-sm-6 input-group-prepend">
                                      <label className="input-group-text">region</label>
                                    </div>
                                    <div className="col col-sm-6 input-group-prepend">
                                      <label className="input-group-text">{compState.viewbpprofitperregion.regionname}</label>
                                    </div>
                                  </div>
                                </div>

                              </div>

                            </div>
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

{compState.sellorders.map((item, index) => (
                                  <tr className={item.ship_kills>0 ? "table-danger" : "table-info"} key={index}>
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
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    );
}
