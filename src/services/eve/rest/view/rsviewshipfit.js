//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Rsviewshipfitsuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 17.11.2021 15:41
    Author     : Franky Laseure
*/

import Rsviewshipfitsuper from './super/rsviewshipfitsuper';

class Rsviewshipfit extends Rsviewshipfitsuper {

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

export default Rsviewshipfit;
