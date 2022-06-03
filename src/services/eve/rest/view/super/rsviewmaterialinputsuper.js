//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewmaterialinput from '../../../../../data/eve/view/viewmaterialinput.js';
import ViewmaterialinputJson from '../conversion/viewmaterialinputjson.js';

class Rsviewmaterialinputsuper extends Eveservice {

	static restserviceselect = 'rsview_materialinput_select';
	static restservice = 'rsview_materialinput';

	static extractDataArray = (jsonarray): Viewmaterialinput[] => {
		let viewmaterialinputs: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewmaterialinputs.push(ViewmaterialinputJson.fromJSON(jsonarray[i]));
		}
   	return viewmaterialinputs;
	}

	static extractDataObject = (jsonobject): Viewmaterialinput => {
    return ViewmaterialinputJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewmaterialinputsuper;
