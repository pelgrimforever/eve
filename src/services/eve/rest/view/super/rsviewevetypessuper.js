//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 22.1.2022 10:55
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewevetypes from '../../../../../data/eve/view/viewevetypes.js';
import ViewevetypesJson from '../conversion/viewevetypesjson.js';

class Rsviewevetypessuper extends Eveservice {

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
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewevetypessuper;
