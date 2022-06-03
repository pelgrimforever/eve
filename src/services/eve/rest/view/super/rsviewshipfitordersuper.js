//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewshipfitorder from '../../../../../data/eve/view/viewshipfitorder.js';
import ViewshipfitorderJson from '../conversion/viewshipfitorderjson.js';

class Rsviewshipfitordersuper extends Eveservice {

	static restserviceselect = 'rsview_shipfitorder_select';
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
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewshipfitordersuper;
