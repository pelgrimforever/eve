//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 22.1.2022 10:55
    Author     : Franky Laseure
*/

import { Usersettingspk } from '../../../../../../data/eve/table/super/usersettingssuper.js';
import Usersettings from '../../../../../../data/eve/table/usersettings.js';
import { Settingspk } from '../../../../../../data/eve/table/super/settingssuper.js';
import SettingsJson from '../settingsjson.js';
import Moment from 'moment';
import UsersettingsJson from '../usersettingsjson.js';

class UsersettingsJsonsuper {
	static PKtoJSON = (usersettingsPK) => {
		let jsonobj = {
			"username": null,
			"name": usersettingsPK.settingsPK==null ? null : usersettingsPK.settingsPK.getName(),

		};
		if(usersettingsPK!=null) {
			jsonobj.username = usersettingsPK.username;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (usersettingsPK) => {
		return JSON.stringify(this.PKtoJSON(usersettingsPK));
	}
	
	static toJSON = (usersettings) => {
		var jsonobj = {
			"PK": this.PKtoJSON(usersettings.PK),
			"value": usersettings.value,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Usersettingspk => {
		let usersettingsPK = new Usersettingspk();
		if(jsonobj!=null) {
			let settingsproperties = {
				"name": jsonobj.name,
			}
			let settingsPK = SettingsJson.PKfromJSON(settingsproperties);
			usersettingsPK.settingsPK = settingsPK;
			usersettingsPK.username = jsonobj.username;
		}
		return usersettingsPK;
	}
	static fromJSON = (jsonobj): Usersettings => {
		let model = new Usersettings();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.value = jsonobj.value;
		return model;
	}
}

export default UsersettingsJsonsuper;
