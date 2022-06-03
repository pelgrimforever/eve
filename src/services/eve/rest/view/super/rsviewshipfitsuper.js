//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewshipfit from '../../../../../data/eve/view/viewshipfit.js';
import ViewshipfitJson from '../conversion/viewshipfitjson.js';

class Rsviewshipfitsuper extends Eveservice {

	static restserviceselect = 'rsview_shipfit_select';
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
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewshipfitsuper;
