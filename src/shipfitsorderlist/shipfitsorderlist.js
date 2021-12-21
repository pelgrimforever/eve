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
import storeShipfitsorderlist from './store.js';

export default function Shipfitsorderlist(props) {

  //variables with App scope
  const [appState] = appstore();
  //variables with component scope
  const [compState, compActions] = storeShipfitsorderlist();

  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    compActions.loadShipfitorders();
  }, []);

  const findorders = async (viewshipfitorder) => {
    compActions.setShipfitorder(viewshipfitorder);
  }

  const selectorder = async (viewsellorder) => {
    compActions.addShipfitorderlist(viewsellorder);
  }

  const removeordereditem = async (viewshipfitorderselected) => {
    compActions.deleteShipfitorderlist(viewshipfitorderselected);
  }

  const format_price = (p) => {
    const rounded = Math.round(p);
    return "" + rounded;
  };

  const format_2digits = (n) => {
    return n.toFixed(2);
  };

  const sec_highsec = 0.45;

  const col_name = {width: '10rem'};
  const col_type = {width: '12rem'};
  const col_amount = {width: '3rem'};
  
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
          <div className="col-4">
            <div className="root fullheight">

      <div className="containercontent container-relative">
            <div className="root fullheight">
              <div className="containerheader">
                <div className="d-flex">
                  Parts ordered
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
                        <th style={col_name}>name</th>
                        <th style={col_type}>type</th>
                        <th style={col_amount}><span className='float-right'>needed</span></th>
                        <th style={col_amount}><span className='float-right'>in stock</span></th>
                        <th style={col_amount}><span className='float-right'>planned</span></th>
                        <th></th>
                        <th className="dummyscroll"></th>
                      </tr>
                    </thead>
                    <tbody className="overflow text-body">

    {compState.shipfitorderlist.map((item, index) => (
                      <tr className="table-info" key={index}>
                        <td style={col_name}>{item.shipname}</td>
                        <td style={col_type}>{item.evetypename}</td>
                        <td style={col_amount}><span className='float-right'>{item.amountwanted}</span></td>
                        <td style={col_amount}><span className='float-right'>{item.amountinstock}</span></td>
                        <td style={col_amount}><span className='float-right'>{item.amountplanned}</span></td>
                        <td>
                          <button type="button" className="mx-2 btn btn-sm small btn-primary" onClick={() => findorders(item)}>-></button>
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

          <div className="col-4 root fullheight">

      <div className="containercontent container-relative">
            <div className="root fullheight">
              <div className="containerheader">
                <div className="d-flex">
                  Sell orders
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

    {compState.orders.map((item, index) => (
                      <tr className={item.ship_kills>0 ? "table-danger" : "table-info"} key={index}>
                        <td style={colorder_regionname}>{item.regionname}</td>
                        <td style={colorder_systemname}>{item.systemname}</td>
                        <td className={item.security_status<sec_highsec ? "bg-danger" : ""} style={colorder_systemsec}>{format_2digits(item.security_status)}</td>
                        <td style={colorder_volume_remain}>{item.volume_remain}</td>
                        <td className={item.min_volume>1 ? "bg-danger" : ""} style={colorder_volume_min}>{item.min_volume}</td>
                        <td style={colorder_price}><span className='float-right'>{item.price}</span></td>
                        <td>
                          <button type="button" className="mx-2 btn btn-sm small btn-primary" onClick={() => selectorder(item)}>-></button>
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

          <div className="col-4">
            <div className="root fullheight">

      <div className="containercontent container-relative">
              <div className="containerheader">
                <div className="d-flex">
                  Buy plan
                </div>
              </div>
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
                        <td className={item.security_status<sec_highsec ? "bg-danger" : ""} style={colorder_systemsec}>{format_2digits(item.security_status)}</td>
                        <td style={colorder_volume_needed}><span className='float-right'>{item.amountneeded}</span></td>
                        <td style={colorder_typename}>{item.evetypename}</td>
                        <td>
                          <button type="button" className="mx-2 btn btn-sm small btn-primary" onClick={() => removeordereditem(item)}>-</button>
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

    );
}
