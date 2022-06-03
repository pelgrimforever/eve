//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewevetypeorderhistorymonth from '../../../../../data/eve/view/viewevetypeorderhistorymonth.js';
import ViewevetypeorderhistorymonthJson from '../conversion/viewevetypeorderhistorymonthjson.js';

class Rsviewevetypeorderhistorymonthsuper extends Eveservice {

	static restserviceselect = 'rsview_evetype_order_history_month_select';
	static restservice = 'rsview_evetype_order_history_month';

	static extractDataArray = (jsonarray): Viewevetypeorderhistorymonth[] => {
		let viewevetypeorderhistorymonths: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewevetypeorderhistorymonths.push(ViewevetypeorderhistorymonthJson.fromJSON(jsonarray[i]));
		}
   	return viewevetypeorderhistorymonths;
	}

	static extractDataObject = (jsonobject): Viewevetypeorderhistorymonth => {
    return ViewevetypeorderhistorymonthJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewevetypeorderhistorymonthsuper;
