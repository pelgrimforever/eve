//ProjectGenerator: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in rstradesuper.js
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 14.5.2021 13:35
    Author     : Franky Laseure
*/

import Rstradesuper from './super/rstradesuper.js';
import { Tradepk } from '../../../../data/eve/table/super/tradesuper.js';
import TradeJson from './conversion/tradejson.js';

class Rstrade extends Rstradesuper {

    static UPDATE_TRADING = 12;

    static executetrade = async (tradepk: Tradepk, volume) => {
        const postdata = {
          operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_TRADING },
          "tradepk": TradeJson.PKtoJSON(tradepk),
          "volume": volume,
        }
        return await super.post(this.restservice, postdata);
    }
}

export default Rstrade;

