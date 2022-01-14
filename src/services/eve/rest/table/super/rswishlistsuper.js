//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 14.0.2022 16:56
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Wishlistpk } from '../../../../../data/eve/table/super/wishlistsuper.js';
import Wishlist from '../../../../../data/eve/table/wishlist.js';
import WishlistJson from '../conversion/wishlistjson.js';
import { Evetypepk } from '../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../conversion/evetypejson.js';


class Rswishlistsuper extends Eveservice {	

	static restservice = 'rswishlist';

	//SELECT OPERATIONS
	static SELECT_WISHLIST = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Evetype = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_WISHLIST = 10;

	//INSERT OPERATIONS
	static INSERT_WISHLIST = 20;

	//DELETE OPERATIONS
	static DELETE_Evetype = 100 + 1;
	static DELETE_WISHLIST = 30;

	static extractDataArray = (jsonarray): Wishlist[] => {
		let wishlists: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			wishlists.push(WishlistJson.fromJSON(jsonarray[i]));
		}
   	return wishlists;
	}

	static extractDataObject = (jsonobject): Wishlist => {
    return WishlistJson.fromJSON(jsonobject);
	}

	static getcount = async () => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_COUNT }
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

  static getall = async () => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static getOne = async (wishlistpk: Wishlistpk): Wishlist => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_WISHLIST },
      "wishlistpk": WishlistJson.PKtoJSON(wishlistpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadWishlists4evetype = async (evetypepk: Evetypepk): Wishlist[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Evetype },
     	"evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (wishlistsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": wishlistsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (wishlistsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": wishlistsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (wishlist: Wishlist) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_WISHLIST },
     	"wishlist": WishlistJson.toJSON(wishlist)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (wishlist: Wishlist) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_WISHLIST },
     	"wishlist": WishlistJson.toJSON(wishlist)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (wishlist: Wishlist) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_WISHLIST },
     	"wishlist": WishlistJson.toJSON(wishlist)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION START

	static sec_getcount = async (user) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: super.SELECT_COUNT }
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

  static sec_getall = async (user) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_getOne = async (user, wishlistpk: Wishlistpk): Wishlist => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_WISHLIST },
      "wishlistpk": WishlistJson.PKtoJSON(wishlistpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadWishlists4evetype = async (user, evetypepk: Wishlistpk): Wishlist[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Evetype },
     	"evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, wishlistsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": wishlistsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, wishlistsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": wishlistsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, wishlist: Wishlist) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_WISHLIST },
     	"wishlist": WishlistJson.toJSON(wishlist)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, wishlist: Wishlist) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_WISHLIST },
     	"wishlist": WishlistJson.toJSON(wishlist)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, wishlist: Wishlist) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_WISHLIST },
     	"wishlist": WishlistJson.toJSON(wishlist)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rswishlistsuper;
