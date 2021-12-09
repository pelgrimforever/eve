import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'

import Store from '../services/store.js';

//components
//services
import Rsdownloaduniverse from '../services/eve/rest/custom/rsdownloaduniverse.js';
//data models

export default function Universe() {

  const [loggedin, setLoggedin] = useState(Store.user.loggedin);
  const [loading, setLoading] = useState(false);
  const [totalgraphics, setTotalgraphics] = useState(0);
  const [graphics, setGraphics] = useState(0);
  const [totalraces, setTotalraces] = useState(0);
  const [races, setRaces] = useState(0);
  const [totalconstellations, setTotalconstellations] = useState(0);
  const [constellations, setConstellations] = useState(0);
  const [totalsystems, setTotalsystems] = useState(0);
  const [systems, setSystems] = useState(0);
  const [totalstations, setTotalstations] = useState(0);
  const [stations, setStations] = useState(0);
  const [totalstargates, setTotalstargates] = useState(0);
  const [stargates, setStargates] = useState(0);
  const [totalcorporations, setTotalcorporations] = useState(0);
  const [corporations, setCorporations] = useState(0);
  const [totalalliances, setTotalalliances] = useState(0);
  const [alliances, setAlliances] = useState(0);
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
        const result = await Rsdownloaduniverse.startDownload(Store.user);
        setDownloaddone(result.done);
        setTimeractive(true);
    } catch (e) {
      console.log("askStart failed");
    }
  }

  const askUpdate = async () => {
    try {
        const result = await Rsdownloaduniverse.getUpdate();
        setTotalgraphics(result.universe.totalgraphics);
        setGraphics(result.universe.graphics);
        setTotalraces(result.universe.totalraces);
        setRaces(result.universe.races);
        setConstellations(result.universe.constellations);
        setTotalconstellations(result.universe.totalconstellations);
        setTotalsystems(result.universe.totalsystems);
        setSystems(result.universe.systems);
        setTotalstations(result.universe.totalstations);
        setSystems(result.universe.systems);
        setTotalstations(result.universe.totalstations);
        setStations(result.universe.stations);
        setTotalstargates(result.universe.totalstargates);
        setStargates(result.universe.stargates);
        setTotalcorporations(result.universe.totalcorporations);
        setCorporations(result.universe.corporations);
        setTotalalliances(result.universe.totalalliances);
        setAlliances(result.universe.alliances);
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
        const result = await Rsdownloaduniverse.stopDownload(Store.user);
        setTimeractive(true);
    } catch (e) {
      console.log("askStart failed");
    }
  }

  const graphics_percdone = () => {
    if(totalgraphics===0) {
      return 0;
    } else {
      return graphics * 100 / totalgraphics;
    }
  }

  const races_percdone = () => {
    if(totalraces===0) {
      return 0;
    } else {
      return races * 100 / totalraces;
    }
  }

  const systems_percdone = () => {
    if(totalsystems===0) {
      return 0;
    } else {
      return systems * 100 / totalsystems;
    }
  }

  const constellations_percdone = () => {
    if(totalconstellations===0) {
      return 0;
    } else {
      return constellations * 100 / totalconstellations;
    }
  }

  const stations_percdone = () => {
    if(stations===0) {
      return 0;
    } else {
      return stations * 100 / totalstations;
    }
  }

  const stargates_percdone = () => {
    if(stargates===0) {
      return 0;
    } else {
      return stargates * 100 / totalstargates;
    }
  }

  const corporations_percdone = () => {
    if(corporations===0) {
      return 0;
    } else {
      return corporations * 100 / totalcorporations;
    }
  }

  const alliances_percdone = () => {
    if(alliances===0) {
      return 0;
    } else {
      return alliances * 100 / totalalliances;
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
                Graphics ({graphics}/{totalgraphics})
                <ProgressBar variant="success" now={graphics_percdone()} />
              </div>
              <div className="row m-0">
                Races ({races}/{totalraces})
                <ProgressBar variant="success" now={races_percdone()} />
              </div>
              <div className="row m-0">
                Constellations ({constellations}/{totalconstellations})
                <ProgressBar variant="success" now={constellations_percdone()} />
              </div>
              <div className="row m-0">
                Systems ({systems}/{totalsystems})
                <ProgressBar variant="success" now={systems_percdone()} />
              </div>
              <div className="row m-0">
                Stations ({stations}/{totalstations})
                <ProgressBar variant="success" now={stations_percdone()} />
              </div>
              <div className="row m-0">
                Stargates ({stargates}/{totalstargates})
                <ProgressBar variant="success" now={stargates_percdone()} />
              </div>
              <div className="row m-0">
                Corporations ({corporations}/{totalcorporations})
                <ProgressBar variant="success" now={corporations_percdone()} />
              </div>
              <div className="row m-0">
                Alliances ({alliances}/{totalalliances})
                <ProgressBar variant="success" now={alliances_percdone()} />
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