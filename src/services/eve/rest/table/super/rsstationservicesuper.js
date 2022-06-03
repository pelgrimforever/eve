//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Stationservicepk } from '../../../../../data/eve/table/super/stationservicesuper.js';
import Stationservice from '../../../../../data/eve/table/stationservice.js';
import StationserviceJson from '../conversion/stationservicejson.js';
import { Stationpk } from '../../../../../data/eve/table/super/stationsuper.js';
import StationJson from '../conversion/stationjson.js';


class Rsstationservicesuper extends Eveservice {	

  static restserviceselect = 'rsstation_service_select';
  static restserviceinsert = 'rsstation_service_insert';
  static restserviceupdate = 'rsstation_service_update';
  static restservicedelete = 'rsstation_service_delete';

  //SELECT OPERATIONS
  static SELECT_STATIONSERVICE = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Station = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_STATIONSERVICE = 10;

  //INSERT OPERATIONS
  static INSERT_STATIONSERVICE = 20;

  //DELETE OPERATIONS
  static DELETE_Station = 100 + 1;
  static DELETE_STATIONSERVICE = 30;

  static extractDataArray = (jsonarray): Stationservice[] => {
    let stationservices: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      stationservices.push(StationserviceJson.fromJSON(jsonarray[i]));
    }
    return stationservices;
  }

  static extractDataObject = (jsonobject): Stationservice => {
    return StationserviceJson.fromJSON(jsonobject);
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

  static getOne = async (user, stationservicepk: Stationservicepk): Stationservice => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_STATIONSERVICE,
      "station_servicepk": StationserviceJson.PKtoJSON(stationservicepk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadStationservices4station = async (user, stationpk: Stationservicepk): Stationservice[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Station,
      "stationpk": StationJson.PKtoJSON(stationpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, stationservicesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": stationservicesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, stationservicesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": stationservicesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, stationservice: Stationservice) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_STATIONSERVICE,
      "station_service": StationserviceJson.toJSON(stationservice)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, stationservice: Stationservice) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_STATIONSERVICE,
      "station_service": StationserviceJson.toJSON(stationservice)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, stationservice: Stationservice) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_STATIONSERVICE,
      "station_service": StationserviceJson.toJSON(stationservice)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsstationservicesuper;
