//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 31.0.2022 17:49
    Author     : Franky Laseure
*/

import Viewmaterialinputavg from '../../../../../data/eve/view/viewmaterialinputavg.js';
import Moment from 'moment';

class ViewmaterialinputavgJson {
	static toJSON = (viewmaterialinputavg) => {
		var jsonobj = {
			"username": viewmaterialinputavg.username,
			"evetype": "" + viewmaterialinputavg.evetype,
			"lastbuytimestamp": viewmaterialinputavg.lastbuytimestamp,
			"totalamount": "" + viewmaterialinputavg.totalamount,
			"avgunitprice": "" + viewmaterialinputavg.avgunitprice,
			"totalusedamount": "" + viewmaterialinputavg.totalusedamount,
			"name": viewmaterialinputavg.name,
			"packaged_volume": "" + viewmaterialinputavg.packaged_volume,
			"average": "" + viewmaterialinputavg.average,
			"highest": "" + viewmaterialinputavg.highest,
			"lowest": "" + viewmaterialinputavg.lowest,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewmaterialinputavg => {
		let model = new Viewmaterialinputavg();
		model.username = jsonobj.username;
		model.evetype = "" + jsonobj.evetype;
		model.lastbuytimestamp = jsonobj.lastbuytimestamp;
		if(model.lastbuytimestamp) {
			model.lastbuytimestampUI = Moment(new Date(jsonobj.lastbuytimestamp)).format("YYYY MM DD - hh:mm:ss");
		} else {
			model.lastbuytimestamp = "";
		}
		model.totalamount = parseFloat(jsonobj.totalamount);
		model.avgunitprice = parseFloat(jsonobj.avgunitprice);
		model.totalusedamount = parseFloat(jsonobj.totalusedamount);
		model.name = jsonobj.name;
		model.packaged_volume = parseFloat(jsonobj.packaged_volume);
		model.average = parseFloat(jsonobj.average);
		model.highest = parseFloat(jsonobj.highest);
		model.lowest = parseFloat(jsonobj.lowest);
		return model;
	}
}

export default ViewmaterialinputavgJson;
