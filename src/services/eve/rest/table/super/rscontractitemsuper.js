//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Contractitempk } from '../../../../../data/eve/table/super/contractitemsuper.js';
import Contractitem from '../../../../../data/eve/table/contractitem.js';
import ContractitemJson from '../conversion/contractitemjson.js';
import { Evetypepk } from '../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../conversion/evetypejson.js';
import { Contractpk } from '../../../../../data/eve/table/super/contractsuper.js';
import ContractJson from '../conversion/contractjson.js';


class Rscontractitemsuper extends Eveservice {	

  static restserviceselect = 'rscontractitem_select';
  static restserviceinsert = 'rscontractitem_insert';
  static restserviceupdate = 'rscontractitem_update';
  static restservicedelete = 'rscontractitem_delete';

  //SELECT OPERATIONS
  static SELECT_CONTRACTITEM = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Evetype = 100 + 0;
  static SELECT_Contract = 100 + 1;

  //UPDATE OPERATIONS
  static UPDATE_CONTRACTITEM = 10;

  //INSERT OPERATIONS
  static INSERT_CONTRACTITEM = 20;

  //DELETE OPERATIONS
  static DELETE_Evetype = 100 + 2;
  static DELETE_Contract = 100 + 3;
  static DELETE_CONTRACTITEM = 30;

  static extractDataArray = (jsonarray): Contractitem[] => {
    let contractitems: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      contractitems.push(ContractitemJson.fromJSON(jsonarray[i]));
    }
    return contractitems;
  }

  static extractDataObject = (jsonobject): Contractitem => {
    return ContractitemJson.fromJSON(jsonobject);
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

  static getOne = async (user, contractitempk: Contractitempk): Contractitem => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_CONTRACTITEM,
      "contractitempk": ContractitemJson.PKtoJSON(contractitempk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadContractitems4evetype = async (user, evetypepk: Contractitempk): Contractitem[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Evetype,
      "evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadContractitems4contract = async (user, contractpk: Contractitempk): Contractitem[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Contract,
      "contractpk": ContractJson.PKtoJSON(contractpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, contractitemsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": contractitemsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, contractitemsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": contractitemsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, contractitem: Contractitem) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_CONTRACTITEM,
      "contractitem": ContractitemJson.toJSON(contractitem)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, contractitem: Contractitem) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_CONTRACTITEM,
      "contractitem": ContractitemJson.toJSON(contractitem)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, contractitem: Contractitem) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_CONTRACTITEM,
      "contractitem": ContractitemJson.toJSON(contractitem)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rscontractitemsuper;
