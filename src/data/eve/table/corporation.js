//ProjectGenerator: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in corporationbase.ts
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 14.5.2021 13:35
    Author     : Franky Laseure
*/

import Corporationsuper, {Corporationpk} from './super/corporationsuper'

class Corporation extends Corporationsuper {
	constructor() { 
		super();
	}
	auth: string = null;

	tostring = () => {
		let result = super.tostring();
		return result;
	}
}

export default Corporation;
