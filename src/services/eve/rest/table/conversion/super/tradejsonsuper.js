//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 30.10.2021 10:3
    Author     : Franky Laseure
*/

import { Tradepk } from '../../../../../../data/eve/table/super/tradesuper.js';
import Trade from '../../../../../../data/eve/table/trade.js';
import { Orderspk } from '../../../../../../data/eve/table/super/orderssuper.js';
import OrdersJson from '../ordersjson.js';
import Moment from 'moment';
import TradeJson from '../tradejson.js';

class TradeJsonsuper {
	static PKtoJSON = (tradePK) => {
		let jsonobj = {
			"sell_order_id": tradePK.ordersSellorderidPK==null ? null : "" + tradePK.ordersSellorderidPK.getId(),

			"buy_order_id": tradePK.ordersBuyorderidPK==null ? null : "" + tradePK.ordersBuyorderidPK.getId(),

		};
		if(tradePK!=null) {
		}
		return jsonobj;
	}

	static PKtoJSONstring = (tradePK) => {
		return JSON.stringify(this.PKtoJSON(tradePK));
	}
	
	static toJSON = (trade) => {
		var jsonobj = {
			"PK": this.PKtoJSON(trade.PK),
			"total_volume": "" + trade.total_volume,
			"buy_order_value": "" + trade.buy_order_value,
			"sell_order_value": "" + trade.sell_order_value,
			"profit": "" + trade.profit,
			"jumps": trade.jumps,
			"runs": trade.runs,
			"total_jumps": trade.total_jumps,
			"profit_per_jump": "" + trade.profit_per_jump,
			"singlerun_profit_per_jump": "" + trade.singlerun_profit_per_jump,
			"maxunits_per_run": trade.maxunits_per_run,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Tradepk => {
		let tradePK = new Tradepk();
		if(jsonobj!=null) {
			let ordersSellorderidproperties = {
				"id": "" + jsonobj.sell_order_id,
			}
			let ordersSellorderidPK = OrdersJson.PKfromJSON(ordersSellorderidproperties);
			tradePK.ordersSellorderidPK = ordersSellorderidPK;
			let ordersBuyorderidproperties = {
				"id": "" + jsonobj.buy_order_id,
			}
			let ordersBuyorderidPK = OrdersJson.PKfromJSON(ordersBuyorderidproperties);
			tradePK.ordersBuyorderidPK = ordersBuyorderidPK;
		}
		return tradePK;
	}
	static fromJSON = (jsonobj): Trade => {
		let model = new Trade();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.total_volume = parseFloat(jsonobj.total_volume);
		model.buy_order_value = parseFloat(jsonobj.buy_order_value);
		model.sell_order_value = parseFloat(jsonobj.sell_order_value);
		model.profit = parseFloat(jsonobj.profit);
		model.jumps = jsonobj.jumps;
		model.runs = jsonobj.runs;
		model.total_jumps = jsonobj.total_jumps;
		model.profit_per_jump = parseFloat(jsonobj.profit_per_jump);
		model.singlerun_profit_per_jump = parseFloat(jsonobj.singlerun_profit_per_jump);
		model.maxunits_per_run = jsonobj.maxunits_per_run;
		return model;
	}
}

export default TradeJsonsuper;
