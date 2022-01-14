//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 14.0.2022 16:56
    Author     : Franky Laseure
*/

import { Settingspk } from '../../../../../../data/eve/table/super/settingssuper.js';
import Settings from '../../../../../../data/eve/table/settings.js';
import Moment from 'moment';
import SettingsJson from '../settingsjson.js';

class SettingsJsonsuper {
	static PKtoJSON = (settingsPK) => {
		let jsonobj = {
			"name": null,
		};
		if(settingsPK!=null) {
			jsonobj.name = settingsPK.name;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (settingsPK) => {
		return JSON.stringify(this.PKtoJSON(settingsPK));
	}
	
	static toJSON = (settings) => {
		var jsonobj = {
			"PK": this.PKtoJSON(settings.PK),
			"value": settings.value,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Settingspk => {
		let settingsPK = new Settingspk();
		if(jsonobj!=null) {
			settingsPK.name = jsonobj.name;
		}
		return settingsPK;
	}
	static fromJSON = (jsonobj): Settings => {
		let model = new Settings();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.value = jsonobj.value;
		return model;
	}
}

export default SettingsJsonsuper;
