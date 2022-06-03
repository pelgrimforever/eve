//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewevetypeorderhistoryregionmonth from '../../../../../data/eve/view/viewevetypeorderhistoryregionmonth.js';
import ViewevetypeorderhistoryregionmonthJson from '../conversion/viewevetypeorderhistoryregionmonthjson.js';

class Rsviewevetypeorderhistoryregionmonthsuper extends Eveservice {

	static restserviceselect = 'rsview_evetype_order_history_region_month_select';
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
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewevetypeorderhistoryregionmonthsuper;
