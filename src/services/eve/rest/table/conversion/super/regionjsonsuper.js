//Auto generated code
//don't change things here, it will be overwritten
//change in region-json.js
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 18.6.2021 14:35
    Author     : Franky Laseure
*/

import { Regionpk } from '../../../../../../data/eve/table/super/regionsuper.js';
import Region from '../../../../../../data/eve/table/region.js';
import Moment from 'moment';
import RegionJson from '../regionjson.js';

class RegionJsonsuper {
	static PKtoJSON = (regionPK) => {
		let jsonobj = {
			"id": null,
		};
		if(regionPK!=null) {
			jsonobj.id = "" + regionPK.id;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (regionPK) => {
		return JSON.stringify(this.PKtoJSON(regionPK));
	}
	
	static toJSON = (region) => {
		var jsonobj = {
			"PK": this.PKtoJSON(region.PK),
			"name": region.name,
			"noaccess": region.noaccess,
			"orderpages": region.orderpages,
			"ordererrors": region.ordererrors,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Regionpk => {
		let regionPK = new Regionpk();
		if(jsonobj!=null) {
			regionPK.id = jsonobj.id;
		}
		return regionPK;
	}
	static fromJSON = (jsonobj): Region => {
		let model = new Region();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.name = jsonobj.name;
		model.noaccess = jsonobj.noaccess;
		model.orderpages = jsonobj.orderpages;
		model.ordererrors = jsonobj.ordererrors;
		return model;
	}
}

export default RegionJsonsuper;
