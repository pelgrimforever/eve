//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 8.10.2021 7:21
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewcombinedtrade from '../../../../../data/eve/view/viewcombinedtrade.js';
import ViewcombinedtradeJson from '../conversion/viewcombinedtradejson.js';

class Rsviewcombinedtradesuper extends Eveservice {

	static restservice = 'rsview_combinedtrade';

	static extractDataArray = (jsonarray): Viewcombinedtrade[] => {
		let viewcombinedtrades: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewcombinedtrades.push(ViewcombinedtradeJson.fromJSON(jsonarray[i]));
		}
   	return viewcombinedtrades;
	}

	static extractDataObject = (jsonobject): Viewcombinedtrade => {
    return ViewcombinedtradeJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewcombinedtradesuper;
