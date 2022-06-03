//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Allnodessystempk } from '../../../../../data/eve/table/super/allnodessystemsuper.js';
import Allnodessystem from '../../../../../data/eve/table/allnodessystem.js';
import AllnodessystemJson from '../conversion/allnodessystemjson.js';


class Rsallnodessystemsuper extends Eveservice {	

  static restserviceselect = 'rsallnodes_system_select';
  static restserviceinsert = 'rsallnodes_system_insert';
  static restserviceupdate = 'rsallnodes_system_update';
  static restservicedelete = 'rsallnodes_system_delete';

  //SELECT OPERATIONS
  static SELECT_ALLNODESSYSTEM = 2;
  static SELECT_Siteusergroup = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_ALLNODESSYSTEM = 10;

  //INSERT OPERATIONS
  static INSERT_ALLNODESSYSTEM = 20;

  //DELETE OPERATIONS
  static DELETE_ALLNODESSYSTEM = 30;

  static extractDataArray = (jsonarray): Allnodessystem[] => {
    let allnodessystems: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      allnodessystems.push(AllnodessystemJson.fromJSON(jsonarray[i]));
    }
    return allnodessystems;
  }

  static extractDataObject = (jsonobject): Allnodessystem => {
    return AllnodessystemJson.fromJSON(jsonobject);
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

  static getOne = async (user, allnodessystempk: Allnodessystempk): Allnodessystem => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_ALLNODESSYSTEM,
      "allnodes_systempk": AllnodessystemJson.PKtoJSON(allnodessystempk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, allnodessystemsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": allnodessystemsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, allnodessystemsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": allnodessystemsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, allnodessystem: Allnodessystem) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_ALLNODESSYSTEM,
      "allnodes_system": AllnodessystemJson.toJSON(allnodessystem)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, allnodessystem: Allnodessystem) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_ALLNODESSYSTEM,
      "allnodes_system": AllnodessystemJson.toJSON(allnodessystem)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, allnodessystem: Allnodessystem) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_ALLNODESSYSTEM,
      "allnodes_system": AllnodessystemJson.toJSON(allnodessystem)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsallnodessystemsuper;
