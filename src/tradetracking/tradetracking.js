import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Col, Row, Form } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Select from 'react-select';

import Store from '../services/store.js';
import './tradetracking.scss';

//components
//services
import Rsloadroute from '../services/eve/rest/custom/rsloadroute.js';
import Rsviewtrade from '../services/eve/rest/view/rsviewtrade.js';
import Rsloadorderupdate from '../services/eve/rest/custom/rsloadorderupdate.js';
import Rsvieworder from '../services/eve/rest/view/rsvieworder.js';
import Rsevetype from '../services/eve/rest/table/rsevetype.js';
//data models
import { Systempk } from '../data/eve/table/super/systemsuper.js';
import Orders, { Orderspk } from '../data/eve/table/super/orderssuper.js';
import { Tradepk } from '../data/eve/table/super/tradesuper.js';

export default function Tradetracking(props) {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [sellvieworder, setSellvieworder] = useState(new Orders());
  const [buyvieworder, setBuyvieworder] = useState(new Orders());
  const [sellremain, setSellremain] = useState('?');
  const [buyremain, setBuyremain] = useState('?');

  useEffect(async () => {
    await loadlist();
  }, []);

  //construct trade list data
  const loadlist = async () => {
    try {
        if(Store.tradetrackingdata.sellorderid!=null) {
          let result = await Rsvieworder.getone(Store.tradetrackingdata.sellorderid);
          setSellvieworder(result);
        }
        if(Store.tradetrackingdata.buyorderid!==null) {
          let result = await Rsvieworder.getone(Store.tradetrackingdata.buyorderid);
          setBuyvieworder(result);
        }
        let result = await Rsloadroute.getroute(Store.tradetrackingdata.viewtrade.sell_systemid, Store.tradetrackingdata.viewtrade.buy_systemid);
        setList(result);
    } catch (e) {
      console.log("loadlist failed");
      setLoading(false);
    }
  };

  const loadupdate = async (event) => {
    if(sellvieworder!=null && buyvieworder!=null) {
      const result = await Rsloadorderupdate.getorderupdate(sellvieworder.id, buyvieworder.id);
      setSellremain(result.sellamount);
      setBuyremain(result.buyamount);
    }
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

  const col_system = {width: '15rem'};

  return (
    <div className="root fullheight">
        <div className="containerheader">
          <div className="mx-auto bg-light p-1">

          <div class="d-flex">

            <div class="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">type</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{sellvieworder.evetypename}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">sell total</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{sellvieworder.volume_total}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">sell remain</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{sellvieworder.volume_remain}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">sell min #</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{sellvieworder.min_volume}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">sell price/unit</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{format_price(sellvieworder.price)}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">sell range</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{sellvieworder.range}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">location</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{sellvieworder.regionname}</label>
                </div>
              </div>
              <div className="row m-0">
                <label className="input-group-text">{sellvieworder.systemname}</label>
              </div>
            </div>

            <div class="p-2 flex-fill bg-info">
              <div className="row m-0">
                <button type="button" className="btn btn-sm btn-primary m-1" onClick={loadupdate}>refresh</button>
              </div>
              <div className="row m-0">
                  <label className="input-group-text">°</label>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">updated</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{sellremain}</label>
                </div>
              </div>
              <div className="row m-0">
                  <label className="input-group-text">°</label>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">total</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{format_price(Store.tradetrackingdata.viewtrade.buy_total)}</label>
                </div>
              </div>
              <div className="row m-0">
                  <label className="input-group-text">°</label>
              </div>
              <div className="row m-0">
                  <label className="input-group-text">- {sellvieworder.stationname}</label>
              </div>
              <div className="row m-0">
                  <label className="input-group-text">- {sellvieworder.locationname}</label>
              </div>
            </div>

            <div class="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">volume (m3)</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{buyvieworder.packaged_volume}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">buy total</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{buyvieworder.volume_total}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">buy remain</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{buyvieworder.volume_remain}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">buy min #</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{buyvieworder.min_volume}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">buy price/unit</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{format_price(buyvieworder.price)}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">buy range</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{buyvieworder.range}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">location</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{buyvieworder.regionname}</label>
                </div>
              </div>
              <div className="row m-0">
                <label className="input-group-text">{buyvieworder.systemname}</label>
              </div>
            </div>

            <div class="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">total (m3)</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{totalvolume(Store.tradetrackingdata.viewtrade)}</label>
                </div>
              </div>
              <div className="row m-0">
                  <label className="input-group-text">°</label>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">updated</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{buyremain}</label>
                </div>
              </div>
              <div className="row m-0">
                  <label className="input-group-text">°</label>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">total</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{format_price(Store.tradetrackingdata.viewtrade.buy_total)}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">profit</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{format_price(Store.tradetrackingdata.viewtrade.trade_profit)}</label>
                </div>
              </div>
              <div className="row m-0">
                  <label className="input-group-text">- {buyvieworder.stationname}</label>
              </div>
              <div className="row m-0">
                  <label className="input-group-text">- {buyvieworder.locationname}</label>
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
                    <th style={col_system}>j</th>
                    <th></th>
                    <th className="dummyscroll"></th>
                  </tr>
                </thead>
                <tbody className="overflow text-body">

    {list.map((item, index) => (
                  <tr className={item.id===item.id ? "table-active" : "table-info"} key={index}>
                    <td style={col_system}>{item.name}</td>
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

    );
}
