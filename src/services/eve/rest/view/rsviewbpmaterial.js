//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Rsviewbpmaterialsuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 24.0.2022 17:38
    Author     : Franky Laseure
*/

import Rsviewbpmaterialsuper from './super/rsviewbpmaterialsuper';

class Rsviewbpmaterial extends Rsviewbpmaterialsuper {

  static SELECT_4BLUEPRINT = 2;

  static get4blueprint = async (user, bp) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      operation: this.SELECT_4BLUEPRINT,
      bp: bp
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewbpmaterial;
