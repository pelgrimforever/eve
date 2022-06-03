//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Rsmaterialinputsuper
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 17.0.2022 13:37
    Author     : Franky Laseure
*/

import Rsmaterialinputsuper from './super/rsmaterialinputsuper.js';
import EvetypeJson from './conversion/evetypejson.js';

class Rsmaterialinput extends Rsmaterialinputsuper {

    static UPDATE_MATERIALUSAGE = 11;

    static usematerial = async (user, username, evetypepk, amount) => {
        const postdata = {
            auth: user!=null ? user.auth : null,
            operation: this.UPDATE_MATERIALUSAGE,
            username: username,
            evetypepk: EvetypeJson.PKtoJSON(evetypepk),
            amount: amount
        }
        return await super.post(this.restserviceupdate, postdata);
    }


}

export default Rsmaterialinput;

