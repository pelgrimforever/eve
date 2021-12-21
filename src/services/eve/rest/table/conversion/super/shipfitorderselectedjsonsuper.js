//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 20.11.2021 17:22
    Author     : Franky Laseure
*/

import { Shipfitorderselectedpk } from '../../../../../../data/eve/table/super/shipfitorderselectedsuper.js';
import Shipfitorderselected from '../../../../../../data/eve/table/shipfitorderselected.js';
import { Orderspk } from '../../../../../../data/eve/table/super/orderssuper.js';
import OrdersJson from '../ordersjson.js';
import { Shipfitorderpk } from '../../../../../../data/eve/table/super/shipfitordersuper.js';
import ShipfitorderJson from '../shipfitorderjson.js';
import Moment from 'moment';
import ShipfitorderselectedJson from '../shipfitorderselectedjson.js';

class ShipfitorderselectedJsonsuper {
	static PKtoJSON = (shipfitorderselectedPK) => {
		let jsonobj = {
			"orderid": shipfitorderselectedPK.ordersPK==null ? null : "" + shipfitorderselectedPK.ordersPK.getId(),

			"username": shipfitorderselectedPK.shipfitorderPK==null ? null : shipfitorderselectedPK.shipfitorderPK.getUsername(),
			"shipname": shipfitorderselectedPK.shipfitorderPK==null ? null : shipfitorderselectedPK.shipfitorderPK.getShipname(),
			"evetype": shipfitorderselectedPK.shipfitorderPK==null ? null : "" + shipfitorderselectedPK.shipfitorderPK.getEvetype(),

		};
		if(shipfitorderselectedPK!=null) {
		}
		return jsonobj;
	}

	static PKtoJSONstring = (shipfitorderselectedPK) => {
		return JSON.stringify(this.PKtoJSON(shipfitorderselectedPK));
	}
	
	static toJSON = (shipfitorderselected) => {
		var jsonobj = {
			"PK": this.PKtoJSON(shipfitorderselected.PK),
			"amount": shipfitorderselected.amount,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Shipfitorderselectedpk => {
		let shipfitorderselectedPK = new Shipfitorderselectedpk();
		if(jsonobj!=null) {
			let ordersproperties = {
				"id": "" + jsonobj.orderid,
			}
			let ordersPK = OrdersJson.PKfromJSON(ordersproperties);
			shipfitorderselectedPK.ordersPK = ordersPK;
			let shipfitorderproperties = {
				"username": jsonobj.username,
				"shipname": jsonobj.shipname,
				"evetype": "" + jsonobj.evetype,
			}
			let shipfitorderPK = ShipfitorderJson.PKfromJSON(shipfitorderproperties);
			shipfitorderselectedPK.shipfitorderPK = shipfitorderPK;
		}
		return shipfitorderselectedPK;
	}
	static fromJSON = (jsonobj): Shipfitorderselected => {
		let model = new Shipfitorderselected();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.amount = jsonobj.amount;
		return model;
	}
}

export default ShipfitorderselectedJsonsuper;
