//Auto generated code
//don't change things here, it will be overwritten
//change in regionneighbour-json.js
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 4.6.2021 14:41
    Author     : Franky Laseure
*/

import { Regionneighbourpk } from '../../../../../../data/eve/table/super/regionneighboursuper.js';
import Regionneighbour from '../../../../../../data/eve/table/regionneighbour.js';
import { Regionpk } from '../../../../../../data/eve/table/super/regionsuper.js';
import RegionJson from '../regionjson.js';
import Moment from 'moment';
import RegionneighbourJson from '../regionneighbourjson.js';

class RegionneighbourJsonsuper {
	static PKtoJSON = (regionneighbourPK) => {
		let jsonobj = {
			"region": regionneighbourPK.regionRegionPK==null ? null : "" + regionneighbourPK.regionRegionPK.getId(),

			"neighbour": regionneighbourPK.regionNeighbourPK==null ? null : "" + regionneighbourPK.regionNeighbourPK.getId(),

		};
		if(regionneighbourPK!=null) {
		}
		return jsonobj;
	}

	static PKtoJSONstring = (regionneighbourPK) => {
		return JSON.stringify(this.PKtoJSON(regionneighbourPK));
	}
	
	static toJSON = (regionneighbour) => {
		var jsonobj = {
			"PK": this.PKtoJSON(regionneighbour.PK),
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Regionneighbourpk => {
		let regionneighbourPK = new Regionneighbourpk();
		if(jsonobj!=null) {
			let regionRegionproperties = {
				"id": "" + jsonobj.region,
			}
			let regionRegionPK = RegionJson.PKfromJSON(regionRegionproperties);
			regionneighbourPK.regionRegionPK = regionRegionPK;
			let regionNeighbourproperties = {
				"id": "" + jsonobj.neighbour,
			}
			let regionNeighbourPK = RegionJson.PKfromJSON(regionNeighbourproperties);
			regionneighbourPK.regionNeighbourPK = regionNeighbourPK;
		}
		return regionneighbourPK;
	}
	static fromJSON = (jsonobj): Regionneighbour => {
		let model = new Regionneighbour();
		model.PK = this.PKfromJSON(jsonobj.PK);
		return model;
	}
}

export default RegionneighbourJsonsuper;
