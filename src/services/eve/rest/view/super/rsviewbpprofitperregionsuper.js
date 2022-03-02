//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 22.1.2022 10:55
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewbpprofitperregion from '../../../../../data/eve/view/viewbpprofitperregion.js';
import ViewbpprofitperregionJson from '../conversion/viewbpprofitperregionjson.js';

class Rsviewbpprofitperregionsuper extends Eveservice {

	static restservice = 'rsview_bp_profitperregion';

	static extractDataArray = (jsonarray): Viewbpprofitperregion[] => {
		let viewbpprofitperregions: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewbpprofitperregions.push(ViewbpprofitperregionJson.fromJSON(jsonarray[i]));
		}
   	return viewbpprofitperregions;
	}

	static extractDataObject = (jsonobject): Viewbpprofitperregion => {
    return ViewbpprofitperregionJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewbpprofitperregionsuper;