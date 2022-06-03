//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Categorypk } from '../../../../../data/eve/table/super/categorysuper.js';
import Category from '../../../../../data/eve/table/category.js';
import CategoryJson from '../conversion/categoryjson.js';


class Rscategorysuper extends Eveservice {	

  static restserviceselect = 'rscategory_select';
  static restserviceinsert = 'rscategory_insert';
  static restserviceupdate = 'rscategory_update';
  static restservicedelete = 'rscategory_delete';

  //SELECT OPERATIONS
  static SELECT_CATEGORY = 2;
  static SELECT_Siteusergroup = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_CATEGORY = 10;

  //INSERT OPERATIONS
  static INSERT_CATEGORY = 20;

  //DELETE OPERATIONS
  static DELETE_CATEGORY = 30;

  static extractDataArray = (jsonarray): Category[] => {
    let categorys: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      categorys.push(CategoryJson.fromJSON(jsonarray[i]));
    }
    return categorys;
  }

  static extractDataObject = (jsonobject): Category => {
    return CategoryJson.fromJSON(jsonobject);
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

  static getOne = async (user, categorypk: Categorypk): Category => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_CATEGORY,
      "categorypk": CategoryJson.PKtoJSON(categorypk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, categorysearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": categorysearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, categorysearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": categorysearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, category: Category) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_CATEGORY,
      "category": CategoryJson.toJSON(category)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, category: Category) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_CATEGORY,
      "category": CategoryJson.toJSON(category)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, category: Category) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_CATEGORY,
      "category": CategoryJson.toJSON(category)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rscategorysuper;
