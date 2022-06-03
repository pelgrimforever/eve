//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Syssettingspk } from '../../../../../data/eve/table/super/syssettingssuper.js';
import Syssettings from '../../../../../data/eve/table/syssettings.js';
import SyssettingsJson from '../conversion/syssettingsjson.js';


class Rssyssettingssuper extends Eveservice {	

  static restserviceselect = 'rssyssettings_select';
  static restserviceinsert = 'rssyssettings_insert';
  static restserviceupdate = 'rssyssettings_update';
  static restservicedelete = 'rssyssettings_delete';

  //SELECT OPERATIONS
  static SELECT_SYSSETTINGS = 2;
  static SELECT_Siteusergroup = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_SYSSETTINGS = 10;

  //INSERT OPERATIONS
  static INSERT_SYSSETTINGS = 20;

  //DELETE OPERATIONS
  static DELETE_SYSSETTINGS = 30;

  static extractDataArray = (jsonarray): Syssettings[] => {
    let syssettingss: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      syssettingss.push(SyssettingsJson.fromJSON(jsonarray[i]));
    }
    return syssettingss;
  }

  static extractDataObject = (jsonobject): Syssettings => {
    return SyssettingsJson.fromJSON(jsonobject);
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

  static getOne = async (user, syssettingspk: Syssettingspk): Syssettings => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SYSSETTINGS,
      "syssettingspk": SyssettingsJson.PKtoJSON(syssettingspk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, syssettingssearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": syssettingssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, syssettingssearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": syssettingssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, syssettings: Syssettings) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_SYSSETTINGS,
      "syssettings": SyssettingsJson.toJSON(syssettings)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, syssettings: Syssettings) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_SYSSETTINGS,
      "syssettings": SyssettingsJson.toJSON(syssettings)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, syssettings: Syssettings) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_SYSSETTINGS,
      "syssettings": SyssettingsJson.toJSON(syssettings)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rssyssettingssuper;
