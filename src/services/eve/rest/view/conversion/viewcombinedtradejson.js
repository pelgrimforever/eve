//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 18.8.2021 11:31
    Author     : Franky Laseure
*/

import Viewcombinedtrade from '../../../../../data/eve/view/viewcombinedtrade.js';
import Moment from 'moment';

class ViewcombinedtradeJson {
	static toJSON = (viewcombinedtrade) => {
		var jsonobj = {
			"sellregion": viewcombinedtrade.sellregion,
			"buyregion": viewcombinedtrade.buyregion,
			"sell_systemid": "" + viewcombinedtrade.sell_systemid,
			"sellsystem": viewcombinedtrade.sellsystem,
			"buy_systemid": "" + viewcombinedtrade.buy_systemid,
			"buysystem": viewcombinedtrade.buysystem,
			"total_volume": "" + viewcombinedtrade.total_volume,
			"buy_order_value": "" + viewcombinedtrade.buy_order_value,
			"sell_order_value": "" + viewcombinedtrade.sell_order_value,
			"profit": "" + viewcombinedtrade.profit,
			"jumps": viewcombinedtrade.jumps,
			"runs": "" + viewcombinedtrade.runs,
			"ordercount": "" + viewcombinedtrade.ordercount,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewcombinedtrade => {
		let model = new Viewcombinedtrade();
		model.sellregion = jsonobj.sellregion;
		model.buyregion = jsonobj.buyregion;
		model.sell_systemid = "" + jsonobj.sell_systemid;
		model.sellsystem = jsonobj.sellsystem;
		model.buy_systemid = "" + jsonobj.buy_systemid;
		model.buysystem = jsonobj.buysystem;
		model.total_volume = parseFloat(jsonobj.total_volume);
		model.buy_order_value = parseFloat(jsonobj.buy_order_value);
		model.sell_order_value = parseFloat(jsonobj.sell_order_value);
		model.profit = parseFloat(jsonobj.profit);
		model.jumps = jsonobj.jumps;
		model.runs = "" + jsonobj.runs;
		model.ordercount = "" + jsonobj.ordercount;
		return model;
	}
}

export default ViewcombinedtradeJson;
