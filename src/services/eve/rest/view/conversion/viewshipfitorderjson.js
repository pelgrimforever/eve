//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 31.0.2022 17:49
    Author     : Franky Laseure
*/

import Viewshipfitorder from '../../../../../data/eve/view/viewshipfitorder.js';
import Moment from 'moment';

class ViewshipfitorderJson {
	static toJSON = (viewshipfitorder) => {
		var jsonobj = {
			"evetypename": viewshipfitorder.evetypename,
			"packaged_volume": "" + viewshipfitorder.packaged_volume,
			"username": viewshipfitorder.username,
			"shipname": viewshipfitorder.shipname,
			"evetype": "" + viewshipfitorder.evetype,
			"amountwanted": viewshipfitorder.amountwanted,
			"amountinstock": viewshipfitorder.amountinstock,
			"amountplanned": "" + viewshipfitorder.amountplanned,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewshipfitorder => {
		let model = new Viewshipfitorder();
		model.evetypename = jsonobj.evetypename;
		model.packaged_volume = parseFloat(jsonobj.packaged_volume);
		model.username = jsonobj.username;
		model.shipname = jsonobj.shipname;
		model.evetype = "" + jsonobj.evetype;
		model.amountwanted = jsonobj.amountwanted;
		model.amountinstock = jsonobj.amountinstock;
		model.amountplanned = "" + jsonobj.amountplanned;
		return model;
	}
}

export default ViewshipfitorderJson;
