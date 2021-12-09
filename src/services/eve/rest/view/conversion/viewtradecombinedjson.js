//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 9.11.2021 14:30
    Author     : Franky Laseure
*/

import Viewtradecombined from '../../../../../data/eve/view/viewtradecombined.js';
import Moment from 'moment';

class ViewtradecombinedJson {
	static toJSON = (viewtradecombined) => {
		var jsonobj = {
			"sell_regionid": "" + viewtradecombined.sell_regionid,
			"sell_regionname": viewtradecombined.sell_regionname,
			"sell_systemid": "" + viewtradecombined.sell_systemid,
			"sell_systemname": viewtradecombined.sell_systemname,
			"evetype_id": "" + viewtradecombined.evetype_id,
			"evetype_name": viewtradecombined.evetype_name,
			"packaged_volume": "" + viewtradecombined.packaged_volume,
			"orders": "" + viewtradecombined.orders,
			"totalamount": "" + viewtradecombined.totalamount,
			"buy_order_total": "" + viewtradecombined.buy_order_total,
			"sell_order_total": "" + viewtradecombined.sell_order_total,
			"totalprofit": "" + viewtradecombined.totalprofit,
			"buy_systemid": "" + viewtradecombined.buy_systemid,
			"buy_systemname": viewtradecombined.buy_systemname,
			"trade_jumps": viewtradecombined.trade_jumps,
			"trade_jumpslowsec": viewtradecombined.trade_jumpslowsec,
			"trade_jumpsnullsec": viewtradecombined.trade_jumpsnullsec,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewtradecombined => {
		let model = new Viewtradecombined();
		model.sell_regionid = "" + jsonobj.sell_regionid;
		model.sell_regionname = jsonobj.sell_regionname;
		model.sell_systemid = "" + jsonobj.sell_systemid;
		model.sell_systemname = jsonobj.sell_systemname;
		model.evetype_id = "" + jsonobj.evetype_id;
		model.evetype_name = jsonobj.evetype_name;
		model.packaged_volume = parseFloat(jsonobj.packaged_volume);
		model.orders = "" + jsonobj.orders;
		model.totalamount = parseFloat(jsonobj.totalamount);
		model.buy_order_total = parseFloat(jsonobj.buy_order_total);
		model.sell_order_total = parseFloat(jsonobj.sell_order_total);
		model.totalprofit = parseFloat(jsonobj.totalprofit);
		model.buy_systemid = "" + jsonobj.buy_systemid;
		model.buy_systemname = jsonobj.buy_systemname;
		model.trade_jumps = jsonobj.trade_jumps;
		model.trade_jumpslowsec = jsonobj.trade_jumpslowsec;
		model.trade_jumpsnullsec = jsonobj.trade_jumpsnullsec;
		return model;
	}
}

export default ViewtradecombinedJson;
