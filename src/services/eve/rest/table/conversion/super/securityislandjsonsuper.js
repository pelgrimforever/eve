//Auto generated code
//don't change things here, it will be overwritten
//change in securityisland-json.js
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 23.5.2021 16:2
    Author     : Franky Laseure
*/

import { Securityislandpk } from '../../../../../../data/eve/table/super/securityislandsuper.js';
import Securityisland from '../../../../../../data/eve/table/securityisland.js';
import Moment from 'moment';
import SecurityislandJson from '../securityislandjson.js';

class SecurityislandJsonsuper {
	static PKtoJSON = (securityislandPK) => {
		let jsonobj = {
			"id": null,
		};
		if(securityislandPK!=null) {
			jsonobj.id = "" + securityislandPK.id;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (securityislandPK) => {
		return JSON.stringify(this.PKtoJSON(securityislandPK));
	}
	
	static toJSON = (securityisland) => {
		var jsonobj = {
			"PK": this.PKtoJSON(securityisland.PK),
			"name": securityisland.name,
			"security_status": "" + securityisland.security_status,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Securityislandpk => {
		let securityislandPK = new Securityislandpk();
		if(jsonobj!=null) {
			securityislandPK.id = jsonobj.id;
		}
		return securityislandPK;
	}
	static fromJSON = (jsonobj): Securityisland => {
		let model = new Securityisland();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.name = jsonobj.name;
		model.security_status = parseFloat(jsonobj.security_status);
		return model;
	}
}

export default SecurityislandJsonsuper;
