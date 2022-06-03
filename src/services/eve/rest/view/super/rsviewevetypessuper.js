//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewevetypes from '../../../../../data/eve/view/viewevetypes.js';
import ViewevetypesJson from '../conversion/viewevetypesjson.js';

class Rsviewevetypessuper extends Eveservice {

	static restserviceselect = 'rsview_evetypes_select';
	static restservice = 'rsview_evetypes';

	static extractDataArray = (jsonarray): Viewevetypes[] => {
		let viewevetypess: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewevetypess.push(ViewevetypesJson.fromJSON(jsonarray[i]));
		}
   	return viewevetypess;
	}

	static extractDataObject = (jsonobject): Viewevetypes => {
    return ViewevetypesJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewevetypessuper;
