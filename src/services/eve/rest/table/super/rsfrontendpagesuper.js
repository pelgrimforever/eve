//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Frontendpagepk } from '../../../../../data/eve/table/super/frontendpagesuper.js';
import Frontendpage from '../../../../../data/eve/table/frontendpage.js';
import FrontendpageJson from '../conversion/frontendpagejson.js';
import { Frontendpageauthpk } from '../../../../../data/eve/table/super/frontendpageauthsuper.js';
import FrontendpageauthJson from '../conversion/frontendpageauthjson.js';


class Rsfrontendpagesuper extends Eveservice {	

  static restserviceselect = 'rsfrontendpage_select';
  static restserviceinsert = 'rsfrontendpage_insert';
  static restserviceupdate = 'rsfrontendpage_update';
  static restservicedelete = 'rsfrontendpage_delete';

  //SELECT OPERATIONS
  static SELECT_FRONTENDPAGE = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Frontendpageauth = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_FRONTENDPAGE = 10;

  //INSERT OPERATIONS
  static INSERT_FRONTENDPAGE = 20;

  //DELETE OPERATIONS
  static DELETE_FRONTENDPAGE = 30;

  static extractDataArray = (jsonarray): Frontendpage[] => {
    let frontendpages: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      frontendpages.push(FrontendpageJson.fromJSON(jsonarray[i]));
    }
    return frontendpages;
  }

  static extractDataObject = (jsonobject): Frontendpage => {
    return FrontendpageJson.fromJSON(jsonobject);
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

  static getOne = async (user, frontendpagepk: Frontendpagepk): Frontendpage => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_FRONTENDPAGE,
      "frontendpagepk": FrontendpageJson.PKtoJSON(frontendpagepk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadFrontendpage4frontendpageauth = async (user, frontendpageauthpk: Frontendpageauthpk): Frontendpage[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Frontendpageauth,
      "frontendpage_authpk": FrontendpageauthJson.PKtoJSON(frontendpageauthpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, frontendpagesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": frontendpagesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, frontendpagesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": frontendpagesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, frontendpage: Frontendpage) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_FRONTENDPAGE,
      "frontendpage": FrontendpageJson.toJSON(frontendpage)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, frontendpage: Frontendpage) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_FRONTENDPAGE,
      "frontendpage": FrontendpageJson.toJSON(frontendpage)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, frontendpage: Frontendpage) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_FRONTENDPAGE,
      "frontendpage": FrontendpageJson.toJSON(frontendpage)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsfrontendpagesuper;
