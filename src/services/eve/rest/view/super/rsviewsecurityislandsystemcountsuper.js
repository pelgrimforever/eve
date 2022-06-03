//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewsecurityislandsystemcount from '../../../../../data/eve/view/viewsecurityislandsystemcount.js';
import ViewsecurityislandsystemcountJson from '../conversion/viewsecurityislandsystemcountjson.js';

class Rsviewsecurityislandsystemcountsuper extends Eveservice {

	static restserviceselect = 'rsview_security_island_systemcount_select';
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
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

}

export default Rsviewsecurityislandsystemcountsuper;
