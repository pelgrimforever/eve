//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Wishlistpk } from '../../../../../data/eve/table/super/wishlistsuper.js';
import Wishlist from '../../../../../data/eve/table/wishlist.js';
import WishlistJson from '../conversion/wishlistjson.js';
import { Evetypepk } from '../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../conversion/evetypejson.js';


class Rswishlistsuper extends Eveservice {	

  static restserviceselect = 'rswishlist_select';
  static restserviceinsert = 'rswishlist_insert';
  static restserviceupdate = 'rswishlist_update';
  static restservicedelete = 'rswishlist_delete';

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

  static getcount = async (user) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: super.SELECT_COUNT
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static getall = async (user) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static getOne = async (user, wishlistpk: Wishlistpk): Wishlist => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_WISHLIST,
      "wishlistpk": WishlistJson.PKtoJSON(wishlistpk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadWishlists4evetype = async (user, evetypepk: Wishlistpk): Wishlist[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Evetype,
      "evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, wishlistsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": wishlistsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, wishlistsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": wishlistsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, wishlist: Wishlist) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_WISHLIST,
      "wishlist": WishlistJson.toJSON(wishlist)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, wishlist: Wishlist) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_WISHLIST,
      "wishlist": WishlistJson.toJSON(wishlist)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, wishlist: Wishlist) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_WISHLIST,
      "wishlist": WishlistJson.toJSON(wishlist)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rswishlistsuper;
