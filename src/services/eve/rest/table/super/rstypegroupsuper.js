//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Typegrouppk } from '../../../../../data/eve/table/super/typegroupsuper.js';
import Typegroup from '../../../../../data/eve/table/typegroup.js';
import TypegroupJson from '../conversion/typegroupjson.js';
import { Categorypk } from '../../../../../data/eve/table/super/categorysuper.js';
import CategoryJson from '../conversion/categoryjson.js';


class Rstypegroupsuper extends Eveservice {	

  static restserviceselect = 'rstypegroup_select';
  static restserviceinsert = 'rstypegroup_insert';
  static restserviceupdate = 'rstypegroup_update';
  static restservicedelete = 'rstypegroup_delete';

  //SELECT OPERATIONS
  static SELECT_TYPEGROUP = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Category = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_TYPEGROUP = 10;

  //INSERT OPERATIONS
  static INSERT_TYPEGROUP = 20;

  //DELETE OPERATIONS
  static DELETE_Category = 100 + 1;
  static DELETE_TYPEGROUP = 30;

  static extractDataArray = (jsonarray): Typegroup[] => {
    let typegroups: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      typegroups.push(TypegroupJson.fromJSON(jsonarray[i]));
    }
    return typegroups;
  }

  static extractDataObject = (jsonobject): Typegroup => {
    return TypegroupJson.fromJSON(jsonobject);
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

  static getOne = async (user, typegrouppk: Typegrouppk): Typegroup => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_TYPEGROUP,
      "typegrouppk": TypegroupJson.PKtoJSON(typegrouppk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadTypegroups4category = async (user, categorypk: Typegrouppk): Typegroup[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Category,
      "categorypk": CategoryJson.PKtoJSON(categorypk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, typegroupsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": typegroupsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, typegroupsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": typegroupsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, typegroup: Typegroup) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_TYPEGROUP,
      "typegroup": TypegroupJson.toJSON(typegroup)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, typegroup: Typegroup) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_TYPEGROUP,
      "typegroup": TypegroupJson.toJSON(typegroup)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, typegroup: Typegroup) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_TYPEGROUP,
      "typegroup": TypegroupJson.toJSON(typegroup)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rstypegroupsuper;
