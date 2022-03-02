//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Rsviewshipfitordersuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 19.11.2021 16:16
    Author     : Franky Laseure
*/

import Rsviewshipfitordersuper from './super/rsviewshipfitordersuper';

class Rsviewshipfitorder extends Rsviewshipfitordersuper {

    static SELECT_4USER = 2;

    static get4user = async (user, username) => {
        const postdata = {
          auth: user!=null ? user.auth : null,
          operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_4USER },
          username: username
        }
        return super.extractDataArray(await super.post(this.restservice, postdata));
    }
}

export default Rsviewshipfitorder;
