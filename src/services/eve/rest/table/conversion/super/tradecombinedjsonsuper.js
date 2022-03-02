//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 22.1.2022 10:55
    Author     : Franky Laseure
*/

import { Tradecombinedpk } from '../../../../../../data/eve/table/super/tradecombinedsuper.js';
import Tradecombined from '../../../../../../data/eve/table/tradecombined.js';
import { Evetypepk } from '../../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../evetypejson.js';
import { Systempk } from '../../../../../../data/eve/table/super/systemsuper.js';
import SystemJson from '../systemjson.js';
import Moment from 'moment';
import TradecombinedJson from '../tradecombinedjson.js';

class TradecombinedJsonsuper {
	static PKtoJSON = (tradecombinedPK) => {
		let jsonobj = {
			"evetype": tradecombinedPK.evetypePK==null ? null : "" + tradecombinedPK.evetypePK.getId(),

			"buy_system": tradecombinedPK.systemBuysystemPK==null ? null : "" + tradecombinedPK.systemBuysystemPK.getId(),

			"sell_system": tradecombinedPK.systemSellsystemPK==null ? null : "" + tradecombinedPK.systemSellsystemPK.getId(),

		};
		if(tradecombinedPK!=null) {
		}
		return jsonobj;
	}

	static PKtoJSONstring = (tradecombinedPK) => {
		return JSON.stringify(this.PKtoJSON(tradecombinedPK));
	}
	
	static toJSON = (tradecombined) => {
		var jsonobj = {
			"PK": this.PKtoJSON(tradecombined.PK),
			"jumps": tradecombined.jumps,
			"jumpslowsec": tradecombined.jumpslowsec,
			"jumpsnullsec": tradecombined.jumpsnullsec,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Tradecombinedpk => {
		let tradecombinedPK = new Tradecombinedpk();
		if(jsonobj!=null) {
			let evetypeproperties = {
				"id": "" + jsonobj.evetype,
			}
			let evetypePK = EvetypeJson.PKfromJSON(evetypeproperties);
			tradecombinedPK.evetypePK = evetypePK;
			let systemBuysystemproperties = {
				"id": "" + jsonobj.buy_system,
			}
			let systemBuysystemPK = SystemJson.PKfromJSON(systemBuysystemproperties);
			tradecombinedPK.systemBuysystemPK = systemBuysystemPK;
			let systemSellsystemproperties = {
				"id": "" + jsonobj.sell_system,
			}
			let systemSellsystemPK = SystemJson.PKfromJSON(systemSellsystemproperties);
			tradecombinedPK.systemSellsystemPK = systemSellsystemPK;
		}
		return tradecombinedPK;
	}
	static fromJSON = (jsonobj): Tradecombined => {
		let model = new Tradecombined();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.jumps = jsonobj.jumps;
		model.jumpslowsec = jsonobj.jumpslowsec;
		model.jumpsnullsec = jsonobj.jumpsnullsec;
		return model;
	}
}

export default TradecombinedJsonsuper;
