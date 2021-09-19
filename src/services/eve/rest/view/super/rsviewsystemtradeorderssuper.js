//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in Rsviewsystemtradeordersservice.js
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 18.8.2021 11:31
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewsystemtradeorders from '../../../../../data/eve/view/viewsystemtradeorders.js';
import ViewsystemtradeordersJson from '../conversion/viewsystemtradeordersjson.js';

class Rsviewsystemtradeorderssuper extends Eveservice {

	static restservice = 'rsview_systemtradeorders';

	static extractDataArray = (jsonarray): Viewsystemtradeorders[] => {
		let viewsystemtradeorderss: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewsystemtradeorderss.push(ViewsystemtradeordersJson.fromJSON(jsonarray[i]));
		}
   	return viewsystemtradeorderss;
	}

	static extractDataObject = (jsonobject): Viewsystemtradeorders => {
    return ViewsystemtradeordersJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewsystemtradeorderssuper;
