//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import { Allnodesstargatepk } from '../../../../../../data/eve/table/super/allnodesstargatesuper.js';
import Allnodesstargate from '../../../../../../data/eve/table/allnodesstargate.js';
import Moment from 'moment';
import AllnodesstargateJson from '../allnodesstargatejson.js';

class AllnodesstargateJsonsuper {
	static PKtoJSON = (allnodesstargatePK) => {
		let jsonobj = {
			"id": null,
		};
		if(allnodesstargatePK!=null) {
			jsonobj.id = "" + allnodesstargatePK.id;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (allnodesstargatePK) => {
		return JSON.stringify(this.PKtoJSON(allnodesstargatePK));
	}
	
	static toJSON = (allnodesstargate) => {
		var jsonobj = {
			"PK": this.PKtoJSON(allnodesstargate.PK),
			"to_stargate": "" + allnodesstargate.to_stargate,
			"system": "" + allnodesstargate.system,
			"to_system": "" + allnodesstargate.to_system,
			"deadend": allnodesstargate.deadend,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Allnodesstargatepk => {
		let allnodesstargatePK = new Allnodesstargatepk();
		if(jsonobj!=null) {
			allnodesstargatePK.id = jsonobj.id;
		}
		return allnodesstargatePK;
	}
	static fromJSON = (jsonobj): Allnodesstargate => {
		let model = new Allnodesstargate();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.to_stargate = "" + jsonobj.to_stargate;
		model.system = "" + jsonobj.system;
		model.to_system = "" + jsonobj.to_system;
		model.deadend = jsonobj.deadend;
		return model;
	}
}

export default AllnodesstargateJsonsuper;
