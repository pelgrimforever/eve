//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 14.0.2022 16:56
    Author     : Franky Laseure
*/

import { Contractitempk } from '../../../../../../data/eve/table/super/contractitemsuper.js';
import Contractitem from '../../../../../../data/eve/table/contractitem.js';
import { Evetypepk } from '../../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../evetypejson.js';
import { Contractpk } from '../../../../../../data/eve/table/super/contractsuper.js';
import ContractJson from '../contractjson.js';
import Moment from 'moment';
import ContractitemJson from '../contractitemjson.js';

class ContractitemJsonsuper {
	static PKtoJSON = (contractitemPK) => {
		let jsonobj = {
			"id": null,
		};
		if(contractitemPK!=null) {
			jsonobj.id = "" + contractitemPK.id;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (contractitemPK) => {
		return JSON.stringify(this.PKtoJSON(contractitemPK));
	}
	
	static toJSON = (contractitem) => {
		var jsonobj = {
			"PK": this.PKtoJSON(contractitem.PK),
			"evetypePK": null,
			"contractPK": null,
			"blueprint_copy": contractitem.blueprint_copy,
			"included": contractitem.included,
			"quantity": "" + contractitem.quantity,
			"material_efficiency": contractitem.material_efficiency,
			"runs": contractitem.runs,
			"time_efficiency": contractitem.time_efficiency,
		};
		if(contractitem.evetypePK!=null) {
			jsonobj.evetypePK = EvetypeJson.PKtoJSON(contractitem.evetypePK);
		}
		if(contractitem.contractPK!=null) {
			jsonobj.contractPK = ContractJson.PKtoJSON(contractitem.contractPK);
		}
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Contractitempk => {
		let contractitemPK = new Contractitempk();
		if(jsonobj!=null) {
			contractitemPK.id = jsonobj.id;
		}
		return contractitemPK;
	}
	static fromJSON = (jsonobj): Contractitem => {
		let model = new Contractitem();
		model.PK = this.PKfromJSON(jsonobj.PK);
		let evetypePK = EvetypeJson.PKfromJSON(jsonobj.evetypePK);
		model.evetypePK = evetypePK;
		let contractPK = ContractJson.PKfromJSON(jsonobj.contractPK);
		model.contractPK = contractPK;
		model.blueprint_copy = jsonobj.blueprint_copy;
		model.included = jsonobj.included;
		model.quantity = "" + jsonobj.quantity;
		model.material_efficiency = jsonobj.material_efficiency;
		model.runs = jsonobj.runs;
		model.time_efficiency = jsonobj.time_efficiency;
		return model;
	}
}

export default ContractitemJsonsuper;
