//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 31.0.2022 17:49
    Author     : Franky Laseure
*/

import { Marketgrouppk } from '../../../../../../data/eve/table/super/marketgroupsuper.js';
import Marketgroup from '../../../../../../data/eve/table/marketgroup.js';
import Moment from 'moment';
import MarketgroupJson from '../marketgroupjson.js';

class MarketgroupJsonsuper {
	static PKtoJSON = (marketgroupPK) => {
		let jsonobj = {
			"id": null,
		};
		if(marketgroupPK!=null) {
			jsonobj.id = "" + marketgroupPK.id;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (marketgroupPK) => {
		return JSON.stringify(this.PKtoJSON(marketgroupPK));
	}
	
	static toJSON = (marketgroup) => {
		var jsonobj = {
			"PK": this.PKtoJSON(marketgroup.PK),
			"marketgroupParentidPK": null,
			"name": marketgroup.name,
			"description": marketgroup.description,
		};
		if(marketgroup.marketgroupParentidPK!=null) {
			jsonobj.marketgroupParentidPK = MarketgroupJson.PKtoJSON(marketgroup.marketgroupParentidPK);
		}
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Marketgrouppk => {
		let marketgroupPK = new Marketgrouppk();
		if(jsonobj!=null) {
			marketgroupPK.id = jsonobj.id;
		}
		return marketgroupPK;
	}
	static fromJSON = (jsonobj): Marketgroup => {
		let model = new Marketgroup();
		model.PK = this.PKfromJSON(jsonobj.PK);
		let marketgroupParentidPK = MarketgroupJson.PKfromJSON(jsonobj.marketgroupParentidPK);
		model.marketgroupParentidPK = marketgroupParentidPK;
		model.name = jsonobj.name;
		model.description = jsonobj.description;
		return model;
	}
}

export default MarketgroupJsonsuper;
