//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Shipfitpk } from '../../../../../data/eve/table/super/shipfitsuper.js';
import Shipfit from '../../../../../data/eve/table/shipfit.js';
import ShipfitJson from '../conversion/shipfitjson.js';
import { Evetypepk } from '../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../conversion/evetypejson.js';
import { Shipfitmodulepk } from '../../../../../data/eve/table/super/shipfitmodulesuper.js';
import ShipfitmoduleJson from '../conversion/shipfitmodulejson.js';
import { Shipfitorderpk } from '../../../../../data/eve/table/super/shipfitordersuper.js';
import ShipfitorderJson from '../conversion/shipfitorderjson.js';


class Rsshipfitsuper extends Eveservice {	

  static restserviceselect = 'rsshipfit_select';
  static restserviceinsert = 'rsshipfit_insert';
  static restserviceupdate = 'rsshipfit_update';
  static restservicedelete = 'rsshipfit_delete';

  //SELECT OPERATIONS
  static SELECT_SHIPFIT = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Evetype = 100 + 0;
  static SELECT_Shipfitmodule = 100 + 1;
  static SELECT_Shipfitorder = 100 + 2;

  //UPDATE OPERATIONS
  static UPDATE_SHIPFIT = 10;

  //INSERT OPERATIONS
  static INSERT_SHIPFIT = 20;

  //DELETE OPERATIONS
  static DELETE_Evetype = 100 + 3;
  static DELETE_SHIPFIT = 30;

  static extractDataArray = (jsonarray): Shipfit[] => {
    let shipfits: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      shipfits.push(ShipfitJson.fromJSON(jsonarray[i]));
    }
    return shipfits;
  }

  static extractDataObject = (jsonobject): Shipfit => {
    return ShipfitJson.fromJSON(jsonobject);
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

  static getOne = async (user, shipfitpk: Shipfitpk): Shipfit => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SHIPFIT,
      "shipfitpk": ShipfitJson.PKtoJSON(shipfitpk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadShipfits4evetype = async (user, evetypepk: Shipfitpk): Shipfit[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Evetype,
      "evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadShipfit4shipfitmodule = async (user, shipfitmodulepk: Shipfitmodulepk): Shipfit[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Shipfitmodule,
      "shipfitmodulepk": ShipfitmoduleJson.PKtoJSON(shipfitmodulepk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadShipfit4shipfitorder = async (user, shipfitorderpk: Shipfitorderpk): Shipfit[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Shipfitorder,
      "shipfitorderpk": ShipfitorderJson.PKtoJSON(shipfitorderpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, shipfitsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": shipfitsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, shipfitsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": shipfitsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, shipfit: Shipfit) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_SHIPFIT,
      "shipfit": ShipfitJson.toJSON(shipfit)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, shipfit: Shipfit) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_SHIPFIT,
      "shipfit": ShipfitJson.toJSON(shipfit)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, shipfit: Shipfit) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_SHIPFIT,
      "shipfit": ShipfitJson.toJSON(shipfit)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsshipfitsuper;
