//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 30.10.2021 10:4
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
