//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in rsevetypesuper.js
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 14.5.2021 13:35
    Author     : Franky Laseure
*/

import Rsevetypesuper from './super/rsevetypesuper.js';
import EvetypeJson from './conversion/evetypejson.js';

class Rsevetype extends Rsevetypesuper {

    static UPDATE_TOGGLE_CONFIGUREDBP = 11;
    static CALCULATE_ESTIMATEDPRODUCTIONCOSTS = 12;

    static sec_toggleconfiguredbp = async (user, evetypepk) => {
        const postdata = {
            auth: user===null ? null : user.auth,
          operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_TOGGLE_CONFIGUREDBP },
            evetypepk: EvetypeJson.PKtoJSON(evetypepk)
        }
        return await super.post(this.restservice, postdata);
    }

    static sec_calculateestimatedproductioncost = async (user) => {
        const postdata = {
          auth: user===null ? null : user.auth,
          operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.CALCULATE_ESTIMATEDPRODUCTIONCOSTS }
        }
        return await super.post(this.restservice, postdata);
    }

}

export default Rsevetype;

