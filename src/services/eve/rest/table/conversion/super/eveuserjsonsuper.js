//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import { Eveuserpk } from '../../../../../../data/eve/table/super/eveusersuper.js';
import Eveuser from '../../../../../../data/eve/table/eveuser.js';
import Moment from 'moment';
import EveuserJson from '../eveuserjson.js';

class EveuserJsonsuper {
	static PKtoJSON = (eveuserPK) => {
		let jsonobj = {
			"username": null,
		};
		if(eveuserPK!=null) {
			jsonobj.username = eveuserPK.username;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (eveuserPK) => {
		return JSON.stringify(this.PKtoJSON(eveuserPK));
	}
	
	static toJSON = (eveuser) => {
		var jsonobj = {
			"PK": this.PKtoJSON(eveuser.PK),
			"createdat": "" + eveuser.createdat,
			"admin": eveuser.admin,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Eveuserpk => {
		let eveuserPK = new Eveuserpk();
		if(jsonobj!=null) {
			eveuserPK.username = jsonobj.username;
		}
		return eveuserPK;
	}
	static fromJSON = (jsonobj): Eveuser => {
		let model = new Eveuser();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.createdat = jsonobj.createdat;
		if(model.createdat) {
			model.createdatUI = Moment(new Date(jsonobj.createdat)).format("YYYY MM DD");
		} else {
			model.createdat = "";
		}
		model.admin = jsonobj.admin;
		return model;
	}
}

export default EveuserJsonsuper;
