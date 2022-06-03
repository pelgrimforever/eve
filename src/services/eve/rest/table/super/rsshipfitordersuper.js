//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Shipfitorderpk } from '../../../../../data/eve/table/super/shipfitordersuper.js';
import Shipfitorder from '../../../../../data/eve/table/shipfitorder.js';
import ShipfitorderJson from '../conversion/shipfitorderjson.js';
import { Shipfitpk } from '../../../../../data/eve/table/super/shipfitsuper.js';
import ShipfitJson from '../conversion/shipfitjson.js';
import { Evetypepk } from '../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../conversion/evetypejson.js';
import { Shipfitorderselectedpk } from '../../../../../data/eve/table/super/shipfitorderselectedsuper.js';
import ShipfitorderselectedJson from '../conversion/shipfitorderselectedjson.js';


class Rsshipfitordersuper extends Eveservice {	

  static restserviceselect = 'rsshipfitorder_select';
  static restserviceinsert = 'rsshipfitorder_insert';
  static restserviceupdate = 'rsshipfitorder_update';
  static restservicedelete = 'rsshipfitorder_delete';

  //SELECT OPERATIONS
  static SELECT_SHIPFITORDER = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Shipfit = 100 + 0;
  static SELECT_Evetype = 100 + 1;
  static SELECT_Shipfitorderselected = 100 + 2;

  //UPDATE OPERATIONS
  static UPDATE_SHIPFITORDER = 10;

  //INSERT OPERATIONS
  static INSERT_SHIPFITORDER = 20;

  //DELETE OPERATIONS
  static DELETE_Shipfit = 100 + 3;
  static DELETE_Evetype = 100 + 4;
  static DELETE_SHIPFITORDER = 30;

  static extractDataArray = (jsonarray): Shipfitorder[] => {
    let shipfitorders: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      shipfitorders.push(ShipfitorderJson.fromJSON(jsonarray[i]));
    }
    return shipfitorders;
  }

  static extractDataObject = (jsonobject): Shipfitorder => {
    return ShipfitorderJson.fromJSON(jsonobject);
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

  static getOne = async (user, shipfitorderpk: Shipfitorderpk): Shipfitorder => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SHIPFITORDER,
      "shipfitorderpk": ShipfitorderJson.PKtoJSON(shipfitorderpk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadShipfitorders4shipfit = async (user, shipfitpk: Shipfitorderpk): Shipfitorder[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Shipfit,
      "shipfitpk": ShipfitJson.PKtoJSON(shipfitpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadShipfitorders4evetype = async (user, evetypepk: Shipfitorderpk): Shipfitorder[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Evetype,
      "evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadShipfitorder4shipfitorderselected = async (user, shipfitorderselectedpk: Shipfitorderselectedpk): Shipfitorder[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Shipfitorderselected,
      "shipfitorderselectedpk": ShipfitorderselectedJson.PKtoJSON(shipfitorderselectedpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, shipfitordersearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": shipfitordersearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, shipfitordersearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": shipfitordersearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, shipfitorder: Shipfitorder) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_SHIPFITORDER,
      "shipfitorder": ShipfitorderJson.toJSON(shipfitorder)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, shipfitorder: Shipfitorder) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_SHIPFITORDER,
      "shipfitorder": ShipfitorderJson.toJSON(shipfitorder)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, shipfitorder: Shipfitorder) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_SHIPFITORDER,
      "shipfitorder": ShipfitorderJson.toJSON(shipfitorder)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsshipfitordersuper;
