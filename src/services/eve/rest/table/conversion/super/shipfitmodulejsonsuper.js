//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 22.1.2022 10:55
    Author     : Franky Laseure
*/

import { Shipfitmodulepk } from '../../../../../../data/eve/table/super/shipfitmodulesuper.js';
import Shipfitmodule from '../../../../../../data/eve/table/shipfitmodule.js';
import { Evetypepk } from '../../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../evetypejson.js';
import { Shipfitpk } from '../../../../../../data/eve/table/super/shipfitsuper.js';
import ShipfitJson from '../shipfitjson.js';
import Moment from 'moment';
import ShipfitmoduleJson from '../shipfitmodulejson.js';

class ShipfitmoduleJsonsuper {
	static PKtoJSON = (shipfitmodulePK) => {
		let jsonobj = {
			"moduletype": shipfitmodulePK.evetypePK==null ? null : "" + shipfitmodulePK.evetypePK.getId(),

			"username": shipfitmodulePK.shipfitPK==null ? null : shipfitmodulePK.shipfitPK.getUsername(),
			"shipname": shipfitmodulePK.shipfitPK==null ? null : shipfitmodulePK.shipfitPK.getShipname(),

		};
		if(shipfitmodulePK!=null) {
		}
		return jsonobj;
	}

	static PKtoJSONstring = (shipfitmodulePK) => {
		return JSON.stringify(this.PKtoJSON(shipfitmodulePK));
	}
	
	static toJSON = (shipfitmodule) => {
		var jsonobj = {
			"PK": this.PKtoJSON(shipfitmodule.PK),
			"amount": shipfitmodule.amount,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Shipfitmodulepk => {
		let shipfitmodulePK = new Shipfitmodulepk();
		if(jsonobj!=null) {
			let evetypeproperties = {
				"id": "" + jsonobj.moduletype,
			}
			let evetypePK = EvetypeJson.PKfromJSON(evetypeproperties);
			shipfitmodulePK.evetypePK = evetypePK;
			let shipfitproperties = {
				"username": jsonobj.username,
				"shipname": jsonobj.shipname,
			}
			let shipfitPK = ShipfitJson.PKfromJSON(shipfitproperties);
			shipfitmodulePK.shipfitPK = shipfitPK;
		}
		return shipfitmodulePK;
	}
	static fromJSON = (jsonobj): Shipfitmodule => {
		let model = new Shipfitmodule();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.amount = jsonobj.amount;
		return model;
	}
}

export default ShipfitmoduleJsonsuper;
