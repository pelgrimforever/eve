import Rssiteuser from '../services/sitesecurity/rest/table/rssiteuser.js';
import base64 from 'react-native-base64';

import { Eveuserpk } from '../data/eve/table/super/eveusersuper.js';
import Rsfrontendpageauth from '../services/eve/rest/table/rsfrontendpageauth.js';

class User {

  loggedin = false;
	username = '';
  auth = '';
  pageauth = [];

  //subscribers
  notifyactions = {};

  //subscribe a component
  notifyme = (componentname, notifyaction) => {
    this.notifyactions[componentname] = notifyaction;
  }

  //notify all subscribers
  notifyall = () => {
    for(var componentname in this.notifyactions) {
      this.notifyactions[componentname]();
    };
  }

  authenticate = async (user, password) => {
	  try {
      var md5 = require('md5');
      const rawdata = user + ":" + md5(password);
      console.log(rawdata);
      const data = base64.encode(rawdata);
      const result = await Rssiteuser.authenticate(data);
      console.log("authenticate result " + result);
      if(result.PK.username === user) {
        this.username = user;
        this.auth = data;
        this.loggedin = true;
        this.notifyall();
      } else {
        this.reset();
      }
	  } catch (e) {
	    console.log("authenticate failed");
      this.reset();
	  }
    console.log("user " + this.username + " " + this.auth);
    //load page authentications
    const eveuserpk = new Eveuserpk();
    eveuserpk.username = this.username;
    this.pageauth = await Rsfrontendpageauth.loadFrontendpageauths4eveuser(this, eveuserpk);
    return this.loggedin;
	};

  ispageauthorized = (pagename) => {
    let pageautorized = false;
    this.pageauth.map(frontendpage => {
      if(pagename===frontendpage.PK.getFrontendpage()) {
        pageautorized = true;
      }
    });
    return pageautorized;
  }

  reset = () => {
    this.username = '';
    this.auth = '';    
    this.loggedin = false;
    this.notifyall();
  }

  createAuth = (user, password) => {
      var md5 = require('md5');
      const rawdata = user + ":" + md5(password);
      return base64.encode(rawdata);
  }

}

export default User;
