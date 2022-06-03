//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Stocktradepk } from '../../../../../data/eve/table/super/stocktradesuper.js';
import Stocktrade from '../../../../../data/eve/table/stocktrade.js';
import StocktradeJson from '../conversion/stocktradejson.js';
import { Stockpk } from '../../../../../data/eve/table/super/stocksuper.js';
import StockJson from '../conversion/stockjson.js';


class Rsstocktradesuper extends Eveservice {	

  static restserviceselect = 'rsstocktrade_select';
  static restserviceinsert = 'rsstocktrade_insert';
  static restserviceupdate = 'rsstocktrade_update';
  static restservicedelete = 'rsstocktrade_delete';

  //SELECT OPERATIONS
  static SELECT_STOCKTRADE = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Stock = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_STOCKTRADE = 10;

  //INSERT OPERATIONS
  static INSERT_STOCKTRADE = 20;

  //DELETE OPERATIONS
  static DELETE_Stock = 100 + 1;
  static DELETE_STOCKTRADE = 30;

  static extractDataArray = (jsonarray): Stocktrade[] => {
    let stocktrades: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      stocktrades.push(StocktradeJson.fromJSON(jsonarray[i]));
    }
    return stocktrades;
  }

  static extractDataObject = (jsonobject): Stocktrade => {
    return StocktradeJson.fromJSON(jsonobject);
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

  static getOne = async (user, stocktradepk: Stocktradepk): Stocktrade => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_STOCKTRADE,
      "stocktradepk": StocktradeJson.PKtoJSON(stocktradepk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadStocktrades4stock = async (user, stockpk: Stocktradepk): Stocktrade[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Stock,
      "stockpk": StockJson.PKtoJSON(stockpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, stocktradesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": stocktradesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, stocktradesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": stocktradesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, stocktrade: Stocktrade) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_STOCKTRADE,
      "stocktrade": StocktradeJson.toJSON(stocktrade)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, stocktrade: Stocktrade) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_STOCKTRADE,
      "stocktrade": StocktradeJson.toJSON(stocktrade)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, stocktrade: Stocktrade) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_STOCKTRADE,
      "stocktrade": StocktradeJson.toJSON(stocktrade)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsstocktradesuper;
