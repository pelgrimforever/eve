//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Bpmaterialsuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 24.0.2022 16:47
    Author     : Franky Laseure
*/

import Bpmaterialsuper, {Bpmaterialpk} from './super/bpmaterialsuper'

class Bpmaterial extends Bpmaterialsuper {
	constructor() { 
		super();
	}
	auth: string = null;

	tostring = () => {
		let result = super.tostring();
		return result;
	}
}

export default Bpmaterial;
