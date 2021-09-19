//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in Rsviewsystemtradeservice.js
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 18.8.2021 11:31
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewsystemtrade from '../../../../../data/eve/view/viewsystemtrade.js';
import ViewsystemtradeJson from '../conversion/viewsystemtradejson.js';

class Rsviewsystemtradesuper extends Eveservice {

	static restservice = 'rsview_systemtrade';

	static extractDataArray = (jsonarray): Viewsystemtrade[] => {
		let viewsystemtrades: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewsystemtrades.push(ViewsystemtradeJson.fromJSON(jsonarray[i]));
		}
   	return viewsystemtrades;
	}

	static extractDataObject = (jsonobject): Viewsystemtrade => {
    return ViewsystemtradeJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewsystemtradesuper;
