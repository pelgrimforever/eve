//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Viewstocktradeorders from '../../../../../data/eve/view/viewstocktradeorders.js';
import Moment from 'moment';

class ViewstocktradeordersJson {
	static toJSON = (viewstocktradeorders) => {
		var jsonobj = {
			"username": viewstocktradeorders.username,
			"system": "" + viewstocktradeorders.system,
			"locationid": "" + viewstocktradeorders.locationid,
			"stationname": viewstocktradeorders.stationname,
			"locationname": viewstocktradeorders.locationname,
			"evetypeid": "" + viewstocktradeorders.evetypeid,
			"evetypename": viewstocktradeorders.evetypename,
			"packaged_volume": "" + viewstocktradeorders.packaged_volume,
			"min_volume": viewstocktradeorders.min_volume,
			"orderid": "" + viewstocktradeorders.orderid,
			"sellamount": "" + viewstocktradeorders.sellamount,
			"price": "" + viewstocktradeorders.price,
			"totalprice": "" + viewstocktradeorders.totalprice,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewstocktradeorders => {
		let model = new Viewstocktradeorders();
		model.username = jsonobj.username;
		model.system = "" + jsonobj.system;
		model.locationid = "" + jsonobj.locationid;
		model.stationname = jsonobj.stationname;
		model.locationname = jsonobj.locationname;
		model.evetypeid = "" + jsonobj.evetypeid;
		model.evetypename = jsonobj.evetypename;
		model.packaged_volume = parseFloat(jsonobj.packaged_volume);
		model.min_volume = jsonobj.min_volume;
		model.orderid = "" + jsonobj.orderid;
		model.sellamount = "" + jsonobj.sellamount;
		model.price = parseFloat(jsonobj.price);
		model.totalprice = parseFloat(jsonobj.totalprice);
		return model;
	}
}

export default ViewstocktradeordersJson;
