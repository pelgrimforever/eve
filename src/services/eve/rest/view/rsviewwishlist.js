//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Rsviewwishlistsuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 16.11.2021 15:51
    Author     : Franky Laseure
*/

import Rsviewwishlistsuper from './super/rsviewwishlistsuper';

class Rsviewwishlist extends Rsviewwishlistsuper {

    static SELECT_4USER = 2;

    static get4user = async (username) => {
        const postdata = {
          operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_4USER },
          username: username
        }
        return super.extractDataArray(await super.post(this.restservice, postdata));
    }
}

export default Rsviewwishlist;
