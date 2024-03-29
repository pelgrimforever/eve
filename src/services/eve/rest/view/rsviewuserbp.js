//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Rsviewuserbpsuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 28.0.2022 15:57
    Author     : Franky Laseure
*/

import Rsviewuserbpsuper from './super/rsviewuserbpsuper';

class Rsviewuserbp extends Rsviewuserbpsuper {

    static SELECT4USER = 2;
    static SELECT4USERBP = 3;

    static get4user = async (user, username) => {
        const postdata = {
            auth: user!=null ? user.auth : null,
            operation: this.SELECT4USER,
            username: username
        }
        return this.extractDataArray(await super.post(this.restserviceselect, postdata));
    }

    static get4userbp = async (user, username, bp) => {
        const postdata = {
            auth: user!=null ? user.auth : null,
            operation: this.SELECT4USERBP,
            username: username,
            bp: bp
        }
        return this.extractDataArray(await super.post(this.restserviceselect, postdata));
    }

}

export default Rsviewuserbp;
