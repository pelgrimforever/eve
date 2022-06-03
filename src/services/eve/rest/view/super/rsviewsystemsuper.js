//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewsystem from '../../../../../data/eve/view/viewsystem.js';
import ViewsystemJson from '../conversion/viewsystemjson.js';

class Rsviewsystemsuper extends Eveservice {

	static restserviceselect = 'rsview_system_select';
	static restservice = 'rsview_system';

	static extractDataArray = (jsonarray): Viewsystem[] => {
		let viewsystems: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewsystems.push(ViewsystemJson.fromJSON(jsonarray[i]));
		}
   	return viewsystems;
	}

	static extractDataObject = (jsonobject): Viewsystem => {
    return ViewsystemJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewsystemsuper;
