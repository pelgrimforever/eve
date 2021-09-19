//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in Rsviewsecurityislandsystemcountservice.js
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 18.8.2021 11:31
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewsecurityislandsystemcount from '../../../../../data/eve/view/viewsecurityislandsystemcount.js';
import ViewsecurityislandsystemcountJson from '../conversion/viewsecurityislandsystemcountjson.js';

class Rsviewsecurityislandsystemcountsuper extends Eveservice {

	static restservice = 'rsview_security_island_systemcount';

	static extractDataArray = (jsonarray): Viewsecurityislandsystemcount[] => {
		let viewsecurityislandsystemcounts: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewsecurityislandsystemcounts.push(ViewsecurityislandsystemcountJson.fromJSON(jsonarray[i]));
		}
   	return viewsecurityislandsystemcounts;
	}

	static extractDataObject = (jsonobject): Viewsecurityislandsystemcount => {
    return ViewsecurityislandsystemcountJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewsecurityislandsystemcountsuper;
