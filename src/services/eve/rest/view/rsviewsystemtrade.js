//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in rsviewsystemtradesuper.js
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 29.5.2021 13:26
    Author     : Franky Laseure
*/

import Rsviewsystemtradesuper from './super/rsviewsystemtradesuper';
import { Systempk } from '../../../../data/eve/table/super/systemsuper.js';
import SystemJson from '../table/conversion/systemjson.js';
import ViewsystemtradeJson from './conversion/viewsystemtradejson.js';

class Rsviewsystemtrade extends Rsviewsystemtradesuper {

  static SELECT_ALL_STARTSYSTEM = 2;

  static getall_startsystem = async (user, systempk: Systempk) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_ALL_STARTSYSTEM },
      systempk: SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray_startsystem(await super.post(this.restservice, postdata));
  }

  static extractDataArray_startsystem = (jsonarray): Viewsystemtrade[] => {
    let viewsystemtrades: [] = [];
    let viewsystemtrade;
    let jsonline;
    for(let i = 0; i < jsonarray.length; i++) {
      jsonline = jsonarray[i];
      viewsystemtrade = ViewsystemtradeJson.fromJSON(jsonline);
      viewsystemtrade.start_system = "" + jsonline.start_system;
      viewsystemtrade.start_system_jumps = jsonline.start_system_jumps;
      viewsystemtrades.push(viewsystemtrade);
    }
    return viewsystemtrades;
  }
}

export default Rsviewsystemtrade;
