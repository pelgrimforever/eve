//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 19.0.2022 22:13
    Author     : Franky Laseure
*/

import Viewshipfitmodule from '../../../../../data/eve/view/viewshipfitmodule.js';
import Moment from 'moment';

class ViewshipfitmoduleJson {
	static toJSON = (viewshipfitmodule) => {
		var jsonobj = {
			"modulename": viewshipfitmodule.modulename,
			"packaged_volume": "" + viewshipfitmodule.packaged_volume,
			"username": viewshipfitmodule.username,
			"shipname": viewshipfitmodule.shipname,
			"moduletype": "" + viewshipfitmodule.moduletype,
			"amount": viewshipfitmodule.amount,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewshipfitmodule => {
		let model = new Viewshipfitmodule();
		model.modulename = jsonobj.modulename;
		model.packaged_volume = parseFloat(jsonobj.packaged_volume);
		model.username = jsonobj.username;
		model.shipname = jsonobj.shipname;
		model.moduletype = "" + jsonobj.moduletype;
		model.amount = jsonobj.amount;
		return model;
	}
}

export default ViewshipfitmoduleJson;
