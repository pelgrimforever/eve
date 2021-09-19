import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'

import Store from '../services/store.js';

//components
//services
import Rsdownloadmarkettypes from '../services/eve/rest/custom/rsdownloadmarkettypes.js';
//data models

export default function Home() {

  const [loggedin, setLoggedin] = useState(Store.user.loggedin);
  const [loading, setLoading] = useState(false);
  const [totalmarketgroups, setTotalmarketgroups] = useState(0);
  const [marketgroups, setMarketgroups] = useState(0);
  const [totalcategories, setTotalcategories] = useState(0);
  const [categories, setCategories] = useState(0);
  const [totaltypegroups, setTotaltypegroups] = useState(0);
  const [typegroups, setTypegroups] = useState(0);
  const [totaltypes, setTotaltypes] = useState(0);
  const [types, setTypes] = useState(0);
  const [messages, setMessages] = useState([]);
  const [downloaddone, setDownloaddone] = useState(true);
  const [timeractive, setTimeractive] = useState(true);

  const userchanged = () => {
    setLoggedin(Store.user.loggedin);
  }

  useEffect(() => {
    if(timeractive) {
      const timer = setTimeout(() => {
        const dummy = askUpdate();
      }, 1000);
      return () => clearTimeout(timer);
    }
  });

  const askStart = async () => {
    try {
        const result = await Rsdownloadmarkettypes.startDownload(Store.user);
        setDownloaddone(result.done);
        setTimeractive(true);
    } catch (e) {
      console.log("askStart failed");
    }
  }

  const askUpdate = async () => {
    try {
        const result = await Rsdownloadmarkettypes.getUpdate();
        setTotalmarketgroups(result.market_groups.totalmarketgroups);
        setMarketgroups(result.market_groups.marketgroups);
        setTotalcategories(result.categories.totalcategories);
        setCategories(result.categories.categories);
        setTotaltypegroups(result.categories.totaltypegroups);
        setTypegroups(result.categories.typegroups);
        setTotaltypes(result.categories.totaltypes);
        setTypes(result.categories.types);
        setMessages(result.messages);
        setDownloaddone(result.done);
        if(result.done) {
          setTimeractive(false);
        }
    } catch (e) {
      console.log("askUpdate failed");
    }
  }

  const askStop = async () => {
    try {
        const result = await Rsdownloadmarkettypes.stopDownload(Store.user);
        setTimeractive(true);
    } catch (e) {
      console.log("askStart failed");
    }
  }

  const marketgroups_percdone = () => {
    if(totalmarketgroups===0) {
      return 0;
    } else {
      return marketgroups * 100 / totalmarketgroups
    }
  }

  const categories_percdone = () => {
    if(totalcategories===0) {
      return 0;
    } else {
      return categories * 100 / totalcategories
    }
  }

  const typegroups_percdone = () => {
    if(totaltypegroups===0) {
      return 0;
    } else {
      return typegroups * 100 / totaltypegroups
    }
  }

  const types_percdone = () => {
    if(totaltypes===0) {
      return 0;
    } else {
      return types * 100 / totaltypes
    }
  }

  Store.user.notifyme("home", userchanged);

  const colname = {width: '6rem' };
  const colgraph = {width: '20rem'};
  const coldone = {width: '3rem'};

  return (
    <div className="root fullheight">
        <div className="containerheader">
          <div className="mx-auto bg-light p-1">
              <div className="row m-0">
                  <div className="custom-control custom-checkbox cell-center">
                    Complete <input type="checkbox" checked={downloaddone} className="form-check-input" disabled/>
                  </div>
              </div>
              <div className="row m-0">
                Market groups ({marketgroups}/{totalmarketgroups})
                <ProgressBar variant="success" now={marketgroups_percdone()} />
              </div>
              <div className="row m-0">
                Categories ({categories}/{totalcategories})
                <ProgressBar variant="success" now={categories_percdone()} />
              </div>
              <div className="row m-0">
                Type groups ({typegroups}/{totaltypegroups})
                <ProgressBar variant="success" now={typegroups_percdone()} />
              </div>
              <div className="row m-0">
                Types ({types}/{totaltypes})
                <ProgressBar variant="success" now={types_percdone()} />
              </div>
          </div>
        </div>
        <div className="containerheader d-flex justify-content-center">
          <div className="mx-auto bg-light p-1">
{ loggedin && 
  <>
              <div className="row m-0">
                <div className="col col-sm-4 input-group-prepend">
                    <button type="button" className="btn btn-sm btn-primary m-1" data-toggle="modal" onClick={() => askStart()}>Start download</button>
                </div>
                <div className="col col-sm-4 input-group-prepend">
{ !downloaddone && 
                  <div className="d-flex justify-content-center h-100 container-relative">
                    <Spinner className="spinner-local" animation="border" role="status" />
                  </div>
}
                </div>
                <div className="col col-sm-4 input-group-prepend">
                    <button type="button" className="btn btn-sm btn-warning m-1" data-toggle="modal" onClick={() => askStop()}>Stop download</button>
                </div>
              </div>
  </>
}
        </div>
      </div>

      <div className="containercontent container-relative">
        <div className="root fullheight">
          <div className="containercontent container-relative">
            <div className="table-container container-fluid p-0">

              <table className="table table-dark table-striped table-bordered table-hover fillparent">
                <thead>
                  <tr>
                    <th>server message</th>
                    <th className="dummyscroll"></th>
                  </tr>
                </thead>
                <tbody className="overflow text-body">

    {messages.map((message, index) => (
                  <tr className="table-info" key={index}>
                    <td>{message}</td>
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