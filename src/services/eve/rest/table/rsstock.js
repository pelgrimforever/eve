//ProjectGenerator: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in rsstocksuper.js
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 24.7.2021 17:21
    Author     : Franky Laseure
*/

import Rsstocksuper from './super/rsstocksuper.js';
import StockJson from './conversion/stockjson.js';

class Rsstock extends Rsstocksuper {

    static UPDATE_ADDSTOCK = 11;
    static UPDATE_REMOVESTOCK = 12;

    static addstock = async (stock) => {
        const postdata = {
          operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_ADDSTOCK },
          "stock": StockJson.toJSON(stock)
        }
        return await super.post(this.restservice, postdata);
    }

    static removestock = async (stock) => {
        const postdata = {
          operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_REMOVESTOCK },
          "stock": StockJson.toJSON(stock)
        }
        return await super.post(this.restservice, postdata);
    }

}

export default Rsstock;

