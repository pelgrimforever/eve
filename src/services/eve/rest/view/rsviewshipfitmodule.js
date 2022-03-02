//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Rsviewshipfitmodulesuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 18.11.2021 16:29
    Author     : Franky Laseure
*/

import Rsviewshipfitmodulesuper from './super/rsviewshipfitmodulesuper';

class Rsviewshipfitmodule extends Rsviewshipfitmodulesuper {

    static SELECT4Shipfit = 2;

    static get4shipfit = async (user, username, shipname) => {
        const postdata = {
          auth: user!=null ? user.auth : null,
          operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT4Shipfit },
          username: username,
          shipname: shipname
        }
        return super.extractDataArray(await super.post(this.restservice, postdata));
    }

}

export default Rsviewshipfitmodule;
