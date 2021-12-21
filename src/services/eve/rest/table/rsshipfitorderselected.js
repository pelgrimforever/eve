//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Rsshipfitorderselectedsuper
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.11.2021 17:22
    Author     : Franky Laseure
*/

//services
import Rsshipfitorderselectedsuper from './super/rsshipfitorderselectedsuper.js';
import ShipfitorderJson from './conversion/shipfitorderjson.js';
import OrdersJson from './conversion/ordersjson.js';

class Rsshipfitorderselected extends Rsshipfitorderselectedsuper {

    static INSERT_ORDERID = 21;

    static addOrder2Shipfitorder = async (shipfitorderpk, orderpk) => {
        const postdata = {
            operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_ORDERID },
            shipfitorderpk: ShipfitorderJson.PKtoJSON(shipfitorderpk),
            orderspk: OrdersJson.PKtoJSON(orderpk)
        }
        return await super.post(this.restservice, postdata);
    }

}

export default Rsshipfitorderselected;

