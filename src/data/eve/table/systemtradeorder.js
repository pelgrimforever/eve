//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in systemtradeorderbase.ts
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 29.5.2021 18:39
    Author     : Franky Laseure
*/

import Systemtradeordersuper, {Systemtradeorderpk} from './super/systemtradeordersuper'

class Systemtradeorder extends Systemtradeordersuper {
	constructor() { 
		super();
	}
	auth: string = null;

	tostring = () => {
		let result = super.tostring();
		return result;
	}
}

export default Systemtradeorder;
