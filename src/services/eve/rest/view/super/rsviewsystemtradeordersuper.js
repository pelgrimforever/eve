//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in Rsviewsystemtradeorderservice.js
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 18.6.2021 14:35
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewsystemtradeorder from '../../../../../data/eve/view/viewsystemtradeorder.js';
import ViewsystemtradeorderJson from '../conversion/viewsystemtradeorderjson.js';

class Rsviewsystemtradeordersuper extends Eveservice {

	static restservice = 'rsview_systemtrade_order';

	static extractDataArray = (jsonarray): Viewsystemtradeorder[] => {
		let viewsystemtradeorders: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewsystemtradeorders.push(ViewsystemtradeorderJson.fromJSON(jsonarray[i]));
		}
   	return viewsystemtradeorders;
	}

	static extractDataObject = (jsonobject): Viewsystemtradeorder => {
    return ViewsystemtradeorderJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewsystemtradeordersuper;
