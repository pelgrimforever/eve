//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in rsviewordersuper.js
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 18.6.2021 14:35
    Author     : Franky Laseure
*/

import Rsviewordersuper from './super/rsviewordersuper';
import OrdersJson from '../table/conversion/ordersjson.js';
import EvetypeJson from '../table/conversion/evetypejson.js';
import SystemJson from '../table/conversion/systemjson.js';
import RegionJson from '../table/conversion/regionjson.js';
import VieworderJson from './conversion/vieworderjson.js';
import { Orderspk } from '../../../../data/eve/table/super/orderssuper.js';

class Rsvieworder extends Rsviewordersuper {

  static SELECT_ONE = 2;
  static SELECT_EVETYPE_SELL = 3;
  static SELECT_EVETYPE_BUY = 4;
  static SELECT_LOWPRICE_SELL = 5;
  static SELECT_Wishlistorders = 7;
  static SELECT_EVETYPE_REGION_SELL = 8;

  static getone = async (user, orderid) => {
    let orderpk = new Orderspk();
    orderpk.id = orderid;
    const postdata = {
      auth: user!=null ? user.auth : null,
      operation: this.SELECT_ONE,
      orderpk: OrdersJson.PKtoJSON(orderpk)
    }
    return VieworderJson.fromJSON(await super.post(this.restserviceselect, postdata));
  }

  static getevetypesell = async (user, evetypepk) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      operation: this.SELECT_EVETYPE_SELL,
      evetypepk: EvetypeJson.PKtoJSON(evetypepk)
    }
    return super.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static getevetypebuy = async (user, evetypepk) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      operation: this.SELECT_EVETYPE_BUY,
      evetypepk: EvetypeJson.PKtoJSON(evetypepk)
    }
    return super.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static getevetypebuy = async (user, evetypepk) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      operation: this.SELECT_EVETYPE_BUY,
      evetypepk: EvetypeJson.PKtoJSON(evetypepk)
    }
    return super.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static getordersselllowprice = async (user, systempk) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      operation: this.SELECT_LOWPRICE_SELL,
      systempk: SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray_startsystem(await super.post(this.restserviceselect, postdata));
  }

  static getorders4wishlist = async (user, username) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      operation: this.SELECT_Wishlistorders,
      username: username
    }
    return super.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static getevetyperegionsell = async (user, evetypepk, regionpk) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      operation: this.SELECT_EVETYPE_REGION_SELL,
      evetypepk: EvetypeJson.PKtoJSON(evetypepk),
      regionpk: RegionJson.PKtoJSON(regionpk)
    }
    return super.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static extractDataArray_startsystem = (jsonarray): Viewtrade[] => {
    let vieworders: [] = [];
    let vieworder;
    let jsonline;
    for(let i = 0; i < jsonarray.length; i++) {
      jsonline = jsonarray[i];
      vieworder = VieworderJson.fromJSON(jsonline);
      vieworder.startsystem_jumps = jsonline.startsystem_jumps;
      vieworder.startsystem_jumpslowsec = jsonline.startsystem_jumpslowsec;
      vieworder.startsystem_jumpsnullsec = jsonline.startsystem_jumpsnullsec;
      vieworders.push(vieworder);
    }
    return vieworders;
  }
}

export default Rsvieworder;
