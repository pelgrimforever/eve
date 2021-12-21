//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Shipfitmodulesuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 17.11.2021 15:31
    Author     : Franky Laseure
*/

import Shipfitmodulesuper, {Shipfitmodulepk} from './super/shipfitmodulesuper'

class Shipfitmodule extends Shipfitmodulesuper {
	constructor() { 
		super();
	}
	auth: string = null;

	tostring = () => {
		let result = super.tostring();
		return result;
	}
}

export default Shipfitmodule;
