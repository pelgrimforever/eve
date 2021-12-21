//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Rsshipfitsuper
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 17.11.2021 15:28
    Author     : Franky Laseure
*/

import Rsshipfitsuper from './super/rsshipfitsuper.js';

import ShipfitJson from './conversion/shipfitjson.js';

class Rsshipfit extends Rsshipfitsuper {

    static SELECT_ADDORDERShipfit = 50;

    static orderShipfit = async (shipfitpk: Shipfitpk) => {
        const postdata = {
          operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_ADDORDERShipfit },
          "shipfitpk": ShipfitJson.PKtoJSON(shipfitpk)
        }
        return await super.post(this.restservice, postdata);
    }
}

export default Rsshipfit;

