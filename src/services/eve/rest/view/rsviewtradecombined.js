//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Rsviewtradecombinedsuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 23.10.2021 18:1
    Author     : Franky Laseure
*/

import Rsviewtradecombinedsuper from './super/rsviewtradecombinedsuper';
import { Systempk } from '../../../../data/eve/table/super/systemsuper.js';
import { Tradecombinedpk } from '../../../../data/eve/table/super/tradecombinedsuper.js';
import SystemJson from '../table/conversion/systemjson.js';
import ViewtradecombinedJson from './conversion/viewtradecombinedjson.js';
import TradecombinedJson from '../table/conversion/tradecombinedjson.js';

class Rsviewtradecombined extends Rsviewtradecombinedsuper {

  static SELECT_ALL_STARTSYSTEM = 2;
  static SELECT4TRADECOMBINED = 3;

  static getall_startsystem = async (user, systempk: Systempk) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      operation: this.SELECT_ALL_STARTSYSTEM,
      systempk: SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray_startsystem(await super.post(this.restserviceselect, postdata));
  }

  static extractDataArray_startsystem = (jsonarray): Viewtradecombined[] => {
    let viewtradecombinedlist: [] = [];
    let viewtradecombined;
    let jsonline;
    for(let i = 0; i < jsonarray.length; i++) {
      jsonline = jsonarray[i];
      viewtradecombined = ViewtradecombinedJson.fromJSON(jsonline);
      viewtradecombined.start_system = "" + jsonline.start_system;
      viewtradecombined.start_system_jumps = jsonline.start_system_jumps;
      viewtradecombinedlist.push(viewtradecombined);
    }
    return viewtradecombinedlist;
  }

  static getViewtradecombined = async (user, tradecombinedpk: Tradecombinedpk) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      operation: this.SELECT4TRADECOMBINED,
      tradecombinedpk: TradecombinedJson.PKtoJSON(tradecombinedpk)
    }
    const data = await super.post(this.restserviceselect, postdata);
    if(data!="") {
      return ViewtradecombinedJson.fromJSON(data);
    } else {
      return null;
    }
  }
}

export default Rsviewtradecombined;
