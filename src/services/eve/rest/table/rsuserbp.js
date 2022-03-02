//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Rsuserbpsuper
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 28.0.2022 15:59
    Author     : Franky Laseure
*/

import Rsuserbpsuper from './super/rsuserbpsuper.js';
import EvetypeJson from './conversion/evetypejson.js';
import UserbpJson from './conversion/userbpjson.js';

class Rsuserbp extends Rsuserbpsuper {

    static INSERT_ADDBP = 21;
    static UPDATE_PROPERTIES = 11;
    static UPDATE_RUNBP = 12;

    static addbp = async (user, userbp) => {
        const postdata = {
            auth: user!=null ? user.auth : null,
            operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_ADDBP },
            userbp: UserbpJson.toJSON(userbp)
        }
        return await super.post(this.restservice, postdata);
    }

    static updateproperties = async (user, userbp) => {
        const postdata = {
          auth: user!=null ? user.auth : null,
          operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_PROPERTIES },
          userbp: UserbpJson.toJSON(userbp)
        }
        return await super.post(this.restservice, postdata);
    }

    static runbp = async (user, userbppk, amount) => {
        const postdata = {
          auth: user!=null ? user.auth : null,
          operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_RUNBP },
          userbppk: UserbpJson.PKtoJSON(userbppk),
          amount: amount
        }
        return await super.post(this.restservice, postdata);
    }

}

export default Rsuserbp;

