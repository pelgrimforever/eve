//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 4.11.2021 14:51
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
		return model;
	}
}

export default SystemjumpsJsonsuper;
