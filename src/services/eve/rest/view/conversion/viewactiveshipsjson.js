//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 17.11.2021 18:20
    Author     : Franky Laseure
*/

import Viewactiveships from '../../../../../data/eve/view/viewactiveships.js';
import Moment from 'moment';

class ViewactiveshipsJson {
	static toJSON = (viewactiveships) => {
		var jsonobj = {
			"typegroupid": "" + viewactiveships.typegroupid,
			"typegroupname": viewactiveships.typegroupname,
			"id": "" + viewactiveships.id,
			"name": viewactiveships.name,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewactiveships => {
		let model = new Viewactiveships();
		model.typegroupid = "" + jsonobj.typegroupid;
		model.typegroupname = jsonobj.typegroupname;
		model.id = "" + jsonobj.id;
		model.name = jsonobj.name;
		return model;
	}
}

export default ViewactiveshipsJson;
