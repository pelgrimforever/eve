//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewbpprofitperregion from '../../../../../data/eve/view/viewbpprofitperregion.js';
import ViewbpprofitperregionJson from '../conversion/viewbpprofitperregionjson.js';

class Rsviewbpprofitperregionsuper extends Eveservice {

	static restserviceselect = 'rsview_bp_profitperregion_select';
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
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewbpprofitperregionsuper;
