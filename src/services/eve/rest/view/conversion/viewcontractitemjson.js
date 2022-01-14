//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 14.0.2022 16:56
    Author     : Franky Laseure
*/

import Viewcontractitem from '../../../../../data/eve/view/viewcontractitem.js';
import Moment from 'moment';

class ViewcontractitemJson {
	static toJSON = (viewcontractitem) => {
		var jsonobj = {
			"id": "" + viewcontractitem.id,
			"contract": "" + viewcontractitem.contract,
			"blueprint_copy": viewcontractitem.blueprint_copy,
			"included": viewcontractitem.included,
			"quantity": "" + viewcontractitem.quantity,
			"evetype": "" + viewcontractitem.evetype,
			"material_efficiency": viewcontractitem.material_efficiency,
			"runs": viewcontractitem.runs,
			"time_efficiency": viewcontractitem.time_efficiency,
			"packaged_volume": "" + viewcontractitem.packaged_volume,
			"typename": viewcontractitem.typename,
			"typegroupid": "" + viewcontractitem.typegroupid,
			"groupname": viewcontractitem.groupname,
			"categoryid": "" + viewcontractitem.categoryid,
			"categoryname": viewcontractitem.categoryname,
			"avg_buyorder": "" + viewcontractitem.avg_buyorder,
			"min_buyorder": "" + viewcontractitem.min_buyorder,
			"max_buyorder": "" + viewcontractitem.max_buyorder,
			"avg_sellorder": "" + viewcontractitem.avg_sellorder,
			"min_selorder": "" + viewcontractitem.min_selorder,
			"max_selorder": "" + viewcontractitem.max_selorder,
			"average": "" + viewcontractitem.average,
			"highest": "" + viewcontractitem.highest,
			"lowest": "" + viewcontractitem.lowest,
			"order_count": "" + viewcontractitem.order_count,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewcontractitem => {
		let model = new Viewcontractitem();
		model.id = "" + jsonobj.id;
		model.contract = "" + jsonobj.contract;
		model.blueprint_copy = jsonobj.blueprint_copy;
		model.included = jsonobj.included;
		model.quantity = "" + jsonobj.quantity;
		model.evetype = "" + jsonobj.evetype;
		model.material_efficiency = jsonobj.material_efficiency;
		model.runs = jsonobj.runs;
		model.time_efficiency = jsonobj.time_efficiency;
		model.packaged_volume = parseFloat(jsonobj.packaged_volume);
		model.typename = jsonobj.typename;
		model.typegroupid = "" + jsonobj.typegroupid;
		model.groupname = jsonobj.groupname;
		model.categoryid = "" + jsonobj.categoryid;
		model.categoryname = jsonobj.categoryname;
		model.avg_buyorder = parseFloat(jsonobj.avg_buyorder);
		model.min_buyorder = parseFloat(jsonobj.min_buyorder);
		model.max_buyorder = parseFloat(jsonobj.max_buyorder);
		model.avg_sellorder = parseFloat(jsonobj.avg_sellorder);
		model.min_selorder = parseFloat(jsonobj.min_selorder);
		model.max_selorder = parseFloat(jsonobj.max_selorder);
		model.average = parseFloat(jsonobj.average);
		model.highest = parseFloat(jsonobj.highest);
		model.lowest = parseFloat(jsonobj.lowest);
		model.order_count = "" + jsonobj.order_count;
		return model;
	}
}

export default ViewcontractitemJson;
