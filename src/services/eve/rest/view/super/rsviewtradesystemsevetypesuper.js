//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 30.10.2021 10:4
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewtradesystemsevetype from '../../../../../data/eve/view/viewtradesystemsevetype.js';
import ViewtradesystemsevetypeJson from '../conversion/viewtradesystemsevetypejson.js';

class Rsviewtradesystemsevetypesuper extends Eveservice {

	static restservice = 'rsview_trade_systemsevetype';

	static extractDataArray = (jsonarray): Viewtradesystemsevetype[] => {
		let viewtradesystemsevetypes: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewtradesystemsevetypes.push(ViewtradesystemsevetypeJson.fromJSON(jsonarray[i]));
		}
   	return viewtradesystemsevetypes;
	}

	static extractDataObject = (jsonobject): Viewtradesystemsevetype => {
    return ViewtradesystemsevetypeJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewtradesystemsevetypesuper;
