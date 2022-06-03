//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewuserbp from '../../../../../data/eve/view/viewuserbp.js';
import ViewuserbpJson from '../conversion/viewuserbpjson.js';

class Rsviewuserbpsuper extends Eveservice {

	static restserviceselect = 'rsview_userbp_select';
	static restservice = 'rsview_userbp';

	static extractDataArray = (jsonarray): Viewuserbp[] => {
		let viewuserbps: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewuserbps.push(ViewuserbpJson.fromJSON(jsonarray[i]));
		}
   	return viewuserbps;
	}

	static extractDataObject = (jsonobject): Viewuserbp => {
    return ViewuserbpJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewuserbpsuper;
