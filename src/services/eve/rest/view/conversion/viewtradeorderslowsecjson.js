//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 14.0.2022 16:56
    Author     : Franky Laseure
*/

import Viewtradeorderslowsec from '../../../../../data/eve/view/viewtradeorderslowsec.js';
import Moment from 'moment';

class ViewtradeorderslowsecJson {
	static toJSON = (viewtradeorderslowsec) => {
		var jsonobj = {
			"tradevolume": "" + viewtradeorderslowsec.tradevolume,
			"buy_totalprice": "" + viewtradeorderslowsec.buy_totalprice,
			"sell_totalprice": "" + viewtradeorderslowsec.sell_totalprice,
			"cargo_volume": "" + viewtradeorderslowsec.cargo_volume,
			"sell_id": "" + viewtradeorderslowsec.sell_id,
			"sell_system": "" + viewtradeorderslowsec.sell_system,
			"sell_location": "" + viewtradeorderslowsec.sell_location,
			"sell_evetype": "" + viewtradeorderslowsec.sell_evetype,
			"sell_packaged_volume": "" + viewtradeorderslowsec.sell_packaged_volume,
			"sell_volume_remain": "" + viewtradeorderslowsec.sell_volume_remain,
			"sell_price": "" + viewtradeorderslowsec.sell_price,
			"security_island": "" + viewtradeorderslowsec.security_island,
			"buy_id": "" + viewtradeorderslowsec.buy_id,
			"buy_system": "" + viewtradeorderslowsec.buy_system,
			"buy_location": "" + viewtradeorderslowsec.buy_location,
			"buy_volume_remain": "" + viewtradeorderslowsec.buy_volume_remain,
			"buy_price": "" + viewtradeorderslowsec.buy_price,
			"jumps": viewtradeorderslowsec.jumps,
			"jumpslowsec": viewtradeorderslowsec.jumpslowsec,
			"jumpsnullsec": viewtradeorderslowsec.jumpsnullsec,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewtradeorderslowsec => {
		let model = new Viewtradeorderslowsec();
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
		model.jumpslowsec = jsonobj.jumpslowsec;
		model.jumpsnullsec = jsonobj.jumpsnullsec;
		return model;
	}
}

export default ViewtradeorderslowsecJson;
