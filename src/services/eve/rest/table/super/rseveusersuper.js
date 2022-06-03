//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Eveuserpk } from '../../../../../data/eve/table/super/eveusersuper.js';
import Eveuser from '../../../../../data/eve/table/eveuser.js';
import EveuserJson from '../conversion/eveuserjson.js';
import { Frontendpageauthpk } from '../../../../../data/eve/table/super/frontendpageauthsuper.js';
import FrontendpageauthJson from '../conversion/frontendpageauthjson.js';


class Rseveusersuper extends Eveservice {	

  static restserviceselect = 'rseveuser_select';
  static restserviceinsert = 'rseveuser_insert';
  static restserviceupdate = 'rseveuser_update';
  static restservicedelete = 'rseveuser_delete';

  //SELECT OPERATIONS
  static SELECT_EVEUSER = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Frontendpageauth = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_EVEUSER = 10;

  //INSERT OPERATIONS
  static INSERT_EVEUSER = 20;

  //DELETE OPERATIONS
  static DELETE_EVEUSER = 30;

  static extractDataArray = (jsonarray): Eveuser[] => {
    let eveusers: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      eveusers.push(EveuserJson.fromJSON(jsonarray[i]));
    }
    return eveusers;
  }

  static extractDataObject = (jsonobject): Eveuser => {
    return EveuserJson.fromJSON(jsonobject);
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

  static getOne = async (user, eveuserpk: Eveuserpk): Eveuser => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_EVEUSER,
      "eveuserpk": EveuserJson.PKtoJSON(eveuserpk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadEveuser4frontendpageauth = async (user, frontendpageauthpk: Frontendpageauthpk): Eveuser[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Frontendpageauth,
      "frontendpage_authpk": FrontendpageauthJson.PKtoJSON(frontendpageauthpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, eveusersearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": eveusersearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, eveusersearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": eveusersearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, eveuser: Eveuser) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_EVEUSER,
      "eveuser": EveuserJson.toJSON(eveuser)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, eveuser: Eveuser) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_EVEUSER,
      "eveuser": EveuserJson.toJSON(eveuser)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, eveuser: Eveuser) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_EVEUSER,
      "eveuser": EveuserJson.toJSON(eveuser)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rseveusersuper;
