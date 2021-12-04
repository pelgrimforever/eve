//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 4.11.2021 14:51
    Author     : Franky Laseure
*/

import Viewtradesystemsevetype from '../../../../../data/eve/view/viewtradesystemsevetype.js';
import Moment from 'moment';

class ViewtradesystemsevetypeJson {
	static toJSON = (viewtradesystemsevetype) => {
		var jsonobj = {
			"systemsell": "" + viewtradesystemsevetype.systemsell,
			"systembuy": "" + viewtradesystemsevetype.systembuy,
			"evetype": "" + viewtradesystemsevetype.evetype,
			"jumps": viewtradesystemsevetype.jumps,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewtradesystemsevetype => {
		let model = new Viewtradesystemsevetype();
		model.systemsell = "" + jsonobj.systemsell;
		model.systembuy = "" + jsonobj.systembuy;
		model.evetype = "" + jsonobj.evetype;
		model.jumps = jsonobj.jumps;
		return model;
	}
}

export default ViewtradesystemsevetypeJson;
