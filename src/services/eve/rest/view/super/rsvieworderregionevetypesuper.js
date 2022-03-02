//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 22.1.2022 10:55
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Vieworderregionevetype from '../../../../../data/eve/view/vieworderregionevetype.js';
import VieworderregionevetypeJson from '../conversion/vieworderregionevetypejson.js';

class Rsvieworderregionevetypesuper extends Eveservice {

	static restservice = 'rsview_order_region_evetype';

	static extractDataArray = (jsonarray): Vieworderregionevetype[] => {
		let vieworderregionevetypes: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			vieworderregionevetypes.push(VieworderregionevetypeJson.fromJSON(jsonarray[i]));
		}
   	return vieworderregionevetypes;
	}

	static extractDataObject = (jsonobject): Vieworderregionevetype => {
    return VieworderregionevetypeJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsvieworderregionevetypesuper;
