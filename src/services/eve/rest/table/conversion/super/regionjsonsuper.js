//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 31.0.2022 17:49
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
			"contractpages": region.contractpages,
			"contracterrors": region.contracterrors,
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
		model.contractpages = jsonobj.contractpages;
		model.contracterrors = jsonobj.contracterrors;
		return model;
	}
}

export default RegionJsonsuper;
