//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Orderhistorymaxdate from '../../../../../data/eve/view/orderhistorymaxdate.js';
import OrderhistorymaxdateJson from '../conversion/orderhistorymaxdatejson.js';

class Rsorderhistorymaxdatesuper extends Eveservice {

	static restserviceselect = 'rsorder_history_maxdate_select';
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
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsorderhistorymaxdatesuper;
