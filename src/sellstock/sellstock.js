import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Col, Row, Form } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Select from 'react-select';

import Store from '../services/store.js';

//components
import Stock_add from '../popups/stock_add.js';
import Stock_remove from '../popups/stock_remove.js';
import Sellstockorders from '../popups/sellstockorders.js';
//data models
import { Evetypepk } from '../data/eve/table/super/evetypesuper.js';
import Evetype from '../data/eve/table/evetype.js';
import Stocktradesystem from '../data/eve/view/viewstocktradesystem.js';
//component state
import appstore from '../appstore.js';
import storeSellstock from './store.js';

export default function Sellstock(props) {

  //variables with App scope
  const [appState] = appstore();
  //variables with component scope
  const [compState, compActions] = storeSellstock();

  const getsystemoptions = () => {
    let systemlist = [];
    Store.codetables.systemlist.map(s => {
      systemlist.push({ value: s.PK.id, label: s.name });
    });
    return systemlist;
  }

  const [loading, setLoading] = useState(false);
  const [showstockadd, setShowstockadd] = useState(false);
  const [showstockremove, setShowstockremove] = useState(false);
  const [showstocktradesystem, setShowstocktradesystem] = useState(false);
  const [evetype, setEvetype] = useState(new Evetype());
  const [systems, setSystems] = useState(getsystemoptions());
  const [stocktradesystem, setStocktradesystem] = useState(new Stocktradesystem());

  useEffect(async () => {
    compActions.loadSettings();
    compActions.loadTypes(compState.searchstring);
    compActions.loadStocklist();
    compActions.loadStocktradesystems();
  }, []);

  const searchtextChange = (searchtextevent) => {
    compActions.setSearchstring(searchtextevent.target.value); 
    compActions.loadTypes(searchtextevent.target.value);
  }

  const changeStocksystem = (selection) => { 
    const selectedsystemid = selection.value;
    compActions.setStocksystem(selectedsystemid);
  };

  const openStock_add = (item) => {
    setEvetype(item);
    setShowstockadd(true);
  }

  const openStock_additem = (item) => {
    let evetype = new Evetype();
    evetype.PK = new Evetypepk();
    evetype.PK.id = item.evetype;
    evetype.name = item.name;
    setEvetype(evetype);
    setShowstockadd(true);
  }

  const openStock_removeitem = (item) => {
    let evetype = new Evetype();
    evetype.PK = new Evetypepk();
    evetype.PK.id = item.evetype;
    evetype.name = item.name;
    setEvetype(evetype);
    setShowstockremove(true);
  }

  const onStock_add = async (volume) => {
    compActions.addStock(evetype, volume);
    setShowstockadd(false);
  }

  const onStock_remove = async (volume) => {
    compActions.removeStock(evetype, volume);
    setShowstockremove(false);
  }

  const onStock_addCancel = () => {
    setShowstockadd(false);
  }  

  const onStock_removeCancel = () => {
    setShowstockremove(false);
  }  

  const openStocktradesystem = (item) => {
    setStocktradesystem(item);
    setShowstocktradesystem(true);
  }

  const onSellstockordersCancel = () => {
    setShowstocktradesystem(false);
  }

  const format_2digits = (n) => {
    return n.toFixed(2);
  };

  const col_jumps = {width: '5rem'};
  const col_name = {width: '25rem'};
  const col_amount = {width: '5rem'};
  const col_price = {width: '10rem'};

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

{ loading && 
                  <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status" />
                  </div>
}
                  <table className="table table-dark table-bordered table-hover fillparent">
                    <thead>
                      <tr>
                        <th style={col_name}>name</th>
                        <th></th>
                        <th className="dummyscroll"></th>
                      </tr>
                    </thead>
                    <tbody className="overflow text-body">

    {compState.typelist.map((item, index) => (
                      <tr className="table-info" key={index}>
                        <td style={col_name}>{item.name}</td>
                        <td>
                          <button type="button" className="btn btn-sm small btn-primary" onClick={() => openStock_add(item)}>+</button>
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
                        <th style={col_name}>name</th>
                        <th style={col_amount}>amount</th>
                        <th></th>
                        <th className="dummyscroll"></th>
                      </tr>
                    </thead>
                    <tbody className="overflow text-body">

    {compState.stocklist.map((item, index) => (
                      <tr className="table-info" key={index}>
                        <td style={col_name}>{item.name}</td>
                        <td style={col_amount}><span className='float-right'>{item.amount}</span></td>
                        <td>
                          <button type="button" className="btn btn-sm small btn-primary mr-1" onClick={() => openStock_additem(item)}>+</button>
                          <button type="button" className="btn btn-sm small btn-primary" onClick={() => openStock_removeitem(item)}>-</button>
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

          <div className="col-5">
            <div className="root fullheight">

      <div className="containerheader">
        <div className="mx-auto bg-light p-1">
          <div className="d-flex">
            <div className="p-2 flex-fill bg-info">
              <div className="row m-0">
                <div className="col col-sm-12 d-flex">
                  <span className="mx-2">Stocked in system</span>
                  <div style={{width:'300px'}}>
                    <Select options={systems} value={systems.find(option => option.value === compState.stocksystemid)} onChange={changeStocksystem}/>
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

{ loading && 
                  <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status" />
                  </div>
}
                  <table className="table table-dark table-bordered table-hover fillparent">
                    <thead>
                      <tr>
                        <th style={col_jumps}>jumps</th>
                        <th style={col_name}>system</th>
                        <th style={col_price}>total sell price</th>
                        <th></th>
                        <th className="dummyscroll"></th>
                      </tr>
                    </thead>
                    <tbody className="overflow text-body">

    {compState.stocktradesystems.map((item, index) => (
                      <tr className="table-info" key={index}>
                        <td style={col_jumps}>{item.start_system_jumps}</td>
                        <td style={col_name}>{item.name}</td>
                        <td style={col_price}><span className='float-right'>{format_2digits(item.sellprice)}</span></td>
                        <td>
                          <button type="button" className="btn btn-sm small btn-primary mr-1" onClick={() => openStocktradesystem(item)}>open</button>
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

      <Stock_add 
        evetype={evetype}
        show={showstockadd} 
        onStockadd={onStock_add}
        onCancel={onStock_addCancel} 
        />

      <Stock_remove 
        evetype={evetype}
        show={showstockremove} 
        onStockremove={onStock_remove}
        onCancel={onStock_removeCancel} 
        />

      <Sellstockorders
        stocktradesystem={stocktradesystem}
        show={showstocktradesystem}
        onCancel={onSellstockordersCancel} 
        />
    </div>

    );
}
