//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 30.10.2021 10:3
    Author     : Franky Laseure
*/

import { Systemtradeorderpk } from '../../../../../../data/eve/table/super/systemtradeordersuper.js';
import Systemtradeorder from '../../../../../../data/eve/table/systemtradeorder.js';
import { Orderspk } from '../../../../../../data/eve/table/super/orderssuper.js';
import OrdersJson from '../ordersjson.js';
import { Systemtradepk } from '../../../../../../data/eve/table/super/systemtradesuper.js';
import SystemtradeJson from '../systemtradejson.js';
import Moment from 'moment';
import SystemtradeorderJson from '../systemtradeorderjson.js';

class SystemtradeorderJsonsuper {
	static PKtoJSON = (systemtradeorderPK) => {
		let jsonobj = {
			"buy_order": systemtradeorderPK.ordersBuyorderPK==null ? null : "" + systemtradeorderPK.ordersBuyorderPK.getId(),

			"sell_order": systemtradeorderPK.ordersSellorderPK==null ? null : "" + systemtradeorderPK.ordersSellorderPK.getId(),

			"buy_system": systemtradeorderPK.systemtradePK==null ? null : "" + systemtradeorderPK.systemtradePK.getBuy_system(),
			"sell_system": systemtradeorderPK.systemtradePK==null ? null : "" + systemtradeorderPK.systemtradePK.getSell_system(),

		};
		if(systemtradeorderPK!=null) {
		}
		return jsonobj;
	}

	static PKtoJSONstring = (systemtradeorderPK) => {
		return JSON.stringify(this.PKtoJSON(systemtradeorderPK));
	}
	
	static toJSON = (systemtradeorder) => {
		var jsonobj = {
			"PK": this.PKtoJSON(systemtradeorder.PK),
			"amount": "" + systemtradeorder.amount,
			"sellprice": "" + systemtradeorder.sellprice,
			"buyprice": "" + systemtradeorder.buyprice,
			"profit": "" + systemtradeorder.profit,
			"cargovolume": "" + systemtradeorder.cargovolume,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Systemtradeorderpk => {
		let systemtradeorderPK = new Systemtradeorderpk();
		if(jsonobj!=null) {
			let ordersBuyorderproperties = {
				"id": "" + jsonobj.buy_order,
			}
			let ordersBuyorderPK = OrdersJson.PKfromJSON(ordersBuyorderproperties);
			systemtradeorderPK.ordersBuyorderPK = ordersBuyorderPK;
			let ordersSellorderproperties = {
				"id": "" + jsonobj.sell_order,
			}
			let ordersSellorderPK = OrdersJson.PKfromJSON(ordersSellorderproperties);
			systemtradeorderPK.ordersSellorderPK = ordersSellorderPK;
			let systemtradeproperties = {
				"buy_system": "" + jsonobj.buy_system,
				"sell_system": "" + jsonobj.sell_system,
			}
			let systemtradePK = SystemtradeJson.PKfromJSON(systemtradeproperties);
			systemtradeorderPK.systemtradePK = systemtradePK;
		}
		return systemtradeorderPK;
	}
	static fromJSON = (jsonobj): Systemtradeorder => {
		let model = new Systemtradeorder();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.amount = "" + jsonobj.amount;
		model.sellprice = parseFloat(jsonobj.sellprice);
		model.buyprice = parseFloat(jsonobj.buyprice);
		model.profit = parseFloat(jsonobj.profit);
		model.cargovolume = parseFloat(jsonobj.cargovolume);
		return model;
	}
}

export default SystemtradeorderJsonsuper;
