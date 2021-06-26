import React from 'react';
import { Securityislandpk } from '../data/eve/table/super/securityislandsuper.js';
import Rssystem from './eve/rest/table/rssystem.js';

class Codetables {

	systemlist = [];

  loadAll = async () => {
    await this.loadSystemlist();
  }
  
  loadSystemlist = async () => {
	  try {
	  	let securityislandpk = new Securityislandpk();
	  	securityislandpk.id = "1";
	    this.systemlist = await Rssystem.loadSystems4securityisland(securityislandpk);
	  } catch (e) {
	    console.log("loadSystems4securityisland failed");
	  }
	};

  findSystem = (systemid) => {
    return this.systemlist.find(element => element.PK.id == systemid);
  }	
}

export default Codetables;
