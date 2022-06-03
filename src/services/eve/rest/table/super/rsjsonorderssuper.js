//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Jsonorderspk } from '../../../../../data/eve/table/super/jsonorderssuper.js';
import Jsonorders from '../../../../../data/eve/table/jsonorders.js';
import JsonordersJson from '../conversion/jsonordersjson.js';


class Rsjsonorderssuper extends Eveservice {	

  static restserviceselect = 'rsjson_orders_select';
  static restserviceinsert = 'rsjson_orders_insert';
  static restserviceupdate = 'rsjson_orders_update';
  static restservicedelete = 'rsjson_orders_delete';

  //SELECT OPERATIONS
  static SELECT_JSONORDERS = 2;
  static SELECT_Siteusergroup = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_JSONORDERS = 10;

  //INSERT OPERATIONS
  static INSERT_JSONORDERS = 20;

  //DELETE OPERATIONS
  static DELETE_JSONORDERS = 30;

  static extractDataArray = (jsonarray): Jsonorders[] => {
    let jsonorderss: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      jsonorderss.push(JsonordersJson.fromJSON(jsonarray[i]));
    }
    return jsonorderss;
  }

  static extractDataObject = (jsonobject): Jsonorders => {
    return JsonordersJson.fromJSON(jsonobject);
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

  static getOne = async (user, jsonorderspk: Jsonorderspk): Jsonorders => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_JSONORDERS,
      "json_orderspk": JsonordersJson.PKtoJSON(jsonorderspk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, jsonorderssearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": jsonorderssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, jsonorderssearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": jsonorderssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, jsonorders: Jsonorders) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_JSONORDERS,
      "json_orders": JsonordersJson.toJSON(jsonorders)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, jsonorders: Jsonorders) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_JSONORDERS,
      "json_orders": JsonordersJson.toJSON(jsonorders)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, jsonorders: Jsonorders) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_JSONORDERS,
      "json_orders": JsonordersJson.toJSON(jsonorders)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsjsonorderssuper;
