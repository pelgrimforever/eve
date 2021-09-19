//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 18.8.2021 11:31
    Author     : Franky Laseure
*/

import Viewsystemtrade from '../../../../../data/eve/view/viewsystemtrade.js';
import Moment from 'moment';

class ViewsystemtradeJson {
	static toJSON = (viewsystemtrade) => {
		var jsonobj = {
			"sell_system": "" + viewsystemtrade.sell_system,
			"buy_system": "" + viewsystemtrade.buy_system,
			"ordercount": "" + viewsystemtrade.ordercount,
			"totalsell": "" + viewsystemtrade.totalsell,
			"totalbuy": "" + viewsystemtrade.totalbuy,
			"profit": "" + viewsystemtrade.profit,
			"total_cargo_volume": "" + viewsystemtrade.total_cargo_volume,
			"jumps": viewsystemtrade.jumps,
			"regionsellname": viewsystemtrade.regionsellname,
			"systemsellname": viewsystemtrade.systemsellname,
			"regionbuyname": viewsystemtrade.regionbuyname,
			"systembuyname": viewsystemtrade.systembuyname,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewsystemtrade => {
		let model = new Viewsystemtrade();
		model.sell_system = "" + jsonobj.sell_system;
		model.buy_system = "" + jsonobj.buy_system;
		model.ordercount = "" + jsonobj.ordercount;
		model.totalsell = parseFloat(jsonobj.totalsell);
		model.totalbuy = parseFloat(jsonobj.totalbuy);
		model.profit = parseFloat(jsonobj.profit);
		model.total_cargo_volume = parseFloat(jsonobj.total_cargo_volume);
		model.jumps = jsonobj.jumps;
		model.regionsellname = jsonobj.regionsellname;
		model.systemsellname = jsonobj.systemsellname;
		model.regionbuyname = jsonobj.regionbuyname;
		model.systembuyname = jsonobj.systembuyname;
		return model;
	}
}

export default ViewsystemtradeJson;
