//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 22.1.2022 10:55
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewcontractitem from '../../../../../data/eve/view/viewcontractitem.js';
import ViewcontractitemJson from '../conversion/viewcontractitemjson.js';

class Rsviewcontractitemsuper extends Eveservice {

	static restservice = 'rsview_contractitem';

	static extractDataArray = (jsonarray): Viewcontractitem[] => {
		let viewcontractitems: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewcontractitems.push(ViewcontractitemJson.fromJSON(jsonarray[i]));
		}
   	return viewcontractitems;
	}

	static extractDataObject = (jsonobject): Viewcontractitem => {
    return ViewcontractitemJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewcontractitemsuper;
