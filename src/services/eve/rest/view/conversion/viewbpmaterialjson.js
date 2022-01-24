//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 24.0.2022 17:38
    Author     : Franky Laseure
*/

import Viewbpmaterial from '../../../../../data/eve/view/viewbpmaterial.js';
import Moment from 'moment';

class ViewbpmaterialJson {
	static toJSON = (viewbpmaterial) => {
		var jsonobj = {
			"bp": "" + viewbpmaterial.bp,
			"material": "" + viewbpmaterial.material,
			"amount": "" + viewbpmaterial.amount,
			"category": "" + viewbpmaterial.category,
			"typegroupid": "" + viewbpmaterial.typegroupid,
			"typegroupname": viewbpmaterial.typegroupname,
			"name": viewbpmaterial.name,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewbpmaterial => {
		let model = new Viewbpmaterial();
		model.bp = "" + jsonobj.bp;
		model.material = "" + jsonobj.material;
		model.amount = "" + jsonobj.amount;
		model.category = "" + jsonobj.category;
		model.typegroupid = "" + jsonobj.typegroupid;
		model.typegroupname = jsonobj.typegroupname;
		model.name = jsonobj.name;
		return model;
	}
}

export default ViewbpmaterialJson;
