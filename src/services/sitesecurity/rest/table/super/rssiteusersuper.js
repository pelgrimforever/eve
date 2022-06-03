//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 1.5.2022 21:58
    Author     : Franky Laseure
*/

import Sitesecurityservice from '../../../../sitesecurityservice.js';
import { Siteuserpk } from '../../../../../data/sitesecurity/table/super/siteusersuper.js';
import Siteuser from '../../../../../data/sitesecurity/table/siteuser.js';
import SiteuserJson from '../conversion/siteuserjson.js';
import { Siteusergrouppk } from '../../../../../data/sitesecurity/table/super/siteusergroupsuper.js';
import SiteusergroupJson from '../conversion/siteusergroupjson.js';


class Rssiteusersuper extends Sitesecurityservice {	

  static restserviceselect = 'rssiteuser_select';
  static restserviceinsert = 'rssiteuser_insert';
  static restserviceupdate = 'rssiteuser_update';
  static restservicedelete = 'rssiteuser_delete';

  //SELECT OPERATIONS
  static SELECT_SITEUSER = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Siteusergroup = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_SITEUSER = 10;

  //INSERT OPERATIONS
  static INSERT_SITEUSER = 20;

  //DELETE OPERATIONS
  static DELETE_SITEUSER = 30;

  static extractDataArray = (jsonarray): Siteuser[] => {
    let siteusers: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      siteusers.push(SiteuserJson.fromJSON(jsonarray[i]));
    }
    return siteusers;
  }

  static extractDataObject = (jsonobject): Siteuser => {
    return SiteuserJson.fromJSON(jsonobject);
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

  static getOne = async (user, siteuserpk: Siteuserpk): Siteuser => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SITEUSER,
      "siteuserpk": SiteuserJson.PKtoJSON(siteuserpk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadSiteuser4siteusergroup = async (user, siteusergrouppk: Siteusergrouppk): Siteuser[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Siteusergroup,
      "siteusergrouppk": SiteusergroupJson.PKtoJSON(siteusergrouppk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, siteusersearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": siteusersearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, siteusersearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": siteusersearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, siteuser: Siteuser) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_SITEUSER,
      "siteuser": SiteuserJson.toJSON(siteuser)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, siteuser: Siteuser) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_SITEUSER,
      "siteuser": SiteuserJson.toJSON(siteuser)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, siteuser: Siteuser) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_SITEUSER,
      "siteuser": SiteuserJson.toJSON(siteuser)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rssiteusersuper;
