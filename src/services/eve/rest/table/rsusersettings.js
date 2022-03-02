//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Rsusersettingssuper
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 25.9.2021 14:57
    Author     : Franky Laseure
*/

import Rsusersettingssuper from './super/rsusersettingssuper.js';

class Rsusersettings extends Rsusersettingssuper {
    static SELECT_4USER = 40;

    static loadUsersettingss4user = async (user, username): Usersettings[] => {
        const postdata = {
          auth: user!=null ? user.auth : null,
          operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_4USER },
          username: username
        }
        return this.extractDataArray(await super.post(this.restservice, postdata));
    }
}

export default Rsusersettings;

