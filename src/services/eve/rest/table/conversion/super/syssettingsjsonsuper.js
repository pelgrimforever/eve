//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 16.11.2021 15:46
    Author     : Franky Laseure
*/

import { Syssettingspk } from '../../../../../../data/eve/table/super/syssettingssuper.js';
import Syssettings from '../../../../../../data/eve/table/syssettings.js';
import Moment from 'moment';
import SyssettingsJson from '../syssettingsjson.js';

class SyssettingsJsonsuper {
	static PKtoJSON = (syssettingsPK) => {
		let jsonobj = {
			"name": null,
		};
		if(syssettingsPK!=null) {
			jsonobj.name = syssettingsPK.name;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (syssettingsPK) => {
		return JSON.stringify(this.PKtoJSON(syssettingsPK));
	}
	
	static toJSON = (syssettings) => {
		var jsonobj = {
			"PK": this.PKtoJSON(syssettings.PK),
			"value": syssettings.value,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Syssettingspk => {
		let syssettingsPK = new Syssettingspk();
		if(jsonobj!=null) {
			syssettingsPK.name = jsonobj.name;
		}
		return syssettingsPK;
	}
	static fromJSON = (jsonobj): Syssettings => {
		let model = new Syssettings();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.value = jsonobj.value;
		return model;
	}
}

export default SyssettingsJsonsuper;
