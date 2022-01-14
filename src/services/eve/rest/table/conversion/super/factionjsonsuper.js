//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 14.0.2022 16:56
    Author     : Franky Laseure
*/

import { Factionpk } from '../../../../../../data/eve/table/super/factionsuper.js';
import Faction from '../../../../../../data/eve/table/faction.js';
import { Systempk } from '../../../../../../data/eve/table/super/systemsuper.js';
import SystemJson from '../systemjson.js';
import Moment from 'moment';
import FactionJson from '../factionjson.js';

class FactionJsonsuper {
	static PKtoJSON = (factionPK) => {
		let jsonobj = {
			"id": null,
		};
		if(factionPK!=null) {
			jsonobj.id = "" + factionPK.id;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (factionPK) => {
		return JSON.stringify(this.PKtoJSON(factionPK));
	}
	
	static toJSON = (faction) => {
		var jsonobj = {
			"PK": this.PKtoJSON(faction.PK),
			"systemPK": null,
			"name": faction.name,
			"description": faction.description,
			"is_unique": faction.is_unique,
			"size_factor": "" + faction.size_factor,
			"station_count": faction.station_count,
			"station_system_count": faction.station_system_count,
			"corporation": "" + faction.corporation,
			"militia_corporation": "" + faction.militia_corporation,
		};
		if(faction.systemPK!=null) {
			jsonobj.systemPK = SystemJson.PKtoJSON(faction.systemPK);
		}
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Factionpk => {
		let factionPK = new Factionpk();
		if(jsonobj!=null) {
			factionPK.id = jsonobj.id;
		}
		return factionPK;
	}
	static fromJSON = (jsonobj): Faction => {
		let model = new Faction();
		model.PK = this.PKfromJSON(jsonobj.PK);
		let systemPK = SystemJson.PKfromJSON(jsonobj.systemPK);
		model.systemPK = systemPK;
		model.name = jsonobj.name;
		model.description = jsonobj.description;
		model.is_unique = jsonobj.is_unique;
		model.size_factor = parseFloat(jsonobj.size_factor);
		model.station_count = jsonobj.station_count;
		model.station_system_count = jsonobj.station_system_count;
		model.corporation = "" + jsonobj.corporation;
		model.militia_corporation = "" + jsonobj.militia_corporation;
		return model;
	}
}

export default FactionJsonsuper;
