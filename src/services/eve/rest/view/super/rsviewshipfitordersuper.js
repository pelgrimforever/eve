//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 19.0.2022 22:13
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewshipfitorder from '../../../../../data/eve/view/viewshipfitorder.js';
import ViewshipfitorderJson from '../conversion/viewshipfitorderjson.js';

class Rsviewshipfitordersuper extends Eveservice {

	static restservice = 'rsview_shipfitorder';

	static extractDataArray = (jsonarray): Viewshipfitorder[] => {
		let viewshipfitorders: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewshipfitorders.push(ViewshipfitorderJson.fromJSON(jsonarray[i]));
		}
   	return viewshipfitorders;
	}

	static extractDataObject = (jsonobject): Viewshipfitorder => {
    return ViewshipfitorderJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewshipfitordersuper;
