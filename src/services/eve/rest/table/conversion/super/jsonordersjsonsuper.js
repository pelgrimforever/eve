//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 9.11.2021 14:30
    Author     : Franky Laseure
*/

import { Jsonorderspk } from '../../../../../../data/eve/table/super/jsonorderssuper.js';
import Jsonorders from '../../../../../../data/eve/table/jsonorders.js';
import Moment from 'moment';
import JsonordersJson from '../jsonordersjson.js';

class JsonordersJsonsuper {
	static PKtoJSON = (jsonordersPK) => {
		let jsonobj = {
			"id": null,
		};
		if(jsonordersPK!=null) {
			jsonobj.id = jsonordersPK.id;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (jsonordersPK) => {
		return JSON.stringify(this.PKtoJSON(jsonordersPK));
	}
	
	static toJSON = (jsonorders) => {
		var jsonobj = {
			"PK": this.PKtoJSON(jsonorders.PK),
			"json": jsonorders.json,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Jsonorderspk => {
		let jsonordersPK = new Jsonorderspk();
		if(jsonobj!=null) {
			jsonordersPK.id = jsonobj.id;
		}
		return jsonordersPK;
	}
	static fromJSON = (jsonobj): Jsonorders => {
		let model = new Jsonorders();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.json = jsonobj.json;
		return model;
	}
}

export default JsonordersJsonsuper;
