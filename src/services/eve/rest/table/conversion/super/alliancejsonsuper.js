//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 16.11.2021 15:46
    Author     : Franky Laseure
*/

import { Alliancepk } from '../../../../../../data/eve/table/super/alliancesuper.js';
import Alliance from '../../../../../../data/eve/table/alliance.js';
import { Corporationpk } from '../../../../../../data/eve/table/super/corporationsuper.js';
import CorporationJson from '../corporationjson.js';
import Moment from 'moment';
import AllianceJson from '../alliancejson.js';

class AllianceJsonsuper {
	static PKtoJSON = (alliancePK) => {
		let jsonobj = {
			"id": null,
		};
		if(alliancePK!=null) {
			jsonobj.id = "" + alliancePK.id;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (alliancePK) => {
		return JSON.stringify(this.PKtoJSON(alliancePK));
	}
	
	static toJSON = (alliance) => {
		var jsonobj = {
			"PK": this.PKtoJSON(alliance.PK),
			"corporationCreatorcorporationPK": null,
			"corporationExecutorcorporationPK": null,
			"name": alliance.name,
			"creator": "" + alliance.creator,
			"date_founded": alliance.date_founded,
			"ticker": alliance.ticker,
			"faction_id": "" + alliance.faction_id,
		};
		if(alliance.corporationCreatorcorporationPK!=null) {
			jsonobj.corporationCreatorcorporationPK = CorporationJson.PKtoJSON(alliance.corporationCreatorcorporationPK);
		}
		if(alliance.corporationExecutorcorporationPK!=null) {
			jsonobj.corporationExecutorcorporationPK = CorporationJson.PKtoJSON(alliance.corporationExecutorcorporationPK);
		}
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Alliancepk => {
		let alliancePK = new Alliancepk();
		if(jsonobj!=null) {
			alliancePK.id = jsonobj.id;
		}
		return alliancePK;
	}
	static fromJSON = (jsonobj): Alliance => {
		let model = new Alliance();
		model.PK = this.PKfromJSON(jsonobj.PK);
		let corporationCreatorcorporationPK = CorporationJson.PKfromJSON(jsonobj.corporationCreatorcorporationPK);
		model.corporationCreatorcorporationPK = corporationCreatorcorporationPK;
		let corporationExecutorcorporationPK = CorporationJson.PKfromJSON(jsonobj.corporationExecutorcorporationPK);
		model.corporationExecutorcorporationPK = corporationExecutorcorporationPK;
		model.name = jsonobj.name;
		model.creator = "" + jsonobj.creator;
		model.date_founded = jsonobj.date_founded;
		model.ticker = jsonobj.ticker;
		model.faction_id = "" + jsonobj.faction_id;
		return model;
	}
}

export default AllianceJsonsuper;
