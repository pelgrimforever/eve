//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 31.0.2022 17:49
    Author     : Franky Laseure
*/

import Viewmaterialinput from '../../../../../data/eve/view/viewmaterialinput.js';
import Moment from 'moment';

class ViewmaterialinputJson {
	static toJSON = (viewmaterialinput) => {
		var jsonobj = {
			"username": viewmaterialinput.username,
			"evetype": "" + viewmaterialinput.evetype,
			"addtimestamp": viewmaterialinput.addtimestamp,
			"amount": "" + viewmaterialinput.amount,
			"unitprice": "" + viewmaterialinput.unitprice,
			"usedamount": "" + viewmaterialinput.usedamount,
			"name": viewmaterialinput.name,
			"packaged_volume": "" + viewmaterialinput.packaged_volume,
			"average": "" + viewmaterialinput.average,
			"highest": "" + viewmaterialinput.highest,
			"lowest": "" + viewmaterialinput.lowest,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewmaterialinput => {
		let model = new Viewmaterialinput();
		model.username = jsonobj.username;
		model.evetype = "" + jsonobj.evetype;
		model.addtimestamp = jsonobj.addtimestamp;
		if(model.addtimestamp) {
			model.addtimestampUI = Moment(new Date(jsonobj.addtimestamp)).format("YYYY MM DD - hh:mm:ss");
		} else {
			model.addtimestamp = "";
		}
		model.amount = "" + jsonobj.amount;
		model.unitprice = parseFloat(jsonobj.unitprice);
		model.usedamount = "" + jsonobj.usedamount;
		model.name = jsonobj.name;
		model.packaged_volume = parseFloat(jsonobj.packaged_volume);
		model.average = parseFloat(jsonobj.average);
		model.highest = parseFloat(jsonobj.highest);
		model.lowest = parseFloat(jsonobj.lowest);
		return model;
	}
}

export default ViewmaterialinputJson;
