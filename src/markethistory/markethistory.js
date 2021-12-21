import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'

import Store from '../services/store.js';

//components
//services
import Rsdownloadmarkethistory from '../services/eve/rest/custom/rsdownloadmarkethistory.js';
//data models

export default function Markethistory() {

  const [loggedin, setLoggedin] = useState(Store.user.loggedin);
  const [loading, setLoading] = useState(false);
  const [totalmarkethistorylines, setTotalmarkethistorylines] = useState(0);
  const [markethistorylines, setMarkethistorylines] = useState(0);
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
        const result = await Rsdownloadmarkethistory.startDownload(Store.user);
        setDownloaddone(result.done);
        setTimeractive(true);
    } catch (e) {
      console.log("askStart failed");
    }
  }

  const askUpdate = async () => {
    try {
        const result = await Rsdownloadmarkethistory.getUpdate();
        setTotalmarkethistorylines(result.history.totalmarkethistorylines);
        setMarkethistorylines(result.history.markethistorylines);
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
        const result = await Rsdownloadmarkethistory.stopDownload(Store.user);
        setTimeractive(true);
    } catch (e) {
      console.log("askStart failed");
    }
  }

  const history_percdone = () => {
    if(totalmarkethistorylines===0) {
      return 0;
    } else {
      return markethistorylines * 100 / totalmarkethistorylines
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
                Market history ({markethistorylines}/{totalmarkethistorylines})
                <ProgressBar variant="success" now={history_percdone()} />
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