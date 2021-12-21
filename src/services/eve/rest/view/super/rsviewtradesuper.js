//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 16.11.2021 15:46
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewtrade from '../../../../../data/eve/view/viewtrade.js';
import ViewtradeJson from '../conversion/viewtradejson.js';

class Rsviewtradesuper extends Eveservice {

	static restservice = 'rsview_trade';

	static extractDataArray = (jsonarray): Viewtrade[] => {
		let viewtrades: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewtrades.push(ViewtradeJson.fromJSON(jsonarray[i]));
		}
   	return viewtrades;
	}

	static extractDataObject = (jsonobject): Viewtrade => {
    return ViewtradeJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewtradesuper;
