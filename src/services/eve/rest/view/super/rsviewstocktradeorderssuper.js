//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewstocktradeorders from '../../../../../data/eve/view/viewstocktradeorders.js';
import ViewstocktradeordersJson from '../conversion/viewstocktradeordersjson.js';

class Rsviewstocktradeorderssuper extends Eveservice {

	static restserviceselect = 'rsview_stocktrade_orders_select';
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
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewstocktradeorderssuper;
