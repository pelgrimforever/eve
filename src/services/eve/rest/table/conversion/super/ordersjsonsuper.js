//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 19.0.2022 22:13
    Author     : Franky Laseure
*/

import { Orderspk } from '../../../../../../data/eve/table/super/orderssuper.js';
import Orders from '../../../../../../data/eve/table/orders.js';
import { Evetypepk } from '../../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../evetypejson.js';
import { Systempk } from '../../../../../../data/eve/table/super/systemsuper.js';
import SystemJson from '../systemjson.js';
import Moment from 'moment';
import OrdersJson from '../ordersjson.js';

class OrdersJsonsuper {
	static PKtoJSON = (ordersPK) => {
		let jsonobj = {
			"id": null,
		};
		if(ordersPK!=null) {
			jsonobj.id = "" + ordersPK.id;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (ordersPK) => {
		return JSON.stringify(this.PKtoJSON(ordersPK));
	}
	
	static toJSON = (orders) => {
		var jsonobj = {
			"PK": this.PKtoJSON(orders.PK),
			"evetypePK": null,
			"systemPK": null,
			"isopen": orders.isopen,
			"volume_total": "" + orders.volume_total,
			"volume_remain": "" + orders.volume_remain,
			"range": orders.range,
			"range_number": orders.range_number,
			"price": "" + orders.price,
			"min_volume": orders.min_volume,
			"location": "" + orders.location,
			"is_buy_order": orders.is_buy_order,
			"issued": "" + orders.issued,
			"duration": orders.duration,
			"page": orders.page,
		};
		if(orders.evetypePK!=null) {
			jsonobj.evetypePK = EvetypeJson.PKtoJSON(orders.evetypePK);
		}
		if(orders.systemPK!=null) {
			jsonobj.systemPK = SystemJson.PKtoJSON(orders.systemPK);
		}
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Orderspk => {
		let ordersPK = new Orderspk();
		if(jsonobj!=null) {
			ordersPK.id = jsonobj.id;
		}
		return ordersPK;
	}
	static fromJSON = (jsonobj): Orders => {
		let model = new Orders();
		model.PK = this.PKfromJSON(jsonobj.PK);
		let evetypePK = EvetypeJson.PKfromJSON(jsonobj.evetypePK);
		model.evetypePK = evetypePK;
		let systemPK = SystemJson.PKfromJSON(jsonobj.systemPK);
		model.systemPK = systemPK;
		model.isopen = jsonobj.isopen;
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
		return model;
	}
}

export default OrdersJsonsuper;
