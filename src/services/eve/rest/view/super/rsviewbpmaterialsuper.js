//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewbpmaterial from '../../../../../data/eve/view/viewbpmaterial.js';
import ViewbpmaterialJson from '../conversion/viewbpmaterialjson.js';

class Rsviewbpmaterialsuper extends Eveservice {

	static restserviceselect = 'rsview_bpmaterial_select';
	static restservice = 'rsview_bpmaterial';

	static extractDataArray = (jsonarray): Viewbpmaterial[] => {
		let viewbpmaterials: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewbpmaterials.push(ViewbpmaterialJson.fromJSON(jsonarray[i]));
		}
   	return viewbpmaterials;
	}

	static extractDataObject = (jsonobject): Viewbpmaterial => {
    return ViewbpmaterialJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewbpmaterialsuper;
