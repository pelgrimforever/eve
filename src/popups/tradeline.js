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

import Viewtrade from '../data/eve/view/viewtrade.js';

function Tradeline(props) {
  const collabels = "4";
  const coldata = "8";

  useEffect(() => {
  }, [props.viewtrade]);

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

  const updatetrade = async (event) => {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const volume = formdata.get('volume');
    props.onUpdatetrade(volume);
  }

  return (
    <Modal show={props.show} size="xl" id="tradelinemodal" centered>
        <Form onSubmit={updatetrade}>
      <ModalHeader className="bg-dark">
        <ModalTitle className="text-light">Trade opportunity</ModalTitle>
      </ModalHeader>
      <ModalBody className="labels-10">
        <Row m-0="true">
          <div className="d-flex">

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">start system</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{props.startsystemname}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">jumps</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{props.trade.start_system_jumps}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">tot profit</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{format_price(props.trade.trade_profit)}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">profit / jump</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{format_price(props.trade.trade_profit_per_jump)}</label>
                </div>
              </div>
            </div>

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">type</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{props.trade.evetype_name}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">unit m3</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{props.trade.packaged_volume}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">#wanted</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{props.trade.total_volume}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">tot m3</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{totalvolume(props.trade)}</label>
                </div>
              </div>
            </div>

          </div>
        </Row>

        <Row m-0="true">
          <table className="table table-dark table-striped table-bordered table-hover">
            <tbody>
              <tr className="table-info"><th></th><th><label className="input-group-text">sell</label></th><th><label className="input-group-text">buy</label></th><th><label className="input-group-text">trade</label></th></tr>
              <tr className="table-info">
                <th><label className="input-group-text">region</label></th>
                <td>{props.trade.sell_regionname}</td>
                <td></td>
                <td><span className='float-right'>jumps: {props.trade.start_system_jumps}</span></td>
              </tr>
              <tr className="table-info">
                <th><label className="input-group-text">system</label></th>
                <td>{props.trade.sell_systemname}</td>
                <td>{props.trade.buy_systemname}</td>
                <td><span className='float-right'>runs: {props.trade.trade_runs}</span></td>
              </tr>
              <tr className="table-info">
                <th><label className="input-group-text">station</label></th>
                <td>{props.trade.sell_stationname}</td>
                <td>{props.trade.buy_stationname}</td>
                <td><span className='float-right'>tot. jumps: {props.trade.trade_total_jumps}</span></td>
              </tr>
              <tr className="table-info">
                <th><label className="input-group-text">amount</label></th>
                <td>{props.trade.sell_volume_remain}</td>
                <td>{props.trade.buy_volume_remain}</td>
                <td>{props.trade.total_volume}</td>
              </tr>
              <tr className="table-info">
                <th><label className="input-group-text">value</label></th>
                <td>{format_price(props.trade.sell_volume_remain * props.trade.sell_price)}</td>
                <td>{format_price(props.trade.buy_volume_remain * props.trade.buy_price)}</td>
                <td>{format_price(props.trade.sell_total)}</td>
              </tr>
            </tbody>
          </table>
        </Row>

          <div className="d-flex">

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-2 input-group-prepend">
                  <label className="input-group-text">trade volume</label>
                </div>
                <div className="col col-sm-2 input-group-prepend">
                  <Form.Control type="number" id="volume" name="volume" defaultValue={props.trade.total_volume} />
                </div>
                <div className="col col-sm-2">
                  <button type="submit" className="btn btn-primary">trade</button>
                </div>
              </div>
            </div>

          </div>

      </ModalBody>
      <ModalFooter>
        <button type="button" className="btn btn-warning" onClick={() => props.onCancel()}>close</button>
      </ModalFooter>
        </Form>

    </Modal>  
  );
}

export default Tradeline;