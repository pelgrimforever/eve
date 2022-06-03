//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Orderhistorypk } from '../../../../../data/eve/table/super/orderhistorysuper.js';
import Orderhistory from '../../../../../data/eve/table/orderhistory.js';
import OrderhistoryJson from '../conversion/orderhistoryjson.js';
import { Evetypepk } from '../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../conversion/evetypejson.js';
import { Regionpk } from '../../../../../data/eve/table/super/regionsuper.js';
import RegionJson from '../conversion/regionjson.js';


class Rsorderhistorysuper extends Eveservice {	

  static restserviceselect = 'rsorder_history_select';
  static restserviceinsert = 'rsorder_history_insert';
  static restserviceupdate = 'rsorder_history_update';
  static restservicedelete = 'rsorder_history_delete';

  //SELECT OPERATIONS
  static SELECT_ORDERHISTORY = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Evetype = 100 + 0;
  static SELECT_Region = 100 + 1;

  //UPDATE OPERATIONS
  static UPDATE_ORDERHISTORY = 10;

  //INSERT OPERATIONS
  static INSERT_ORDERHISTORY = 20;

  //DELETE OPERATIONS
  static DELETE_Evetype = 100 + 2;
  static DELETE_Region = 100 + 3;
  static DELETE_ORDERHISTORY = 30;

  static extractDataArray = (jsonarray): Orderhistory[] => {
    let orderhistorys: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      orderhistorys.push(OrderhistoryJson.fromJSON(jsonarray[i]));
    }
    return orderhistorys;
  }

  static extractDataObject = (jsonobject): Orderhistory => {
    return OrderhistoryJson.fromJSON(jsonobject);
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

  static getOne = async (user, orderhistorypk: Orderhistorypk): Orderhistory => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_ORDERHISTORY,
      "order_historypk": OrderhistoryJson.PKtoJSON(orderhistorypk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadOrderhistorys4evetype = async (user, evetypepk: Orderhistorypk): Orderhistory[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Evetype,
      "evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadOrderhistorys4region = async (user, regionpk: Orderhistorypk): Orderhistory[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Region,
      "regionpk": RegionJson.PKtoJSON(regionpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, orderhistorysearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": orderhistorysearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, orderhistorysearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": orderhistorysearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, orderhistory: Orderhistory) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_ORDERHISTORY,
      "order_history": OrderhistoryJson.toJSON(orderhistory)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, orderhistory: Orderhistory) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_ORDERHISTORY,
      "order_history": OrderhistoryJson.toJSON(orderhistory)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, orderhistory: Orderhistory) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_ORDERHISTORY,
      "order_history": OrderhistoryJson.toJSON(orderhistory)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsorderhistorysuper;
