//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Rsviewmaterialinputavgsuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 23.0.2022 17:52
    Author     : Franky Laseure
*/

import Rsviewmaterialinputavgsuper from './super/rsviewmaterialinputavgsuper';

class Rsviewmaterialinputavg extends Rsviewmaterialinputavgsuper {

  static SELECT_4USER = 2;

  static get4user = async (user, username) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      operation: this.SELECT_4USER,
      username: username
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }
    
}

export default Rsviewmaterialinputavg;
