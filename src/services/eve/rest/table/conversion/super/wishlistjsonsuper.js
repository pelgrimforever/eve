//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 22.1.2022 10:55
    Author     : Franky Laseure
*/

import { Wishlistpk } from '../../../../../../data/eve/table/super/wishlistsuper.js';
import Wishlist from '../../../../../../data/eve/table/wishlist.js';
import { Evetypepk } from '../../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../evetypejson.js';
import Moment from 'moment';
import WishlistJson from '../wishlistjson.js';

class WishlistJsonsuper {
	static PKtoJSON = (wishlistPK) => {
		let jsonobj = {
			"username": null,
			"evetype": wishlistPK.evetypePK==null ? null : "" + wishlistPK.evetypePK.getId(),

		};
		if(wishlistPK!=null) {
			jsonobj.username = wishlistPK.username;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (wishlistPK) => {
		return JSON.stringify(this.PKtoJSON(wishlistPK));
	}
	
	static toJSON = (wishlist) => {
		var jsonobj = {
			"PK": this.PKtoJSON(wishlist.PK),
			"maxprice": "" + wishlist.maxprice,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Wishlistpk => {
		let wishlistPK = new Wishlistpk();
		if(jsonobj!=null) {
			let evetypeproperties = {
				"id": "" + jsonobj.evetype,
			}
			let evetypePK = EvetypeJson.PKfromJSON(evetypeproperties);
			wishlistPK.evetypePK = evetypePK;
			wishlistPK.username = jsonobj.username;
		}
		return wishlistPK;
	}
	static fromJSON = (jsonobj): Wishlist => {
		let model = new Wishlist();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.maxprice = parseFloat(jsonobj.maxprice);
		return model;
	}
}

export default WishlistJsonsuper;
