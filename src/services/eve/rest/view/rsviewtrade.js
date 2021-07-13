//ProjectGenerator: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in rsviewtradesuper.js
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 16.5.2021 16:45
    Author     : Franky Laseure
*/

import Rsviewtradesuper from './super/rsviewtradesuper';
import { Systempk } from '../../../../data/eve/table/super/systemsuper.js';
import SystemJson from '../table/conversion/systemjson.js';
import ViewtradeJson from './conversion/viewtradejson.js';

class Rsviewtrade extends Rsviewtradesuper {

  static SELECT_ALL_STARTSYSTEM = 2;
  static SELECT_STARTENDSYSTEM = 3;

  static getall_startsystem = async (user, systempk: Systempk) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_ALL_STARTSYSTEM },
      systempk: SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray_startsystem(await super.post(this.restservice, postdata));
  }

  static getall_startendsystem = async (user, startsystempk: Systempk, endsystempk: Systempk) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_STARTENDSYSTEM },
      startsystempk: SystemJson.PKtoJSON(startsystempk),
      endsystempk: SystemJson.PKtoJSON(endsystempk)
    }
    return this.extractDataArray_startsystem(await super.post(this.restservice, postdata));
  }

  static extractDataArray_startsystem = (jsonarray): Viewtrade[] => {
    let viewtrades: [] = [];
    let viewtrade;
    let jsonline;
    for(let i = 0; i < jsonarray.length; i++) {
      jsonline = jsonarray[i];
      viewtrade = ViewtradeJson.fromJSON(jsonline);
      viewtrade.start_system = "" + jsonline.start_system;
      viewtrade.start_system_jumps = jsonline.start_system_jumps;
      viewtrades.push(viewtrade);
    }
    return viewtrades;
  }
}

export default Rsviewtrade;
