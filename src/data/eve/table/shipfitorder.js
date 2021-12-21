//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Shipfitordersuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 19.11.2021 16:16
    Author     : Franky Laseure
*/

import Shipfitordersuper, {Shipfitorderpk} from './super/shipfitordersuper'

class Shipfitorder extends Shipfitordersuper {
	constructor() { 
		super();
	}
	auth: string = null;

	tostring = () => {
		let result = super.tostring();
		return result;
	}
}

export default Shipfitorder;
