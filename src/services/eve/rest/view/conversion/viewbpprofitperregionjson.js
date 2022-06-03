//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Viewbpprofitperregion from '../../../../../data/eve/view/viewbpprofitperregion.js';
import Moment from 'moment';

class ViewbpprofitperregionJson {
	static toJSON = (viewbpprofitperregion) => {
		var jsonobj = {
			"categoryid": "" + viewbpprofitperregion.categoryid,
			"categoryname": viewbpprofitperregion.categoryname,
			"typegroupid": "" + viewbpprofitperregion.typegroupid,
			"typegroupname": viewbpprofitperregion.typegroupname,
			"id": "" + viewbpprofitperregion.id,
			"name": viewbpprofitperregion.name,
			"estimatedproductioncost": "" + viewbpprofitperregion.estimatedproductioncost,
			"region": "" + viewbpprofitperregion.region,
			"regionname": viewbpprofitperregion.regionname,
			"year": viewbpprofitperregion.year,
			"month": viewbpprofitperregion.month,
			"average": "" + viewbpprofitperregion.average,
			"highest": "" + viewbpprofitperregion.highest,
			"lowest": "" + viewbpprofitperregion.lowest,
			"volume": "" + viewbpprofitperregion.volume,
			"ordercount": "" + viewbpprofitperregion.ordercount,
			"percprofit": "" + viewbpprofitperregion.percprofit,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewbpprofitperregion => {
		let model = new Viewbpprofitperregion();
		model.categoryid = "" + jsonobj.categoryid;
		model.categoryname = jsonobj.categoryname;
		model.typegroupid = "" + jsonobj.typegroupid;
		model.typegroupname = jsonobj.typegroupname;
		model.id = "" + jsonobj.id;
		model.name = jsonobj.name;
		model.estimatedproductioncost = parseFloat(jsonobj.estimatedproductioncost);
		model.region = "" + jsonobj.region;
		model.regionname = jsonobj.regionname;
		model.year = jsonobj.year;
		model.month = jsonobj.month;
		model.average = parseFloat(jsonobj.average);
		model.highest = parseFloat(jsonobj.highest);
		model.lowest = parseFloat(jsonobj.lowest);
		model.volume = parseFloat(jsonobj.volume);
		model.ordercount = parseFloat(jsonobj.ordercount);
		model.percprofit = parseFloat(jsonobj.percprofit);
		return model;
	}
}

export default ViewbpprofitperregionJson;
