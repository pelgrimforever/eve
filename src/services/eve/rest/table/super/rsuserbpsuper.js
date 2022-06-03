//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Userbppk } from '../../../../../data/eve/table/super/userbpsuper.js';
import Userbp from '../../../../../data/eve/table/userbp.js';
import UserbpJson from '../conversion/userbpjson.js';
import { Evetypepk } from '../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../conversion/evetypejson.js';


class Rsuserbpsuper extends Eveservice {	

  static restserviceselect = 'rsuserbp_select';
  static restserviceinsert = 'rsuserbp_insert';
  static restserviceupdate = 'rsuserbp_update';
  static restservicedelete = 'rsuserbp_delete';

  //SELECT OPERATIONS
  static SELECT_USERBP = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Evetype = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_USERBP = 10;

  //INSERT OPERATIONS
  static INSERT_USERBP = 20;

  //DELETE OPERATIONS
  static DELETE_Evetype = 100 + 1;
  static DELETE_USERBP = 30;

  static extractDataArray = (jsonarray): Userbp[] => {
    let userbps: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      userbps.push(UserbpJson.fromJSON(jsonarray[i]));
    }
    return userbps;
  }

  static extractDataObject = (jsonobject): Userbp => {
    return UserbpJson.fromJSON(jsonobject);
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

  static getOne = async (user, userbppk: Userbppk): Userbp => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_USERBP,
      "userbppk": UserbpJson.PKtoJSON(userbppk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadUserbps4evetype = async (user, evetypepk: Userbppk): Userbp[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Evetype,
      "evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, userbpsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": userbpsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, userbpsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": userbpsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, userbp: Userbp) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_USERBP,
      "userbp": UserbpJson.toJSON(userbp)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, userbp: Userbp) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_USERBP,
      "userbp": UserbpJson.toJSON(userbp)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, userbp: Userbp) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_USERBP,
      "userbp": UserbpJson.toJSON(userbp)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsuserbpsuper;
