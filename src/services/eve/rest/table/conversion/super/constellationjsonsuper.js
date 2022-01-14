//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 14.0.2022 16:56
    Author     : Franky Laseure
*/

import { Constellationpk } from '../../../../../../data/eve/table/super/constellationsuper.js';
import Constellation from '../../../../../../data/eve/table/constellation.js';
import { Regionpk } from '../../../../../../data/eve/table/super/regionsuper.js';
import RegionJson from '../regionjson.js';
import Moment from 'moment';
import ConstellationJson from '../constellationjson.js';

class ConstellationJsonsuper {
	static PKtoJSON = (constellationPK) => {
		let jsonobj = {
			"id": null,
		};
		if(constellationPK!=null) {
			jsonobj.id = "" + constellationPK.id;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (constellationPK) => {
		return JSON.stringify(this.PKtoJSON(constellationPK));
	}
	
	static toJSON = (constellation) => {
		var jsonobj = {
			"PK": this.PKtoJSON(constellation.PK),
			"regionPK": null,
			"name": constellation.name,
			"noaccess": constellation.noaccess,
		};
		if(constellation.regionPK!=null) {
			jsonobj.regionPK = RegionJson.PKtoJSON(constellation.regionPK);
		}
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Constellationpk => {
		let constellationPK = new Constellationpk();
		if(jsonobj!=null) {
			constellationPK.id = jsonobj.id;
		}
		return constellationPK;
	}
	static fromJSON = (jsonobj): Constellation => {
		let model = new Constellation();
		model.PK = this.PKfromJSON(jsonobj.PK);
		let regionPK = RegionJson.PKfromJSON(jsonobj.regionPK);
		model.regionPK = regionPK;
		model.name = jsonobj.name;
		model.noaccess = jsonobj.noaccess;
		return model;
	}
}

export default ConstellationJsonsuper;
