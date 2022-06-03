//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import { Shipfitorderpk } from '../../../../../../data/eve/table/super/shipfitordersuper.js';
import Shipfitorder from '../../../../../../data/eve/table/shipfitorder.js';
import { Shipfitpk } from '../../../../../../data/eve/table/super/shipfitsuper.js';
import ShipfitJson from '../shipfitjson.js';
import { Evetypepk } from '../../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../evetypejson.js';
import Moment from 'moment';
import ShipfitorderJson from '../shipfitorderjson.js';

class ShipfitorderJsonsuper {
	static PKtoJSON = (shipfitorderPK) => {
		let jsonobj = {
			"username": shipfitorderPK.shipfitPK==null ? null : shipfitorderPK.shipfitPK.getUsername(),
			"shipname": shipfitorderPK.shipfitPK==null ? null : shipfitorderPK.shipfitPK.getShipname(),

			"evetype": shipfitorderPK.evetypePK==null ? null : "" + shipfitorderPK.evetypePK.getId(),

		};
		if(shipfitorderPK!=null) {
		}
		return jsonobj;
	}

	static PKtoJSONstring = (shipfitorderPK) => {
		return JSON.stringify(this.PKtoJSON(shipfitorderPK));
	}
	
	static toJSON = (shipfitorder) => {
		var jsonobj = {
			"PK": this.PKtoJSON(shipfitorder.PK),
			"amountwanted": shipfitorder.amountwanted,
			"amountinstock": shipfitorder.amountinstock,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Shipfitorderpk => {
		let shipfitorderPK = new Shipfitorderpk();
		if(jsonobj!=null) {
			let shipfitproperties = {
				"username": jsonobj.username,
				"shipname": jsonobj.shipname,
			}
			let shipfitPK = ShipfitJson.PKfromJSON(shipfitproperties);
			shipfitorderPK.shipfitPK = shipfitPK;
			let evetypeproperties = {
				"id": "" + jsonobj.evetype,
			}
			let evetypePK = EvetypeJson.PKfromJSON(evetypeproperties);
			shipfitorderPK.evetypePK = evetypePK;
		}
		return shipfitorderPK;
	}
	static fromJSON = (jsonobj): Shipfitorder => {
		let model = new Shipfitorder();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.amountwanted = jsonobj.amountwanted;
		model.amountinstock = jsonobj.amountinstock;
		return model;
	}
}

export default ShipfitorderJsonsuper;
