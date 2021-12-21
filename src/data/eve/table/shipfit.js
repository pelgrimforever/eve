//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Shipfitsuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 17.11.2021 15:28
    Author     : Franky Laseure
*/

import Shipfitsuper, {Shipfitpk} from './super/shipfitsuper'

class Shipfit extends Shipfitsuper {
	constructor() { 
		super();
	}
	auth: string = null;

	tostring = () => {
		let result = super.tostring();
		return result;
	}
}

export default Shipfit;
