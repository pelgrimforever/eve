//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Rsviewmaterialinputsuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 17.0.2022 13:34
    Author     : Franky Laseure
*/

import Rsviewmaterialinputsuper from './super/rsviewmaterialinputsuper';

class Rsviewmaterialinput extends Rsviewmaterialinputsuper {

    static SELECT_4USER = 2;

  static get4user = async (user, username) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_4USER },
      username: username
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewmaterialinput;
