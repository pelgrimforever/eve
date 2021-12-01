//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Usersettingssuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 25.9.2021 14:57
    Author     : Franky Laseure
*/

import Usersettingssuper, {Usersettingspk} from './super/usersettingssuper'

class Usersettings extends Usersettingssuper {
	constructor() { 
		super();
	}
	auth: string = null;

	tostring = () => {
		let result = super.tostring();
		return result;
	}
}

export default Usersettings;
