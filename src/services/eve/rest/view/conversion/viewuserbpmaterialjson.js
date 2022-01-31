//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 31.0.2022 17:49
    Author     : Franky Laseure
*/

import Viewuserbpmaterial from '../../../../../data/eve/view/viewuserbpmaterial.js';
import Moment from 'moment';

class ViewuserbpmaterialJson {
	static toJSON = (viewuserbpmaterial) => {
		var jsonobj = {
			"bp": "" + viewuserbpmaterial.bp,
			"material": "" + viewuserbpmaterial.material,
			"amount": "" + viewuserbpmaterial.amount,
			"category": "" + viewuserbpmaterial.category,
			"typegroupid": "" + viewuserbpmaterial.typegroupid,
			"typegroupname": viewuserbpmaterial.typegroupname,
			"name": viewuserbpmaterial.name,
			"marketaverage": "" + viewuserbpmaterial.marketaverage,
			"username": viewuserbpmaterial.username,
			"materialinputaverage": "" + viewuserbpmaterial.materialinputaverage,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewuserbpmaterial => {
		let model = new Viewuserbpmaterial();
		model.bp = "" + jsonobj.bp;
		model.material = "" + jsonobj.material;
		model.amount = "" + jsonobj.amount;
		model.category = "" + jsonobj.category;
		model.typegroupid = "" + jsonobj.typegroupid;
		model.typegroupname = jsonobj.typegroupname;
		model.name = jsonobj.name;
		model.marketaverage = parseFloat(jsonobj.marketaverage);
		model.username = jsonobj.username;
		model.materialinputaverage = parseFloat(jsonobj.materialinputaverage);
		return model;
	}
}

export default ViewuserbpmaterialJson;
