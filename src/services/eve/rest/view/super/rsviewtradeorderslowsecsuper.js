//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewtradeorderslowsec from '../../../../../data/eve/view/viewtradeorderslowsec.js';
import ViewtradeorderslowsecJson from '../conversion/viewtradeorderslowsecjson.js';

class Rsviewtradeorderslowsecsuper extends Eveservice {

	static restserviceselect = 'rsview_tradeorders_lowsec_select';
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
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewtradeorderslowsecsuper;
