//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Stationpk } from '../../../../../data/eve/table/super/stationsuper.js';
import Station from '../../../../../data/eve/table/station.js';
import StationJson from '../conversion/stationjson.js';
import { Racepk } from '../../../../../data/eve/table/super/racesuper.js';
import RaceJson from '../conversion/racejson.js';
import { Evetypepk } from '../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../conversion/evetypejson.js';
import { Systempk } from '../../../../../data/eve/table/super/systemsuper.js';
import SystemJson from '../conversion/systemjson.js';
import { Stationservicepk } from '../../../../../data/eve/table/super/stationservicesuper.js';
import StationserviceJson from '../conversion/stationservicejson.js';


class Rsstationsuper extends Eveservice {	

  static restserviceselect = 'rsstation_select';
  static restserviceinsert = 'rsstation_insert';
  static restserviceupdate = 'rsstation_update';
  static restservicedelete = 'rsstation_delete';

  //SELECT OPERATIONS
  static SELECT_STATION = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Race = 100 + 0;
  static SELECT_Evetype = 100 + 1;
  static SELECT_System = 100 + 2;
  static SELECT_Stationservice = 100 + 3;

  //UPDATE OPERATIONS
  static UPDATE_STATION = 10;

  //INSERT OPERATIONS
  static INSERT_STATION = 20;

  //DELETE OPERATIONS
  static DELETE_Race = 100 + 4;
  static DELETE_Evetype = 100 + 5;
  static DELETE_System = 100 + 6;
  static DELETE_STATION = 30;

  static extractDataArray = (jsonarray): Station[] => {
    let stations: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      stations.push(StationJson.fromJSON(jsonarray[i]));
    }
    return stations;
  }

  static extractDataObject = (jsonobject): Station => {
    return StationJson.fromJSON(jsonobject);
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

  static getOne = async (user, stationpk: Stationpk): Station => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_STATION,
      "stationpk": StationJson.PKtoJSON(stationpk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadStations4race = async (user, racepk: Stationpk): Station[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Race,
      "racepk": RaceJson.PKtoJSON(racepk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadStations4evetype = async (user, evetypepk: Stationpk): Station[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Evetype,
      "evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadStations4system = async (user, systempk: Stationpk): Station[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_System,
      "systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadStation4stationservice = async (user, stationservicepk: Stationservicepk): Station[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Stationservice,
      "station_servicepk": StationserviceJson.PKtoJSON(stationservicepk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, stationsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": stationsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, stationsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": stationsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, station: Station) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_STATION,
      "station": StationJson.toJSON(station)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, station: Station) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_STATION,
      "station": StationJson.toJSON(station)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, station: Station) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_STATION,
      "station": StationJson.toJSON(station)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsstationsuper;
