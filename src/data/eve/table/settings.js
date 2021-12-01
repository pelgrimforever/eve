//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Settingssuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 25.9.2021 14:36
    Author     : Franky Laseure
*/

import Settingssuper, {Settingspk} from './super/settingssuper'

class Settings extends Settingssuper {
	constructor() { 
		super();
	}
	auth: string = null;

	tostring = () => {
		let result = super.tostring();
		return result;
	}
}

export default Settings;
