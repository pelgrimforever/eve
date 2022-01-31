//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 31.0.2022 17:49
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewactivemodules from '../../../../../data/eve/view/viewactivemodules.js';
import ViewactivemodulesJson from '../conversion/viewactivemodulesjson.js';

class Rsviewactivemodulessuper extends Eveservice {

	static restservice = 'rsview_activemodules';

	static extractDataArray = (jsonarray): Viewactivemodules[] => {
		let viewactivemoduless: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewactivemoduless.push(ViewactivemodulesJson.fromJSON(jsonarray[i]));
		}
   	return viewactivemoduless;
	}

	static extractDataObject = (jsonobject): Viewactivemodules => {
    return ViewactivemodulesJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewactivemodulessuper;
