//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 16.11.2021 15:46
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Orderhistorymaxdate from '../../../../../data/eve/view/orderhistorymaxdate.js';
import OrderhistorymaxdateJson from '../conversion/orderhistorymaxdatejson.js';

class Rsorderhistorymaxdatesuper extends Eveservice {

	static restservice = 'rsorder_history_maxdate';

	static extractDataArray = (jsonarray): Orderhistorymaxdate[] => {
		let orderhistorymaxdates: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			orderhistorymaxdates.push(OrderhistorymaxdateJson.fromJSON(jsonarray[i]));
		}
   	return orderhistorymaxdates;
	}

	static extractDataObject = (jsonobject): Orderhistorymaxdate => {
    return OrderhistorymaxdateJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsorderhistorymaxdatesuper;
