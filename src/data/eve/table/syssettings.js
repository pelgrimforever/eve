//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Syssettingssuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 11.11.2021 13:40
    Author     : Franky Laseure
*/

import Syssettingssuper, {Syssettingspk} from './super/syssettingssuper'

class Syssettings extends Syssettingssuper {
	constructor() { 
		super();
	}
	auth: string = null;

	tostring = () => {
		let result = super.tostring();
		return result;
	}
}

export default Syssettings;
