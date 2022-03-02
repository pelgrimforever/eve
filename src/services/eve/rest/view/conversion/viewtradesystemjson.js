//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 22.1.2022 10:55
    Author     : Franky Laseure
*/

import Viewtradesystem from '../../../../../data/eve/view/viewtradesystem.js';
import Moment from 'moment';

class ViewtradesystemJson {
	static toJSON = (viewtradesystem) => {
		var jsonobj = {
			"sell_regionid": "" + viewtradesystem.sell_regionid,
			"sell_regionname": viewtradesystem.sell_regionname,
			"sell_systemid": "" + viewtradesystem.sell_systemid,
			"sell_systemname": viewtradesystem.sell_systemname,
			"orders": "" + viewtradesystem.orders,
			"buy_total": "" + viewtradesystem.buy_total,
			"sell_total": "" + viewtradesystem.sell_total,
			"totalprofit": "" + viewtradesystem.totalprofit,
			"totalvolume": "" + viewtradesystem.totalvolume,
			"buy_systemid": "" + viewtradesystem.buy_systemid,
			"buy_systemname": viewtradesystem.buy_systemname,
			"trade_jumps": viewtradesystem.trade_jumps,
			"trade_jumpslowsec": viewtradesystem.trade_jumpslowsec,
			"trade_jumpsnullsec": viewtradesystem.trade_jumpsnullsec,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewtradesystem => {
		let model = new Viewtradesystem();
		model.sell_regionid = "" + jsonobj.sell_regionid;
		model.sell_regionname = jsonobj.sell_regionname;
		model.sell_systemid = "" + jsonobj.sell_systemid;
		model.sell_systemname = jsonobj.sell_systemname;
		model.orders = parseFloat(jsonobj.orders);
		model.buy_total = parseFloat(jsonobj.buy_total);
		model.sell_total = parseFloat(jsonobj.sell_total);
		model.totalprofit = parseFloat(jsonobj.totalprofit);
		model.totalvolume = parseFloat(jsonobj.totalvolume);
		model.buy_systemid = "" + jsonobj.buy_systemid;
		model.buy_systemname = jsonobj.buy_systemname;
		model.trade_jumps = jsonobj.trade_jumps;
		model.trade_jumpslowsec = jsonobj.trade_jumpslowsec;
		model.trade_jumpsnullsec = jsonobj.trade_jumpsnullsec;
		return model;
	}
}

export default ViewtradesystemJson;
