//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Securityislandpk } from '../../../../../data/eve/table/super/securityislandsuper.js';
import Securityisland from '../../../../../data/eve/table/securityisland.js';
import SecurityislandJson from '../conversion/securityislandjson.js';


class Rssecurityislandsuper extends Eveservice {	

  static restserviceselect = 'rssecurity_island_select';
  static restserviceinsert = 'rssecurity_island_insert';
  static restserviceupdate = 'rssecurity_island_update';
  static restservicedelete = 'rssecurity_island_delete';

  //SELECT OPERATIONS
  static SELECT_SECURITYISLAND = 2;
  static SELECT_Siteusergroup = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_SECURITYISLAND = 10;

  //INSERT OPERATIONS
  static INSERT_SECURITYISLAND = 20;

  //DELETE OPERATIONS
  static DELETE_SECURITYISLAND = 30;

  static extractDataArray = (jsonarray): Securityisland[] => {
    let securityislands: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      securityislands.push(SecurityislandJson.fromJSON(jsonarray[i]));
    }
    return securityislands;
  }

  static extractDataObject = (jsonobject): Securityisland => {
    return SecurityislandJson.fromJSON(jsonobject);
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

  static getOne = async (user, securityislandpk: Securityislandpk): Securityisland => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SECURITYISLAND,
      "security_islandpk": SecurityislandJson.PKtoJSON(securityislandpk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, securityislandsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": securityislandsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, securityislandsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": securityislandsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, securityisland: Securityisland) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_SECURITYISLAND,
      "security_island": SecurityislandJson.toJSON(securityisland)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, securityisland: Securityisland) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_SECURITYISLAND,
      "security_island": SecurityislandJson.toJSON(securityisland)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, securityisland: Securityisland) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_SECURITYISLAND,
      "security_island": SecurityislandJson.toJSON(securityisland)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rssecurityislandsuper;
