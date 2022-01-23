//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 19.0.2022 22:13
    Author     : Franky Laseure
*/

import Viewevetypes from '../../../../../data/eve/view/viewevetypes.js';
import Moment from 'moment';

class ViewevetypesJson {
	static toJSON = (viewevetypes) => {
		var jsonobj = {
			"category": "" + viewevetypes.category,
			"typegroupid": "" + viewevetypes.typegroupid,
			"typegroupname": viewevetypes.typegroupname,
			"id": "" + viewevetypes.id,
			"name": viewevetypes.name,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewevetypes => {
		let model = new Viewevetypes();
		model.category = "" + jsonobj.category;
		model.typegroupid = "" + jsonobj.typegroupid;
		model.typegroupname = jsonobj.typegroupname;
		model.id = "" + jsonobj.id;
		model.name = jsonobj.name;
		return model;
	}
}

export default ViewevetypesJson;
