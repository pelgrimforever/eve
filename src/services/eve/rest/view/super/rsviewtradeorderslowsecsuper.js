//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 14.0.2022 16:56
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewtradeorderslowsec from '../../../../../data/eve/view/viewtradeorderslowsec.js';
import ViewtradeorderslowsecJson from '../conversion/viewtradeorderslowsecjson.js';

class Rsviewtradeorderslowsecsuper extends Eveservice {

	static restservice = 'rsview_tradeorders_lowsec';

	static extractDataArray = (jsonarray): Viewtradeorderslowsec[] => {
		let viewtradeorderslowsecs: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewtradeorderslowsecs.push(ViewtradeorderslowsecJson.fromJSON(jsonarray[i]));
		}
   	return viewtradeorderslowsecs;
	}

	static extractDataObject = (jsonobject): Viewtradeorderslowsec => {
    return ViewtradeorderslowsecJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewtradeorderslowsecsuper;
