//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 4.6.2021 14:41
    Author     : Franky Laseure
*/

import Viewsystemtradeorder from '../../../../../data/eve/view/viewsystemtradeorder.js';
import Moment from 'moment';

class ViewsystemtradeorderJson {
	static toJSON = (viewsystemtradeorder) => {
		var jsonobj = {
			"sell_system": "" + viewsystemtradeorder.sell_system,
			"buy_system": "" + viewsystemtradeorder.buy_system,
			"sell_order": "" + viewsystemtradeorder.sell_order,
			"buy_order": "" + viewsystemtradeorder.buy_order,
			"amount": "" + viewsystemtradeorder.amount,
			"sellprice": "" + viewsystemtradeorder.sellprice,
			"buyprice": "" + viewsystemtradeorder.buyprice,
			"profit": "" + viewsystemtradeorder.profit,
			"cargovolume": "" + viewsystemtradeorder.cargovolume,
			"evetype": "" + viewsystemtradeorder.evetype,
			"evetypename": viewsystemtradeorder.evetypename,
			"sell_volume_remain": "" + viewsystemtradeorder.sell_volume_remain,
			"sell_price": "" + viewsystemtradeorder.sell_price,
			"sell_station": "" + viewsystemtradeorder.sell_station,
			"sell_stationname": viewsystemtradeorder.sell_stationname,
			"buy_volume_remain": "" + viewsystemtradeorder.buy_volume_remain,
			"buy_price": "" + viewsystemtradeorder.buy_price,
			"buy_station": "" + viewsystemtradeorder.buy_station,
			"buy_stationname": viewsystemtradeorder.buy_stationname,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewsystemtradeorder => {
		let model = new Viewsystemtradeorder();
		model.sell_system = "" + jsonobj.sell_system;
		model.buy_system = "" + jsonobj.buy_system;
		model.sell_order = "" + jsonobj.sell_order;
		model.buy_order = "" + jsonobj.buy_order;
		model.amount = "" + jsonobj.amount;
		model.sellprice = parseFloat(jsonobj.sellprice);
		model.buyprice = parseFloat(jsonobj.buyprice);
		model.profit = parseFloat(jsonobj.profit);
		model.cargovolume = parseFloat(jsonobj.cargovolume);
		model.evetype = "" + jsonobj.evetype;
		model.evetypename = jsonobj.evetypename;
		model.sell_volume_remain = "" + jsonobj.sell_volume_remain;
		model.sell_price = parseFloat(jsonobj.sell_price);
		model.sell_station = "" + jsonobj.sell_station;
		model.sell_stationname = jsonobj.sell_stationname;
		model.buy_volume_remain = "" + jsonobj.buy_volume_remain;
		model.buy_price = parseFloat(jsonobj.buy_price);
		model.buy_station = "" + jsonobj.buy_station;
		model.buy_stationname = jsonobj.buy_stationname;
		return model;
	}
}

export default ViewsystemtradeorderJson;
