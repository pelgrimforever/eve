//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in stocktradebase.ts
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 24.7.2021 17:21
    Author     : Franky Laseure
*/

import Stocktradesuper, {Stocktradepk} from './super/stocktradesuper'

class Stocktrade extends Stocktradesuper {
	constructor() { 
		super();
	}
	auth: string = null;

	tostring = () => {
		let result = super.tostring();
		return result;
	}
}

export default Stocktrade;
