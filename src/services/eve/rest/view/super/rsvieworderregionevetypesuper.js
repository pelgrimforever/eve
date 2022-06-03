//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Vieworderregionevetype from '../../../../../data/eve/view/vieworderregionevetype.js';
import VieworderregionevetypeJson from '../conversion/vieworderregionevetypejson.js';

class Rsvieworderregionevetypesuper extends Eveservice {

	static restserviceselect = 'rsview_order_region_evetype_select';
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
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsvieworderregionevetypesuper;
