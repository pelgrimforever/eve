import React, { useState, useEffect, useMemo } from 'react';
import Store from '../services/store.js';
import Popupmessage from '../popups/popupmessage.js';

export default function Login() {
  const [loggedin, setLoggedin] = useState(false);
  const [username, setUsername] = useState('');
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
    }
  };

  const logout = async (event) => {
    event.preventDefault();
    Store.user.reset();
    alert("logout");
    setLoggedin(false);
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
        <button type="submit" className="btn btn-sm btn-dark">Logout</button>
      </div>
    </form>

        )
      }

      <Popupmessage show={showpopup} title={popuptitle} message={popupmessage} onHide={hidePopup} />
      </div>
  )
}
