//Auto generated code
//don't change things here, it will be overwritten
//change in routetype-json.js
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 18.8.2021 11:31
    Author     : Franky Laseure
*/

import { Routetypepk } from '../../../../../../data/eve/table/super/routetypesuper.js';
import Routetype from '../../../../../../data/eve/table/routetype.js';
import { Securityislandpk } from '../../../../../../data/eve/table/super/securityislandsuper.js';
import SecurityislandJson from '../securityislandjson.js';
import Moment from 'moment';
import RoutetypeJson from '../routetypejson.js';

class RoutetypeJsonsuper {
	static PKtoJSON = (routetypePK) => {
		let jsonobj = {
			"id": null,
		};
		if(routetypePK!=null) {
			jsonobj.id = "" + routetypePK.id;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (routetypePK) => {
		return JSON.stringify(this.PKtoJSON(routetypePK));
	}
	
	static toJSON = (routetype) => {
		var jsonobj = {
			"PK": this.PKtoJSON(routetype.PK),
			"securityislandPK": null,
			"name": routetype.name,
		};
		if(routetype.securityislandPK!=null) {
			jsonobj.securityislandPK = SecurityislandJson.PKtoJSON(routetype.securityislandPK);
		}
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Routetypepk => {
		let routetypePK = new Routetypepk();
		if(jsonobj!=null) {
			routetypePK.id = jsonobj.id;
		}
		return routetypePK;
	}
	static fromJSON = (jsonobj): Routetype => {
		let model = new Routetype();
		model.PK = this.PKfromJSON(jsonobj.PK);
		let securityislandPK = SecurityislandJson.PKfromJSON(jsonobj.securityislandPK);
		model.securityislandPK = securityislandPK;
		model.name = jsonobj.name;
		return model;
	}
}

export default RoutetypeJsonsuper;
