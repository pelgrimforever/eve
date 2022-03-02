//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 22.1.2022 10:55
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewevetypeorderhistorymonth from '../../../../../data/eve/view/viewevetypeorderhistorymonth.js';
import ViewevetypeorderhistorymonthJson from '../conversion/viewevetypeorderhistorymonthjson.js';

class Rsviewevetypeorderhistorymonthsuper extends Eveservice {

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
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewevetypeorderhistorymonthsuper;
