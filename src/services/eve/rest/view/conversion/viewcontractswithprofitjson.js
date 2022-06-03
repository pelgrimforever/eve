//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Viewcontractswithprofit from '../../../../../data/eve/view/viewcontractswithprofit.js';
import Moment from 'moment';

class ViewcontractswithprofitJson {
	static toJSON = (viewcontractswithprofit) => {
		var jsonobj = {
			"id": "" + viewcontractswithprofit.id,
			"date_expired": viewcontractswithprofit.date_expired,
			"date_issued": viewcontractswithprofit.date_issued,
			"days_to_complete": viewcontractswithprofit.days_to_complete,
			"end_location_id": "" + viewcontractswithprofit.end_location_id,
			"price": "" + viewcontractswithprofit.price,
			"reward": "" + viewcontractswithprofit.reward,
			"start_location_id": "" + viewcontractswithprofit.start_location_id,
			"name": viewcontractswithprofit.name,
			"systemname": viewcontractswithprofit.systemname,
			"regionname": viewcontractswithprofit.regionname,
			"title": viewcontractswithprofit.title,
			"volume": "" + viewcontractswithprofit.volume,
			"sellprice": "" + viewcontractswithprofit.sellprice,
			"buyprice": "" + viewcontractswithprofit.buyprice,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewcontractswithprofit => {
		let model = new Viewcontractswithprofit();
		model.id = "" + jsonobj.id;
		model.date_expired = jsonobj.date_expired;
		if(model.date_expired) {
			model.date_expiredUI = Moment(new Date(jsonobj.date_expired)).format("YYYY MM DD - hh:mm:ss");
		} else {
			model.date_expired = "";
		}
		model.date_issued = jsonobj.date_issued;
		if(model.date_issued) {
			model.date_issuedUI = Moment(new Date(jsonobj.date_issued)).format("YYYY MM DD - hh:mm:ss");
		} else {
			model.date_issued = "";
		}
		model.days_to_complete = jsonobj.days_to_complete;
		model.end_location_id = "" + jsonobj.end_location_id;
		model.price = parseFloat(jsonobj.price);
		model.reward = parseFloat(jsonobj.reward);
		model.start_location_id = "" + jsonobj.start_location_id;
		model.name = jsonobj.name;
		model.systemname = jsonobj.systemname;
		model.regionname = jsonobj.regionname;
		model.title = jsonobj.title;
		model.volume = parseFloat(jsonobj.volume);
		model.sellprice = parseFloat(jsonobj.sellprice);
		model.buyprice = parseFloat(jsonobj.buyprice);
		return model;
	}
}

export default ViewcontractswithprofitJson;
