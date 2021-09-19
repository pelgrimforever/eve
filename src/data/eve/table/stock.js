//ProjectGenerator: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in stockbase.ts
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 24.7.2021 17:21
    Author     : Franky Laseure
*/

import Stocksuper, {Stockpk} from './super/stocksuper'

class Stock extends Stocksuper {
	constructor() { 
		super();
	}
	auth: string = null;

	tostring = () => {
		let result = super.tostring();
		return result;
	}
}

export default Stock;
