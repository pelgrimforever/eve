//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 19.0.2022 22:13
    Author     : Franky Laseure
*/

import Viewevetypeorderhistorymonth from '../../../../../data/eve/view/viewevetypeorderhistorymonth.js';
import Moment from 'moment';

class ViewevetypeorderhistorymonthJson {
	static toJSON = (viewevetypeorderhistorymonth) => {
		var jsonobj = {
			"evetype": "" + viewevetypeorderhistorymonth.evetype,
			"year": viewevetypeorderhistorymonth.year,
			"month": viewevetypeorderhistorymonth.month,
			"average": "" + viewevetypeorderhistorymonth.average,
			"highest": "" + viewevetypeorderhistorymonth.highest,
			"lowest": "" + viewevetypeorderhistorymonth.lowest,
			"volume": "" + viewevetypeorderhistorymonth.volume,
			"ordercount": "" + viewevetypeorderhistorymonth.ordercount,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewevetypeorderhistorymonth => {
		let model = new Viewevetypeorderhistorymonth();
		model.evetype = "" + jsonobj.evetype;
		model.year = jsonobj.year;
		model.month = jsonobj.month;
		model.average = parseFloat(jsonobj.average);
		model.highest = parseFloat(jsonobj.highest);
		model.lowest = parseFloat(jsonobj.lowest);
		model.volume = parseFloat(jsonobj.volume);
		model.ordercount = parseFloat(jsonobj.ordercount);
		return model;
	}
}

export default ViewevetypeorderhistorymonthJson;
