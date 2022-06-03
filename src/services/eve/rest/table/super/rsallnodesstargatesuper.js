//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Allnodesstargatepk } from '../../../../../data/eve/table/super/allnodesstargatesuper.js';
import Allnodesstargate from '../../../../../data/eve/table/allnodesstargate.js';
import AllnodesstargateJson from '../conversion/allnodesstargatejson.js';


class Rsallnodesstargatesuper extends Eveservice {	

  static restserviceselect = 'rsallnodes_stargate_select';
  static restserviceinsert = 'rsallnodes_stargate_insert';
  static restserviceupdate = 'rsallnodes_stargate_update';
  static restservicedelete = 'rsallnodes_stargate_delete';

  //SELECT OPERATIONS
  static SELECT_ALLNODESSTARGATE = 2;
  static SELECT_Siteusergroup = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_ALLNODESSTARGATE = 10;

  //INSERT OPERATIONS
  static INSERT_ALLNODESSTARGATE = 20;

  //DELETE OPERATIONS
  static DELETE_ALLNODESSTARGATE = 30;

  static extractDataArray = (jsonarray): Allnodesstargate[] => {
    let allnodesstargates: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      allnodesstargates.push(AllnodesstargateJson.fromJSON(jsonarray[i]));
    }
    return allnodesstargates;
  }

  static extractDataObject = (jsonobject): Allnodesstargate => {
    return AllnodesstargateJson.fromJSON(jsonobject);
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

  static getOne = async (user, allnodesstargatepk: Allnodesstargatepk): Allnodesstargate => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_ALLNODESSTARGATE,
      "allnodes_stargatepk": AllnodesstargateJson.PKtoJSON(allnodesstargatepk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, allnodesstargatesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": allnodesstargatesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, allnodesstargatesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": allnodesstargatesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, allnodesstargate: Allnodesstargate) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_ALLNODESSTARGATE,
      "allnodes_stargate": AllnodesstargateJson.toJSON(allnodesstargate)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, allnodesstargate: Allnodesstargate) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_ALLNODESSTARGATE,
      "allnodes_stargate": AllnodesstargateJson.toJSON(allnodesstargate)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, allnodesstargate: Allnodesstargate) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_ALLNODESSTARGATE,
      "allnodes_stargate": AllnodesstargateJson.toJSON(allnodesstargate)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsallnodesstargatesuper;
