import React, { useState, useEffect, useMemo } from 'react';
import Store from '../services/store.js';

import appstore from '../appstore.js';
import Rseveuser from '../services/eve/rest/table/rseveuser.js';
import Popupmessage from '../popups/popupmessage.js';
import User_updatepass from '../popups/user_updatepass.js';

export default function Login() {
  const [appState, appActions] = appstore();

  const [loggedin, setLoggedin] = useState(false);
  const [username, setUsername] = useState('');
  const [showuserupdatepass, setShowuserupdatepass] = useState(false);
  const [showpopup, setShowpopup] = useState(false);
  const [popuptitle, setPopuptitle] = useState('Authentication response');
  const [popupmessage, setPopupmessage] = useState('');

  useEffect(async () => {
/*    const loggedinresult = await Store.user.authenticate("", "");
    setLoggedin(loggedinresult);
    setUsername(Store.user.username);*/
  }, []);

  const hidePopup = () => {
    setShowpopup(false);
  };

  const authenticate = async (event) => {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const user = formdata.get('user');
    const password = formdata.get('password');
    const loggedinresult = await Store.user.authenticate(user, password);
    setLoggedin(loggedinresult);
    if(!loggedinresult) {
      setShowpopup(true);
      setPopupmessage('Wrong user/password combination.');
    } else {
      appActions.authorizeMenu(Store.user);
    }
  };

  const openUserupdatepass = async () => {
    setShowuserupdatepass(true);
  }

  const onUserupdatepass = async (newpass) => {
    const newauth = Store.user.createAuth(Store.user.username, newpass);
    const result = await Rseveuser.sec_updatepass(Store.user, newauth);
    setShowuserupdatepass(false);
    if(result.status=="OK") {
      Store.user.reset();
      setLoggedin(false);
      appActions.initMenu();
    } else {
      setShowpopup(true);
      setPopupmessage(result.status);
    }
  }

  const onUserupdatepassCancel = () => {
    setShowuserupdatepass(false);
  }

  const logout = async (event) => {
    event.preventDefault();
    Store.user.reset();
    alert("logout");
    setLoggedin(false);
    appActions.initMenu();
  }

  return (
      <div>
      { !loggedin ? (
    <form onSubmit={authenticate} className="form-inline row">
      <div className="form-group input-group input-group-sm input-group-autowidth p-0">
        <div className="input-group-prepend">
          <span className="input-group-text">user</span>
        </div>
        <input type="text" className="form-control mr-sm-2" id="user" placeholder="Enter user" name="user" required/>
      </div>

      <div className="form-group input-group input-group-sm input-group-autowidth p-0">
        <div className="input-group-prepend">
          <span className="input-group-text">password</span>
        </div>
        <input type="password" className="form-control mr-sm-2" id="password" placeholder="Enter password" name="password" required/>
      </div>

      <div className="form-group input-group input-group-sm input-group-autowidth p-0">
        <button type="submit" className="btn btn-sm btn-dark">Login</button>
      </div>
    </form>

        ) : (

    <form onSubmit={logout} className="form-inline row">
      <div className="form-group input-group input-group-sm input-group-autowidth p-0">
        <div className="input-group-prepend">
          <span className="input-group-text">user</span>
        </div>
        <input type="text" className="form-control mr-sm-2" defaultValue={username} disabled/>
      </div>
      <div className="form-group input-group input-group-sm input-group-autowidth p-0">
        <button type="button" className="btn btn-sm btn-dark" onClick={() => openUserupdatepass()}>Pass</button>
      </div>
      <div className="form-group input-group input-group-sm input-group-autowidth p-0">
        <button type="submit" className="btn btn-sm btn-dark">Logout</button>
      </div>
    </form>

        )
      }

      <Popupmessage show={showpopup} title={popuptitle} message={popupmessage} onHide={hidePopup} />
      <User_updatepass 
        show={showuserupdatepass}
        onCancel={onUserupdatepassCancel}
        onUpdatepass={onUserupdatepass}
        />

      </div>
  )
}
