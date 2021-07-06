import React from 'react';
import { Securityislandpk } from '../data/eve/table/super/securityislandsuper.js';
import Rssystem from './eve/rest/table/rssystem.js';
import Rsevetype from './eve/rest/table/rsevetype.js';

class Codetables {

	systemlist = [];
	typelist = [];

  loadAll = async () => {
    await this.loadSystemlist();
    await this.loadTypelist();
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

  loadTypelist = async () => {
	  try {
	    this.typelist = await Rsevetype.getall();
	  } catch (e) {
	    console.log("loadEvetype failed");
	  }
	};

  findSystem = (systemid) => {
    return this.systemlist.find(element => element.PK.id == systemid);
  }	
}

export default Codetables;
