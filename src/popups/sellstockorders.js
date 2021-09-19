import React, { useState, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import FormControl from "react-bootstrap/FormControl";
import { Col, Row, Form } from "react-bootstrap";
import Moment from 'moment';

import Store from '../services/store.js';
import './combinedtradeorders.scss';

//services
import Rsviewstocktradeorders from '../services/eve/rest/view/rsviewstocktradeorders.js';
//data models
import Stocktradesystem from '../data/eve/view/viewstocktradesystem.js';

function Sellstockorders(props) {
  const collabels = "4";
  const coldata = "8";

  const [list, setList] = useState([]);

  useEffect(() => {
    loadlist();
  }, [props.stocktradesystem]);

  //construct order list data
  const loadlist = async () => {
    try {
      const result = await Rsviewstocktradeorders.get4stocktrade(props.stocktradesystem);
      result.sort((a, b) => (a.evetypename<b.evetypename) ? 1 : -1);
      setList(result);
    } catch (e) {
      console.log("loadlist failed");
    }
  };  

  const totalvolume = (trade) => {
    return format_2digits(trade.sellamount * trade.packaged_volume);
  };

  const format_price = (p) => {
    const rounded = Math.round(p);
    return "" + rounded;
  };

  const format_2digits = (n) => {
    return n.toFixed(2);
  };

  const collocationto = {width: '20rem' };
  const coltype = {width: '12rem' };
  const colamount = {width: '8rem'};
  const colm3 = {width: '5rem'};
  const colsellprice = {width: '4rem'};

  return (
    <Modal show={props.show} size="xl" id="tradelinemodal" centered>
      <ModalHeader className="bg-dark">
        <ModalTitle className="text-light">Trade opportunity</ModalTitle>
      </ModalHeader>
      <ModalBody className="labels-10">
        <Row m-0="true">
          <div class="d-flex">

            <div class="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">system</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{props.stocktradesystem.name}</label>
                </div>
              </div>
            </div>

            <div class="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">tot m3</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{format_2digits(props.stocktradesystem.totalvolume)}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">tot profit</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{format_price(props.stocktradesystem.sellprice)}</label>
                </div>
              </div>
            </div>

          </div>
        </Row>

        <div className="row m-0" style={{height:500}}>
          <div className="containercontent container-relative">
            <div className="root fullheight">
              <div className="containercontent container-relative">
                <div className="table-container container-fluid p-0">
          <table className="table small table-dark table-striped table-bordered table-hover fillparent">
            <tbody>
              <tr className="table-info">
                <th style={collocationto}>location to</th>
                <th style={coltype}>type</th>
                <th style={colamount} className='text-center'>#</th>
                <th style={colm3}><span className='float-right'>m3</span></th>
                <th style={colsellprice}><span className='float-right'>sell</span></th>
                <th></th>
                <th className="dummyscroll"></th>
              </tr>
    {list.map((trade, index) => (
              <tr className="table-info" key={index}>
                <td style={collocationto}>{trade.stationname}</td>
                <td style={coltype}>{trade.evetypename}</td>
                <td style={colamount} className='text-center'>{trade.sellamount} <b>min: ({trade.min_volume})</b></td>
                <td style={colm3}><span className='float-right'>{totalvolume(trade)}</span></td>
                <td style={colsellprice}><span className='float-right'>{format_price(trade.sellamount)}</span></td>
                <td><span className='float-right'></span></td>
              </tr>
    ))}
            </tbody>
          </table>
                </div>
              </div>
            </div>
          </div>
        </div>

      </ModalBody>
      <ModalFooter>
        <button type="button" className="btn btn-warning" onClick={() => props.onCancel()}>close</button>
      </ModalFooter>

    </Modal>  
  );
}

export default Sellstockorders;