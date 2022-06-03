//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Rsviewevetypeorderhistorymonthsuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 14.11.2021 16:21
    Author     : Franky Laseure
*/

import Rsviewevetypeorderhistorymonthsuper from './super/rsviewevetypeorderhistorymonthsuper';
import EvetypeJson from '../table/conversion/evetypejson.js';

class Rsviewevetypeorderhistorymonth extends Rsviewevetypeorderhistorymonthsuper {

    static SELECT_EVETYPE = 2;
    static SELECT_EVETYPEYM = 3;

    static get4evetype = async (user, evetypepk) => {
      const postdata = {
        auth: user!=null ? user.auth : null,
        operation: this.SELECT_EVETYPE,
        evetypepk: EvetypeJson.PKtoJSON(evetypepk)
      }
      return super.extractDataArray(await super.post(super.restserviceselect, postdata));
    }

    static get4evetype4lastmonth = async (user, evetypepk) => {
      const postdata = {
        auth: user!=null ? user.auth : null,
        operation: this.SELECT_EVETYPEYM,
        evetypepk: EvetypeJson.PKtoJSON(evetypepk)
      }
      return super.extractDataArray(await super.post(super.restserviceselect, postdata));
    }

}

export default Rsviewevetypeorderhistorymonth;
