//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in Rsviewtradeordersservice.js
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 23.5.2021 16:2
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewtradeorders from '../../../../../data/eve/view/viewtradeorders.js';
import ViewtradeordersJson from '../conversion/viewtradeordersjson.js';

class Rsviewtradeorderssuper extends Eveservice {

	static restservice = 'rsview_tradeorders';

	static extractDataArray = (jsonarray): Viewtradeorders[] => {
		let viewtradeorderss: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewtradeorderss.push(ViewtradeordersJson.fromJSON(jsonarray[i]));
		}
   	return viewtradeorderss;
	}

	static extractDataObject = (jsonobject): Viewtradeorders => {
    return ViewtradeordersJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewtradeorderssuper;
