//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in constellationbase.ts
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 14.5.2021 13:35
    Author     : Franky Laseure
*/

import Constellationsuper, {Constellationpk} from './super/constellationsuper'

class Constellation extends Constellationsuper {
	constructor() { 
		super();
	}
	auth: string = null;

	tostring = () => {
		let result = super.tostring();
		return result;
	}
}

export default Constellation;
