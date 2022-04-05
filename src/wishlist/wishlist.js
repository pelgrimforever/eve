import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Col, Row, Form } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Select from 'react-select';

import Store from '../services/store.js';

//components
import Copytoclipboard from '../components/copytoclipboard/copytoclipboard.js';
import Wishlist_add from '../popups/wishlist_add.js';
import Wishlist_change from '../popups/wishlist_change.js';
//data models
import { Evetypepk } from '../data/eve/table/super/evetypesuper.js';
import Evetype from '../data/eve/table/evetype.js';
import Viewwishlist from '../data/eve/view/viewwishlist.js';
//component state
import appstore from '../appstore.js';
import storeWishlist from './store.js';

export default function Wishlist(props) {

  //variables with App scope
  const [appState] = appstore();
  //variables with component scope
  const [compState, compActions] = storeWishlist();

  const [loading, setLoading] = useState(false);
  const [wishlistadd, setWishlistadd] = useState(false);
  const [showwishlistchange, setShowwishlistchange] = useState(false);
  const [evetype, setEvetype] = useState(new Evetype());
  const [viewwishlist, setViewwishlist] = useState(new Viewwishlist());

  useEffect(async () => {
    compActions.loadTypes(compState.searchstring);
    compActions.loadWishlist();
    compActions.loadSellorderlist();
  }, []);

  const searchtextChange = (searchtextevent) => {
    compActions.setSearchstring(searchtextevent.target.value); 
    compActions.loadTypes(searchtextevent.target.value);
  }

  const openWishlist_add = (item) => {
    setEvetype(item);
    setWishlistadd(true);
  }

  const openitem = (item) => {
    setViewwishlist(item);
    setShowwishlistchange(true);
  }

  const removeitem = (item) => {
    compActions.removeWishlist(item);
  }

  const onWishlistadd = async (maxprice) => {
    compActions.addWishlistitem(evetype, maxprice);
    setWishlistadd(false);
  }


  const onWishlistupdate = async () => {
    compActions.updateWishlist(viewwishlist);
    setShowwishlistchange(false);
  }

  const onWishlistupdateCancel = () => {
    setShowwishlistchange(false);
  }  

  const onWishlistaddCancel = () => {
    setWishlistadd(false);
  }  

  const format_2digits = (n) => {
    return n.toFixed(2);
  };

  const sec_highsec = 0.45;

  const col_jumps = {width: '4rem'};
  const col_name = {width: '20rem'};
  const col_region = {width: '10rem'};
  const col_price = {width: '10rem'};

  const colorder_typename = {width: '6rem' };
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
                          <button type="button" className="btn btn-sm small btn-primary" onClick={() => openWishlist_add(item)}>+</button>
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
                        <th style={col_price}>max price</th>
                        <th></th>
                        <th className="dummyscroll"></th>
                      </tr>
                    </thead>
                    <tbody className="overflow text-body">

    {compState.wishlist.map((item, index) => (
                      <tr className="table-info" key={index}>
                        <td style={col_name}>{item.name}</td>
                        <td style={col_price}><span className='float-right'>{item.maxprice}</span></td>
                        <td>
                          <button type="button" className="btn btn-sm small btn-primary mr-1" onClick={() => openitem(item)}>ISK</button>
                          <button type="button" className="btn btn-sm small btn-primary" onClick={() => removeitem(item)}>-</button>
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

      <div className="containercontent container-relative">
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
                        <th style={colorder_typename}>region</th>
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

    {compState.sellorders.map((item, index) => (
                      <tr className={item.ship_kills>0 ? "table-danger" : "table-info"} key={index}>
                        <td style={colorder_typename}>
                          <Copytoclipboard copytext={item.evetypename}/>
                          {item.evetypename}
                        </td>
                        <td style={colorder_regionname}>{item.regionname}</td>
                        <td style={colorder_systemname}>
                          <Copytoclipboard copytext={item.systemname}/>
                          {item.systemname}
                        </td>
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

        </div>
      </div>

      <Wishlist_add 
        evetype={evetype}
        show={wishlistadd} 
        onWishlistadd={onWishlistadd}
        onCancel={onWishlistaddCancel} 
        />

      <Wishlist_change 
        viewwishlist={viewwishlist}
        show={showwishlistchange} 
        onWishlistupdate={onWishlistupdate}
        onCancel={onWishlistupdateCancel} 
        />

    </div>

    );
}
