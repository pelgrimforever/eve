//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import { Locationpk } from '../../../../../../data/eve/table/super/locationsuper.js';
import Location from '../../../../../../data/eve/table/location.js';
import { Systempk } from '../../../../../../data/eve/table/super/systemsuper.js';
import SystemJson from '../systemjson.js';
import Moment from 'moment';
import LocationJson from '../locationjson.js';

class LocationJsonsuper {
	static PKtoJSON = (locationPK) => {
		let jsonobj = {
			"id": null,
		};
		if(locationPK!=null) {
			jsonobj.id = "" + locationPK.id;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (locationPK) => {
		return JSON.stringify(this.PKtoJSON(locationPK));
	}
	
	static toJSON = (location) => {
		var jsonobj = {
			"PK": this.PKtoJSON(location.PK),
			"systemPK": null,
			"name": location.name,
			"visited": location.visited,
			"access": location.access,
		};
		if(location.systemPK!=null) {
			jsonobj.systemPK = SystemJson.PKtoJSON(location.systemPK);
		}
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Locationpk => {
		let locationPK = new Locationpk();
		if(jsonobj!=null) {
			locationPK.id = jsonobj.id;
		}
		return locationPK;
	}
	static fromJSON = (jsonobj): Location => {
		let model = new Location();
		model.PK = this.PKfromJSON(jsonobj.PK);
		let systemPK = SystemJson.PKfromJSON(jsonobj.systemPK);
		model.systemPK = systemPK;
		model.name = jsonobj.name;
		model.visited = jsonobj.visited;
		model.access = jsonobj.access;
		return model;
	}
}

export default LocationJsonsuper;
