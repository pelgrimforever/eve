import Rssiteuser from '../services/sitesecurity/rest/table/rssiteuser.js';
import base64 from 'react-native-base64';

class User {

  loggedin = false;
	username = '';
  auth = '';

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
    return this.loggedin;
	};

  reset = () => {
    this.username = '';
    this.auth = '';    
    this.loggedin = false;
    this.notifyall();
  }

}

export default User;
