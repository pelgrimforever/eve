//Auto generated code
//don't change things here, it will be overwritten
//change in stationservice-json.js
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 23.5.2021 16:2
    Author     : Franky Laseure
*/

import { Stationservicepk } from '../../../../../../data/eve/table/super/stationservicesuper.js';
import Stationservice from '../../../../../../data/eve/table/stationservice.js';
import { Stationpk } from '../../../../../../data/eve/table/super/stationsuper.js';
import StationJson from '../stationjson.js';
import Moment from 'moment';
import StationserviceJson from '../stationservicejson.js';

class StationserviceJsonsuper {
	static PKtoJSON = (stationservicePK) => {
		let jsonobj = {
			"service": null,
			"station": stationservicePK.stationPK==null ? null : "" + stationservicePK.stationPK.getId(),

		};
		if(stationservicePK!=null) {
			jsonobj.service = stationservicePK.service;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (stationservicePK) => {
		return JSON.stringify(this.PKtoJSON(stationservicePK));
	}
	
	static toJSON = (stationservice) => {
		var jsonobj = {
			"PK": this.PKtoJSON(stationservice.PK),
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Stationservicepk => {
		let stationservicePK = new Stationservicepk();
		if(jsonobj!=null) {
			let stationproperties = {
				"id": "" + jsonobj.station,
			}
			let stationPK = StationJson.PKfromJSON(stationproperties);
			stationservicePK.stationPK = stationPK;
			stationservicePK.service = jsonobj.service;
		}
		return stationservicePK;
	}
	static fromJSON = (jsonobj): Stationservice => {
		let model = new Stationservice();
		model.PK = this.PKfromJSON(jsonobj.PK);
		return model;
	}
}

export default StationserviceJsonsuper;
