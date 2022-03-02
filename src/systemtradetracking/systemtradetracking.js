import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Col, Row, Form } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Select from 'react-select';

import Store from '../services/store.js';
import './systemtradetracking.scss';

//components
import Routefinderparameters from '../components/routefinder/routefinderparameters.js';
import Routefinderlist from '../components/routefinder/routefinderlist.js';
//services
import Rsviewtradecombinedsell from '../services/eve/rest/view/rsviewtradecombinedsell.js';
import Rsloadorderupdate from '../services/eve/rest/custom/rsloadorderupdate.js';
import Rsvieworder from '../services/eve/rest/view/rsvieworder.js';
//data models
import { Systempk } from '../data/eve/table/super/systemsuper.js';
import Orders, { Orderspk } from '../data/eve/table/super/orderssuper.js';
import { Evetypepk } from '../data/eve/table/super/evetypesuper.js';
//component state
import appstore from '../appstore.js';
import storeSystemtradetracking from './store.js';

export default function Systemtradetracking(props) {

  //variables with App scope
  const [appState] = appstore();
  //variables with component scope
  const [compState, compActions] = storeSystemtradetracking();

  const [loading, setLoading] = useState(false);
  const [sellvieworder, setSellvieworder] = useState(new Orders());
  const [buyvieworder, setBuyvieworder] = useState(new Orders());
  const [sellremain, setSellremain] = useState('?');
  const [buyremain, setBuyremain] = useState('?');

  const [tradelist, setTradelist] = useState([]);
  const [selltotalremain, setSelltotalremain] = useState(0);
  const [buytotalremain, setBuytotalremain] = useState(0);
  const [selltotalupdate, setSelltotalupdate] = useState(0);
  const [buytotalupdate, setBuytotalupdate] = useState(0);
  const [routereloadflag, setRoutereloadflag] = useState(0);

  useEffect(async () => {
    await loadlist();
  }, []);

  //construct trade list data
  const loadlist = async () => {
    try {
        if(appState.viewtradesystem.sell_regionid!=null) {
          loadupdate();
        }
    } catch (e) {
      console.log("loadlist failed");
      setLoading(false);
    }
  };

  const loadupdate = async (event) => {
    if(appState.viewtradesystem.sell_regionid!=null) {
      let buy_systempk = new Systempk();
      buy_systempk.id = appState.viewtradesystem.buy_systemid;
      let sell_systempk = new Systempk();
      sell_systempk.id = appState.viewtradesystem.sell_systemid;
      const systemtradelist = await Rsviewtradecombinedsell.get4Tradesystems(Store.user, sell_systempk, buy_systempk);
      setTradelist(systemtradelist);
    }
  }

  const triggerrouteupdate = () => {
    setRoutereloadflag(routereloadflag+1);
  }

  const format_price = (p) => {
    const rounded = Math.round(p);
    return "" + rounded;
  };

  const format_int = (n) => {
    const rounded = Math.round(n);
    return "" + rounded;
  };

  const format_2digits = (n) => {
    return n.toFixed(2);
  };

  const ottotalvolume = (trade) => {
    return format_2digits(trade.orderamount * trade.packaged_volume);
  };

  const totalvolume = (trade) => {
    return format_2digits(trade.totalamount * trade.packaged_volume);
  };

  const ordertableheight = {height: '100rem'};

  //ot -> order table
  const otcolsell_stationname = {width: '12rem'};
  const otcolsell_evetype = {width: '8rem'};
  const otcolsell_volume_total = {width: '3rem'};
  const otcolsell_volume_remain = {width: '3rem'};
  const otcolsell_volume_min = {width: '3rem'};
  const otcolsell_volume_update = {width: '3rem'};
  const otcolsell_price = {width: '3rem'};
  const otcolbuy_volume_total = {width: '3rem'};
  const otcolbuy_volume_remain = {width: '3rem'};
  const otcolbuy_volume_min = {width: '3rem'};
  const otcolbuy_volume_update = {width: '3rem'};
  const otcolbuy_price = {width: '3rem'};
  const otcolbuy_stationname = {width: '15rem'};
  const otcoltotal_volume = {width: '5rem'};
  const otcoltotal_m3 = {width: '6rem'};
  const otcolsell_total = {width: '5rem'};
  const otcolbuy_total = {width: '5rem'};
  const otcoltrade_profit = {width: '5rem'};

  const colorder_regionname = {width: '6rem' };
  const colorder_systemname = {width: '6rem'};
  const colorder_volume_remain = {width: '3rem'};
  const colorder_volume_min = {width: '3rem'};
  const colorder_price = {width: '5rem'};

  return (
    <div className="root fullheight">

      <div className="containerheader h-25 container-relative">
        <div className="mx-auto bg-light h-100 p-1">
          <div className="d-flex h-100">
            <div className="p-2 flex-fill bg-info table-container container-fluid">
              <table className="table small table-dark table-bordered table-hover fillparent">
                <thead>
                  <tr>
                    <th style={otcolsell_stationname}>sell station</th>
                    <th style={otcolsell_evetype}>type</th>
                    <th style={otcolsell_volume_total}># s.tot</th>
                    <th style={otcolsell_volume_remain}># s.rem</th>
                    <th style={otcolsell_volume_min}># s.min</th>
                    <th style={otcolsell_volume_update}># s.upd</th>
                    <th style={otcolsell_price}>sell o price</th>
                    <th style={otcolbuy_volume_total}># b.tot</th>
                    <th style={otcolbuy_volume_remain}># b.rem</th>
                    <th style={otcolbuy_volume_min}># b.min</th>
                    <th style={otcolbuy_volume_update}># b.upd</th>
                    <th style={otcolbuy_price}>buy o price</th>
                    <th style={otcolbuy_stationname}>station</th>
                    <th style={otcoltotal_volume}>volume asked</th>
                    <th style={otcoltotal_m3}>m3 asked</th>
                    <th style={otcolsell_total}>tot. sell price</th>
                    <th style={otcolbuy_total}>tot. buy price</th>
                    <th style={otcoltrade_profit}>est. profit</th>
                  </tr>
                </thead>
                <tbody className="overflow text-body">

    {tradelist.map((trade, index) => (
                  <tr className="table-info" key={index}>
                    <td style={otcolsell_stationname}>{trade.sell_stationname}</td>
                    <td style={otcolsell_evetype}>{trade.evetype_name}</td>
                    <td style={otcolsell_volume_total}><span className='float-right'>{trade.sell_volume_total}</span></td>
                    <td style={otcolsell_volume_remain}><span className='float-right'>{trade.sell_volume_remain}</span></td>
                    <td className={trade.sell_volume_min>1 ? "bg-danger" : ""}
                      style={otcolsell_volume_min}><span className='float-right'>{trade.sell_min_volume}</span></td>
                    <td className={trade.sell_volume_remain>trade.sell_updated ? "bg-warning" : ""}
                      style={otcolsell_volume_update}><span className='float-right'>{trade.sell_updated}</span></td>
                    <td style={otcolsell_price}><span className='float-right'>{trade.sell_price}</span></td>
                    <td style={otcolbuy_volume_total}><span className='float-right'>{trade.buy_volume_total}</span></td>
                    <td style={otcolbuy_volume_remain}><span className='float-right'>{trade.buy_volume_remain}</span></td>
                    <td className={trade.buy_volume_min>1 ? "bg-danger" : ""}
                      style={otcolbuy_volume_min}><span className='float-right'>{trade.buy_min_volume}</span></td>
                    <td className={trade.buy_volume_remain>trade.buy_updated ? "bg-warning" : ""}
                      style={otcolbuy_volume_update}><span className='float-right'>{trade.buy_updated}</span></td>
                    <td style={otcolbuy_price}><span className='float-right'>{trade.buy_price}</span></td>
                    <td style={otcolbuy_stationname}>{trade.buy_stationname}</td>
                    <td style={otcoltotal_volume}><span className='float-right'>{trade.orderamount}</span></td>
                    <td style={otcoltotal_m3}><span className='float-right'>{ottotalvolume(trade)}</span></td>
                    <td style={otcolsell_total}><span className='float-right'>{format_price(trade.sell_price)}</span></td>
                    <td style={otcolbuy_total}><span className='float-right'>{format_price(trade.buy_price)}</span></td>
                    <td style={otcoltrade_profit}><span className='float-right'>{format_price(trade.profit)}</span></td>
                  </tr>  
    ))}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="containerheader">
        <div className="mx-auto bg-light p-1">

          <div className="d-flex">

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">location</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{appState.viewtradesystem.sell_regionname}</label>
                </div>
              </div>
              <div className="row m-0">
                <label className="input-group-text">{appState.viewtradesystem.sell_systemname}</label>
              </div>
            </div>

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <button type="button" className="btn btn-sm btn-primary m-1" onClick={loadupdate}>refresh</button>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">total</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{format_price(appState.viewtradesystem.sell_total)}</label>
                </div>
              </div>
            </div>

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <label className="input-group-text">{appState.viewtradesystem.buy_systemname}</label>
              </div>
            </div>

            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">total (m3)</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{format_int(appState.viewtradesystem.totalvolume)}</label>
                </div>
              </div>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                  <label className="input-group-text">profit</label>
                </div>
                <div className="col col-sm-8 input-group-prepend">
                  <label className="input-group-text">{format_price(appState.viewtradesystem.totalprofit)}</label>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <Routefinderparameters 
        viasystems={compState.viasystems} avoidsystems={compState.avoidsystems} secure={compState.secure}
        setViasystems={compActions.setViasystems} setAvoidsystems={compActions.setAvoidsystems} setSecure={compActions.setSecure}
        reloadroute={triggerrouteupdate} />

      <div className="containercontent container-relative">
        <div className="row h-100">
          <div className="col-6">
            <Routefinderlist 
              startsystemid={appState.viewtradesystem.sell_systemid} 
              endsystemid={appState.viewtradesystem.buy_systemid} 
              viasystems={compState.viasystems}
              avoidsystems={compState.avoidsystems}
              secure={compState.secure}
              reloadflag={routereloadflag}
              />
          </div>


        </div>
      </div>
    </div>

    );
}
