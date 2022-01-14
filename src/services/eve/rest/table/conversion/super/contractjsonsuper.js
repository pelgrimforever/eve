//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 14.0.2022 16:56
    Author     : Franky Laseure
*/

import { Contractpk } from '../../../../../../data/eve/table/super/contractsuper.js';
import Contract from '../../../../../../data/eve/table/contract.js';
import Moment from 'moment';
import ContractJson from '../contractjson.js';

class ContractJsonsuper {
	static PKtoJSON = (contractPK) => {
		let jsonobj = {
			"id": null,
		};
		if(contractPK!=null) {
			jsonobj.id = "" + contractPK.id;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (contractPK) => {
		return JSON.stringify(this.PKtoJSON(contractPK));
	}
	
	static toJSON = (contract) => {
		var jsonobj = {
			"PK": this.PKtoJSON(contract.PK),
			"collateral": "" + contract.collateral,
			"date_expired": contract.date_expired,
			"date_issued": contract.date_issued,
			"days_to_complete": contract.days_to_complete,
			"end_location_id": "" + contract.end_location_id,
			"for_corporation": contract.for_corporation,
			"price": "" + contract.price,
			"reward": "" + contract.reward,
			"start_location_id": "" + contract.start_location_id,
			"title": contract.title,
			"type": contract.type,
			"volume": "" + contract.volume,
			"page": contract.page,
			"active": contract.active,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Contractpk => {
		let contractPK = new Contractpk();
		if(jsonobj!=null) {
			contractPK.id = jsonobj.id;
		}
		return contractPK;
	}
	static fromJSON = (jsonobj): Contract => {
		let model = new Contract();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.collateral = parseFloat(jsonobj.collateral);
		model.date_expired = jsonobj.date_expired;
		model.date_issued = jsonobj.date_issued;
		model.days_to_complete = jsonobj.days_to_complete;
		model.end_location_id = "" + jsonobj.end_location_id;
		model.for_corporation = jsonobj.for_corporation;
		model.price = parseFloat(jsonobj.price);
		model.reward = parseFloat(jsonobj.reward);
		model.start_location_id = "" + jsonobj.start_location_id;
		model.title = jsonobj.title;
		model.type = jsonobj.type;
		model.volume = parseFloat(jsonobj.volume);
		model.page = jsonobj.page;
		model.active = jsonobj.active;
		return model;
	}
}

export default ContractJsonsuper;
