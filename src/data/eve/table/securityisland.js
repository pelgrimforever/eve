//ProjectGenerator: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in securityislandbase.ts
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 14.5.2021 13:35
    Author     : Franky Laseure
*/

import Securityislandsuper, {Securityislandpk} from './super/securityislandsuper'

class Securityisland extends Securityislandsuper {
	constructor() { 
		super();
	}
	auth: string = null;

	tostring = () => {
		let result = super.tostring();
		return result;
	}
}

export default Securityisland;
