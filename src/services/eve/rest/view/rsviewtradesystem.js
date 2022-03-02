//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Rsviewtradesystemsuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 2.11.2021 21:14
    Author     : Franky Laseure
*/

import Rsviewtradesystemsuper from './super/rsviewtradesystemsuper';
import { Systempk } from '../../../../data/eve/table/super/systemsuper.js';
import SystemJson from '../table/conversion/systemjson.js';
import ViewtradesystemJson from './conversion/viewtradesystemjson.js';

class Rsviewtradesystem extends Rsviewtradesystemsuper {

  static SELECT_ALL_STARTSYSTEM = 2;
  static SELECT4SELLBUYSYSTEM = 3;


  static getall_startsystem = async (user, systempk: Systempk) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_ALL_STARTSYSTEM },
      systempk: SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray_startsystem(await super.post(this.restservice, postdata));
  }

  static extractDataArray_startsystem = (jsonarray): Viewtradesystem[] => {
    let viewtradesystemlist: [] = [];
    let viewtradesystem;
    let jsonline;
    for(let i = 0; i < jsonarray.length; i++) {
      jsonline = jsonarray[i];
      viewtradesystem = ViewtradesystemJson.fromJSON(jsonline);
      viewtradesystem.start_system = "" + jsonline.start_system;
      viewtradesystem.start_system_jumps = jsonline.start_system_jumps;
      viewtradesystemlist.push(viewtradesystem);
    }
    return viewtradesystemlist;
  }

  static getviewtradesellbuysystem = async (user, sell_systempk: Systempk, buy_systempk: Systempk) => {
    const postdata = {
      auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT4SELLBUYSYSTEM },
      sell_systempk: SystemJson.PKtoJSON(sell_systempk),
      buy_systempk: SystemJson.PKtoJSON(buy_systempk)
    }
    const data = await super.post(this.restservice, postdata);
    if(data!="") {
      return ViewtradesystemJson.fromJSON(data);
    } else {
      return null;
    }
  }

}

export default Rsviewtradesystem;
