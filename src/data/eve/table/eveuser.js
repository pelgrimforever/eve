//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Eveusersuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 13.1.2022 17:48
    Author     : Franky Laseure
*/

import Eveusersuper, {Eveuserpk} from './super/eveusersuper'

class Eveuser extends Eveusersuper {
	constructor() { 
		super();
	}
	auth: string = null;

	tostring = () => {
		let result = super.tostring();
		return result;
	}
}

export default Eveuser;
