//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in Rsvieworderservice.js
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 18.6.2021 14:35
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Vieworder from '../../../../../data/eve/view/vieworder.js';
import VieworderJson from '../conversion/vieworderjson.js';

class Rsviewordersuper extends Eveservice {

	static restservice = 'rsview_order';

	static extractDataArray = (jsonarray): Vieworder[] => {
		let vieworders: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			vieworders.push(VieworderJson.fromJSON(jsonarray[i]));
		}
   	return vieworders;
	}

	static extractDataObject = (jsonobject): Vieworder => {
    return VieworderJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewordersuper;
