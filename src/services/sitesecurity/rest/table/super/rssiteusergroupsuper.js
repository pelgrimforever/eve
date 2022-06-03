//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 1.5.2022 21:58
    Author     : Franky Laseure
*/

import Sitesecurityservice from '../../../../sitesecurityservice.js';
import { Siteusergrouppk } from '../../../../../data/sitesecurity/table/super/siteusergroupsuper.js';
import Siteusergroup from '../../../../../data/sitesecurity/table/siteusergroup.js';
import SiteusergroupJson from '../conversion/siteusergroupjson.js';
import { Siteuserpk } from '../../../../../data/sitesecurity/table/super/siteusersuper.js';
import SiteuserJson from '../conversion/siteuserjson.js';
import { Sitegrouppk } from '../../../../../data/sitesecurity/table/super/sitegroupsuper.js';
import SitegroupJson from '../conversion/sitegroupjson.js';


class Rssiteusergroupsuper extends Sitesecurityservice {	

  static restserviceselect = 'rssiteusergroup_select';
  static restserviceinsert = 'rssiteusergroup_insert';
  static restserviceupdate = 'rssiteusergroup_update';
  static restservicedelete = 'rssiteusergroup_delete';

  //SELECT OPERATIONS
  static SELECT_SITEUSERGROUP = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Siteuser = 100 + 0;
  static SELECT_Sitegroup = 100 + 1;

  //UPDATE OPERATIONS
  static UPDATE_SITEUSERGROUP = 10;

  //INSERT OPERATIONS
  static INSERT_SITEUSERGROUP = 20;

  //DELETE OPERATIONS
  static DELETE_Siteuser = 100 + 2;
  static DELETE_Sitegroup = 100 + 3;
  static DELETE_SITEUSERGROUP = 30;

  static extractDataArray = (jsonarray): Siteusergroup[] => {
    let siteusergroups: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      siteusergroups.push(SiteusergroupJson.fromJSON(jsonarray[i]));
    }
    return siteusergroups;
  }

  static extractDataObject = (jsonobject): Siteusergroup => {
    return SiteusergroupJson.fromJSON(jsonobject);
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

  static getOne = async (user, siteusergrouppk: Siteusergrouppk): Siteusergroup => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SITEUSERGROUP,
      "siteusergrouppk": SiteusergroupJson.PKtoJSON(siteusergrouppk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadSiteusergroups4siteuser = async (user, siteuserpk: Siteusergrouppk): Siteusergroup[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Siteuser,
      "siteuserpk": SiteuserJson.PKtoJSON(siteuserpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadSiteusergroups4sitegroup = async (user, sitegrouppk: Siteusergrouppk): Siteusergroup[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Sitegroup,
      "sitegrouppk": SitegroupJson.PKtoJSON(sitegrouppk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, siteusergroupsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": siteusergroupsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, siteusergroupsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": siteusergroupsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, siteusergroup: Siteusergroup) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_SITEUSERGROUP,
      "siteusergroup": SiteusergroupJson.toJSON(siteusergroup)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, siteusergroup: Siteusergroup) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_SITEUSERGROUP,
      "siteusergroup": SiteusergroupJson.toJSON(siteusergroup)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, siteusergroup: Siteusergroup) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_SITEUSERGROUP,
      "siteusergroup": SiteusergroupJson.toJSON(siteusergroup)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rssiteusergroupsuper;
