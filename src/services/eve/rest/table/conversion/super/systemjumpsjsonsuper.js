//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import { Systemjumpspk } from '../../../../../../data/eve/table/super/systemjumpssuper.js';
import Systemjumps from '../../../../../../data/eve/table/systemjumps.js';
import { Systempk } from '../../../../../../data/eve/table/super/systemsuper.js';
import SystemJson from '../systemjson.js';
import Moment from 'moment';
import SystemjumpsJson from '../systemjumpsjson.js';

class SystemjumpsJsonsuper {
	static PKtoJSON = (systemjumpsPK) => {
		let jsonobj = {
			"system_end": systemjumpsPK.systemSystemendPK==null ? null : "" + systemjumpsPK.systemSystemendPK.getId(),

			"system_start": systemjumpsPK.systemSystemstartPK==null ? null : "" + systemjumpsPK.systemSystemstartPK.getId(),

		};
		if(systemjumpsPK!=null) {
		}
		return jsonobj;
	}

	static PKtoJSONstring = (systemjumpsPK) => {
		return JSON.stringify(this.PKtoJSON(systemjumpsPK));
	}
	
	static toJSON = (systemjumps) => {
		var jsonobj = {
			"PK": this.PKtoJSON(systemjumps.PK),
			"jumps": systemjumps.jumps,
			"jumpslowsec": systemjumps.jumpslowsec,
			"jumpsnullsec": systemjumps.jumpsnullsec,
			"jumpssafe": systemjumps.jumpssafe,
			"jumpssafelowsec": systemjumps.jumpssafelowsec,
			"jumpssafenullsec": systemjumps.jumpssafenullsec,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Systemjumpspk => {
		let systemjumpsPK = new Systemjumpspk();
		if(jsonobj!=null) {
			let systemSystemendproperties = {
				"id": "" + jsonobj.system_end,
			}
			let systemSystemendPK = SystemJson.PKfromJSON(systemSystemendproperties);
			systemjumpsPK.systemSystemendPK = systemSystemendPK;
			let systemSystemstartproperties = {
				"id": "" + jsonobj.system_start,
			}
			let systemSystemstartPK = SystemJson.PKfromJSON(systemSystemstartproperties);
			systemjumpsPK.systemSystemstartPK = systemSystemstartPK;
		}
		return systemjumpsPK;
	}
	static fromJSON = (jsonobj): Systemjumps => {
		let model = new Systemjumps();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.jumps = jsonobj.jumps;
		model.jumpslowsec = jsonobj.jumpslowsec;
		model.jumpsnullsec = jsonobj.jumpsnullsec;
		model.jumpssafe = jsonobj.jumpssafe;
		model.jumpssafelowsec = jsonobj.jumpssafelowsec;
		model.jumpssafenullsec = jsonobj.jumpssafenullsec;
		return model;
	}
}

export default SystemjumpsJsonsuper;
