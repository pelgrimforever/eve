//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Rswishlistsuper
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 16.11.2021 15:46
    Author     : Franky Laseure
*/

import Rswishlistsuper from './super/rswishlistsuper.js';
import WishlistJson from './conversion/wishlistjson.js';

class Rswishlist extends Rswishlistsuper {

    static UPDATE_ADDWISHLIST = 11;

    static addwishlist = async (user, wishlist) => {
        const postdata = {
          auth: user!=null ? user.auth : null,
          operation: this.UPDATE_ADDWISHLIST,
          wishlist: WishlistJson.toJSON(wishlist)
        }
        return await super.post(this.restserviceupdate, postdata);
    }

}

export default Rswishlist;

