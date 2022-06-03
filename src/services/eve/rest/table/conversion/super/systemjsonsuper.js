//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import { Systempk } from '../../../../../../data/eve/table/super/systemsuper.js';
import System from '../../../../../../data/eve/table/system.js';
import { Securityislandpk } from '../../../../../../data/eve/table/super/securityislandsuper.js';
import SecurityislandJson from '../securityislandjson.js';
import { Constellationpk } from '../../../../../../data/eve/table/super/constellationsuper.js';
import ConstellationJson from '../constellationjson.js';
import Moment from 'moment';
import SystemJson from '../systemjson.js';

class SystemJsonsuper {
	static PKtoJSON = (systemPK) => {
		let jsonobj = {
			"id": null,
		};
		if(systemPK!=null) {
			jsonobj.id = "" + systemPK.id;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (systemPK) => {
		return JSON.stringify(this.PKtoJSON(systemPK));
	}
	
	static toJSON = (system) => {
		var jsonobj = {
			"PK": this.PKtoJSON(system.PK),
			"securityislandPK": null,
			"constellationPK": null,
			"name": system.name,
			"security_class": system.security_class,
			"security_status": "" + system.security_status,
			"star_id": "" + system.star_id,
			"noaccess": system.noaccess,
			"isconstellationborder": system.isconstellationborder,
			"isregionborder": system.isregionborder,
			"downloaddate": "" + system.downloaddate,
		};
		if(system.securityislandPK!=null) {
			jsonobj.securityislandPK = SecurityislandJson.PKtoJSON(system.securityislandPK);
		}
		if(system.constellationPK!=null) {
			jsonobj.constellationPK = ConstellationJson.PKtoJSON(system.constellationPK);
		}
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Systempk => {
		let systemPK = new Systempk();
		if(jsonobj!=null) {
			systemPK.id = jsonobj.id;
		}
		return systemPK;
	}
	static fromJSON = (jsonobj): System => {
		let model = new System();
		model.PK = this.PKfromJSON(jsonobj.PK);
		let securityislandPK = SecurityislandJson.PKfromJSON(jsonobj.securityislandPK);
		model.securityislandPK = securityislandPK;
		let constellationPK = ConstellationJson.PKfromJSON(jsonobj.constellationPK);
		model.constellationPK = constellationPK;
		model.name = jsonobj.name;
		model.security_class = jsonobj.security_class;
		model.security_status = parseFloat(jsonobj.security_status);
		model.star_id = "" + jsonobj.star_id;
		model.noaccess = jsonobj.noaccess;
		model.isconstellationborder = jsonobj.isconstellationborder;
		model.isregionborder = jsonobj.isregionborder;
		model.downloaddate = jsonobj.downloaddate;
		if(model.downloaddate) {
			model.downloaddateUI = Moment(new Date(jsonobj.downloaddate)).format("YYYY MM DD");
		} else {
			model.downloaddate = "";
		}
		return model;
	}
}

export default SystemJsonsuper;
