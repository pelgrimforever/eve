import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Col, Row, Form } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Select from 'react-select';
import Chart from "react-google-charts"

import Store from '../services/store.js';

//components
//data models
import { Evetypepk } from '../data/eve/table/super/evetypesuper.js';
import Evetype from '../data/eve/table/evetype.js';
//component state
import appstore from '../appstore.js';
import storeMarketprice from './store.js';
import './marketprice.scss';
//services
import Rsvieworder from '../services/eve/rest/view/rsvieworder.js';
import Rsviewevetypeorderhistorymonth from '../services/eve/rest/view/rsviewevetypeorderhistorymonth.js';

export default function Marketprice(props) {

  //variables with App scope
  const [appState] = appstore();
  //variables with component scope
  const [compState, compActions] = storeMarketprice();

  const [loading, setLoading] = useState(false);
  const [evetype, setEvetype] = useState(new Evetype());
  const [sellorders, setSellorders] = useState([]);
  const [buyorders, setBuyorders] = useState([]);
  const [showchart, setShowchart] = useState(true);
  const [charttitle, setCharttitle] = useState([]);
  const [chartdata, setChartdata] = useState([
              [{ type: 'date', label: 'Day' }, 'avg', 'min', 'max'],
              [new Date(), 0, 0, 0],
            ]);

  useEffect(async () => {
  }, []);

  const searchtextChange = (searchtextevent) => {
    compActions.setSearchstring(searchtextevent.target.value); 
    compActions.loadTypes(searchtextevent.target.value);
  }

  const open = async (item) => {
    setEvetype(item);
    const result_sellorders = await Rsvieworder.getevetypesell(Store.user, item.PK);
    const result_buyorders = await Rsvieworder.getevetypebuy(Store.user, item.PK);
    setSellorders(result_sellorders);
    setBuyorders(result_buyorders);
    setLoading(true);
    const orderhistorylist = await Rsviewevetypeorderhistorymonth.get4evetype(Store.user, item.PK);
    let orderhistorychart = [
              [{ type: 'date', label: 'Day' }, 'avg', 'min', 'max'],
            ];
    orderhistorylist.forEach(oh => orderhistorychart.push([new Date(oh.year, oh.month, 0), oh.average, oh.lowest, oh.highest]));
    setChartdata(orderhistorychart);
    setLoading(false);
  }

  const format_2digits = (n) => {
    return n.toFixed(2);
  };

  const chartloading_visibility = loading ? "visible" : "hidden";

  const sec_highsec = 0.45;

  const col_jumps = {width: '4rem'};
  const col_name = {width: '25rem'};
  const col_region = {width: '10rem'};
  const col_amount = {width: '5rem'};
  const col_price = {width: '10rem'};

  const colorder_regionname = {width: '6rem' };
  const colorder_systemname = {width: '6rem'};
  const colorder_systemsec = {width: '3rem'};
  const colorder_volume_remain = {width: '3rem'};
  const colorder_volume_min = {width: '3rem'};
  const colorder_price = {width: '5rem'};

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
                  <span className="mx-2">type</span>
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

                  <table className="table table-dark table-bordered table-hover fillparent">
                    <thead>
                      <tr>
                        <th style={col_name}>name</th>
                        <th className="dummyscroll"></th>
                      </tr>
                    </thead>
                    <tbody className="overflow text-body">

    {compState.typelist.map((item, index) => (
                      <tr className={item.id===evetype.id ? "table-active" : "table-info"} key={index} onClick={() => { open(item); } }>
                        <td style={col_name}>{item.name}</td>
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

      <div className="containercontent container-relative">
        <div className="root halfheight">
        <div className="row h-100">

          <div className="col-6">
            <div className="root fullheight">
              <div className="containercontent container-relative">
                <div className="table-container container-fluid p-0">

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

    {sellorders.map((item, index) => (
                      <tr className={item.ship_kills>0 ? "table-danger" : "table-info"} key={index}>
                        <td style={colorder_regionname}>{item.regionname}</td>
                        <td style={colorder_systemname}>{item.systemname}</td>
                        <td className={item.security_status<sec_highsec ? "bg-danger" : ""} style={colorder_systemsec}>{format_2digits(item.security_status)}</td>
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

          <div className="col-6">
            <div className="root fullheight">
              <div className="containercontent container-relative">
                <div className="table-container container-fluid p-0">

                  <table className="table small table-dark table-bordered table-hover fillparent">
                    <thead>
                      <tr>
                        <th style={colorder_regionname}>region</th>
                        <th style={colorder_systemname}>system</th>
                        <th style={colorder_systemsec}>sec</th>
                        <th style={colorder_volume_remain}># rem</th>
                        <th style={colorder_volume_min}># min</th>
                        <th style={colorder_price}>buy</th>
                        <th></th>
                        <th className="dummyscroll"></th>
                      </tr>
                    </thead>
                    <tbody className="overflow text-body">

    {buyorders.map((item, index) => (
                      <tr className={item.ship_kills>0 ? "table-danger" : "table-info"} key={index}>
                        <td style={colorder_regionname}>{item.regionname}</td>
                        <td style={colorder_systemname}>{item.systemname}</td>
                        <td className={item.security_status<sec_highsec ? "bg-danger" : ""} style={colorder_systemsec}>{format_2digits(item.security_status)}</td>
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

        <div className="root halfheight position-relative">

            <div className="d-flex justify-content-center"  style={{visibility: chartloading_visibility}}>
              <Spinner className="spinner-border-center" animation="border" role="status" />
            </div>

            <Chart
              width={'100%'}
              height={'100%'}
              chartType="LineChart"
              loader={<div>Loading Chart</div>}
              data={chartdata}
              options={{
                hAxis: {
                  title: 'Month',
                },
                vAxis: {
                  title: 'Price',
                },
              }}
              rootProps={{ 'data-testid': '2' }}
            />

        </div>
      </div>

          </div>
        </div>
      </div>
    </div>


    );
}
