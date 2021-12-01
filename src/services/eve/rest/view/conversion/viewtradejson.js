//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 30.10.2021 10:4
    Author     : Franky Laseure
*/

import Viewtrade from '../../../../../data/eve/view/viewtrade.js';
import Moment from 'moment';

class ViewtradeJson {
	static toJSON = (viewtrade) => {
		var jsonobj = {
			"sell_regionid": "" + viewtrade.sell_regionid,
			"sell_regionname": viewtrade.sell_regionname,
			"sell_systemid": "" + viewtrade.sell_systemid,
			"sell_systemname": viewtrade.sell_systemname,
			"sell_locationid": "" + viewtrade.sell_locationid,
			"sell_stationname": viewtrade.sell_stationname,
			"evetype_id": "" + viewtrade.evetype_id,
			"evetype_name": viewtrade.evetype_name,
			"packaged_volume": "" + viewtrade.packaged_volume,
			"sell_id": "" + viewtrade.sell_id,
			"buy_id": "" + viewtrade.buy_id,
			"sell_volume_remain": "" + viewtrade.sell_volume_remain,
			"sell_price": "" + viewtrade.sell_price,
			"buy_price": "" + viewtrade.buy_price,
			"buy_systemid": "" + viewtrade.buy_systemid,
			"buy_systemname": viewtrade.buy_systemname,
			"buy_locationid": "" + viewtrade.buy_locationid,
			"buy_stationname": viewtrade.buy_stationname,
			"buy_volume_remain": "" + viewtrade.buy_volume_remain,
			"total_volume": "" + viewtrade.total_volume,
			"sell_total": "" + viewtrade.sell_total,
			"buy_total": "" + viewtrade.buy_total,
			"trade_profit": "" + viewtrade.trade_profit,
			"trade_jumps": viewtrade.trade_jumps,
			"trade_profit_per_jump": "" + viewtrade.trade_profit_per_jump,
			"trade_runs": viewtrade.trade_runs,
			"trade_total_jumps": viewtrade.trade_total_jumps,
			"trade_singlerunprofit": "" + viewtrade.trade_singlerunprofit,
			"trade_maxunits_per_run": viewtrade.trade_maxunits_per_run,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewtrade => {
		let model = new Viewtrade();
		model.sell_regionid = "" + jsonobj.sell_regionid;
		model.sell_regionname = jsonobj.sell_regionname;
		model.sell_systemid = "" + jsonobj.sell_systemid;
		model.sell_systemname = jsonobj.sell_systemname;
		model.sell_locationid = "" + jsonobj.sell_locationid;
		model.sell_stationname = jsonobj.sell_stationname;
		model.evetype_id = "" + jsonobj.evetype_id;
		model.evetype_name = jsonobj.evetype_name;
		model.packaged_volume = parseFloat(jsonobj.packaged_volume);
		model.sell_id = "" + jsonobj.sell_id;
		model.buy_id = "" + jsonobj.buy_id;
		model.sell_volume_remain = "" + jsonobj.sell_volume_remain;
		model.sell_price = parseFloat(jsonobj.sell_price);
		model.buy_price = parseFloat(jsonobj.buy_price);
		model.buy_systemid = "" + jsonobj.buy_systemid;
		model.buy_systemname = jsonobj.buy_systemname;
		model.buy_locationid = "" + jsonobj.buy_locationid;
		model.buy_stationname = jsonobj.buy_stationname;
		model.buy_volume_remain = "" + jsonobj.buy_volume_remain;
		model.total_volume = parseFloat(jsonobj.total_volume);
		model.sell_total = parseFloat(jsonobj.sell_total);
		model.buy_total = parseFloat(jsonobj.buy_total);
		model.trade_profit = parseFloat(jsonobj.trade_profit);
		model.trade_jumps = jsonobj.trade_jumps;
		model.trade_profit_per_jump = parseFloat(jsonobj.trade_profit_per_jump);
		model.trade_runs = jsonobj.trade_runs;
		model.trade_total_jumps = jsonobj.trade_total_jumps;
		model.trade_singlerunprofit = parseFloat(jsonobj.trade_singlerunprofit);
		model.trade_maxunits_per_run = jsonobj.trade_maxunits_per_run;
		return model;
	}
}

export default ViewtradeJson;
