//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewshipfitorderselected from '../../../../../data/eve/view/viewshipfitorderselected.js';
import ViewshipfitorderselectedJson from '../conversion/viewshipfitorderselectedjson.js';

class Rsviewshipfitorderselectedsuper extends Eveservice {

	static restserviceselect = 'rsview_shipfitorderselected_select';
	static restservice = 'rsview_shipfitorderselected';

	static extractDataArray = (jsonarray): Viewshipfitorderselected[] => {
		let viewshipfitorderselecteds: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewshipfitorderselecteds.push(ViewshipfitorderselectedJson.fromJSON(jsonarray[i]));
		}
   	return viewshipfitorderselecteds;
	}

	static extractDataObject = (jsonobject): Viewshipfitorderselected => {
    return ViewshipfitorderselectedJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewshipfitorderselectedsuper;
