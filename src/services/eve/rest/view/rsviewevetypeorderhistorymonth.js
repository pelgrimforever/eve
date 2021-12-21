//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Rsviewevetypeorderhistorymonthsuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 14.11.2021 16:21
    Author     : Franky Laseure
*/

import Rsviewevetypeorderhistorymonthsuper from './super/rsviewevetypeorderhistorymonthsuper';

class Rsviewevetypeorderhistorymonth extends Rsviewevetypeorderhistorymonthsuper {

    static SELECT_EVETYPE = 2;
    static get4evetype = async (evetypepk) => {
      const postdata = {
        operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_EVETYPE },
        evetypepk: evetypepk
      }
      return super.extractDataArray(await super.post(super.restservice, postdata));
    }
}

export default Rsviewevetypeorderhistorymonth;
