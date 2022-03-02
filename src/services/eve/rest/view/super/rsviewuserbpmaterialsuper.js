//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 22.1.2022 10:55
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewuserbpmaterial from '../../../../../data/eve/view/viewuserbpmaterial.js';
import ViewuserbpmaterialJson from '../conversion/viewuserbpmaterialjson.js';

class Rsviewuserbpmaterialsuper extends Eveservice {

	static restservice = 'rsview_userbpmaterial';

	static extractDataArray = (jsonarray): Viewuserbpmaterial[] => {
		let viewuserbpmaterials: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewuserbpmaterials.push(ViewuserbpmaterialJson.fromJSON(jsonarray[i]));
		}
   	return viewuserbpmaterials;
	}

	static extractDataObject = (jsonobject): Viewuserbpmaterial => {
    return ViewuserbpmaterialJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewuserbpmaterialsuper;
