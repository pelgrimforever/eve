//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Rsviewevetypeorderhistorysuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 13.11.2021 18:30
    Author     : Franky Laseure
*/

import Rsviewevetypeorderhistorysuper from './super/rsviewevetypeorderhistorysuper';
import EvetypeJson from '../table/conversion/evetypejson.js';

class Rsviewevetypeorderhistory extends Rsviewevetypeorderhistorysuper {

    static SELECT_EVETYPE = 2;

    static get4evetype = async (evetypepk) => {
      const postdata = {
        operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_EVETYPE },
        evetypepk: EvetypeJson.PKtoJSON(evetypepk)
      }
      return super.extractDataArray(await super.post(super.restservice, postdata));
    }
}

export default Rsviewevetypeorderhistory;
