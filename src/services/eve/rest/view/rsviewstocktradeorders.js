//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in rsviewstocktradeorderssuper.js
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 18.8.2021 9:39
    Author     : Franky Laseure
*/

import Rsviewstocktradeorderssuper from './super/rsviewstocktradeorderssuper';

class Rsviewstocktradeorders extends Rsviewstocktradeorderssuper {

    static SELECT_4USERNAME_SYSTEM = 2;

    static get4stocktrade = async (stocktradesystem) => {
        const postdata = {
          operation: this.SELECT_4USERNAME_SYSTEM,
          username: stocktradesystem.username,
          system: stocktradesystem.id
        }
        return super.extractDataArray(await super.post(this.restserviceselect, postdata));
    }

}

export default Rsviewstocktradeorders;
