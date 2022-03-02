//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 22.1.2022 10:55
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewstocktradesystem from '../../../../../data/eve/view/viewstocktradesystem.js';
import ViewstocktradesystemJson from '../conversion/viewstocktradesystemjson.js';

class Rsviewstocktradesystemsuper extends Eveservice {

	static restservice = 'rsview_stocktrade_system';

	static extractDataArray = (jsonarray): Viewstocktradesystem[] => {
		let viewstocktradesystems: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewstocktradesystems.push(ViewstocktradesystemJson.fromJSON(jsonarray[i]));
		}
   	return viewstocktradesystems;
	}

	static extractDataObject = (jsonobject): Viewstocktradesystem => {
    return ViewstocktradesystemJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewstocktradesystemsuper;
