//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Contractitemsuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 2.0.2022 18:23
    Author     : Franky Laseure
*/

import Contractitemsuper, {Contractitempk} from './super/contractitemsuper'

class Contractitem extends Contractitemsuper {
	constructor() { 
		super();
	}
	auth: string = null;

	tostring = () => {
		let result = super.tostring();
		return result;
	}
}

export default Contractitem;
