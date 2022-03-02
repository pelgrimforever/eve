//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in rsviewstocktradesystemsuper.js
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 18.8.2021 9:31
    Author     : Franky Laseure
*/

import Rsviewstocktradesystemsuper from './super/rsviewstocktradesystemsuper';
import ViewstocktradesystemJson from './conversion/viewstocktradesystemjson.js';

class Rsviewstocktradesystem extends Rsviewstocktradesystemsuper {

    static SELECT_4USER = 2;

    static get4user = async (user, username) => {
        const postdata = {
          auth: user!=null ? user.auth : null,
          operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_4USER },
          username: username
        }
        return this.extractDataArray_startsystem(await super.post(this.restservice, postdata));
    }

  static extractDataArray_startsystem = (jsonarray): Viewstocktradesystem[] => {
    let viewstocktradesystems: [] = [];
    let viewstocktradesystem;
    let jsonline;
    for(let i = 0; i < jsonarray.length; i++) {
      jsonline = jsonarray[i];
      viewstocktradesystem = ViewstocktradesystemJson.fromJSON(jsonline);
      viewstocktradesystem.start_system = "" + jsonline.start_system;
      viewstocktradesystem.start_system_jumps = jsonline.start_system_jumps;
      viewstocktradesystems.push(viewstocktradesystem);
    }
    return viewstocktradesystems;
  }
}

export default Rsviewstocktradesystem;
