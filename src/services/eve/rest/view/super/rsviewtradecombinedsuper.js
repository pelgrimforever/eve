//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 9.11.2021 14:30
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewtradecombined from '../../../../../data/eve/view/viewtradecombined.js';
import ViewtradecombinedJson from '../conversion/viewtradecombinedjson.js';

class Rsviewtradecombinedsuper extends Eveservice {

	static restservice = 'rsview_tradecombined';

	static extractDataArray = (jsonarray): Viewtradecombined[] => {
		let viewtradecombineds: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewtradecombineds.push(ViewtradecombinedJson.fromJSON(jsonarray[i]));
		}
   	return viewtradecombineds;
	}

	static extractDataObject = (jsonobject): Viewtradecombined => {
    return ViewtradecombinedJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewtradecombinedsuper;
