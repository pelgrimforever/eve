//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 8.10.2021 7:21
    Author     : Franky Laseure
*/

import { Systemtradepk } from '../../../../../../data/eve/table/super/systemtradesuper.js';
import Systemtrade from '../../../../../../data/eve/table/systemtrade.js';
import { Systempk } from '../../../../../../data/eve/table/super/systemsuper.js';
import SystemJson from '../systemjson.js';
import Moment from 'moment';
import SystemtradeJson from '../systemtradejson.js';

class SystemtradeJsonsuper {
	static PKtoJSON = (systemtradePK) => {
		let jsonobj = {
			"sell_system": systemtradePK.systemSellsystemPK==null ? null : "" + systemtradePK.systemSellsystemPK.getId(),

			"buy_system": systemtradePK.systemBuysystemPK==null ? null : "" + systemtradePK.systemBuysystemPK.getId(),

		};
		if(systemtradePK!=null) {
		}
		return jsonobj;
	}

	static PKtoJSONstring = (systemtradePK) => {
		return JSON.stringify(this.PKtoJSON(systemtradePK));
	}
	
	static toJSON = (systemtrade) => {
		var jsonobj = {
			"PK": this.PKtoJSON(systemtrade.PK),
			"profit": "" + systemtrade.profit,
			"total_cargo_volume": "" + systemtrade.total_cargo_volume,
			"jumps": systemtrade.jumps,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Systemtradepk => {
		let systemtradePK = new Systemtradepk();
		if(jsonobj!=null) {
			let systemSellsystemproperties = {
				"id": "" + jsonobj.sell_system,
			}
			let systemSellsystemPK = SystemJson.PKfromJSON(systemSellsystemproperties);
			systemtradePK.systemSellsystemPK = systemSellsystemPK;
			let systemBuysystemproperties = {
				"id": "" + jsonobj.buy_system,
			}
			let systemBuysystemPK = SystemJson.PKfromJSON(systemBuysystemproperties);
			systemtradePK.systemBuysystemPK = systemBuysystemPK;
		}
		return systemtradePK;
	}
	static fromJSON = (jsonobj): Systemtrade => {
		let model = new Systemtrade();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.profit = parseFloat(jsonobj.profit);
		model.total_cargo_volume = parseFloat(jsonobj.total_cargo_volume);
		model.jumps = jsonobj.jumps;
		return model;
	}
}

export default SystemtradeJsonsuper;
