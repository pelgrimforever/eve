//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Rsviewtradecombinedsellsuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 27.10.2021 18:14
    Author     : Franky Laseure
*/

import Rsviewtradecombinedsellsuper from './super/rsviewtradecombinedsellsuper';
import TradecombinedJson from '../table/conversion/tradecombinedjson.js';
import SystemJson from '../table/conversion/systemjson.js';

class Rsviewtradecombinedsell extends Rsviewtradecombinedsellsuper {

  static SELECT4TRADECOMBINED = 2;
  static SELECT4TRADESYSTEMS = 3;

  static get4Tradecombined = async (user, tradecombinedpk) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      operation: this.SELECT4TRADECOMBINED,
      tradecombinedpk: TradecombinedJson.PKtoJSON(tradecombinedpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static get4Tradesystems = async (user, sell_systempk, buy_systempk) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      operation: this.SELECT4TRADESYSTEMS,
      sell_systempk: SystemJson.PKtoJSON(sell_systempk),
      buy_systempk: SystemJson.PKtoJSON(buy_systempk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }
}

export default Rsviewtradecombinedsell;
