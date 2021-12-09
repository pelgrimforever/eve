//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 9.11.2021 14:30
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewstocktradeorders from '../../../../../data/eve/view/viewstocktradeorders.js';
import ViewstocktradeordersJson from '../conversion/viewstocktradeordersjson.js';

class Rsviewstocktradeorderssuper extends Eveservice {

	static restservice = 'rsview_stocktrade_orders';

	static extractDataArray = (jsonarray): Viewstocktradeorders[] => {
		let viewstocktradeorderss: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewstocktradeorderss.push(ViewstocktradeordersJson.fromJSON(jsonarray[i]));
		}
   	return viewstocktradeorderss;
	}

	static extractDataObject = (jsonobject): Viewstocktradeorders => {
    return ViewstocktradeordersJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewstocktradeorderssuper;
