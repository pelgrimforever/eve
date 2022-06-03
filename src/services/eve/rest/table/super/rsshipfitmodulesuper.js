//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Shipfitmodulepk } from '../../../../../data/eve/table/super/shipfitmodulesuper.js';
import Shipfitmodule from '../../../../../data/eve/table/shipfitmodule.js';
import ShipfitmoduleJson from '../conversion/shipfitmodulejson.js';
import { Evetypepk } from '../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../conversion/evetypejson.js';
import { Shipfitpk } from '../../../../../data/eve/table/super/shipfitsuper.js';
import ShipfitJson from '../conversion/shipfitjson.js';


class Rsshipfitmodulesuper extends Eveservice {	

  static restserviceselect = 'rsshipfitmodule_select';
  static restserviceinsert = 'rsshipfitmodule_insert';
  static restserviceupdate = 'rsshipfitmodule_update';
  static restservicedelete = 'rsshipfitmodule_delete';

  //SELECT OPERATIONS
  static SELECT_SHIPFITMODULE = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Evetype = 100 + 0;
  static SELECT_Shipfit = 100 + 1;

  //UPDATE OPERATIONS
  static UPDATE_SHIPFITMODULE = 10;

  //INSERT OPERATIONS
  static INSERT_SHIPFITMODULE = 20;

  //DELETE OPERATIONS
  static DELETE_Evetype = 100 + 2;
  static DELETE_Shipfit = 100 + 3;
  static DELETE_SHIPFITMODULE = 30;

  static extractDataArray = (jsonarray): Shipfitmodule[] => {
    let shipfitmodules: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      shipfitmodules.push(ShipfitmoduleJson.fromJSON(jsonarray[i]));
    }
    return shipfitmodules;
  }

  static extractDataObject = (jsonobject): Shipfitmodule => {
    return ShipfitmoduleJson.fromJSON(jsonobject);
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

  static getOne = async (user, shipfitmodulepk: Shipfitmodulepk): Shipfitmodule => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SHIPFITMODULE,
      "shipfitmodulepk": ShipfitmoduleJson.PKtoJSON(shipfitmodulepk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadShipfitmodules4evetype = async (user, evetypepk: Shipfitmodulepk): Shipfitmodule[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Evetype,
      "evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadShipfitmodules4shipfit = async (user, shipfitpk: Shipfitmodulepk): Shipfitmodule[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Shipfit,
      "shipfitpk": ShipfitJson.PKtoJSON(shipfitpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, shipfitmodulesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": shipfitmodulesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, shipfitmodulesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": shipfitmodulesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, shipfitmodule: Shipfitmodule) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_SHIPFITMODULE,
      "shipfitmodule": ShipfitmoduleJson.toJSON(shipfitmodule)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, shipfitmodule: Shipfitmodule) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_SHIPFITMODULE,
      "shipfitmodule": ShipfitmoduleJson.toJSON(shipfitmodule)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, shipfitmodule: Shipfitmodule) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_SHIPFITMODULE,
      "shipfitmodule": ShipfitmoduleJson.toJSON(shipfitmodule)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsshipfitmodulesuper;
