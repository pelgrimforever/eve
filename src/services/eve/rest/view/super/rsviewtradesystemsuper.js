//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewtradesystem from '../../../../../data/eve/view/viewtradesystem.js';
import ViewtradesystemJson from '../conversion/viewtradesystemjson.js';

class Rsviewtradesystemsuper extends Eveservice {

	static restserviceselect = 'rsview_tradesystem_select';
	static restservice = 'rsview_tradesystem';

	static extractDataArray = (jsonarray): Viewtradesystem[] => {
		let viewtradesystems: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewtradesystems.push(ViewtradesystemJson.fromJSON(jsonarray[i]));
		}
   	return viewtradesystems;
	}

	static extractDataObject = (jsonobject): Viewtradesystem => {
    return ViewtradesystemJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewtradesystemsuper;
