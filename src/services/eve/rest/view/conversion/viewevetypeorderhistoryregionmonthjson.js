//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 22.1.2022 10:55
    Author     : Franky Laseure
*/

import Viewevetypeorderhistoryregionmonth from '../../../../../data/eve/view/viewevetypeorderhistoryregionmonth.js';
import Moment from 'moment';

class ViewevetypeorderhistoryregionmonthJson {
	static toJSON = (viewevetypeorderhistoryregionmonth) => {
		var jsonobj = {
			"region": "" + viewevetypeorderhistoryregionmonth.region,
			"regionname": viewevetypeorderhistoryregionmonth.regionname,
			"evetype": "" + viewevetypeorderhistoryregionmonth.evetype,
			"year": viewevetypeorderhistoryregionmonth.year,
			"month": viewevetypeorderhistoryregionmonth.month,
			"average": "" + viewevetypeorderhistoryregionmonth.average,
			"highest": "" + viewevetypeorderhistoryregionmonth.highest,
			"lowest": "" + viewevetypeorderhistoryregionmonth.lowest,
			"volume": "" + viewevetypeorderhistoryregionmonth.volume,
			"ordercount": "" + viewevetypeorderhistoryregionmonth.ordercount,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewevetypeorderhistoryregionmonth => {
		let model = new Viewevetypeorderhistoryregionmonth();
		model.region = "" + jsonobj.region;
		model.regionname = jsonobj.regionname;
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

export default ViewevetypeorderhistoryregionmonthJson;
