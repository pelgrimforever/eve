//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 19.0.2022 22:13
    Author     : Franky Laseure
*/

import { Tradecombinedsellpk } from '../../../../../../data/eve/table/super/tradecombinedsellsuper.js';
import Tradecombinedsell from '../../../../../../data/eve/table/tradecombinedsell.js';
import { Orderspk } from '../../../../../../data/eve/table/super/orderssuper.js';
import OrdersJson from '../ordersjson.js';
import { Tradecombinedpk } from '../../../../../../data/eve/table/super/tradecombinedsuper.js';
import TradecombinedJson from '../tradecombinedjson.js';
import Moment from 'moment';
import TradecombinedsellJson from '../tradecombinedselljson.js';

class TradecombinedsellJsonsuper {
	static PKtoJSON = (tradecombinedsellPK) => {
		let jsonobj = {
			"buy_order_id": tradecombinedsellPK.ordersBuyorderidPK==null ? null : "" + tradecombinedsellPK.ordersBuyorderidPK.getId(),

			"sell_order_id": tradecombinedsellPK.ordersSellorderidPK==null ? null : "" + tradecombinedsellPK.ordersSellorderidPK.getId(),

			"sell_system": tradecombinedsellPK.tradecombinedPK==null ? null : "" + tradecombinedsellPK.tradecombinedPK.getSell_system(),
			"buy_system": tradecombinedsellPK.tradecombinedPK==null ? null : "" + tradecombinedsellPK.tradecombinedPK.getBuy_system(),
			"evetype": tradecombinedsellPK.tradecombinedPK==null ? null : "" + tradecombinedsellPK.tradecombinedPK.getEvetype(),

		};
		if(tradecombinedsellPK!=null) {
		}
		return jsonobj;
	}

	static PKtoJSONstring = (tradecombinedsellPK) => {
		return JSON.stringify(this.PKtoJSON(tradecombinedsellPK));
	}
	
	static toJSON = (tradecombinedsell) => {
		var jsonobj = {
			"PK": this.PKtoJSON(tradecombinedsell.PK),
			"amount": "" + tradecombinedsell.amount,
			"buy_order_value": "" + tradecombinedsell.buy_order_value,
			"sell_order_value": "" + tradecombinedsell.sell_order_value,
			"profit": "" + tradecombinedsell.profit,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Tradecombinedsellpk => {
		let tradecombinedsellPK = new Tradecombinedsellpk();
		if(jsonobj!=null) {
			let ordersBuyorderidproperties = {
				"id": "" + jsonobj.buy_order_id,
			}
			let ordersBuyorderidPK = OrdersJson.PKfromJSON(ordersBuyorderidproperties);
			tradecombinedsellPK.ordersBuyorderidPK = ordersBuyorderidPK;
			let ordersSellorderidproperties = {
				"id": "" + jsonobj.sell_order_id,
			}
			let ordersSellorderidPK = OrdersJson.PKfromJSON(ordersSellorderidproperties);
			tradecombinedsellPK.ordersSellorderidPK = ordersSellorderidPK;
			let tradecombinedproperties = {
				"sell_system": "" + jsonobj.sell_system,
				"buy_system": "" + jsonobj.buy_system,
				"evetype": "" + jsonobj.evetype,
			}
			let tradecombinedPK = TradecombinedJson.PKfromJSON(tradecombinedproperties);
			tradecombinedsellPK.tradecombinedPK = tradecombinedPK;
		}
		return tradecombinedsellPK;
	}
	static fromJSON = (jsonobj): Tradecombinedsell => {
		let model = new Tradecombinedsell();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.amount = "" + jsonobj.amount;
		model.buy_order_value = parseFloat(jsonobj.buy_order_value);
		model.sell_order_value = parseFloat(jsonobj.sell_order_value);
		model.profit = parseFloat(jsonobj.profit);
		return model;
	}
}

export default TradecombinedsellJsonsuper;
