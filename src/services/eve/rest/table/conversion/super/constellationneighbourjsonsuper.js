//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import { Constellationneighbourpk } from '../../../../../../data/eve/table/super/constellationneighboursuper.js';
import Constellationneighbour from '../../../../../../data/eve/table/constellationneighbour.js';
import { Constellationpk } from '../../../../../../data/eve/table/super/constellationsuper.js';
import ConstellationJson from '../constellationjson.js';
import Moment from 'moment';
import ConstellationneighbourJson from '../constellationneighbourjson.js';

class ConstellationneighbourJsonsuper {
	static PKtoJSON = (constellationneighbourPK) => {
		let jsonobj = {
			"neighbour": constellationneighbourPK.constellationNeighbourPK==null ? null : "" + constellationneighbourPK.constellationNeighbourPK.getId(),

			"constellation": constellationneighbourPK.constellationConstellationPK==null ? null : "" + constellationneighbourPK.constellationConstellationPK.getId(),

		};
		if(constellationneighbourPK!=null) {
		}
		return jsonobj;
	}

	static PKtoJSONstring = (constellationneighbourPK) => {
		return JSON.stringify(this.PKtoJSON(constellationneighbourPK));
	}
	
	static toJSON = (constellationneighbour) => {
		var jsonobj = {
			"PK": this.PKtoJSON(constellationneighbour.PK),
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Constellationneighbourpk => {
		let constellationneighbourPK = new Constellationneighbourpk();
		if(jsonobj!=null) {
			let constellationNeighbourproperties = {
				"id": "" + jsonobj.neighbour,
			}
			let constellationNeighbourPK = ConstellationJson.PKfromJSON(constellationNeighbourproperties);
			constellationneighbourPK.constellationNeighbourPK = constellationNeighbourPK;
			let constellationConstellationproperties = {
				"id": "" + jsonobj.constellation,
			}
			let constellationConstellationPK = ConstellationJson.PKfromJSON(constellationConstellationproperties);
			constellationneighbourPK.constellationConstellationPK = constellationConstellationPK;
		}
		return constellationneighbourPK;
	}
	static fromJSON = (jsonobj): Constellationneighbour => {
		let model = new Constellationneighbour();
		model.PK = this.PKfromJSON(jsonobj.PK);
		return model;
	}
}

export default ConstellationneighbourJsonsuper;
