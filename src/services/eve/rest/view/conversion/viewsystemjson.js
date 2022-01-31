//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 31.0.2022 17:49
    Author     : Franky Laseure
*/

import Viewsystem from '../../../../../data/eve/view/viewsystem.js';
import Moment from 'moment';

class ViewsystemJson {
	static toJSON = (viewsystem) => {
		var jsonobj = {
			"jumpssafe": viewsystem.jumpssafe,
			"jumpssafelowsec": viewsystem.jumpssafelowsec,
			"jumpssafenullsec": viewsystem.jumpssafenullsec,
			"regionname": viewsystem.regionname,
			"system_start": "" + viewsystem.system_start,
			"system_end": "" + viewsystem.system_end,
			"id": "" + viewsystem.id,
			"name": viewsystem.name,
			"constellation": "" + viewsystem.constellation,
			"security_class": viewsystem.security_class,
			"security_status": "" + viewsystem.security_status,
			"star_id": "" + viewsystem.star_id,
			"noaccess": viewsystem.noaccess,
			"isconstellationborder": viewsystem.isconstellationborder,
			"isregionborder": viewsystem.isregionborder,
			"security_island": "" + viewsystem.security_island,
			"downloaddate": "" + viewsystem.downloaddate,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewsystem => {
		let model = new Viewsystem();
		model.jumpssafe = jsonobj.jumpssafe;
		model.jumpssafelowsec = jsonobj.jumpssafelowsec;
		model.jumpssafenullsec = jsonobj.jumpssafenullsec;
		model.regionname = jsonobj.regionname;
		model.system_start = "" + jsonobj.system_start;
		model.system_end = "" + jsonobj.system_end;
		model.id = "" + jsonobj.id;
		model.name = jsonobj.name;
		model.constellation = "" + jsonobj.constellation;
		model.security_class = jsonobj.security_class;
		model.security_status = parseFloat(jsonobj.security_status);
		model.star_id = "" + jsonobj.star_id;
		model.noaccess = jsonobj.noaccess;
		model.isconstellationborder = jsonobj.isconstellationborder;
		model.isregionborder = jsonobj.isregionborder;
		model.security_island = "" + jsonobj.security_island;
		model.downloaddate = jsonobj.downloaddate;
		if(model.downloaddate) {
			model.downloaddateUI = Moment(new Date(jsonobj.downloaddate)).format("YYYY MM DD");
		} else {
			model.downloaddate = "";
		}
		return model;
	}
}

export default ViewsystemJson;
