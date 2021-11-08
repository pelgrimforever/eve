//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 8.10.2021 7:21
    Author     : Franky Laseure
*/

import { Tmpsystemjumpspk } from '../../../../../../data/eve/table/super/tmpsystemjumpssuper.js';
import Tmpsystemjumps from '../../../../../../data/eve/table/tmpsystemjumps.js';
import Moment from 'moment';
import TmpsystemjumpsJson from '../tmpsystemjumpsjson.js';

class TmpsystemjumpsJsonsuper {
	static PKtoJSON = (tmpsystemjumpsPK) => {
		let jsonobj = {
			"system": null,
		};
		if(tmpsystemjumpsPK!=null) {
			jsonobj.system = "" + tmpsystemjumpsPK.system;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (tmpsystemjumpsPK) => {
		return JSON.stringify(this.PKtoJSON(tmpsystemjumpsPK));
	}
	
	static toJSON = (tmpsystemjumps) => {
		var jsonobj = {
			"PK": this.PKtoJSON(tmpsystemjumps.PK),
			"jump": tmpsystemjumps.jump,
			"maxjumps": tmpsystemjumps.maxjumps,
			"previoussystem": "" + tmpsystemjumps.previoussystem,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Tmpsystemjumpspk => {
		let tmpsystemjumpsPK = new Tmpsystemjumpspk();
		if(jsonobj!=null) {
			tmpsystemjumpsPK.system = jsonobj.system;
		}
		return tmpsystemjumpsPK;
	}
	static fromJSON = (jsonobj): Tmpsystemjumps => {
		let model = new Tmpsystemjumps();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.jump = jsonobj.jump;
		model.maxjumps = jsonobj.maxjumps;
		model.previoussystem = "" + jsonobj.previoussystem;
		return model;
	}
}

export default TmpsystemjumpsJsonsuper;
