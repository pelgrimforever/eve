//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Alliancepk } from '../../../../../data/eve/table/super/alliancesuper.js';
import Alliance from '../../../../../data/eve/table/alliance.js';
import AllianceJson from '../conversion/alliancejson.js';
import { Corporationpk } from '../../../../../data/eve/table/super/corporationsuper.js';
import CorporationJson from '../conversion/corporationjson.js';


class Rsalliancesuper extends Eveservice {	

  static restserviceselect = 'rsalliance_select';
  static restserviceinsert = 'rsalliance_insert';
  static restserviceupdate = 'rsalliance_update';
  static restservicedelete = 'rsalliance_delete';

  //SELECT OPERATIONS
  static SELECT_ALLIANCE = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Corporationcreatorcorporation = 100 + 0;
  static SELECT_Corporationexecutorcorporation = 100 + 1;

  //UPDATE OPERATIONS
  static UPDATE_ALLIANCE = 10;

  //INSERT OPERATIONS
  static INSERT_ALLIANCE = 20;

  //DELETE OPERATIONS
  static DELETE_Corporationcreatorcorporation = 100 + 2;
  static DELETE_Corporationexecutorcorporation = 100 + 3;
  static DELETE_ALLIANCE = 30;

  static extractDataArray = (jsonarray): Alliance[] => {
    let alliances: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      alliances.push(AllianceJson.fromJSON(jsonarray[i]));
    }
    return alliances;
  }

  static extractDataObject = (jsonobject): Alliance => {
    return AllianceJson.fromJSON(jsonobject);
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

  static getOne = async (user, alliancepk: Alliancepk): Alliance => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_ALLIANCE,
      "alliancepk": AllianceJson.PKtoJSON(alliancepk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadAlliances4corporationCreatorcorporation = async (user, corporationpk: Alliancepk): Alliance[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Corporationcreatorcorporation,
      "corporationpk": CorporationJson.PKtoJSON(corporationpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadAlliances4corporationExecutorcorporation = async (user, corporationpk: Alliancepk): Alliance[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Corporationexecutorcorporation,
      "corporationpk": CorporationJson.PKtoJSON(corporationpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, alliancesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": alliancesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, alliancesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": alliancesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, alliance: Alliance) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_ALLIANCE,
      "alliance": AllianceJson.toJSON(alliance)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, alliance: Alliance) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_ALLIANCE,
      "alliance": AllianceJson.toJSON(alliance)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, alliance: Alliance) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_ALLIANCE,
      "alliance": AllianceJson.toJSON(alliance)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsalliancesuper;
