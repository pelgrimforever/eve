//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 22.1.2022 10:55
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewshipfitmodule from '../../../../../data/eve/view/viewshipfitmodule.js';
import ViewshipfitmoduleJson from '../conversion/viewshipfitmodulejson.js';

class Rsviewshipfitmodulesuper extends Eveservice {

	static restservice = 'rsview_shipfitmodule';

	static extractDataArray = (jsonarray): Viewshipfitmodule[] => {
		let viewshipfitmodules: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewshipfitmodules.push(ViewshipfitmoduleJson.fromJSON(jsonarray[i]));
		}
   	return viewshipfitmodules;
	}

	static extractDataObject = (jsonobject): Viewshipfitmodule => {
    return ViewshipfitmoduleJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewshipfitmodulesuper;
