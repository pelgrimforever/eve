//Auto generated code
//don't change things here, it will be overwritten
//change in stargate-json.js
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 12.6.2021 13:57
    Author     : Franky Laseure
*/

import { Stargatepk } from '../../../../../../data/eve/table/super/stargatesuper.js';
import Stargate from '../../../../../../data/eve/table/stargate.js';
import { Systempk } from '../../../../../../data/eve/table/super/systemsuper.js';
import SystemJson from '../systemjson.js';
import Moment from 'moment';
import StargateJson from '../stargatejson.js';

class StargateJsonsuper {
	static PKtoJSON = (stargatePK) => {
		let jsonobj = {
			"id": null,
		};
		if(stargatePK!=null) {
			jsonobj.id = "" + stargatePK.id;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (stargatePK) => {
		return JSON.stringify(this.PKtoJSON(stargatePK));
	}
	
	static toJSON = (stargate) => {
		var jsonobj = {
			"PK": this.PKtoJSON(stargate.PK),
			"systemSystemPK": null,
			"systemTosystemPK": null,
			"to_stargate": "" + stargate.to_stargate,
			"name": stargate.name,
			"x": "" + stargate.x,
			"y": "" + stargate.y,
			"z": "" + stargate.z,
			"isconstellationborder": stargate.isconstellationborder,
			"isregionborder": stargate.isregionborder,
		};
		if(stargate.systemSystemPK!=null) {
			jsonobj.systemSystemPK = SystemJson.PKtoJSON(stargate.systemSystemPK);
		}
		if(stargate.systemTosystemPK!=null) {
			jsonobj.systemTosystemPK = SystemJson.PKtoJSON(stargate.systemTosystemPK);
		}
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Stargatepk => {
		let stargatePK = new Stargatepk();
		if(jsonobj!=null) {
			stargatePK.id = jsonobj.id;
		}
		return stargatePK;
	}
	static fromJSON = (jsonobj): Stargate => {
		let model = new Stargate();
		model.PK = this.PKfromJSON(jsonobj.PK);
		let systemSystemPK = SystemJson.PKfromJSON(jsonobj.systemSystemPK);
		model.systemSystemPK = systemSystemPK;
		let systemTosystemPK = SystemJson.PKfromJSON(jsonobj.systemTosystemPK);
		model.systemTosystemPK = systemTosystemPK;
		model.to_stargate = "" + jsonobj.to_stargate;
		model.name = jsonobj.name;
		model.x = parseFloat(jsonobj.x);
		model.y = parseFloat(jsonobj.y);
		model.z = parseFloat(jsonobj.z);
		model.isconstellationborder = jsonobj.isconstellationborder;
		model.isregionborder = jsonobj.isregionborder;
		return model;
	}
}

export default StargateJsonsuper;
