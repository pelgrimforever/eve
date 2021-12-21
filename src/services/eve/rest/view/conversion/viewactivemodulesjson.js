//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 18.11.2021 18:23
    Author     : Franky Laseure
*/

import Viewactivemodules from '../../../../../data/eve/view/viewactivemodules.js';
import Moment from 'moment';

class ViewactivemodulesJson {
	static toJSON = (viewactivemodules) => {
		var jsonobj = {
			"typegroupid": "" + viewactivemodules.typegroupid,
			"typegroupname": viewactivemodules.typegroupname,
			"id": "" + viewactivemodules.id,
			"name": viewactivemodules.name,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewactivemodules => {
		let model = new Viewactivemodules();
		model.typegroupid = "" + jsonobj.typegroupid;
		model.typegroupname = jsonobj.typegroupname;
		model.id = "" + jsonobj.id;
		model.name = jsonobj.name;
		return model;
	}
}

export default ViewactivemodulesJson;
