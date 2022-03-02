//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Rsshipfitorderselectedsuper
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.11.2021 17:22
    Author     : Franky Laseure
*/

//services
import Rsshipfitorderselectedsuper from './super/rsshipfitorderselectedsuper.js';
import ShipfitorderselectedJson from './conversion/shipfitorderselectedjson.js';
import ShipfitorderJson from './conversion/shipfitorderjson.js';
import OrdersJson from './conversion/ordersjson.js';

class Rsshipfitorderselected extends Rsshipfitorderselectedsuper {

    static INSERT_ORDERID = 21;
    static UPDATE_CONFIRMORDER = 11;

    static addOrder2Shipfitorder = async (user, shipfitorderpk, orderpk) => {
        const postdata = {
            auth: user!=null ? user.auth : null,
            operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_ORDERID },
            shipfitorderpk: ShipfitorderJson.PKtoJSON(shipfitorderpk),
            orderspk: OrdersJson.PKtoJSON(orderpk)
        }
        return await super.post(this.restservice, postdata);
    }

    static confirmShipfitorder = async (user, shipfitorderselectedpk, amount) => {
        const postdata = {
            auth: user!=null ? user.auth : null,
            operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_CONFIRMORDER },
            shipfitorderselectedpk: ShipfitorderselectedJson.PKtoJSON(shipfitorderselectedpk),
            amount: amount
        }
        return await super.post(this.restservice, postdata);
    }
}

export default Rsshipfitorderselected;

