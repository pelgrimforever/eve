//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 22.1.2022 10:55
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewbpmaterial from '../../../../../data/eve/view/viewbpmaterial.js';
import ViewbpmaterialJson from '../conversion/viewbpmaterialjson.js';

class Rsviewbpmaterialsuper extends Eveservice {

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
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewbpmaterialsuper;
