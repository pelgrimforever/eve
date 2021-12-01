//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 30.10.2021 10:4
    Author     : Franky Laseure
*/

import Viewsystemtradeorders from '../../../../../data/eve/view/viewsystemtradeorders.js';
import Moment from 'moment';

class ViewsystemtradeordersJson {
	static toJSON = (viewsystemtradeorders) => {
		var jsonobj = {
			"buy_totalprice": "" + viewsystemtradeorders.buy_totalprice,
			"sell_totalprice": "" + viewsystemtradeorders.sell_totalprice,
			"cargo_volume": "" + viewsystemtradeorders.cargo_volume,
			"sellorderid": "" + viewsystemtradeorders.sellorderid,
			"buyorderid": "" + viewsystemtradeorders.buyorderid,
			"evetype": "" + viewsystemtradeorders.evetype,
			"packaged_volume": "" + viewsystemtradeorders.packaged_volume,
			"security_island": "" + viewsystemtradeorders.security_island,
			"sell_system": "" + viewsystemtradeorders.sell_system,
			"buy_system": "" + viewsystemtradeorders.buy_system,
			"jumps": viewsystemtradeorders.jumps,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewsystemtradeorders => {
		let model = new Viewsystemtradeorders();
		model.buy_totalprice = parseFloat(jsonobj.buy_totalprice);
		model.sell_totalprice = parseFloat(jsonobj.sell_totalprice);
		model.cargo_volume = parseFloat(jsonobj.cargo_volume);
		model.sellorderid = "" + jsonobj.sellorderid;
		model.buyorderid = "" + jsonobj.buyorderid;
		model.evetype = "" + jsonobj.evetype;
		model.packaged_volume = parseFloat(jsonobj.packaged_volume);
		model.security_island = "" + jsonobj.security_island;
		model.sell_system = "" + jsonobj.sell_system;
		model.buy_system = "" + jsonobj.buy_system;
		model.jumps = jsonobj.jumps;
		return model;
	}
}

export default ViewsystemtradeordersJson;
