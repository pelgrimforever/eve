//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Systemjumpspk } from '../../../../../data/eve/table/super/systemjumpssuper.js';
import Systemjumps from '../../../../../data/eve/table/systemjumps.js';
import SystemjumpsJson from '../conversion/systemjumpsjson.js';
import { Systempk } from '../../../../../data/eve/table/super/systemsuper.js';
import SystemJson from '../conversion/systemjson.js';


class Rssystemjumpssuper extends Eveservice {	

  static restserviceselect = 'rssystemjumps_select';
  static restserviceinsert = 'rssystemjumps_insert';
  static restserviceupdate = 'rssystemjumps_update';
  static restservicedelete = 'rssystemjumps_delete';

  //SELECT OPERATIONS
  static SELECT_SYSTEMJUMPS = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Systemsystemend = 100 + 0;
  static SELECT_Systemsystemstart = 100 + 1;

  //UPDATE OPERATIONS
  static UPDATE_SYSTEMJUMPS = 10;

  //INSERT OPERATIONS
  static INSERT_SYSTEMJUMPS = 20;

  //DELETE OPERATIONS
  static DELETE_Systemsystemend = 100 + 2;
  static DELETE_Systemsystemstart = 100 + 3;
  static DELETE_SYSTEMJUMPS = 30;

  static extractDataArray = (jsonarray): Systemjumps[] => {
    let systemjumpss: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      systemjumpss.push(SystemjumpsJson.fromJSON(jsonarray[i]));
    }
    return systemjumpss;
  }

  static extractDataObject = (jsonobject): Systemjumps => {
    return SystemjumpsJson.fromJSON(jsonobject);
  }

  static getcount = async (user) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: super.SELECT_COUNT
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static getall = async (user) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static getOne = async (user, systemjumpspk: Systemjumpspk): Systemjumps => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SYSTEMJUMPS,
      "systemjumpspk": SystemjumpsJson.PKtoJSON(systemjumpspk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadSystemjumpss4systemSystemend = async (user, systempk: Systemjumpspk): Systemjumps[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Systemsystemend,
      "systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadSystemjumpss4systemSystemstart = async (user, systempk: Systemjumpspk): Systemjumps[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Systemsystemstart,
      "systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, systemjumpssearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": systemjumpssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, systemjumpssearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": systemjumpssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, systemjumps: Systemjumps) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_SYSTEMJUMPS,
      "systemjumps": SystemjumpsJson.toJSON(systemjumps)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, systemjumps: Systemjumps) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_SYSTEMJUMPS,
      "systemjumps": SystemjumpsJson.toJSON(systemjumps)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, systemjumps: Systemjumps) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_SYSTEMJUMPS,
      "systemjumps": SystemjumpsJson.toJSON(systemjumps)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rssystemjumpssuper;
