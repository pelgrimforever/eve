//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 31.0.2022 17:49
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewshipfitorderselected from '../../../../../data/eve/view/viewshipfitorderselected.js';
import ViewshipfitorderselectedJson from '../conversion/viewshipfitorderselectedjson.js';

class Rsviewshipfitorderselectedsuper extends Eveservice {

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
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewshipfitorderselectedsuper;
