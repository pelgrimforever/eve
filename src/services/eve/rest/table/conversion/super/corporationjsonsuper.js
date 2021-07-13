//Auto generated code
//don't change things here, it will be overwritten
//change in corporation-json.js
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 12.6.2021 13:57
    Author     : Franky Laseure
*/

import { Corporationpk } from '../../../../../../data/eve/table/super/corporationsuper.js';
import Corporation from '../../../../../../data/eve/table/corporation.js';
import { Stationpk } from '../../../../../../data/eve/table/super/stationsuper.js';
import StationJson from '../stationjson.js';
import { Factionpk } from '../../../../../../data/eve/table/super/factionsuper.js';
import FactionJson from '../factionjson.js';
import { Alliancepk } from '../../../../../../data/eve/table/super/alliancesuper.js';
import AllianceJson from '../alliancejson.js';
import Moment from 'moment';
import CorporationJson from '../corporationjson.js';

class CorporationJsonsuper {
	static PKtoJSON = (corporationPK) => {
		let jsonobj = {
			"id": null,
		};
		if(corporationPK!=null) {
			jsonobj.id = "" + corporationPK.id;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (corporationPK) => {
		return JSON.stringify(this.PKtoJSON(corporationPK));
	}
	
	static toJSON = (corporation) => {
		var jsonobj = {
			"PK": this.PKtoJSON(corporation.PK),
			"stationPK": null,
			"factionPK": null,
			"alliancePK": null,
			"name": corporation.name,
			"ceo": "" + corporation.ceo,
			"creator": "" + corporation.creator,
			"member_count": corporation.member_count,
			"tax_rate": "" + corporation.tax_rate,
			"ticker": corporation.ticker,
			"date_founded": corporation.date_founded,
			"description": corporation.description,
			"shares": corporation.shares,
			"url": corporation.url,
			"war_eligible": corporation.war_eligible,
		};
		if(corporation.stationPK!=null) {
			jsonobj.stationPK = StationJson.PKtoJSON(corporation.stationPK);
		}
		if(corporation.factionPK!=null) {
			jsonobj.factionPK = FactionJson.PKtoJSON(corporation.factionPK);
		}
		if(corporation.alliancePK!=null) {
			jsonobj.alliancePK = AllianceJson.PKtoJSON(corporation.alliancePK);
		}
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Corporationpk => {
		let corporationPK = new Corporationpk();
		if(jsonobj!=null) {
			corporationPK.id = jsonobj.id;
		}
		return corporationPK;
	}
	static fromJSON = (jsonobj): Corporation => {
		let model = new Corporation();
		model.PK = this.PKfromJSON(jsonobj.PK);
		let stationPK = StationJson.PKfromJSON(jsonobj.stationPK);
		model.stationPK = stationPK;
		let factionPK = FactionJson.PKfromJSON(jsonobj.factionPK);
		model.factionPK = factionPK;
		let alliancePK = AllianceJson.PKfromJSON(jsonobj.alliancePK);
		model.alliancePK = alliancePK;
		model.name = jsonobj.name;
		model.ceo = "" + jsonobj.ceo;
		model.creator = "" + jsonobj.creator;
		model.member_count = jsonobj.member_count;
		model.tax_rate = parseFloat(jsonobj.tax_rate);
		model.ticker = jsonobj.ticker;
		model.date_founded = jsonobj.date_founded;
		model.description = jsonobj.description;
		model.shares = jsonobj.shares;
		model.url = jsonobj.url;
		model.war_eligible = jsonobj.war_eligible;
		return model;
	}
}

export default CorporationJsonsuper;
