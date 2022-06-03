//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Evetypepk } from '../../../../../data/eve/table/super/evetypesuper.js';
import Evetype from '../../../../../data/eve/table/evetype.js';
import EvetypeJson from '../conversion/evetypejson.js';
import { Marketgrouppk } from '../../../../../data/eve/table/super/marketgroupsuper.js';
import MarketgroupJson from '../conversion/marketgroupjson.js';
import { Typegrouppk } from '../../../../../data/eve/table/super/typegroupsuper.js';
import TypegroupJson from '../conversion/typegroupjson.js';
import { Graphicpk } from '../../../../../data/eve/table/super/graphicsuper.js';
import GraphicJson from '../conversion/graphicjson.js';
import { Wishlistpk } from '../../../../../data/eve/table/super/wishlistsuper.js';
import WishlistJson from '../conversion/wishlistjson.js';
import { Materialinputpk } from '../../../../../data/eve/table/super/materialinputsuper.js';
import MaterialinputJson from '../conversion/materialinputjson.js';
import { Bpmaterialpk } from '../../../../../data/eve/table/super/bpmaterialsuper.js';
import BpmaterialJson from '../conversion/bpmaterialjson.js';
import { Orderhistorymonthpk } from '../../../../../data/eve/table/super/orderhistorymonthsuper.js';
import OrderhistorymonthJson from '../conversion/orderhistorymonthjson.js';
import { Stockpk } from '../../../../../data/eve/table/super/stocksuper.js';
import StockJson from '../conversion/stockjson.js';
import { Orderhistorypk } from '../../../../../data/eve/table/super/orderhistorysuper.js';
import OrderhistoryJson from '../conversion/orderhistoryjson.js';
import { Shipfitmodulepk } from '../../../../../data/eve/table/super/shipfitmodulesuper.js';
import ShipfitmoduleJson from '../conversion/shipfitmodulejson.js';
import { Shipfitorderpk } from '../../../../../data/eve/table/super/shipfitordersuper.js';
import ShipfitorderJson from '../conversion/shipfitorderjson.js';
import { Tradecombinedpk } from '../../../../../data/eve/table/super/tradecombinedsuper.js';
import TradecombinedJson from '../conversion/tradecombinedjson.js';
import { Userbppk } from '../../../../../data/eve/table/super/userbpsuper.js';
import UserbpJson from '../conversion/userbpjson.js';


class Rsevetypesuper extends Eveservice {	

  static restserviceselect = 'rsevetype_select';
  static restserviceinsert = 'rsevetype_insert';
  static restserviceupdate = 'rsevetype_update';
  static restservicedelete = 'rsevetype_delete';

  //SELECT OPERATIONS
  static SELECT_EVETYPE = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Marketgroup = 100 + 0;
  static SELECT_Typegroup = 100 + 1;
  static SELECT_Graphic = 100 + 2;
  static SELECT_Wishlist = 100 + 3;
  static SELECT_Materialinput = 100 + 4;
  static SELECT_Bpmaterialbp = 100 + 5;
  static SELECT_Bpmaterialmaterial = 100 + 6;
  static SELECT_Orderhistorymonth = 100 + 7;
  static SELECT_Stock = 100 + 8;
  static SELECT_Orderhistory = 100 + 9;
  static SELECT_Shipfitmodule = 100 + 10;
  static SELECT_Shipfitorder = 100 + 11;
  static SELECT_Tradecombined = 100 + 12;
  static SELECT_Userbp = 100 + 13;

  //UPDATE OPERATIONS
  static UPDATE_EVETYPE = 10;

  //INSERT OPERATIONS
  static INSERT_EVETYPE = 20;

  //DELETE OPERATIONS
  static DELETE_Marketgroup = 100 + 14;
  static DELETE_Typegroup = 100 + 15;
  static DELETE_Graphic = 100 + 16;
  static DELETE_EVETYPE = 30;

  static extractDataArray = (jsonarray): Evetype[] => {
    let evetypes: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      evetypes.push(EvetypeJson.fromJSON(jsonarray[i]));
    }
    return evetypes;
  }

  static extractDataObject = (jsonobject): Evetype => {
    return EvetypeJson.fromJSON(jsonobject);
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

  static getOne = async (user, evetypepk: Evetypepk): Evetype => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_EVETYPE,
      "evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadEvetypes4marketgroup = async (user, marketgrouppk: Evetypepk): Evetype[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Marketgroup,
      "market_grouppk": MarketgroupJson.PKtoJSON(marketgrouppk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadEvetypes4typegroup = async (user, typegrouppk: Evetypepk): Evetype[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Typegroup,
      "typegrouppk": TypegroupJson.PKtoJSON(typegrouppk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadEvetypes4graphic = async (user, graphicpk: Evetypepk): Evetype[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Graphic,
      "graphicpk": GraphicJson.PKtoJSON(graphicpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadEvetype4wishlist = async (user, wishlistpk: Wishlistpk): Evetype[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Wishlist,
      "wishlistpk": WishlistJson.PKtoJSON(wishlistpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadEvetype4materialinput = async (user, materialinputpk: Materialinputpk): Evetype[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Materialinput,
      "materialinputpk": MaterialinputJson.PKtoJSON(materialinputpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadEvetype4bpmaterialBp = async (user, bpmaterialBppk: Bpmaterialpk): Evetype[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Bpmaterialbp,
      "bpmaterialpk": BpmaterialJson.PKtoJSON(bpmaterialBppk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadEvetype4bpmaterialMaterial = async (user, bpmaterialMaterialpk: Bpmaterialpk): Evetype[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Bpmaterialmaterial,
      "bpmaterialpk": BpmaterialJson.PKtoJSON(bpmaterialMaterialpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadEvetype4orderhistorymonth = async (user, orderhistorymonthpk: Orderhistorymonthpk): Evetype[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Orderhistorymonth,
      "order_history_monthpk": OrderhistorymonthJson.PKtoJSON(orderhistorymonthpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadEvetype4stock = async (user, stockpk: Stockpk): Evetype[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Stock,
      "stockpk": StockJson.PKtoJSON(stockpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadEvetype4orderhistory = async (user, orderhistorypk: Orderhistorypk): Evetype[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Orderhistory,
      "order_historypk": OrderhistoryJson.PKtoJSON(orderhistorypk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadEvetype4shipfitmodule = async (user, shipfitmodulepk: Shipfitmodulepk): Evetype[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Shipfitmodule,
      "shipfitmodulepk": ShipfitmoduleJson.PKtoJSON(shipfitmodulepk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadEvetype4shipfitorder = async (user, shipfitorderpk: Shipfitorderpk): Evetype[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Shipfitorder,
      "shipfitorderpk": ShipfitorderJson.PKtoJSON(shipfitorderpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadEvetype4tradecombined = async (user, tradecombinedpk: Tradecombinedpk): Evetype[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Tradecombined,
      "tradecombinedpk": TradecombinedJson.PKtoJSON(tradecombinedpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadEvetype4userbp = async (user, userbppk: Userbppk): Evetype[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Userbp,
      "userbppk": UserbpJson.PKtoJSON(userbppk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, evetypesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": evetypesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, evetypesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": evetypesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, evetype: Evetype) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_EVETYPE,
      "evetype": EvetypeJson.toJSON(evetype)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, evetype: Evetype) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_EVETYPE,
      "evetype": EvetypeJson.toJSON(evetype)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, evetype: Evetype) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_EVETYPE,
      "evetype": EvetypeJson.toJSON(evetype)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsevetypesuper;
