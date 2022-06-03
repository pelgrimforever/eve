//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Tradecombinedsellpk } from '../../../../../data/eve/table/super/tradecombinedsellsuper.js';
import Tradecombinedsell from '../../../../../data/eve/table/tradecombinedsell.js';
import TradecombinedsellJson from '../conversion/tradecombinedselljson.js';
import { Orderspk } from '../../../../../data/eve/table/super/orderssuper.js';
import OrdersJson from '../conversion/ordersjson.js';
import { Tradecombinedpk } from '../../../../../data/eve/table/super/tradecombinedsuper.js';
import TradecombinedJson from '../conversion/tradecombinedjson.js';


class Rstradecombinedsellsuper extends Eveservice {	

  static restserviceselect = 'rstradecombined_sell_select';
  static restserviceinsert = 'rstradecombined_sell_insert';
  static restserviceupdate = 'rstradecombined_sell_update';
  static restservicedelete = 'rstradecombined_sell_delete';

  //SELECT OPERATIONS
  static SELECT_TRADECOMBINEDSELL = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Ordersbuyorderid = 100 + 0;
  static SELECT_Orderssellorderid = 100 + 1;
  static SELECT_Tradecombined = 100 + 2;

  //UPDATE OPERATIONS
  static UPDATE_TRADECOMBINEDSELL = 10;

  //INSERT OPERATIONS
  static INSERT_TRADECOMBINEDSELL = 20;

  //DELETE OPERATIONS
  static DELETE_Ordersbuyorderid = 100 + 3;
  static DELETE_Orderssellorderid = 100 + 4;
  static DELETE_Tradecombined = 100 + 5;
  static DELETE_TRADECOMBINEDSELL = 30;

  static extractDataArray = (jsonarray): Tradecombinedsell[] => {
    let tradecombinedsells: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      tradecombinedsells.push(TradecombinedsellJson.fromJSON(jsonarray[i]));
    }
    return tradecombinedsells;
  }

  static extractDataObject = (jsonobject): Tradecombinedsell => {
    return TradecombinedsellJson.fromJSON(jsonobject);
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

  static getOne = async (user, tradecombinedsellpk: Tradecombinedsellpk): Tradecombinedsell => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_TRADECOMBINEDSELL,
      "tradecombined_sellpk": TradecombinedsellJson.PKtoJSON(tradecombinedsellpk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadTradecombinedsells4ordersBuyorderid = async (user, orderspk: Tradecombinedsellpk): Tradecombinedsell[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Ordersbuyorderid,
      "orderspk": OrdersJson.PKtoJSON(orderspk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadTradecombinedsells4ordersSellorderid = async (user, orderspk: Tradecombinedsellpk): Tradecombinedsell[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Orderssellorderid,
      "orderspk": OrdersJson.PKtoJSON(orderspk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadTradecombinedsells4tradecombined = async (user, tradecombinedpk: Tradecombinedsellpk): Tradecombinedsell[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Tradecombined,
      "tradecombinedpk": TradecombinedJson.PKtoJSON(tradecombinedpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, tradecombinedsellsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": tradecombinedsellsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, tradecombinedsellsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": tradecombinedsellsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, tradecombinedsell: Tradecombinedsell) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_TRADECOMBINEDSELL,
      "tradecombined_sell": TradecombinedsellJson.toJSON(tradecombinedsell)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, tradecombinedsell: Tradecombinedsell) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_TRADECOMBINEDSELL,
      "tradecombined_sell": TradecombinedsellJson.toJSON(tradecombinedsell)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, tradecombinedsell: Tradecombinedsell) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_TRADECOMBINEDSELL,
      "tradecombined_sell": TradecombinedsellJson.toJSON(tradecombinedsell)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rstradecombinedsellsuper;
