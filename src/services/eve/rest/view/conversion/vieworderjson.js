//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 9.11.2021 14:30
    Author     : Franky Laseure
*/

import Vieworder from '../../../../../data/eve/view/vieworder.js';
import Moment from 'moment';

class VieworderJson {
	static toJSON = (vieworder) => {
		var jsonobj = {
			"id": "" + vieworder.id,
			"isopen": vieworder.isopen,
			"system": "" + vieworder.system,
			"evetype": "" + vieworder.evetype,
			"volume_total": "" + vieworder.volume_total,
			"volume_remain": "" + vieworder.volume_remain,
			"range": vieworder.range,
			"range_number": vieworder.range_number,
			"price": "" + vieworder.price,
			"min_volume": vieworder.min_volume,
			"location": "" + vieworder.location,
			"is_buy_order": vieworder.is_buy_order,
			"issued": vieworder.issued,
			"duration": vieworder.duration,
			"page": vieworder.page,
			"stationid": "" + vieworder.stationid,
			"stationname": vieworder.stationname,
			"locationid": "" + vieworder.locationid,
			"locationname": vieworder.locationname,
			"systemname": vieworder.systemname,
			"security_status": "" + vieworder.security_status,
			"constellation": "" + vieworder.constellation,
			"constellationname": vieworder.constellationname,
			"region": "" + vieworder.region,
			"regionname": vieworder.regionname,
			"evetypename": vieworder.evetypename,
			"packaged_volume": "" + vieworder.packaged_volume,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Vieworder => {
		let model = new Vieworder();
		model.id = "" + jsonobj.id;
		model.isopen = jsonobj.isopen;
		model.system = "" + jsonobj.system;
		model.evetype = "" + jsonobj.evetype;
		model.volume_total = "" + jsonobj.volume_total;
		model.volume_remain = "" + jsonobj.volume_remain;
		model.range = jsonobj.range;
		model.range_number = jsonobj.range_number;
		model.price = parseFloat(jsonobj.price);
		model.min_volume = jsonobj.min_volume;
		model.location = "" + jsonobj.location;
		model.is_buy_order = jsonobj.is_buy_order;
		model.issued = jsonobj.issued;
		model.duration = jsonobj.duration;
		model.page = jsonobj.page;
		model.stationid = "" + jsonobj.stationid;
		model.stationname = jsonobj.stationname;
		model.locationid = "" + jsonobj.locationid;
		model.locationname = jsonobj.locationname;
		model.systemname = jsonobj.systemname;
		model.security_status = parseFloat(jsonobj.security_status);
		model.constellation = "" + jsonobj.constellation;
		model.constellationname = jsonobj.constellationname;
		model.region = "" + jsonobj.region;
		model.regionname = jsonobj.regionname;
		model.evetypename = jsonobj.evetypename;
		model.packaged_volume = parseFloat(jsonobj.packaged_volume);
		return model;
	}
}

export default VieworderJson;
