//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Stargatepk } from '../../../../../data/eve/table/super/stargatesuper.js';
import Stargate from '../../../../../data/eve/table/stargate.js';
import StargateJson from '../conversion/stargatejson.js';
import { Systempk } from '../../../../../data/eve/table/super/systemsuper.js';
import SystemJson from '../conversion/systemjson.js';


class Rsstargatesuper extends Eveservice {	

  static restserviceselect = 'rsstargate_select';
  static restserviceinsert = 'rsstargate_insert';
  static restserviceupdate = 'rsstargate_update';
  static restservicedelete = 'rsstargate_delete';

  //SELECT OPERATIONS
  static SELECT_STARGATE = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Systemsystem = 100 + 0;
  static SELECT_Systemtosystem = 100 + 1;

  //UPDATE OPERATIONS
  static UPDATE_STARGATE = 10;

  //INSERT OPERATIONS
  static INSERT_STARGATE = 20;

  //DELETE OPERATIONS
  static DELETE_Systemsystem = 100 + 2;
  static DELETE_Systemtosystem = 100 + 3;
  static DELETE_STARGATE = 30;

  static extractDataArray = (jsonarray): Stargate[] => {
    let stargates: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      stargates.push(StargateJson.fromJSON(jsonarray[i]));
    }
    return stargates;
  }

  static extractDataObject = (jsonobject): Stargate => {
    return StargateJson.fromJSON(jsonobject);
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

  static getOne = async (user, stargatepk: Stargatepk): Stargate => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_STARGATE,
      "stargatepk": StargateJson.PKtoJSON(stargatepk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadStargates4systemSystem = async (user, systempk: Stargatepk): Stargate[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Systemsystem,
      "systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadStargates4systemTosystem = async (user, systempk: Stargatepk): Stargate[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Systemtosystem,
      "systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, stargatesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": stargatesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, stargatesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": stargatesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, stargate: Stargate) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_STARGATE,
      "stargate": StargateJson.toJSON(stargate)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, stargate: Stargate) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_STARGATE,
      "stargate": StargateJson.toJSON(stargate)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, stargate: Stargate) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_STARGATE,
      "stargate": StargateJson.toJSON(stargate)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsstargatesuper;
