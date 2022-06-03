//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewstock from '../../../../../data/eve/view/viewstock.js';
import ViewstockJson from '../conversion/viewstockjson.js';

class Rsviewstocksuper extends Eveservice {

	static restserviceselect = 'rsview_stock_select';
	static restservice = 'rsview_stock';

	static extractDataArray = (jsonarray): Viewstock[] => {
		let viewstocks: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewstocks.push(ViewstockJson.fromJSON(jsonarray[i]));
		}
   	return viewstocks;
	}

	static extractDataObject = (jsonobject): Viewstock => {
    return ViewstockJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewstocksuper;
