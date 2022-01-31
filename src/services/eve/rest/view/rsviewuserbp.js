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

    static get4user = async (username) => {
        const postdata = {
            operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT4USER },
            username: username
        }
        return this.extractDataArray(await super.post(this.restservice, postdata));
    }

}

export default Rsviewuserbp;
