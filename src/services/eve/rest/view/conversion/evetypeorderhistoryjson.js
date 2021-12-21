//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 13.11.2021 18:23
    Author     : Franky Laseure
*/

import Evetypeorderhistory from '../../../../../data/eve/view/evetypeorderhistory.js';
import Moment from 'moment';

class EvetypeorderhistoryJson {
	static toJSON = (evetypeorderhistory) => {
		var jsonobj = {
			"evetype": "" + evetypeorderhistory.evetype,
			"date": "" + evetypeorderhistory.date,
			"average": "" + evetypeorderhistory.average,
			"highest": "" + evetypeorderhistory.highest,
			"lowest": "" + evetypeorderhistory.lowest,
			"volume": "" + evetypeorderhistory.volume,
			"ordercount": "" + evetypeorderhistory.ordercount,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Evetypeorderhistory => {
		let model = new Evetypeorderhistory();
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

export default EvetypeorderhistoryJson;
