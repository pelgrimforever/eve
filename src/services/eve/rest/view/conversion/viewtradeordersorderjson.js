//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 18.8.2021 9:31
    Author     : Franky Laseure
*/

import Viewtradeordersorder from '../../../../../data/eve/view/viewtradeordersorder.js';
import Moment from 'moment';

class ViewtradeordersorderJson {
	static toJSON = (viewtradeordersorder) => {
		var jsonobj = {
			"username": viewtradeordersorder.username,
			"system": "" + viewtradeordersorder.system,
			"locationid": "" + viewtradeordersorder.locationid,
			"stationname": viewtradeordersorder.stationname,
			"locationname": viewtradeordersorder.locationname,
			"evetypeid": "" + viewtradeordersorder.evetypeid,
			"evetypename": viewtradeordersorder.evetypename,
			"packaged_volume": "" + viewtradeordersorder.packaged_volume,
			"min_volume": viewtradeordersorder.min_volume,
			"sellamount": "" + viewtradeordersorder.sellamount,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewtradeordersorder => {
		let model = new Viewtradeordersorder();
		model.username = jsonobj.username;
		model.system = "" + jsonobj.system;
		model.locationid = "" + jsonobj.locationid;
		model.stationname = jsonobj.stationname;
		model.locationname = jsonobj.locationname;
		model.evetypeid = "" + jsonobj.evetypeid;
		model.evetypename = jsonobj.evetypename;
		model.packaged_volume = parseFloat(jsonobj.packaged_volume);
		model.min_volume = jsonobj.min_volume;
		model.sellamount = "" + jsonobj.sellamount;
		return model;
	}
}

export default ViewtradeordersorderJson;
