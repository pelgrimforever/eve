//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Shipfitorderselectedpk } from '../../../../../data/eve/table/super/shipfitorderselectedsuper.js';
import Shipfitorderselected from '../../../../../data/eve/table/shipfitorderselected.js';
import ShipfitorderselectedJson from '../conversion/shipfitorderselectedjson.js';
import { Orderspk } from '../../../../../data/eve/table/super/orderssuper.js';
import OrdersJson from '../conversion/ordersjson.js';
import { Shipfitorderpk } from '../../../../../data/eve/table/super/shipfitordersuper.js';
import ShipfitorderJson from '../conversion/shipfitorderjson.js';


class Rsshipfitorderselectedsuper extends Eveservice {	

  static restserviceselect = 'rsshipfitorderselected_select';
  static restserviceinsert = 'rsshipfitorderselected_insert';
  static restserviceupdate = 'rsshipfitorderselected_update';
  static restservicedelete = 'rsshipfitorderselected_delete';

  //SELECT OPERATIONS
  static SELECT_SHIPFITORDERSELECTED = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Orders = 100 + 0;
  static SELECT_Shipfitorder = 100 + 1;

  //UPDATE OPERATIONS
  static UPDATE_SHIPFITORDERSELECTED = 10;

  //INSERT OPERATIONS
  static INSERT_SHIPFITORDERSELECTED = 20;

  //DELETE OPERATIONS
  static DELETE_Orders = 100 + 2;
  static DELETE_Shipfitorder = 100 + 3;
  static DELETE_SHIPFITORDERSELECTED = 30;

  static extractDataArray = (jsonarray): Shipfitorderselected[] => {
    let shipfitorderselecteds: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      shipfitorderselecteds.push(ShipfitorderselectedJson.fromJSON(jsonarray[i]));
    }
    return shipfitorderselecteds;
  }

  static extractDataObject = (jsonobject): Shipfitorderselected => {
    return ShipfitorderselectedJson.fromJSON(jsonobject);
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

  static getOne = async (user, shipfitorderselectedpk: Shipfitorderselectedpk): Shipfitorderselected => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SHIPFITORDERSELECTED,
      "shipfitorderselectedpk": ShipfitorderselectedJson.PKtoJSON(shipfitorderselectedpk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadShipfitorderselecteds4orders = async (user, orderspk: Shipfitorderselectedpk): Shipfitorderselected[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Orders,
      "orderspk": OrdersJson.PKtoJSON(orderspk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadShipfitorderselecteds4shipfitorder = async (user, shipfitorderpk: Shipfitorderselectedpk): Shipfitorderselected[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Shipfitorder,
      "shipfitorderpk": ShipfitorderJson.PKtoJSON(shipfitorderpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, shipfitorderselectedsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": shipfitorderselectedsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, shipfitorderselectedsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": shipfitorderselectedsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, shipfitorderselected: Shipfitorderselected) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_SHIPFITORDERSELECTED,
      "shipfitorderselected": ShipfitorderselectedJson.toJSON(shipfitorderselected)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, shipfitorderselected: Shipfitorderselected) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_SHIPFITORDERSELECTED,
      "shipfitorderselected": ShipfitorderselectedJson.toJSON(shipfitorderselected)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, shipfitorderselected: Shipfitorderselected) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_SHIPFITORDERSELECTED,
      "shipfitorderselected": ShipfitorderselectedJson.toJSON(shipfitorderselected)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsshipfitorderselectedsuper;
