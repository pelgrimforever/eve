//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Rseveusersuper
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 13.1.2022 17:48
    Author     : Franky Laseure
*/

import Rseveusersuper from './super/rseveusersuper.js';
import EveuserJson from './conversion/eveuserjson.js';

class Rseveuser extends Rseveusersuper {

    static INSERT_NEWUSER = 21;
    static UPDATE_EVEUSERPASS = 11;
    static UPDATE_EVEUSERRESET = 12;
    static SELECT_ISADMIN = 40;
    static DELETE_REGISTRATION = 31;

    static sec_newuser = async (user, eveuser: Eveuser) => {
        const postdata = {
          auth: user===null ? null : user.auth,
          operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_NEWUSER },
          eveuser: EveuserJson.toJSON(eveuser)
        }
        return await super.post(this.restservice, postdata);
    }

    static sec_updatepass = async (user, newauth) => {
        const postdata = {
          auth: user===null ? null : user.auth,
          operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_EVEUSERPASS },
          newauth: newauth
        }
        return await super.post(this.restservice, postdata);
    }

    static sec_userreset = async (user, eveuser: Eveuser) => {
        const postdata = {
          auth: user===null ? null : user.auth,
          operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_EVEUSERRESET },
          eveuser: EveuserJson.toJSON(eveuser)
        }
        return await super.post(this.restservice, postdata);
    }

    static sec_deleteregistration = async (user, eveuser: Eveuser) => {
        const postdata = {
          auth: user===null ? null : user.auth,
          operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_REGISTRATION },
          eveuser: EveuserJson.toJSON(eveuser)
        }
        return await super.post(this.restservice, postdata);
    }

    static sec_userisadmin = async (user) => {
        const postdata = {
          auth: user===null ? null : user.auth,
          operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_ISADMIN },
        }
        return await super.post(this.restservice, postdata);
    }

}

export default Rseveuser;

