//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewevetypeorderhistory from '../../../../../data/eve/view/viewevetypeorderhistory.js';
import ViewevetypeorderhistoryJson from '../conversion/viewevetypeorderhistoryjson.js';

class Rsviewevetypeorderhistorysuper extends Eveservice {

	static restserviceselect = 'rsview_evetype_order_history_select';
	static restservice = 'rsview_evetype_order_history';

	static extractDataArray = (jsonarray): Viewevetypeorderhistory[] => {
		let viewevetypeorderhistorys: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewevetypeorderhistorys.push(ViewevetypeorderhistoryJson.fromJSON(jsonarray[i]));
		}
   	return viewevetypeorderhistorys;
	}

	static extractDataObject = (jsonobject): Viewevetypeorderhistory => {
    return ViewevetypeorderhistoryJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewevetypeorderhistorysuper;
