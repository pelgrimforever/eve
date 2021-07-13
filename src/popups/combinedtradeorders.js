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
import Rstrade from '../services/eve/rest/table/rstrade.js';
import Rsviewtrade from '../services/eve/rest/view/rsviewtrade.js';
//data models
import Viewtrade from '../data/eve/view/viewtrade.js';
import { Systempk } from '../data/eve/table/super/systemsuper.js';
import { Systemtradepk } from '../data/eve/table/super/systemtradesuper.js';

function Combinedtradeorders(props) {
  const collabels = "4";
  const coldata = "8";

  const [list, setList] = useState([]);
  const [viewtrade, setViewtrade] = useState([]);
  const [activetrade, setActivetrade] = useState(new Viewtrade());
  const [formtradevolume, setFormtradevalue] = useState(0);

  useEffect(() => {
    loadlist();
  }, [props.trade]);

  //construct order list data
  const loadlist = async () => {
    try {
      let startsystempk = new Systempk();
      startsystempk.id = props.trade.sell_systemid;
      let endsystempk = new Systempk();
      endsystempk.id = props.trade.buy_systemid;
      const result = await Rsviewtrade.getall_startendsystem(Store.user, startsystempk, endsystempk);
      setViewtrade(result);
      result.sort((a, b) => (a.evetypename<b.evetypename) ? 1 : -1);
      setList(result);
    } catch (e) {
      console.log("loadlist failed");
    }
  };  

  const totalvolume = (trade) => {
    return format_2digits(trade.total_volume * trade.packaged_volume);
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

  const tradeClick = (trade) => {
    setActivetrade(trade);
    setFormtradevalue(trade.amount);
  }

  const collocationfrom = {width: '10rem' };
  const collocationto = {width: '10rem' };
  const coltype = {width: '12rem' };
  const colamount = {width: '8rem'};
  const colm3 = {width: '5rem'};
  const colsellprice = {width: '4rem'};
  const colbuyprice = {width: '4rem'};
  const colprofit = {width: '4rem'};

  return (
    <Modal show={props.show} size="xl" id="tradelinemodal" centered>
        <Form onSubmit={updatetrade}>
      <ModalHeader className="bg-dark">
        <ModalTitle className="text-light">Trade opportunity</ModalTitle>
      </ModalHeader>
      <ModalBody className="labels-10">
        <Row m-0="true">
          <div class="d-flex">

            <div class="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">start region/system</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{props.trade.sellregion} - {props.trade.sellsystem}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">end region/system</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{props.trade.buyregion} - {props.trade.buysystem}</label>
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
                  <label className="input-group-text">{format_2digits(props.trade.total_volume)}</label>
                </div>
              </div>
            </div>

            <div class="p-2 flex-fill bg-info">
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
                  <label className="input-group-text">{format_price(props.trade.sell_order_value)}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">tot buy price</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{format_price(props.trade.buy_order_value)}</label>
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
                <th style={colamount} className='text-center'>#</th>
                <th style={colm3}><span className='float-right'>m3</span></th>
                <th style={colsellprice}><span className='float-right'>sell</span></th>
                <th style={colbuyprice}><span className='float-right'>buy</span></th>
                <th style={colprofit}><span className='float-right'>tot profit</span></th>
                <th></th>
                <th className="dummyscroll"></th>
              </tr>
    {list.map((trade, index) => (
              <tr className={trade.sell_id===activetrade.sell_id && trade.buy_id===activetrade.buy_id ? "table-active" : "table-info"} key={index}  onClick={() => tradeClick(trade)}>
                <td style={collocationfrom}>{trade.sell_stationname}</td>
                <td style={collocationto}>{trade.buy_stationname}</td>
                <td style={coltype}>{trade.evetype_name}</td>
                <td style={colamount} className='text-center'>({trade.sell_volume_remain} -->) <b>{trade.total_volume}</b> (-->{trade.buy_volume_remain})</td>
                <td style={colm3}><span className='float-right'>{totalvolume(trade)}</span></td>
                <td style={colsellprice}><span className='float-right'>{format_price(trade.sell_price)}</span></td>
                <td style={colbuyprice}><span className='float-right'>{format_price(trade.buy_price)}</span></td>
                <td style={colbuyprice}><span className='float-right'>{format_price(trade.trade_profit)}</span></td>
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

          <div class="d-flex">

            <div class="p-2 flex-fill bg-info">
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

export default Combinedtradeorders;