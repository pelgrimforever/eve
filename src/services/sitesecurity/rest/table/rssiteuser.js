//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in rssiteusersuper.js
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 14.5.2021 13:42
    Author     : Franky Laseure
*/

import Rssiteusersuper from './super/rssiteusersuper.js';

class Rssiteuser extends Rssiteusersuper {
    static SELECT_AUTHENTICATE = 9;

    static authenticate = async (data): Siteuser => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_AUTHENTICATE },
      "data": data
    }
    return super.extractDataObject(await super.post(super.restservice, postdata));
    }
}

export default Rssiteuser;

