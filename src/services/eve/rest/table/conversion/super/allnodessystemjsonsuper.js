//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 31.0.2022 17:49
    Author     : Franky Laseure
*/

import { Allnodessystempk } from '../../../../../../data/eve/table/super/allnodessystemsuper.js';
import Allnodessystem from '../../../../../../data/eve/table/allnodessystem.js';
import Moment from 'moment';
import AllnodessystemJson from '../allnodessystemjson.js';

class AllnodessystemJsonsuper {
	static PKtoJSON = (allnodessystemPK) => {
		let jsonobj = {
			"id": null,
		};
		if(allnodessystemPK!=null) {
			jsonobj.id = "" + allnodessystemPK.id;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (allnodessystemPK) => {
		return JSON.stringify(this.PKtoJSON(allnodessystemPK));
	}
	
	static toJSON = (allnodessystem) => {
		var jsonobj = {
			"PK": this.PKtoJSON(allnodessystem.PK),
			"deadend": allnodessystem.deadend,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Allnodessystempk => {
		let allnodessystemPK = new Allnodessystempk();
		if(jsonobj!=null) {
			allnodessystemPK.id = jsonobj.id;
		}
		return allnodessystemPK;
	}
	static fromJSON = (jsonobj): Allnodessystem => {
		let model = new Allnodessystem();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.deadend = jsonobj.deadend;
		return model;
	}
}

export default AllnodessystemJsonsuper;
