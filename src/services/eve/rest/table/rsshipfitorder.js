//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Rsshipfitordersuper
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 19.11.2021 16:16
    Author     : Franky Laseure
*/

import Rsshipfitordersuper from './super/rsshipfitordersuper.js';

import ShipfitorderJson from './conversion/shipfitorderjson.js';

class Rsshipfitorder extends Rsshipfitordersuper {

    static UPDATE_ORDERAMOUNT = 11;

    static updateOrderaddstock = async (user, shipfitorderpk, amount) => {
        const postdata = {
          auth: user!=null ? user.auth : null,
          operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_ORDERAMOUNT },
          shipfitorderpk: ShipfitorderJson.PKtoJSON(shipfitorderpk),
          amount: amount
        }
        return await super.post(this.restservice, postdata);
    }
}

export default Rsshipfitorder;

