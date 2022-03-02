//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 22.1.2022 10:55
    Author     : Franky Laseure
*/

import Viewtradecombinedsell from '../../../../../data/eve/view/viewtradecombinedsell.js';
import Moment from 'moment';

class ViewtradecombinedsellJson {
	static toJSON = (viewtradecombinedsell) => {
		var jsonobj = {
			"sell_system": "" + viewtradecombinedsell.sell_system,
			"buy_system": "" + viewtradecombinedsell.buy_system,
			"orderamount": "" + viewtradecombinedsell.orderamount,
			"buy_order_value": "" + viewtradecombinedsell.buy_order_value,
			"sell_order_value": "" + viewtradecombinedsell.sell_order_value,
			"profit": "" + viewtradecombinedsell.profit,
			"sell_locationid": "" + viewtradecombinedsell.sell_locationid,
			"sell_stationname": viewtradecombinedsell.sell_stationname,
			"evetype_id": "" + viewtradecombinedsell.evetype_id,
			"evetype_name": viewtradecombinedsell.evetype_name,
			"packaged_volume": "" + viewtradecombinedsell.packaged_volume,
			"sell_id": "" + viewtradecombinedsell.sell_id,
			"sell_volume_total": "" + viewtradecombinedsell.sell_volume_total,
			"sell_volume_remain": "" + viewtradecombinedsell.sell_volume_remain,
			"sell_min_volume": viewtradecombinedsell.sell_min_volume,
			"sell_updated": "" + viewtradecombinedsell.sell_updated,
			"buy_id": "" + viewtradecombinedsell.buy_id,
			"sell_price": "" + viewtradecombinedsell.sell_price,
			"buy_volume_total": "" + viewtradecombinedsell.buy_volume_total,
			"buy_volume_remain": "" + viewtradecombinedsell.buy_volume_remain,
			"buy_min_volume": viewtradecombinedsell.buy_min_volume,
			"buy_updated": "" + viewtradecombinedsell.buy_updated,
			"buy_price": "" + viewtradecombinedsell.buy_price,
			"buy_locationid": "" + viewtradecombinedsell.buy_locationid,
			"buy_stationname": viewtradecombinedsell.buy_stationname,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewtradecombinedsell => {
		let model = new Viewtradecombinedsell();
		model.sell_system = "" + jsonobj.sell_system;
		model.buy_system = "" + jsonobj.buy_system;
		model.orderamount = "" + jsonobj.orderamount;
		model.buy_order_value = parseFloat(jsonobj.buy_order_value);
		model.sell_order_value = parseFloat(jsonobj.sell_order_value);
		model.profit = parseFloat(jsonobj.profit);
		model.sell_locationid = "" + jsonobj.sell_locationid;
		model.sell_stationname = jsonobj.sell_stationname;
		model.evetype_id = "" + jsonobj.evetype_id;
		model.evetype_name = jsonobj.evetype_name;
		model.packaged_volume = parseFloat(jsonobj.packaged_volume);
		model.sell_id = "" + jsonobj.sell_id;
		model.sell_volume_total = "" + jsonobj.sell_volume_total;
		model.sell_volume_remain = "" + jsonobj.sell_volume_remain;
		model.sell_min_volume = jsonobj.sell_min_volume;
		model.sell_updated = "" + jsonobj.sell_updated;
		model.buy_id = "" + jsonobj.buy_id;
		model.sell_price = parseFloat(jsonobj.sell_price);
		model.buy_volume_total = "" + jsonobj.buy_volume_total;
		model.buy_volume_remain = "" + jsonobj.buy_volume_remain;
		model.buy_min_volume = jsonobj.buy_min_volume;
		model.buy_updated = "" + jsonobj.buy_updated;
		model.buy_price = parseFloat(jsonobj.buy_price);
		model.buy_locationid = "" + jsonobj.buy_locationid;
		model.buy_stationname = jsonobj.buy_stationname;
		return model;
	}
}

export default ViewtradecombinedsellJson;
