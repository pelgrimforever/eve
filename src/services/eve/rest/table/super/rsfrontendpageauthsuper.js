//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Frontendpageauthpk } from '../../../../../data/eve/table/super/frontendpageauthsuper.js';
import Frontendpageauth from '../../../../../data/eve/table/frontendpageauth.js';
import FrontendpageauthJson from '../conversion/frontendpageauthjson.js';
import { Frontendpagepk } from '../../../../../data/eve/table/super/frontendpagesuper.js';
import FrontendpageJson from '../conversion/frontendpagejson.js';
import { Eveuserpk } from '../../../../../data/eve/table/super/eveusersuper.js';
import EveuserJson from '../conversion/eveuserjson.js';


class Rsfrontendpageauthsuper extends Eveservice {	

  static restserviceselect = 'rsfrontendpage_auth_select';
  static restserviceinsert = 'rsfrontendpage_auth_insert';
  static restserviceupdate = 'rsfrontendpage_auth_update';
  static restservicedelete = 'rsfrontendpage_auth_delete';

  //SELECT OPERATIONS
  static SELECT_FRONTENDPAGEAUTH = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Frontendpage = 100 + 0;
  static SELECT_Eveuser = 100 + 1;

  //UPDATE OPERATIONS
  static UPDATE_FRONTENDPAGEAUTH = 10;

  //INSERT OPERATIONS
  static INSERT_FRONTENDPAGEAUTH = 20;

  //DELETE OPERATIONS
  static DELETE_Frontendpage = 100 + 2;
  static DELETE_Eveuser = 100 + 3;
  static DELETE_FRONTENDPAGEAUTH = 30;

  static extractDataArray = (jsonarray): Frontendpageauth[] => {
    let frontendpageauths: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      frontendpageauths.push(FrontendpageauthJson.fromJSON(jsonarray[i]));
    }
    return frontendpageauths;
  }

  static extractDataObject = (jsonobject): Frontendpageauth => {
    return FrontendpageauthJson.fromJSON(jsonobject);
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

  static getOne = async (user, frontendpageauthpk: Frontendpageauthpk): Frontendpageauth => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_FRONTENDPAGEAUTH,
      "frontendpage_authpk": FrontendpageauthJson.PKtoJSON(frontendpageauthpk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadFrontendpageauths4frontendpage = async (user, frontendpagepk: Frontendpageauthpk): Frontendpageauth[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Frontendpage,
      "frontendpagepk": FrontendpageJson.PKtoJSON(frontendpagepk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadFrontendpageauths4eveuser = async (user, eveuserpk: Frontendpageauthpk): Frontendpageauth[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Eveuser,
      "eveuserpk": EveuserJson.PKtoJSON(eveuserpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, frontendpageauthsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": frontendpageauthsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, frontendpageauthsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": frontendpageauthsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, frontendpageauth: Frontendpageauth) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_FRONTENDPAGEAUTH,
      "frontendpage_auth": FrontendpageauthJson.toJSON(frontendpageauth)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, frontendpageauth: Frontendpageauth) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_FRONTENDPAGEAUTH,
      "frontendpage_auth": FrontendpageauthJson.toJSON(frontendpageauth)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, frontendpageauth: Frontendpageauth) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_FRONTENDPAGEAUTH,
      "frontendpage_auth": FrontendpageauthJson.toJSON(frontendpageauth)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsfrontendpageauthsuper;
