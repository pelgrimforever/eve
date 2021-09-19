//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in Rsviewtradeordersorderservice.js
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 18.8.2021 9:31
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewtradeordersorder from '../../../../../data/eve/view/viewtradeordersorder.js';
import ViewtradeordersorderJson from '../conversion/viewtradeordersorderjson.js';

class Rsviewtradeordersordersuper extends Eveservice {

	static restservice = 'rsview_tradeorders_order';

	static extractDataArray = (jsonarray): Viewtradeordersorder[] => {
		let viewtradeordersorders: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewtradeordersorders.push(ViewtradeordersorderJson.fromJSON(jsonarray[i]));
		}
   	return viewtradeordersorders;
	}

	static extractDataObject = (jsonobject): Viewtradeordersorder => {
    return ViewtradeordersorderJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewtradeordersordersuper;
