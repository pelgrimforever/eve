//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Factionpk } from '../../../../../data/eve/table/super/factionsuper.js';
import Faction from '../../../../../data/eve/table/faction.js';
import FactionJson from '../conversion/factionjson.js';
import { Systempk } from '../../../../../data/eve/table/super/systemsuper.js';
import SystemJson from '../conversion/systemjson.js';


class Rsfactionsuper extends Eveservice {	

  static restserviceselect = 'rsfaction_select';
  static restserviceinsert = 'rsfaction_insert';
  static restserviceupdate = 'rsfaction_update';
  static restservicedelete = 'rsfaction_delete';

  //SELECT OPERATIONS
  static SELECT_FACTION = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_System = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_FACTION = 10;

  //INSERT OPERATIONS
  static INSERT_FACTION = 20;

  //DELETE OPERATIONS
  static DELETE_System = 100 + 1;
  static DELETE_FACTION = 30;

  static extractDataArray = (jsonarray): Faction[] => {
    let factions: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      factions.push(FactionJson.fromJSON(jsonarray[i]));
    }
    return factions;
  }

  static extractDataObject = (jsonobject): Faction => {
    return FactionJson.fromJSON(jsonobject);
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

  static getOne = async (user, factionpk: Factionpk): Faction => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_FACTION,
      "factionpk": FactionJson.PKtoJSON(factionpk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadFactions4system = async (user, systempk: Factionpk): Faction[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_System,
      "systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, factionsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": factionsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, factionsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": factionsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, faction: Faction) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_FACTION,
      "faction": FactionJson.toJSON(faction)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, faction: Faction) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_FACTION,
      "faction": FactionJson.toJSON(faction)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, faction: Faction) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_FACTION,
      "faction": FactionJson.toJSON(faction)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsfactionsuper;
