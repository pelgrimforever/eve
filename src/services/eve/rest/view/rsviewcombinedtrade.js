//ProjectGenerator: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in rsviewcombinedtradesuper.js
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 10.6.2021 18:46
    Author     : Franky Laseure
*/

import Rsviewcombinedtradesuper from './super/rsviewcombinedtradesuper';
import { Systempk } from '../../../../data/eve/table/super/systemsuper.js';
import SystemJson from '../table/conversion/systemjson.js';
import ViewcombinedtradeJson from './conversion/viewcombinedtradejson.js';

class Rsviewcombinedtrade extends Rsviewcombinedtradesuper {

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

  static get4_startendsystem = async (user, systempk: Systempk, startsystempk: Systempk, endsystempk: Systempk) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_STARTENDSYSTEM },
      systempk: SystemJson.PKtoJSON(systempk),
      startsystempk: SystemJson.PKtoJSON(startsystempk),
      endsystempk: SystemJson.PKtoJSON(endsystempk)
    }
    return ViewcombinedtradeJson.fromJSON(await super.post(this.restservice, postdata));
  }

  static extractDataArray_startsystem = (jsonarray): Viewcombinedtrade[] => {
    let viewcombinedtrades: [] = [];
    let viewcombinedtrade;
    let jsonline;
    for(let i = 0; i < jsonarray.length; i++) {
      jsonline = jsonarray[i];
      viewcombinedtrade = ViewcombinedtradeJson.fromJSON(jsonline);
      viewcombinedtrade.start_system = "" + jsonline.start_system;
      viewcombinedtrade.start_system_jumps = jsonline.start_system_jumps;
      viewcombinedtrades.push(viewcombinedtrade);
    }
    return viewcombinedtrades;
  }
}

export default Rsviewcombinedtrade;
