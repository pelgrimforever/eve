//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Racepk } from '../../../../../data/eve/table/super/racesuper.js';
import Race from '../../../../../data/eve/table/race.js';
import RaceJson from '../conversion/racejson.js';
import { Factionpk } from '../../../../../data/eve/table/super/factionsuper.js';
import FactionJson from '../conversion/factionjson.js';


class Rsracesuper extends Eveservice {	

  static restserviceselect = 'rsrace_select';
  static restserviceinsert = 'rsrace_insert';
  static restserviceupdate = 'rsrace_update';
  static restservicedelete = 'rsrace_delete';

  //SELECT OPERATIONS
  static SELECT_RACE = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Faction = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_RACE = 10;

  //INSERT OPERATIONS
  static INSERT_RACE = 20;

  //DELETE OPERATIONS
  static DELETE_Faction = 100 + 1;
  static DELETE_RACE = 30;

  static extractDataArray = (jsonarray): Race[] => {
    let races: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      races.push(RaceJson.fromJSON(jsonarray[i]));
    }
    return races;
  }

  static extractDataObject = (jsonobject): Race => {
    return RaceJson.fromJSON(jsonobject);
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

  static getOne = async (user, racepk: Racepk): Race => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_RACE,
      "racepk": RaceJson.PKtoJSON(racepk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadRaces4faction = async (user, factionpk: Racepk): Race[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Faction,
      "factionpk": FactionJson.PKtoJSON(factionpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, racesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": racesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, racesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": racesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, race: Race) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_RACE,
      "race": RaceJson.toJSON(race)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, race: Race) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_RACE,
      "race": RaceJson.toJSON(race)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, race: Race) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_RACE,
      "race": RaceJson.toJSON(race)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsracesuper;
