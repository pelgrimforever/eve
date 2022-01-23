//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 19.0.2022 22:13
    Author     : Franky Laseure
*/

import { Stationpk } from '../../../../../../data/eve/table/super/stationsuper.js';
import Station from '../../../../../../data/eve/table/station.js';
import { Racepk } from '../../../../../../data/eve/table/super/racesuper.js';
import RaceJson from '../racejson.js';
import { Evetypepk } from '../../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../evetypejson.js';
import { Systempk } from '../../../../../../data/eve/table/super/systemsuper.js';
import SystemJson from '../systemjson.js';
import Moment from 'moment';
import StationJson from '../stationjson.js';

class StationJsonsuper {
	static PKtoJSON = (stationPK) => {
		let jsonobj = {
			"id": null,
		};
		if(stationPK!=null) {
			jsonobj.id = "" + stationPK.id;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (stationPK) => {
		return JSON.stringify(this.PKtoJSON(stationPK));
	}
	
	static toJSON = (station) => {
		var jsonobj = {
			"PK": this.PKtoJSON(station.PK),
			"racePK": null,
			"evetypePK": null,
			"systemPK": null,
			"name": station.name,
			"office_rental_cost": "" + station.office_rental_cost,
			"reprocessing_efficiency": "" + station.reprocessing_efficiency,
			"reprocessing_stations_take": "" + station.reprocessing_stations_take,
			"max_dockable_ship_volume": "" + station.max_dockable_ship_volume,
			"owner": "" + station.owner,
			"downloaddate": "" + station.downloaddate,
		};
		if(station.racePK!=null) {
			jsonobj.racePK = RaceJson.PKtoJSON(station.racePK);
		}
		if(station.evetypePK!=null) {
			jsonobj.evetypePK = EvetypeJson.PKtoJSON(station.evetypePK);
		}
		if(station.systemPK!=null) {
			jsonobj.systemPK = SystemJson.PKtoJSON(station.systemPK);
		}
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Stationpk => {
		let stationPK = new Stationpk();
		if(jsonobj!=null) {
			stationPK.id = jsonobj.id;
		}
		return stationPK;
	}
	static fromJSON = (jsonobj): Station => {
		let model = new Station();
		model.PK = this.PKfromJSON(jsonobj.PK);
		let racePK = RaceJson.PKfromJSON(jsonobj.racePK);
		model.racePK = racePK;
		let evetypePK = EvetypeJson.PKfromJSON(jsonobj.evetypePK);
		model.evetypePK = evetypePK;
		let systemPK = SystemJson.PKfromJSON(jsonobj.systemPK);
		model.systemPK = systemPK;
		model.name = jsonobj.name;
		model.office_rental_cost = parseFloat(jsonobj.office_rental_cost);
		model.reprocessing_efficiency = parseFloat(jsonobj.reprocessing_efficiency);
		model.reprocessing_stations_take = parseFloat(jsonobj.reprocessing_stations_take);
		model.max_dockable_ship_volume = parseFloat(jsonobj.max_dockable_ship_volume);
		model.owner = "" + jsonobj.owner;
		model.downloaddate = jsonobj.downloaddate;
		if(model.downloaddate) {
			model.downloaddateUI = Moment(new Date(jsonobj.downloaddate)).format("YYYY MM DD");
		} else {
			model.downloaddate = "";
		}
		return model;
	}
}

export default StationJsonsuper;
