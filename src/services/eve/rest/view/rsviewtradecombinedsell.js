//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Rsviewtradecombinedsellsuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 27.10.2021 18:14
    Author     : Franky Laseure
*/

import Rsviewtradecombinedsellsuper from './super/rsviewtradecombinedsellsuper';
import TradecombinedJson from '../table/conversion/tradecombinedjson.js';

class Rsviewtradecombinedsell extends Rsviewtradecombinedsellsuper {

  static SELECT4TRADECOMBINED = 2;

  static get4Tradecombined = async (tradecombinedpk) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT4TRADECOMBINED },
      tradecombinedpk: TradecombinedJson.PKtoJSON(tradecombinedpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewtradecombinedsell;
