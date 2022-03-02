//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in rsviewstocksuper.js
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 25.7.2021 16:36
    Author     : Franky Laseure
*/

import Rsviewstocksuper from './super/rsviewstocksuper';

class Rsviewstock extends Rsviewstocksuper {

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

export default Rsviewstock;
