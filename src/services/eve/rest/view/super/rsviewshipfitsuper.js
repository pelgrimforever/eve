//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 17.11.2021 15:41
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewshipfit from '../../../../../data/eve/view/viewshipfit.js';
import ViewshipfitJson from '../conversion/viewshipfitjson.js';

class Rsviewshipfitsuper extends Eveservice {

	static restservice = 'rsview_shipfit';

	static extractDataArray = (jsonarray): Viewshipfit[] => {
		let viewshipfits: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewshipfits.push(ViewshipfitJson.fromJSON(jsonarray[i]));
		}
   	return viewshipfits;
	}

	static extractDataObject = (jsonobject): Viewshipfit => {
    return ViewshipfitJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewshipfitsuper;