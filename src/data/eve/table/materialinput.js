//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Materialinputsuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 17.0.2022 13:37
    Author     : Franky Laseure
*/

import Materialinputsuper, {Materialinputpk} from './super/materialinputsuper'

class Materialinput extends Materialinputsuper {
	constructor() { 
		super();
	}
	auth: string = null;

	tostring = () => {
		let result = super.tostring();
		return result;
	}
}

export default Materialinput;
