//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewtradecombinedsell from '../../../../../data/eve/view/viewtradecombinedsell.js';
import ViewtradecombinedsellJson from '../conversion/viewtradecombinedselljson.js';

class Rsviewtradecombinedsellsuper extends Eveservice {

	static restserviceselect = 'rsview_tradecombined_sell_select';
	static restservice = 'rsview_tradecombined_sell';

	static extractDataArray = (jsonarray): Viewtradecombinedsell[] => {
		let viewtradecombinedsells: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewtradecombinedsells.push(ViewtradecombinedsellJson.fromJSON(jsonarray[i]));
		}
   	return viewtradecombinedsells;
	}

	static extractDataObject = (jsonobject): Viewtradecombinedsell => {
    return ViewtradecombinedsellJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewtradecombinedsellsuper;
