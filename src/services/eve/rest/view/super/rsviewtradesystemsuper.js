//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 4.11.2021 14:51
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewtradesystem from '../../../../../data/eve/view/viewtradesystem.js';
import ViewtradesystemJson from '../conversion/viewtradesystemjson.js';

class Rsviewtradesystemsuper extends Eveservice {

	static restservice = 'rsview_tradesystem';

	static extractDataArray = (jsonarray): Viewtradesystem[] => {
		let viewtradesystems: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewtradesystems.push(ViewtradesystemJson.fromJSON(jsonarray[i]));
		}
   	return viewtradesystems;
	}

	static extractDataObject = (jsonobject): Viewtradesystem => {
    return ViewtradesystemJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewtradesystemsuper;
