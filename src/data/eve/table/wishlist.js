//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Wishlistsuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 16.11.2021 15:46
    Author     : Franky Laseure
*/

import Wishlistsuper, {Wishlistpk} from './super/wishlistsuper'

class Wishlist extends Wishlistsuper {
	constructor() { 
		super();
	}
	auth: string = null;

	tostring = () => {
		let result = super.tostring();
		return result;
	}
}

export default Wishlist;
