//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Tradepk } from '../../../../../data/eve/table/super/tradesuper.js';
import Trade from '../../../../../data/eve/table/trade.js';
import TradeJson from '../conversion/tradejson.js';
import { Orderspk } from '../../../../../data/eve/table/super/orderssuper.js';
import OrdersJson from '../conversion/ordersjson.js';


class Rstradesuper extends Eveservice {	

  static restserviceselect = 'rstrade_select';
  static restserviceinsert = 'rstrade_insert';
  static restserviceupdate = 'rstrade_update';
  static restservicedelete = 'rstrade_delete';

  //SELECT OPERATIONS
  static SELECT_TRADE = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Orderssellorderid = 100 + 0;
  static SELECT_Ordersbuyorderid = 100 + 1;

  //UPDATE OPERATIONS
  static UPDATE_TRADE = 10;

  //INSERT OPERATIONS
  static INSERT_TRADE = 20;

  //DELETE OPERATIONS
  static DELETE_Orderssellorderid = 100 + 2;
  static DELETE_Ordersbuyorderid = 100 + 3;
  static DELETE_TRADE = 30;

  static extractDataArray = (jsonarray): Trade[] => {
    let trades: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      trades.push(TradeJson.fromJSON(jsonarray[i]));
    }
    return trades;
  }

  static extractDataObject = (jsonobject): Trade => {
    return TradeJson.fromJSON(jsonobject);
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

  static getOne = async (user, tradepk: Tradepk): Trade => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_TRADE,
      "tradepk": TradeJson.PKtoJSON(tradepk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadTrades4ordersSellorderid = async (user, orderspk: Tradepk): Trade[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Orderssellorderid,
      "orderspk": OrdersJson.PKtoJSON(orderspk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadTrades4ordersBuyorderid = async (user, orderspk: Tradepk): Trade[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Ordersbuyorderid,
      "orderspk": OrdersJson.PKtoJSON(orderspk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, tradesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": tradesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, tradesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": tradesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, trade: Trade) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_TRADE,
      "trade": TradeJson.toJSON(trade)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, trade: Trade) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_TRADE,
      "trade": TradeJson.toJSON(trade)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, trade: Trade) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_TRADE,
      "trade": TradeJson.toJSON(trade)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rstradesuper;
