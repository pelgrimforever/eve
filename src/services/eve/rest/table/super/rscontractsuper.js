//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Contractpk } from '../../../../../data/eve/table/super/contractsuper.js';
import Contract from '../../../../../data/eve/table/contract.js';
import ContractJson from '../conversion/contractjson.js';


class Rscontractsuper extends Eveservice {	

  static restserviceselect = 'rscontract_select';
  static restserviceinsert = 'rscontract_insert';
  static restserviceupdate = 'rscontract_update';
  static restservicedelete = 'rscontract_delete';

  //SELECT OPERATIONS
  static SELECT_CONTRACT = 2;
  static SELECT_Siteusergroup = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_CONTRACT = 10;

  //INSERT OPERATIONS
  static INSERT_CONTRACT = 20;

  //DELETE OPERATIONS
  static DELETE_CONTRACT = 30;

  static extractDataArray = (jsonarray): Contract[] => {
    let contracts: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      contracts.push(ContractJson.fromJSON(jsonarray[i]));
    }
    return contracts;
  }

  static extractDataObject = (jsonobject): Contract => {
    return ContractJson.fromJSON(jsonobject);
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

  static getOne = async (user, contractpk: Contractpk): Contract => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_CONTRACT,
      "contractpk": ContractJson.PKtoJSON(contractpk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, contractsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": contractsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, contractsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": contractsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, contract: Contract) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_CONTRACT,
      "contract": ContractJson.toJSON(contract)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, contract: Contract) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_CONTRACT,
      "contract": ContractJson.toJSON(contract)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, contract: Contract) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_CONTRACT,
      "contract": ContractJson.toJSON(contract)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rscontractsuper;
