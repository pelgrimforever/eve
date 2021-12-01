//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in regionbase.ts
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 14.5.2021 13:35
    Author     : Franky Laseure
*/

import Regionsuper, {Regionpk} from './super/regionsuper'

class Region extends Regionsuper {
	constructor() { 
		super();
	}
	auth: string = null;

	tostring = () => {
		let result = super.tostring();
		return result;
	}
}

export default Region;
