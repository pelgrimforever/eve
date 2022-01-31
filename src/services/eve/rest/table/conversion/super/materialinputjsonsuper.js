//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 31.0.2022 17:49
    Author     : Franky Laseure
*/

import { Materialinputpk } from '../../../../../../data/eve/table/super/materialinputsuper.js';
import Materialinput from '../../../../../../data/eve/table/materialinput.js';
import { Evetypepk } from '../../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../evetypejson.js';
import Moment from 'moment';
import MaterialinputJson from '../materialinputjson.js';

class MaterialinputJsonsuper {
	static PKtoJSON = (materialinputPK) => {
		let jsonobj = {
			"username": null,
			"addtimestamp": null,
			"evetype": materialinputPK.evetypePK==null ? null : "" + materialinputPK.evetypePK.getId(),

		};
		if(materialinputPK!=null) {
			jsonobj.username = materialinputPK.username;
			jsonobj.addtimestamp = materialinputPK.addtimestamp;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (materialinputPK) => {
		return JSON.stringify(this.PKtoJSON(materialinputPK));
	}
	
	static toJSON = (materialinput) => {
		var jsonobj = {
			"PK": this.PKtoJSON(materialinput.PK),
			"amount": "" + materialinput.amount,
			"unitprice": "" + materialinput.unitprice,
			"usedamount": "" + materialinput.usedamount,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Materialinputpk => {
		let materialinputPK = new Materialinputpk();
		if(jsonobj!=null) {
			let evetypeproperties = {
				"id": "" + jsonobj.evetype,
			}
			let evetypePK = EvetypeJson.PKfromJSON(evetypeproperties);
			materialinputPK.evetypePK = evetypePK;
			materialinputPK.username = jsonobj.username;
			materialinputPK.addtimestamp = jsonobj.addtimestamp;
		}
		return materialinputPK;
	}
	static fromJSON = (jsonobj): Materialinput => {
		let model = new Materialinput();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.amount = "" + jsonobj.amount;
		model.unitprice = parseFloat(jsonobj.unitprice);
		model.usedamount = "" + jsonobj.usedamount;
		return model;
	}
}

export default MaterialinputJsonsuper;
