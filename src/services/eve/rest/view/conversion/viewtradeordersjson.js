//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 4.6.2021 14:41
    Author     : Franky Laseure
*/

import Viewtradeorders from '../../../../../data/eve/view/viewtradeorders.js';
import Moment from 'moment';

class ViewtradeordersJson {
	static toJSON = (viewtradeorders) => {
		var jsonobj = {
			"tradevolume": "" + viewtradeorders.tradevolume,
			"buy_totalprice": "" + viewtradeorders.buy_totalprice,
			"sell_totalprice": "" + viewtradeorders.sell_totalprice,
			"cargo_volume": "" + viewtradeorders.cargo_volume,
			"sell_id": "" + viewtradeorders.sell_id,
			"sell_system": "" + viewtradeorders.sell_system,
			"sell_location": "" + viewtradeorders.sell_location,
			"sell_evetype": "" + viewtradeorders.sell_evetype,
			"sell_packaged_volume": "" + viewtradeorders.sell_packaged_volume,
			"sell_volume_remain": "" + viewtradeorders.sell_volume_remain,
			"sell_price": "" + viewtradeorders.sell_price,
			"security_island": "" + viewtradeorders.security_island,
			"buy_id": "" + viewtradeorders.buy_id,
			"buy_system": "" + viewtradeorders.buy_system,
			"buy_location": "" + viewtradeorders.buy_location,
			"buy_volume_remain": "" + viewtradeorders.buy_volume_remain,
			"buy_price": "" + viewtradeorders.buy_price,
			"jumps": viewtradeorders.jumps,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewtradeorders => {
		let model = new Viewtradeorders();
		model.tradevolume = "" + jsonobj.tradevolume;
		model.buy_totalprice = parseFloat(jsonobj.buy_totalprice);
		model.sell_totalprice = parseFloat(jsonobj.sell_totalprice);
		model.cargo_volume = parseFloat(jsonobj.cargo_volume);
		model.sell_id = "" + jsonobj.sell_id;
		model.sell_system = "" + jsonobj.sell_system;
		model.sell_location = "" + jsonobj.sell_location;
		model.sell_evetype = "" + jsonobj.sell_evetype;
		model.sell_packaged_volume = parseFloat(jsonobj.sell_packaged_volume);
		model.sell_volume_remain = "" + jsonobj.sell_volume_remain;
		model.sell_price = parseFloat(jsonobj.sell_price);
		model.security_island = "" + jsonobj.security_island;
		model.buy_id = "" + jsonobj.buy_id;
		model.buy_system = "" + jsonobj.buy_system;
		model.buy_location = "" + jsonobj.buy_location;
		model.buy_volume_remain = "" + jsonobj.buy_volume_remain;
		model.buy_price = parseFloat(jsonobj.buy_price);
		model.jumps = jsonobj.jumps;
		return model;
	}
}

export default ViewtradeordersJson;
