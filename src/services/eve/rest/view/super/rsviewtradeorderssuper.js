//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewtradeorders from '../../../../../data/eve/view/viewtradeorders.js';
import ViewtradeordersJson from '../conversion/viewtradeordersjson.js';

class Rsviewtradeorderssuper extends Eveservice {

	static restserviceselect = 'rsview_tradeorders_select';
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
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewtradeorderssuper;
