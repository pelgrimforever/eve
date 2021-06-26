//ProjectGenerator: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in tradebase.ts
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 14.5.2021 13:35
    Author     : Franky Laseure
*/

import Tradesuper, {Tradepk} from './super/tradesuper'

class Trade extends Tradesuper {
	constructor() { 
		super();
	}
	auth: string = null;

	tostring = () => {
		let result = super.tostring();
		return result;
	}
}

export default Trade;
