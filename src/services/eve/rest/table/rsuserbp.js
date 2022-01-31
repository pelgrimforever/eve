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

    static addbp = async (userbp) => {
        const postdata = {
            operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_ADDBP },
            userbp: UserbpJson.toJSON(userbp)
        }
        return await super.post(this.restservice, postdata);
    }

    static updateproperties = async (userbp) => {
        const postdata = {
          operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_PROPERTIES },
          userbp: UserbpJson.toJSON(userbp)
        }
        return await super.post(this.restservice, postdata);
    }

}

export default Rsuserbp;

