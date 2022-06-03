//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Corporationpk } from '../../../../../data/eve/table/super/corporationsuper.js';
import Corporation from '../../../../../data/eve/table/corporation.js';
import CorporationJson from '../conversion/corporationjson.js';
import { Stationpk } from '../../../../../data/eve/table/super/stationsuper.js';
import StationJson from '../conversion/stationjson.js';
import { Factionpk } from '../../../../../data/eve/table/super/factionsuper.js';
import FactionJson from '../conversion/factionjson.js';
import { Alliancepk } from '../../../../../data/eve/table/super/alliancesuper.js';
import AllianceJson from '../conversion/alliancejson.js';


class Rscorporationsuper extends Eveservice {	

  static restserviceselect = 'rscorporation_select';
  static restserviceinsert = 'rscorporation_insert';
  static restserviceupdate = 'rscorporation_update';
  static restservicedelete = 'rscorporation_delete';

  //SELECT OPERATIONS
  static SELECT_CORPORATION = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Station = 100 + 0;
  static SELECT_Faction = 100 + 1;
  static SELECT_Alliance = 100 + 2;

  //UPDATE OPERATIONS
  static UPDATE_CORPORATION = 10;

  //INSERT OPERATIONS
  static INSERT_CORPORATION = 20;

  //DELETE OPERATIONS
  static DELETE_Station = 100 + 3;
  static DELETE_Faction = 100 + 4;
  static DELETE_Alliance = 100 + 5;
  static DELETE_CORPORATION = 30;

  static extractDataArray = (jsonarray): Corporation[] => {
    let corporations: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      corporations.push(CorporationJson.fromJSON(jsonarray[i]));
    }
    return corporations;
  }

  static extractDataObject = (jsonobject): Corporation => {
    return CorporationJson.fromJSON(jsonobject);
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

  static getOne = async (user, corporationpk: Corporationpk): Corporation => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_CORPORATION,
      "corporationpk": CorporationJson.PKtoJSON(corporationpk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadCorporations4station = async (user, stationpk: Corporationpk): Corporation[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Station,
      "stationpk": StationJson.PKtoJSON(stationpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadCorporations4faction = async (user, factionpk: Corporationpk): Corporation[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Faction,
      "factionpk": FactionJson.PKtoJSON(factionpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadCorporations4alliance = async (user, alliancepk: Corporationpk): Corporation[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Alliance,
      "alliancepk": AllianceJson.PKtoJSON(alliancepk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, corporationsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": corporationsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, corporationsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": corporationsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, corporation: Corporation) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_CORPORATION,
      "corporation": CorporationJson.toJSON(corporation)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, corporation: Corporation) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_CORPORATION,
      "corporation": CorporationJson.toJSON(corporation)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, corporation: Corporation) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_CORPORATION,
      "corporation": CorporationJson.toJSON(corporation)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rscorporationsuper;
