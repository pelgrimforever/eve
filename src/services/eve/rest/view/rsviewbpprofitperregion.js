//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Rsviewbpprofitperregionsuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 22.1.2022 8:34
    Author     : Franky Laseure
*/

import Rsviewbpprofitperregionsuper from './super/rsviewbpprofitperregionsuper';

class Rsviewbpprofitperregion extends Rsviewbpprofitperregionsuper {

    static SELECT_LASTMONTH = 2;

    static getlastmonth = async (user) => {
        const postdata = {
            auth: user!=null ? user.auth : null,
            operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_LASTMONTH }
        }
        return this.extractDataArray(await super.post(this.restservice, postdata));
    }

}

export default Rsviewbpprofitperregion;
