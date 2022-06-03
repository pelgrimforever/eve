//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 5.3.2022 17:21
    Author     : Franky Laseure
*/

import { Systemactivitypk } from '../../../../../../data/eve/table/super/systemactivitysuper.js';
import Systemactivity from '../../../../../../data/eve/table/systemactivity.js';
import { Systempk } from '../../../../../../data/eve/table/super/systemsuper.js';
import SystemJson from '../systemjson.js';
import Moment from 'moment';
import SystemactivityJson from '../systemactivityjson.js';

class SystemactivityJsonsuper {
	static PKtoJSON = (systemactivityPK) => {
		let jsonobj = {
			"timeslot": null,
			"systemid": systemactivityPK.systemPK==null ? null : "" + systemactivityPK.systemPK.getId(),

		};
		if(systemactivityPK!=null) {
			jsonobj.timeslot = systemactivityPK.timeslot;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (systemactivityPK) => {
		return JSON.stringify(this.PKtoJSON(systemactivityPK));
	}
	
	static toJSON = (systemactivity) => {
		var jsonobj = {
			"PK": this.PKtoJSON(systemactivity.PK),
			"ship_jumps": "" + systemactivity.ship_jumps,
			"npc_kills": "" + systemactivity.npc_kills,
			"ship_kills": "" + systemactivity.ship_kills,
			"pod_kills": "" + systemactivity.pod_kills,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Systemactivitypk => {
		let systemactivityPK = new Systemactivitypk();
		if(jsonobj!=null) {
			let systemproperties = {
				"id": "" + jsonobj.systemid,
			}
			let systemPK = SystemJson.PKfromJSON(systemproperties);
			systemactivityPK.systemPK = systemPK;
			systemactivityPK.timeslot = jsonobj.timeslot;
		}
		return systemactivityPK;
	}
	static fromJSON = (jsonobj): Systemactivity => {
		let model = new Systemactivity();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.ship_jumps = "" + jsonobj.ship_jumps;
		model.npc_kills = "" + jsonobj.npc_kills;
		model.ship_kills = "" + jsonobj.ship_kills;
		model.pod_kills = "" + jsonobj.pod_kills;
		return model;
	}
}

export default SystemactivityJsonsuper;
