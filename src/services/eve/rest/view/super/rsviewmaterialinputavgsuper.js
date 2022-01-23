//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 23.0.2022 17:52
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewmaterialinputavg from '../../../../../data/eve/view/viewmaterialinputavg.js';
import ViewmaterialinputavgJson from '../conversion/viewmaterialinputavgjson.js';

class Rsviewmaterialinputavgsuper extends Eveservice {

	static restservice = 'rsview_materialinputavg';

	static extractDataArray = (jsonarray): Viewmaterialinputavg[] => {
		let viewmaterialinputavgs: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewmaterialinputavgs.push(ViewmaterialinputavgJson.fromJSON(jsonarray[i]));
		}
   	return viewmaterialinputavgs;
	}

	static extractDataObject = (jsonobject): Viewmaterialinputavg => {
    return ViewmaterialinputavgJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewmaterialinputavgsuper;
