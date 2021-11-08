//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 8.10.2021 7:21
    Author     : Franky Laseure
*/

import { Orderhistpk } from '../../../../../../data/eve/table/super/orderhistsuper.js';
import Orderhist from '../../../../../../data/eve/table/orderhist.js';
import { Evetypepk } from '../../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../evetypejson.js';
import { Systempk } from '../../../../../../data/eve/table/super/systemsuper.js';
import SystemJson from '../systemjson.js';
import Moment from 'moment';
import OrderhistJson from '../orderhistjson.js';

class OrderhistJsonsuper {
	static PKtoJSON = (orderhistPK) => {
		let jsonobj = {
			"id": null,
		};
		if(orderhistPK!=null) {
			jsonobj.id = "" + orderhistPK.id;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (orderhistPK) => {
		return JSON.stringify(this.PKtoJSON(orderhistPK));
	}
	
	static toJSON = (orderhist) => {
		var jsonobj = {
			"PK": this.PKtoJSON(orderhist.PK),
			"evetypePK": null,
			"systemPK": null,
			"isopen": orderhist.isopen,
			"volume_total": orderhist.volume_total,
			"volume_remain": orderhist.volume_remain,
			"range": orderhist.range,
			"range_number": orderhist.range_number,
			"price": "" + orderhist.price,
			"min_volume": orderhist.min_volume,
			"location": "" + orderhist.location,
			"is_buy_order": orderhist.is_buy_order,
			"issued": orderhist.issued,
			"duration": orderhist.duration,
		};
		if(orderhist.evetypePK!=null) {
			jsonobj.evetypePK = EvetypeJson.PKtoJSON(orderhist.evetypePK);
		}
		if(orderhist.systemPK!=null) {
			jsonobj.systemPK = SystemJson.PKtoJSON(orderhist.systemPK);
		}
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Orderhistpk => {
		let orderhistPK = new Orderhistpk();
		if(jsonobj!=null) {
			orderhistPK.id = jsonobj.id;
		}
		return orderhistPK;
	}
	static fromJSON = (jsonobj): Orderhist => {
		let model = new Orderhist();
		model.PK = this.PKfromJSON(jsonobj.PK);
		let evetypePK = EvetypeJson.PKfromJSON(jsonobj.evetypePK);
		model.evetypePK = evetypePK;
		let systemPK = SystemJson.PKfromJSON(jsonobj.systemPK);
		model.systemPK = systemPK;
		model.isopen = jsonobj.isopen;
		model.volume_total = jsonobj.volume_total;
		model.volume_remain = jsonobj.volume_remain;
		model.range = jsonobj.range;
		model.range_number = jsonobj.range_number;
		model.price = parseFloat(jsonobj.price);
		model.min_volume = jsonobj.min_volume;
		model.location = "" + jsonobj.location;
		model.is_buy_order = jsonobj.is_buy_order;
		model.issued = jsonobj.issued;
		model.duration = jsonobj.duration;
		return model;
	}
}

export default OrderhistJsonsuper;
