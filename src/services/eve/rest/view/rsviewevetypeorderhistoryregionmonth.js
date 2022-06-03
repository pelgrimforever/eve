//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Rsviewevetypeorderhistoryregionmonthsuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 11.1.2022 21:46
    Author     : Franky Laseure
*/

import Rsviewevetypeorderhistoryregionmonthsuper from './super/rsviewevetypeorderhistoryregionmonthsuper';
import EvetypeJson from '../table/conversion/evetypejson.js';

class Rsviewevetypeorderhistoryregionmonth extends Rsviewevetypeorderhistoryregionmonthsuper {

  static SELECT_EVETYPEYM = 3;

  static get4evetype4lastmonth = async (user, evetypepk) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      operation: this.SELECT_EVETYPEYM,
      evetypepk: EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewevetypeorderhistoryregionmonth;
