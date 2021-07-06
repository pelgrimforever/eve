//ProjectGenerator: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in rsviewsystemtradeordersuper.js
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 4.6.2021 14:41
    Author     : Franky Laseure
*/

import Rsviewsystemtradeordersuper from './super/rsviewsystemtradeordersuper';
import { Systemtradepk } from '../../../../data/eve/table/super/systemtradesuper.js';
import SystemtradeJson from '../table/conversion/systemtradejson.js';
import ViewsystemtradeJson from './conversion/viewsystemtradejson.js';

class Rsviewsystemtradeorder extends Rsviewsystemtradeordersuper {

  static SELECT_ALL4SYSTEMTRADE = 2;

  static getall4systemtrace = async (systemtradepk: Systemtradepk) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_ALL4SYSTEMTRADE },
      systemtradepk: SystemtradeJson.PKtoJSON(systemtradepk)
    }
    return super.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewsystemtradeorder;
