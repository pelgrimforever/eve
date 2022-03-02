//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 22.1.2022 10:55
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewevetypeorderhistoryregionmonth from '../../../../../data/eve/view/viewevetypeorderhistoryregionmonth.js';
import ViewevetypeorderhistoryregionmonthJson from '../conversion/viewevetypeorderhistoryregionmonthjson.js';

class Rsviewevetypeorderhistoryregionmonthsuper extends Eveservice {

	static restservice = 'rsview_evetype_order_history_region_month';

	static extractDataArray = (jsonarray): Viewevetypeorderhistoryregionmonth[] => {
		let viewevetypeorderhistoryregionmonths: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewevetypeorderhistoryregionmonths.push(ViewevetypeorderhistoryregionmonthJson.fromJSON(jsonarray[i]));
		}
   	return viewevetypeorderhistoryregionmonths;
	}

	static extractDataObject = (jsonobject): Viewevetypeorderhistoryregionmonth => {
    return ViewevetypeorderhistoryregionmonthJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewevetypeorderhistoryregionmonthsuper;
