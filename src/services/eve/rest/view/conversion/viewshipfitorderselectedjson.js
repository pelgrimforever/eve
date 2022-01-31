//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 31.0.2022 17:49
    Author     : Franky Laseure
*/

import Viewshipfitorderselected from '../../../../../data/eve/view/viewshipfitorderselected.js';
import Moment from 'moment';

class ViewshipfitorderselectedJson {
	static toJSON = (viewshipfitorderselected) => {
		var jsonobj = {
			"username": viewshipfitorderselected.username,
			"shipname": viewshipfitorderselected.shipname,
			"amountneeded": viewshipfitorderselected.amountneeded,
			"id": "" + viewshipfitorderselected.id,
			"isopen": viewshipfitorderselected.isopen,
			"system": "" + viewshipfitorderselected.system,
			"evetype": "" + viewshipfitorderselected.evetype,
			"volume_total": "" + viewshipfitorderselected.volume_total,
			"volume_remain": "" + viewshipfitorderselected.volume_remain,
			"range": viewshipfitorderselected.range,
			"range_number": viewshipfitorderselected.range_number,
			"price": "" + viewshipfitorderselected.price,
			"min_volume": viewshipfitorderselected.min_volume,
			"location": "" + viewshipfitorderselected.location,
			"is_buy_order": viewshipfitorderselected.is_buy_order,
			"issued": viewshipfitorderselected.issued,
			"duration": viewshipfitorderselected.duration,
			"page": viewshipfitorderselected.page,
			"stationid": "" + viewshipfitorderselected.stationid,
			"stationname": viewshipfitorderselected.stationname,
			"locationid": "" + viewshipfitorderselected.locationid,
			"locationname": viewshipfitorderselected.locationname,
			"systemname": viewshipfitorderselected.systemname,
			"security_status": "" + viewshipfitorderselected.security_status,
			"constellation": "" + viewshipfitorderselected.constellation,
			"constellationname": viewshipfitorderselected.constellationname,
			"region": "" + viewshipfitorderselected.region,
			"regionname": viewshipfitorderselected.regionname,
			"evetypename": viewshipfitorderselected.evetypename,
			"packaged_volume": "" + viewshipfitorderselected.packaged_volume,
			"avg_buyorder": "" + viewshipfitorderselected.avg_buyorder,
			"avg_sellorder": "" + viewshipfitorderselected.avg_sellorder,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewshipfitorderselected => {
		let model = new Viewshipfitorderselected();
		model.username = jsonobj.username;
		model.shipname = jsonobj.shipname;
		model.amountneeded = jsonobj.amountneeded;
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
		if(model.issued) {
			model.issuedUI = Moment(new Date(jsonobj.issued)).format("YYYY MM DD - hh:mm:ss");
		} else {
			model.issued = "";
		}
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
		model.avg_buyorder = parseFloat(jsonobj.avg_buyorder);
		model.avg_sellorder = parseFloat(jsonobj.avg_sellorder);
		return model;
	}
}

export default ViewshipfitorderselectedJson;
