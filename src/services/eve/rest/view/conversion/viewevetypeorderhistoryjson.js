//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 16.11.2021 15:46
    Author     : Franky Laseure
*/

import Viewevetypeorderhistory from '../../../../../data/eve/view/viewevetypeorderhistory.js';
import Moment from 'moment';

class ViewevetypeorderhistoryJson {
	static toJSON = (viewevetypeorderhistory) => {
		var jsonobj = {
			"evetype": "" + viewevetypeorderhistory.evetype,
			"date": "" + viewevetypeorderhistory.date,
			"average": "" + viewevetypeorderhistory.average,
			"highest": "" + viewevetypeorderhistory.highest,
			"lowest": "" + viewevetypeorderhistory.lowest,
			"volume": "" + viewevetypeorderhistory.volume,
			"ordercount": "" + viewevetypeorderhistory.ordercount,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewevetypeorderhistory => {
		let model = new Viewevetypeorderhistory();
		model.evetype = "" + jsonobj.evetype;
		model.date = jsonobj.date;
		if(model.date) {
			model.dateUI = Moment(new Date(jsonobj.date)).format("YYYY MM DD");
		} else {
			model.date = "";
		}
		model.average = parseFloat(jsonobj.average);
		model.highest = parseFloat(jsonobj.highest);
		model.lowest = parseFloat(jsonobj.lowest);
		model.volume = "" + jsonobj.volume;
		model.ordercount = "" + jsonobj.ordercount;
		return model;
	}
}

export default ViewevetypeorderhistoryJson;
