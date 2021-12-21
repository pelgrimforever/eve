//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Orderhistorymonthsuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 13.11.2021 15:8
    Author     : Franky Laseure
*/

import Orderhistorymonthsuper, {Orderhistorymonthpk} from './super/orderhistorymonthsuper'

class Orderhistorymonth extends Orderhistorymonthsuper {
	constructor() { 
		super();
	}
	auth: string = null;

	tostring = () => {
		let result = super.tostring();
		return result;
	}
}

export default Orderhistorymonth;
