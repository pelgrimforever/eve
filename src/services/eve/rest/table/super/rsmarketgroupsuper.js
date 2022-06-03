//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Marketgrouppk } from '../../../../../data/eve/table/super/marketgroupsuper.js';
import Marketgroup from '../../../../../data/eve/table/marketgroup.js';
import MarketgroupJson from '../conversion/marketgroupjson.js';


class Rsmarketgroupsuper extends Eveservice {	

  static restserviceselect = 'rsmarket_group_select';
  static restserviceinsert = 'rsmarket_group_insert';
  static restserviceupdate = 'rsmarket_group_update';
  static restservicedelete = 'rsmarket_group_delete';

  //SELECT OPERATIONS
  static SELECT_MARKETGROUP = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Marketgroupparentid = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_MARKETGROUP = 10;

  //INSERT OPERATIONS
  static INSERT_MARKETGROUP = 20;

  //DELETE OPERATIONS
  static DELETE_Marketgroupparentid = 100 + 1;
  static DELETE_MARKETGROUP = 30;

  static extractDataArray = (jsonarray): Marketgroup[] => {
    let marketgroups: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      marketgroups.push(MarketgroupJson.fromJSON(jsonarray[i]));
    }
    return marketgroups;
  }

  static extractDataObject = (jsonobject): Marketgroup => {
    return MarketgroupJson.fromJSON(jsonobject);
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

  static getOne = async (user, marketgrouppk: Marketgrouppk): Marketgroup => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_MARKETGROUP,
      "market_grouppk": MarketgroupJson.PKtoJSON(marketgrouppk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadMarketgroups4marketgroupParentid = async (user, marketgrouppk: Marketgrouppk): Marketgroup[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Marketgroupparentid,
      "market_grouppk": MarketgroupJson.PKtoJSON(marketgrouppk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, marketgroupsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": marketgroupsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, marketgroupsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": marketgroupsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, marketgroup: Marketgroup) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_MARKETGROUP,
      "market_group": MarketgroupJson.toJSON(marketgroup)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, marketgroup: Marketgroup) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_MARKETGROUP,
      "market_group": MarketgroupJson.toJSON(marketgroup)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, marketgroup: Marketgroup) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_MARKETGROUP,
      "market_group": MarketgroupJson.toJSON(marketgroup)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsmarketgroupsuper;
