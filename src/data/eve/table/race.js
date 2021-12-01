//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in racebase.ts
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 14.5.2021 13:35
    Author     : Franky Laseure
*/

import Racesuper, {Racepk} from './super/racesuper'

class Race extends Racesuper {
	constructor() { 
		super();
	}
	auth: string = null;

	tostring = () => {
		let result = super.tostring();
		return result;
	}
}

export default Race;
