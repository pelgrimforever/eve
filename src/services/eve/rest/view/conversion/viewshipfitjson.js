//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 19.0.2022 22:13
    Author     : Franky Laseure
*/

import Viewshipfit from '../../../../../data/eve/view/viewshipfit.js';
import Moment from 'moment';

class ViewshipfitJson {
	static toJSON = (viewshipfit) => {
		var jsonobj = {
			"shiptype": viewshipfit.shiptype,
			"packaged_volume": "" + viewshipfit.packaged_volume,
			"username": viewshipfit.username,
			"shipname": viewshipfit.shipname,
			"evetype": "" + viewshipfit.evetype,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewshipfit => {
		let model = new Viewshipfit();
		model.shiptype = jsonobj.shiptype;
		model.packaged_volume = parseFloat(jsonobj.packaged_volume);
		model.username = jsonobj.username;
		model.shipname = jsonobj.shipname;
		model.evetype = "" + jsonobj.evetype;
		return model;
	}
}

export default ViewshipfitJson;
