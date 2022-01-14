//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 14.0.2022 16:56
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewcontractswithprofit from '../../../../../data/eve/view/viewcontractswithprofit.js';
import ViewcontractswithprofitJson from '../conversion/viewcontractswithprofitjson.js';

class Rsviewcontractswithprofitsuper extends Eveservice {

	static restservice = 'rsview_contractswithprofit';

	static extractDataArray = (jsonarray): Viewcontractswithprofit[] => {
		let viewcontractswithprofits: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewcontractswithprofits.push(ViewcontractswithprofitJson.fromJSON(jsonarray[i]));
		}
   	return viewcontractswithprofits;
	}

	static extractDataObject = (jsonobject): Viewcontractswithprofit => {
    return ViewcontractswithprofitJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewcontractswithprofitsuper;
