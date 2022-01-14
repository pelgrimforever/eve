//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Contractsuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 2.0.2022 18:23
    Author     : Franky Laseure
*/

import Contractsuper, {Contractpk} from './super/contractsuper'

class Contract extends Contractsuper {
	constructor() { 
		super();
	}
	auth: string = null;

	tostring = () => {
		let result = super.tostring();
		return result;
	}
}

export default Contract;
