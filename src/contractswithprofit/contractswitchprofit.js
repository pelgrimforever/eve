import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Col, Row, Form } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Select from 'react-select';

import Store from '../services/store.js';

//components
//data models
//component state
import appstore from '../appstore.js';
import storeViewcontractswithprofit from './store.js';

export default function Contractswitchprofit() {

  //variables with App scope
  const [appState] = appstore();
  //variables with component scope
  const [compState, compActions] = storeViewcontractswithprofit();

  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    compActions.loadContracts();
  }, []);

  const setContract = (item) => {
    compActions.setContract(item);
  }

  const format_price = (p) => {
    const rounded = Math.round(p);
    return "" + rounded;
  };

  const col_region = {width: '7rem'};
  const col_system = {width: '7rem'};
  const col_station = {width: '28rem'};
  const col_price = {width: '7rem'};

  const colcategory_name = {width: '5rem'};
  const colgroup_name = {width: '8rem'};
  const colevetype_name = {width: '12rem'};
  const colsellbuy = {width: '4rem'};
  const colisk = {width: '5rem'};
  const colquantity = {width: '6rem'};
  const colm3 = {width: '6rem'};

  return (
    <div className="root fullheight">
      <div className="containercontent container-relative">
        <div className="row h-100">
          <div className="col-6">
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
                  <table className="table table-dark table-bordered table-hover fillparent">
                    <thead>
                      <tr>
                        <th style={col_region}>region</th>
                        <th style={col_system}>system</th>
                        <th style={col_station}>station</th>
                        <th style={col_price}><span className='float-right'>price</span></th>
                        <th style={col_price}><span className='float-right'>reward</span></th>
                        <th></th>
                        <th className="dummyscroll"></th>
                      </tr>
                    </thead>
                    <tbody className="overflow text-body">

    {compState.viewcontractswithprofit.map((item, index) => (
                      <tr className={compState.viewcontract!==null && compState.viewcontract.id===item.id ? "table-active" : "table-info"} key={index} onClick={() => { setContract(item); } }>
                        <td style={col_region}>{item.regionname}</td>
                        <td style={col_system}>{item.systemname}</td>
                        <td style={col_station}>{item.name}</td>
                        <td style={col_price}><span className='float-right'>{item.price}</span></td>
                        <td style={col_price}><span className='float-right'>{item.reward}</span></td>
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

          <div className="col-6 root fullheight">

      <div className="containerheader">
        <div className="mx-auto bg-light p-1">

          <div className="d-flex">

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-3 d-flex">
                  title
                </div>
                <div className="col col-sm-9 d-flex">
                  {compState.viewcontract.title}
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-3 d-flex">
                  volume
                </div>
                <div className="col col-sm-9 d-flex">
                  {compState.viewcontract.volume}
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-3 d-flex">
                  sellprice
                </div>
                <div className="col col-sm-9 d-flex">
                  {format_price(compState.viewcontract.sellprice)}
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-3 d-flex">
                  buyprice
                </div>
                <div className="col col-sm-9 d-flex">
                  {format_price(compState.viewcontract.buyprice)}
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

              <table className="table small table-dark table-striped table-bordered table-hover fillparent">
                <thead>
                  <tr>
                    <th style={colcategory_name}>category</th>
                    <th style={colgroup_name}>group</th>
                    <th style={colevetype_name}>type</th>
                    <th style={colsellbuy}>s/b</th>
                    <th style={colisk}><span className='float-right'>average</span></th>
                    <th style={colisk}><span className='float-right'>high</span></th>
                    <th style={colisk}><span className='float-right'>low</span></th>
                    <th style={colquantity}><span className='float-right'>#</span></th>
                    <th style={colm3}><span className='float-right'>m3</span></th>
                    <th></th>
                    <th className="dummyscroll"></th>
                  </tr>
                </thead>
                <tbody className="overflow text-body">

    {compState.viewcontractitems.map((item, index) => (
                  <tr className="table-info" key={index}>
                    <td style={colcategory_name}>{item.categoryname}</td>
                    <td style={colgroup_name}>{item.groupname}</td>
                    <td style={colevetype_name}>{item.typename}</td>
                    <td style={colsellbuy}>{item.included ? "sell" : "buy"}</td>
                    <td style={colisk}><span className='float-right'>{format_price(item.average)}</span></td>
                    <td style={colisk}><span className='float-right'>{format_price(item.highest)}</span></td>
                    <td style={colisk}><span className='float-right'>{format_price(item.lowest)}</span></td>
                    <td style={colquantity}><span className='float-right'>{item.quantity}</span></td>
                    <td style={colm3}><span className='float-right'>{item.packaged_volume}</span></td>
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
      </div>

    </div>

    );
}
