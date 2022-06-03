//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Vieworder from '../../../../../data/eve/view/vieworder.js';
import VieworderJson from '../conversion/vieworderjson.js';

class Rsviewordersuper extends Eveservice {

	static restserviceselect = 'rsview_order_select';
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
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewordersuper;
