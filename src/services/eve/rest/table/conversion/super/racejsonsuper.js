//Auto generated code
//don't change things here, it will be overwritten
//change in race-json.js
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 18.6.2021 14:35
    Author     : Franky Laseure
*/

import { Racepk } from '../../../../../../data/eve/table/super/racesuper.js';
import Race from '../../../../../../data/eve/table/race.js';
import { Factionpk } from '../../../../../../data/eve/table/super/factionsuper.js';
import FactionJson from '../factionjson.js';
import Moment from 'moment';
import RaceJson from '../racejson.js';

class RaceJsonsuper {
	static PKtoJSON = (racePK) => {
		let jsonobj = {
			"id": null,
		};
		if(racePK!=null) {
			jsonobj.id = "" + racePK.id;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (racePK) => {
		return JSON.stringify(this.PKtoJSON(racePK));
	}
	
	static toJSON = (race) => {
		var jsonobj = {
			"PK": this.PKtoJSON(race.PK),
			"factionPK": null,
			"name": race.name,
			"description": race.description,
		};
		if(race.factionPK!=null) {
			jsonobj.factionPK = FactionJson.PKtoJSON(race.factionPK);
		}
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Racepk => {
		let racePK = new Racepk();
		if(jsonobj!=null) {
			racePK.id = jsonobj.id;
		}
		return racePK;
	}
	static fromJSON = (jsonobj): Race => {
		let model = new Race();
		model.PK = this.PKfromJSON(jsonobj.PK);
		let factionPK = FactionJson.PKfromJSON(jsonobj.factionPK);
		model.factionPK = factionPK;
		model.name = jsonobj.name;
		model.description = jsonobj.description;
		return model;
	}
}

export default RaceJsonsuper;
