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
import './systemtradeorders.scss';

//services
import Rstrade from '../services/eve/rest/table/rstrade.js';
import Rsviewsystemtradeorder from '../services/eve/rest/view/rsviewsystemtradeorder.js';
//data models
import Viewsystemtradeorder from '../data/eve/view/viewsystemtradeorder.js';
import Viewsystemtrade from '../data/eve/view/viewsystemtrade.js';
import { Systempk } from '../data/eve/table/super/systemsuper.js';
import { Systemtradepk } from '../data/eve/table/super/systemtradesuper.js';

function Systemtradeorders(props) {
  const collabels = "4";
  const coldata = "8";

  const [list, setList] = useState([]);
  const [orders, setOrders] = useState([]);
  const [activeorder, setActiveorder] = useState(new Viewsystemtradeorder());
  const [formtradevolume, setFormtradevalue] = useState(0);

  useEffect(() => {
    loadlist();
  }, [props.trade]);

  //construct order list data
  const loadlist = async () => {
    try {
      let systemtradepk = new Systemtradepk();
      systemtradepk.systemSellsystemPK = new Systempk();
      systemtradepk.systemSellsystemPK.id = props.trade.sell_system;
      systemtradepk.systemBuysystemPK = new Systempk();
      systemtradepk.systemBuysystemPK.id = props.trade.buy_system;
      const result = await Rsviewsystemtradeorder.getall4systemtrace(systemtradepk);
      setOrders(result);
      result.sort((a, b) => (a.evetypename<b.evetypename) ? 1 : -1);
      setList(result);
    } catch (e) {
      console.log("loadlist failed");
    }
  };  

  const format_price = (p) => {
    const rounded = Math.round(p);
    return "" + rounded;
  };

  const format_2digits = (n) => {
    return n.toFixed(2);
  };

  const updatetrade = async (event) => {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const volume = formdata.get('volume');
    props.onUpdatetrade(volume);
  }

  const onTradevolumechange = (event) => {
    setFormtradevalue(event.target.value);
  }

  const orderClick = (order) => {
    setActiveorder(order);
    setFormtradevalue(order.amount);
  }

  const collocationfrom = {width: '10rem' };
  const collocationto = {width: '10rem' };
  const coltype = {width: '15rem' };
  const colamount = {width: '3rem'};
  const colm3 = {width: '5rem'};
  const colsellprice = {width: '5rem'};
  const colbuyprice = {width: '5rem'};
  const colprofit = {width: '5rem'};

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
                  <label className="input-group-text">start region/system</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{props.trade.regionsellname} - {props.trade.systemsellname}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">end region/system</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{props.trade.regionbuyname} - {props.trade.systembuyname}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">jumps</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{props.trade.jumps}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">tot m3</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{format_2digits(props.trade.total_cargo_volume)}</label>
                </div>
              </div>
            </div>

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">tot profit</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{format_price(props.trade.profit)}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">tot sell price</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{format_price(props.trade.totalsell)}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">tot buy price</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{format_price(props.trade.totalbuy)}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text"># orders</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{props.trade.ordercount}</label>
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
                <th style={collocationfrom}>location from</th>
                <th style={collocationto}>location to</th>
                <th style={coltype}>type</th>
                <th style={colamount}><span className='float-right'>#</span></th>
                <th style={colm3}><span className='float-right'>m3</span></th>
                <th style={colsellprice}><span className='float-right'>sell</span></th>
                <th style={colbuyprice}><span className='float-right'>buy</span></th>
                <th style={colprofit}><span className='float-right'>tot profit</span></th>
                <th></th>
                <th className="dummyscroll"></th>
              </tr>
    {list.map((order, index) => (
              <tr className={order.sell_order===activeorder.sell_order && order.buy_order===activeorder.buy_order ? "table-active" : "table-info"} key={index}  onClick={() => orderClick(order)}>
                <td style={collocationfrom}>{order.sell_stationname}</td>
                <td style={collocationto}>{order.buy_stationname}</td>
                <td style={coltype}>{order.evetypename}</td>
                <td style={colamount}><span className='float-right'>{order.amount}</span></td>
                <td style={colm3}><span className='float-right'>{format_2digits(order.cargovolume)}</span></td>
                <td style={colsellprice}><span className='float-right'>{format_price(order.sell_price)}</span></td>
                <td style={colbuyprice}><span className='float-right'>{format_price(order.buy_price)}</span></td>
                <td style={colbuyprice}><span className='float-right'>{format_price(order.profit)}</span></td>
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

          <div className="d-flex">

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-2 input-group-prepend">
                  <label className="input-group-text">trade volume</label>
                </div>
                <div className="col col-sm-2 input-group-prepend">
                  <Form.Control type="number" id="volume" name="volume" value={formtradevolume} onChange={onTradevolumechange} />
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

export default Systemtradeorders;