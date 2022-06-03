//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 1.5.2022 21:58
    Author     : Franky Laseure
*/

import Sitesecurityservice from '../../../../sitesecurityservice.js';
import { Sitegrouppk } from '../../../../../data/sitesecurity/table/super/sitegroupsuper.js';
import Sitegroup from '../../../../../data/sitesecurity/table/sitegroup.js';
import SitegroupJson from '../conversion/sitegroupjson.js';
import { Siteusergrouppk } from '../../../../../data/sitesecurity/table/super/siteusergroupsuper.js';
import SiteusergroupJson from '../conversion/siteusergroupjson.js';


class Rssitegroupsuper extends Sitesecurityservice {	

  static restserviceselect = 'rssitegroup_select';
  static restserviceinsert = 'rssitegroup_insert';
  static restserviceupdate = 'rssitegroup_update';
  static restservicedelete = 'rssitegroup_delete';

  //SELECT OPERATIONS
  static SELECT_SITEGROUP = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Siteusergroup = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_SITEGROUP = 10;

  //INSERT OPERATIONS
  static INSERT_SITEGROUP = 20;

  //DELETE OPERATIONS
  static DELETE_SITEGROUP = 30;

  static extractDataArray = (jsonarray): Sitegroup[] => {
    let sitegroups: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      sitegroups.push(SitegroupJson.fromJSON(jsonarray[i]));
    }
    return sitegroups;
  }

  static extractDataObject = (jsonobject): Sitegroup => {
    return SitegroupJson.fromJSON(jsonobject);
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

  static getOne = async (user, sitegrouppk: Sitegrouppk): Sitegroup => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SITEGROUP,
      "sitegrouppk": SitegroupJson.PKtoJSON(sitegrouppk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadSitegroup4siteusergroup = async (user, siteusergrouppk: Siteusergrouppk): Sitegroup[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Siteusergroup,
      "siteusergrouppk": SiteusergroupJson.PKtoJSON(siteusergrouppk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, sitegroupsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": sitegroupsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, sitegroupsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": sitegroupsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, sitegroup: Sitegroup) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_SITEGROUP,
      "sitegroup": SitegroupJson.toJSON(sitegroup)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, sitegroup: Sitegroup) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_SITEGROUP,
      "sitegroup": SitegroupJson.toJSON(sitegroup)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, sitegroup: Sitegroup) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_SITEGROUP,
      "sitegroup": SitegroupJson.toJSON(sitegroup)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rssitegroupsuper;
