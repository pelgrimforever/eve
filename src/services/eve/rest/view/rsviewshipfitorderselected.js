//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Rsviewshipfitorderselectedsuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 20.11.2021 17:22
    Author     : Franky Laseure
*/

import Rsviewshipfitorderselectedsuper from './super/rsviewshipfitorderselectedsuper';

class Rsviewshipfitorderselected extends Rsviewshipfitorderselectedsuper {

    static SELECT_4USER = 2;

    static get4user = async (username) => {
        const postdata = {
          operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_4USER },
          username: username
        }
        return super.extractDataArray(await super.post(this.restservice, postdata));
    }

}

export default Rsviewshipfitorderselected;
