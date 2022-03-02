//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Rsviewcontractitemsuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 9.0.2022 7:52
    Author     : Franky Laseure
*/

import Rsviewcontractitemsuper from './super/rsviewcontractitemsuper';
import ContractJson from '../table/conversion/contractjson.js';

class Rsviewcontractitem extends Rsviewcontractitemsuper {

    static SELECT_CONTRACT = 2;

    static getcontract = async (user, contractpk) => {
        const postdata = {
            auth: user!=null ? user.auth : null,
            operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_CONTRACT },
            contractpk: ContractJson.PKtoJSON(contractpk)
        }
        return this.extractDataArray(await super.post(this.restservice, postdata));
    }
}

export default Rsviewcontractitem;
