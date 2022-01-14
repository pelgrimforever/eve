//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:24:01
    Generated on 14.0.2022 16:56
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import Viewwishlist from '../../../../../data/eve/view/viewwishlist.js';
import ViewwishlistJson from '../conversion/viewwishlistjson.js';

class Rsviewwishlistsuper extends Eveservice {

	static restservice = 'rsview_wishlist';

	static extractDataArray = (jsonarray): Viewwishlist[] => {
		let viewwishlists: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			viewwishlists.push(ViewwishlistJson.fromJSON(jsonarray[i]));
		}
   	return viewwishlists;
	}

	static extractDataObject = (jsonobject): Viewwishlist => {
    return ViewwishlistJson.fromJSON(jsonobject);
	}

  static getall = async (user) => {
    const postdata = {
    	auth: user!=null ? user.auth : null,
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

}

export default Rsviewwishlistsuper;
