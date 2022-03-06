import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'

import Store from '../services/store.js';

//components
//services
import Rsdownloadcontracts from '../services/eve/rest/custom/rsdownloadcontracts.js';
//data models

export default function Downloadcontracts() {

  const [loggedin, setLoggedin] = useState(Store.user.loggedin);
  const [loading, setLoading] = useState(false);
  const [totalpages, setTotalpages] = useState(0);
  const [totaldone, setTotaldone] = useState(0);
  const [totalcontracts, setTotalcontracts] = useState(0);
  const [regions, setRegions] = useState([]);
  const [messages, setMessages] = useState([]);
  const [marketdone, setMarketdone] = useState(true);
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
        let result = await Rsdownloadcontracts.startDownload(Store.user);
        const sortedregions = result.regions.sort((a, b) => (a.totalpages>b.totalpages) ? -1 : 1);        
        setRegions(sortedregions);
        setMarketdone(result.done);
        setTimeractive(true);
    } catch (e) {
      console.log("askStart failed");
    }
  }

  const askUpdate = async () => {
    try {
        const result = await Rsdownloadcontracts.getUpdate();
        const sortedregions = result.regions.sort((a, b) => (a.totalpages>b.totalpages) ? -1 : 1);  
        let l_totalpages = 0;
        let l_totaldone = 0;
        let l_totalcontracts = 0;
        sortedregions.map(region => {
            l_totalpages += region.totalpages;
            l_totaldone += region.page;
            l_totalcontracts += region.contracts;
        });
        setRegions(sortedregions);
        setTotalpages(l_totalpages);
        setTotaldone(l_totaldone);
        setTotalcontracts(l_totalcontracts);
        setMessages(result.messages);
        setMarketdone(result.done);
        if(result.done) {
          setTimeractive(false);
        }
    } catch (e) {
      console.log("askUpdate failed");
    }
  }

  const askStop = async () => {
    try {
        const result = await Rsdownloadcontracts.stopDownload(Store.user);
        setTimeractive(true);
    } catch (e) {
      console.log("askStart failed");
    }
  }

  const calc_percdone = () => {
    if(totalpages===0) {
      return 100;
    } else {
      return totaldone * 100 / totalpages
    }
  }

  Store.user.notifyme("home", userchanged);

  const colname = {width: '6rem' };
  const colgraph = {width: '20rem'};
  const colpages = {width: '4rem'};
  const colcontracts = {width: '4rem'};
  const coldone = {width: '3rem'};

  return (
<div className="row h-100">
  <div className="col-4 regiontable">
    <div className="root fullheight">
      <div className="containercontent container-relative">
        <div className="table-container container-fluid p-0">

{ loading && 
          <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status" />
          </div>
}
          <table className="small table table-dark table-striped table-bordered table-hover fillparent">
            <thead className="table-info">
              <tr>
                <th style={colname}>region</th>
                <th style={colgraph}>pages downloaded</th>
                <th style={colpages}>pages</th>
                <th style={colcontracts}>#contracts</th>
                <th><span className='float-right'>{totalcontracts}</span></th>
                <th className="dummyscroll"></th>
              </tr>
            </thead>
            <tbody className="overflow text-body">

{regions.map(region => (
              <tr className="table-info" key={region.region}>
                <td style={colname}>{region.name}</td>
                <td style={colgraph}>
                  <ProgressBar variant="success" now={region.page*100/region.totalpages} />
                </td>
                <td style={colpages}><span className='float-right'>{region.page} / {region.totalpages}</span></td>
                <td style={colcontracts}><span className='float-right'>{region.contracts}</span></td>
                <td style={coldone}>
                  <div className="custom-control custom-checkbox cell-center">
                    <input type="checkbox" checked={region.done} className="form-check-input" disabled/>
                  </div>
                </td>
                <td></td>
              </tr>  
))}

            </tbody>
          </table>
        </div>
      </div>      
    </div>
  </div>

  <div className="col-8">
    <div className="root fullheight">
        <div className="containerheader">
          <div className="mx-auto bg-light p-1">
              <div className="row m-0">
                  <div className="custom-control custom-checkbox cell-center">
                    Complete <input type="checkbox" checked={marketdone} className="form-check-input" disabled/>
                  </div>
              </div>
              <div className="row m-0">
                <ProgressBar variant="success" now={calc_percdone()} />
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
{ !marketdone && 
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
  </div>
</div>

  );
}