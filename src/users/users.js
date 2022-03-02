import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Col, Row, Form } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Select from 'react-select';

import Store from '../services/store.js';

//models
//components
import Popupmessage from '../popups/popupmessage.js';
import User_add from '../popups/user_add.js';
import Frontendpage_add from '../popups/frontendpage_add.js';
//data models
//component state
import appstore from '../appstore.js';
import storeUsers from './store.js';

export default function Users(props) {

  //variables with App scope
  const [appState] = appstore();
  //variables with component scope
  const [compState, compActions] = storeUsers();
  const [showuseradd, setShowuseradd] = useState(false);
  const [showfrontendpageadd, setShowfrontendpageadd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showpopup, setShowpopup] = useState(false);
  const [popuptitle, setPopuptitle] = useState('Reset');
  const [popupmessage, setPopupmessage] = useState('');

  useEffect(async () => {
    compActions.loadUsers();
    compActions.loadFrontendpages();
  }, []);

  const onUserclick = (eveuser) => {
    compActions.setUser(eveuser);
  }

  const openUseradd = () => {
    setShowuseradd(true);
  }

  const resetUser = async (eveuser) => {
    const resetstatus = await compActions.resetUser(eveuser);
    if(resetstatus=="OK") {
      setPopupmessage('Reset is done');
    } else {
      setPopupmessage('Reset failed');
    }
    setShowpopup(true);
  }

  const removeUser = async (eveuser) => {
    const resetstatus = await compActions.removeUser(eveuser);
    if(resetstatus=="OK") {
      setPopupmessage('User is removed');
    } else {
      setPopupmessage('Remove failed');
    }
    setShowpopup(true);
  }

  const hidePopup = () => {
    setShowpopup(false);
  };

  const onUseradd = async (username) => {
    const result = await compActions.addUser(username);
    setShowuseradd(false);
  }

  const onUseraddcancel = () => {
    setShowuseradd(false);
  }

  const openFrontendpageadd = () => {
    setShowfrontendpageadd(true);
  }

  const onFrontendpageadd = async (pagename) => {
    const result = await compActions.addFrontendpage(pagename);
    setShowfrontendpageadd(false);
  }

  const onFrontendpageaddCancel = async (pagename) => {
    setShowfrontendpageadd(false);
  }

  const removeFrontendpage = async (frontendpage) => {
    const result = await compActions.removeFrontendpage(frontendpage);
  }

  const authorizepage = async (frontendpage) => {
    const result = await compActions.addFrontendpagesauth(frontendpage);
  }

  const removeFrontendpageauth = async (frontendpageauth) => {
    const result = await compActions.removeFrontendpagesauth(frontendpageauth);
  }

  const format_price = (p) => {
    const rounded = Math.round(p);
    return "" + rounded;
  };

  const format_2digits = (n) => {
    return n.toFixed(2);
  };


  const col_auth = {width: '6rem'};
  const col_name = {width: '6rem'};
  const col_date = {width: '5rem'};
  
  const col_pagename = {width: '9rem'};
  
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
                          <button type="button" className="btn btn-sm small btn-primary" onClick={() => openUseradd()}>add user</button>
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
                      <table className="table small table-dark table-bordered table-hover fillparent">
                        <thead>
                          <tr>
                            <th style={col_name}>name</th>
                            <th style={col_date}>created at</th>
                            <th></th>
                            <th className="dummyscroll"></th>
                          </tr>
                        </thead>
                        <tbody className="overflow text-body">

{compState.eveusers.map((item, index) => (
                          <tr className={item.PK.username===compState.eveuser.PK.username ? "table-active" : "table-info"} key={index}  onClick={() => { onUserclick(item); } }>
                            <td style={col_name}>{item.PK.username}</td>
                            <td style={col_date}>{item.createdatUI}</td>
                            <td>
                              <button type="button" className="btn btn-sm small btn-primary mx-1" onClick={() => resetUser(item)}>reset</button>
                              <button type="button" className="btn btn-sm small btn-primary mx-1" onClick={() => removeUser(item)}>-</button>
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
          <div className="col-3 root fullheight">

            <div className="root fullheight">
              <div className="containerheader">
                <div className="mx-auto bg-light p-1">

                  <div className="d-flex">

                    <div className="p-2 flex-fill bg-info">
                      <div className="row m-0">
                        <div className="col col-sm-12 d-flex">
                          Authorized frontend pages for {compState.eveuser.PK.username} 
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
                      <table className="table small table-dark table-bordered table-hover fillparent">
                        <thead>
                          <tr>
                            <th style={col_pagename}>name</th>
                            <th></th>
                            <th className="dummyscroll"></th>
                          </tr>
                        </thead>
                        <tbody className="overflow text-body">

{compState.frontendpageauth.map((item, index) => (
                          <tr className="table-info" key={index}>
                            <td style={col_pagename}>{item.PK.frontendpagePK.name}</td>
                            <td>
                              <button type="button" className="btn btn-sm small btn-primary mx-1" onClick={() => removeFrontendpageauth(item)}>-</button>
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

          <div className="col-3 root fullheight">
          </div>

          <div className="col-3 root fullheight">

            <div className="root fullheight">
              <div className="containerheader">
                <div className="mx-auto bg-light p-1">
                  <div className="d-flex">
                    <div className="p-2 flex-fill bg-info">
                      <div className="row m-0">
                        <div className="col col-sm-12 d-flex">
                          <button type="button" className="btn btn-sm small btn-primary" onClick={() => openFrontendpageadd()}>add page</button>
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
                      <table className="table small table-dark table-bordered table-hover fillparent">
                        <thead>
                          <tr>
                            <th style={col_auth}>auth</th>
                            <th style={col_pagename}>name</th>
                            <th></th>
                            <th className="dummyscroll"></th>
                          </tr>
                        </thead>
                        <tbody className="overflow text-body">

{compState.frontendpages.map((item, index) => (
                          <tr className="table-info" key={index}>
                            <td style={col_auth}>
                              <button type="button" className="btn btn-sm small btn-primary mx-1" onClick={() => authorizepage(item)}>add</button>
                            </td>
                            <td style={col_pagename}>{item.PK.name}</td>
                            <td>
                              <button type="button" className="btn btn-sm small btn-primary mx-1" onClick={() => removeFrontendpage(item)}>-</button>
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

      <Popupmessage show={showpopup} title={popuptitle} message={popupmessage} onHide={hidePopup} />
      <User_add 
        show={showuseradd} 
        onUseradd={onUseradd}
        onCancel={onUseraddcancel} 
        />
      <Frontendpage_add 
        show={showfrontendpageadd} 
        onFrontendpageadd={onFrontendpageadd}
        onCancel={onFrontendpageaddCancel} 
        />

    </div>

    );
}
