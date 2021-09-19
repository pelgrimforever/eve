//ProjectGenerator: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in rsviewstocktradesystemsuper.js
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 18.8.2021 9:31
    Author     : Franky Laseure
*/

import Rsviewstocktradesystemsuper from './super/rsviewstocktradesystemsuper';

class Rsviewstocktradesystem extends Rsviewstocktradesystemsuper {

    static SELECT_4USER = 2;

    static get4user = async (username) => {
        const postdata = {
          operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_4USER },
          username: username
        }
        return super.extractDataArray(await super.post(this.restservice, postdata));
    }
}

export default Rsviewstocktradesystem;
