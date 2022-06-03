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

    static INSERT_ADDORDERShipfit = 21;

    static orderShipfit = async (user, shipfitpk: Shipfitpk) => {
        const postdata = {
          auth: user!=null ? user.auth : null,
          operation: this.INSERT_ADDORDERShipfit,
          shipfitpk: ShipfitJson.PKtoJSON(shipfitpk)
        }
        return await super.post(this.restserviceinsert, postdata);
    }
}

export default Rsshipfit;

