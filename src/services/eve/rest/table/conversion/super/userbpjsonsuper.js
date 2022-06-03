//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import { Userbppk } from '../../../../../../data/eve/table/super/userbpsuper.js';
import Userbp from '../../../../../../data/eve/table/userbp.js';
import { Evetypepk } from '../../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../evetypejson.js';
import Moment from 'moment';
import UserbpJson from '../userbpjson.js';

class UserbpJsonsuper {
	static PKtoJSON = (userbpPK) => {
		let jsonobj = {
			"username": null,
			"serialnumber": null,
			"bp": userbpPK.evetypePK==null ? null : "" + userbpPK.evetypePK.getId(),

		};
		if(userbpPK!=null) {
			jsonobj.username = userbpPK.username;
			jsonobj.serialnumber = userbpPK.serialnumber;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (userbpPK) => {
		return JSON.stringify(this.PKtoJSON(userbpPK));
	}
	
	static toJSON = (userbp) => {
		var jsonobj = {
			"PK": this.PKtoJSON(userbp.PK),
			"original": userbp.original,
			"materialefficiency": userbp.materialefficiency,
			"amountproduced": userbp.amountproduced,
			"totalamount": userbp.totalamount,
			"bpprice": "" + userbp.bpprice,
			"researchcost": "" + userbp.researchcost,
			"stationfee": "" + userbp.stationfee,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Userbppk => {
		let userbpPK = new Userbppk();
		if(jsonobj!=null) {
			let evetypeproperties = {
				"id": "" + jsonobj.bp,
			}
			let evetypePK = EvetypeJson.PKfromJSON(evetypeproperties);
			userbpPK.evetypePK = evetypePK;
			userbpPK.username = jsonobj.username;
			userbpPK.serialnumber = jsonobj.serialnumber;
		}
		return userbpPK;
	}
	static fromJSON = (jsonobj): Userbp => {
		let model = new Userbp();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.original = jsonobj.original;
		model.materialefficiency = jsonobj.materialefficiency;
		model.amountproduced = jsonobj.amountproduced;
		model.totalamount = jsonobj.totalamount;
		model.bpprice = parseFloat(jsonobj.bpprice);
		model.researchcost = parseFloat(jsonobj.researchcost);
		model.stationfee = parseFloat(jsonobj.stationfee);
		return model;
	}
}

export default UserbpJsonsuper;
