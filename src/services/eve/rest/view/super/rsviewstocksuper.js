//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 19.0.2022 22:13
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewstock from '../../../../../data/eve/view/viewstock.js';
import ViewstockJson from '../conversion/viewstockjson.js';

class Rsviewstocksuper extends Eveservice {

	static restservice = 'rsview_stock';

	static extractDataArray = (jsonarray): Viewstock[] => {
		let viewstocks: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewstocks.push(ViewstockJson.fromJSON(jsonarray[i]));
		}
   	return viewstocks;
	}

	static extractDataObject = (jsonobject): Viewstock => {
    return ViewstockJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewstocksuper;
