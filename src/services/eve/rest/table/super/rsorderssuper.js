//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Orderspk } from '../../../../../data/eve/table/super/orderssuper.js';
import Orders from '../../../../../data/eve/table/orders.js';
import OrdersJson from '../conversion/ordersjson.js';
import { Evetypepk } from '../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../conversion/evetypejson.js';
import { Systempk } from '../../../../../data/eve/table/super/systemsuper.js';
import SystemJson from '../conversion/systemjson.js';
import { Tradecombinedsellpk } from '../../../../../data/eve/table/super/tradecombinedsellsuper.js';
import TradecombinedsellJson from '../conversion/tradecombinedselljson.js';
import { Shipfitorderselectedpk } from '../../../../../data/eve/table/super/shipfitorderselectedsuper.js';
import ShipfitorderselectedJson from '../conversion/shipfitorderselectedjson.js';
import { Tradepk } from '../../../../../data/eve/table/super/tradesuper.js';
import TradeJson from '../conversion/tradejson.js';


class Rsorderssuper extends Eveservice {	

  static restserviceselect = 'rsorders_select';
  static restserviceinsert = 'rsorders_insert';
  static restserviceupdate = 'rsorders_update';
  static restservicedelete = 'rsorders_delete';

  //SELECT OPERATIONS
  static SELECT_ORDERS = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Evetype = 100 + 0;
  static SELECT_System = 100 + 1;
  static SELECT_Tradecombinedsellbuyorderid = 100 + 2;
  static SELECT_Tradecombinedsellsellorderid = 100 + 3;
  static SELECT_Shipfitorderselected = 100 + 4;
  static SELECT_Tradesellorderid = 100 + 5;
  static SELECT_Tradebuyorderid = 100 + 6;

  //UPDATE OPERATIONS
  static UPDATE_ORDERS = 10;

  //INSERT OPERATIONS
  static INSERT_ORDERS = 20;

  //DELETE OPERATIONS
  static DELETE_Evetype = 100 + 7;
  static DELETE_System = 100 + 8;
  static DELETE_ORDERS = 30;

  static extractDataArray = (jsonarray): Orders[] => {
    let orderss: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      orderss.push(OrdersJson.fromJSON(jsonarray[i]));
    }
    return orderss;
  }

  static extractDataObject = (jsonobject): Orders => {
    return OrdersJson.fromJSON(jsonobject);
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

  static getOne = async (user, orderspk: Orderspk): Orders => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_ORDERS,
      "orderspk": OrdersJson.PKtoJSON(orderspk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadOrderss4evetype = async (user, evetypepk: Orderspk): Orders[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Evetype,
      "evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadOrderss4system = async (user, systempk: Orderspk): Orders[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_System,
      "systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadOrders4tradecombinedsellBuyorderid = async (user, tradecombinedsellBuyorderidpk: Tradecombinedsellpk): Orders[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Tradecombinedsellbuyorderid,
      "tradecombined_sellpk": TradecombinedsellJson.PKtoJSON(tradecombinedsellBuyorderidpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadOrders4tradecombinedsellSellorderid = async (user, tradecombinedsellSellorderidpk: Tradecombinedsellpk): Orders[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Tradecombinedsellsellorderid,
      "tradecombined_sellpk": TradecombinedsellJson.PKtoJSON(tradecombinedsellSellorderidpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadOrders4shipfitorderselected = async (user, shipfitorderselectedpk: Shipfitorderselectedpk): Orders[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Shipfitorderselected,
      "shipfitorderselectedpk": ShipfitorderselectedJson.PKtoJSON(shipfitorderselectedpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadOrders4tradeSellorderid = async (user, tradeSellorderidpk: Tradepk): Orders[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Tradesellorderid,
      "tradepk": TradeJson.PKtoJSON(tradeSellorderidpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadOrders4tradeBuyorderid = async (user, tradeBuyorderidpk: Tradepk): Orders[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Tradebuyorderid,
      "tradepk": TradeJson.PKtoJSON(tradeBuyorderidpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, orderssearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": orderssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, orderssearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": orderssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, orders: Orders) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_ORDERS,
      "orders": OrdersJson.toJSON(orders)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, orders: Orders) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_ORDERS,
      "orders": OrdersJson.toJSON(orders)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, orders: Orders) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_ORDERS,
      "orders": OrdersJson.toJSON(orders)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsorderssuper;
