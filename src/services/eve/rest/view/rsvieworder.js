//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in rsviewordersuper.js
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 18.6.2021 14:35
    Author     : Franky Laseure
*/

import Rsviewordersuper from './super/rsviewordersuper';
import VieworderJson from './conversion/vieworderjson.js';
import { Orderspk } from '../../../../data/eve/table/super/orderssuper.js';

class Rsvieworder extends Rsviewordersuper {

  static SELECT_ONE = 2;
  static SELECT_EVETYPE_SELL = 3;
  static SELECT_EVETYPE_BUY = 4;

  static getone = async (orderid) => {
    let orderpk = new Orderspk();
    orderpk.id = orderid;
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_ONE },
      "orderpk": orderpk
    }
    return VieworderJson.fromJSON(await super.post(this.restservice, postdata));
  }

  static getevetypesell = async (evetypepk) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_EVETYPE_SELL },
      evetypepk: evetypepk
    }
    return super.extractDataArray(await super.post(this.restservice, postdata));
  }

  static getevetypebuy = async (evetypepk) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_EVETYPE_BUY },
      evetypepk: evetypepk
    }
    return super.extractDataArray(await super.post(this.restservice, postdata));
  }
}

export default Rsvieworder;
