//Auto generated code
//don't change things here, it will be overwritten
//change in orderhistory-json.js
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 23.5.2021 16:2
    Author     : Franky Laseure
*/

import { Orderhistorypk } from '../../../../../../data/eve/table/super/orderhistorysuper.js';
import Orderhistory from '../../../../../../data/eve/table/orderhistory.js';
import { Evetypepk } from '../../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../evetypejson.js';
import { Regionpk } from '../../../../../../data/eve/table/super/regionsuper.js';
import RegionJson from '../regionjson.js';
import Moment from 'moment';
import OrderhistoryJson from '../orderhistoryjson.js';

class OrderhistoryJsonsuper {
	static PKtoJSON = (orderhistoryPK) => {
		let jsonobj = {
			"date": null,
			"evetype": orderhistoryPK.evetypePK==null ? null : "" + orderhistoryPK.evetypePK.getId(),

			"region": orderhistoryPK.regionPK==null ? null : "" + orderhistoryPK.regionPK.getId(),

		};
		if(orderhistoryPK!=null) {
			jsonobj.date = orderhistoryPK.date;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (orderhistoryPK) => {
		return JSON.stringify(this.PKtoJSON(orderhistoryPK));
	}
	
	static toJSON = (orderhistory) => {
		var jsonobj = {
			"PK": this.PKtoJSON(orderhistory.PK),
			"average": "" + orderhistory.average,
			"highest": "" + orderhistory.highest,
			"lowest": "" + orderhistory.lowest,
			"volume": orderhistory.volume,
			"order_count": orderhistory.order_count,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Orderhistorypk => {
		let orderhistoryPK = new Orderhistorypk();
		if(jsonobj!=null) {
			let evetypeproperties = {
				"id": "" + jsonobj.evetype,
			}
			let evetypePK = EvetypeJson.PKfromJSON(evetypeproperties);
			orderhistoryPK.evetypePK = evetypePK;
			let regionproperties = {
				"id": "" + jsonobj.region,
			}
			let regionPK = RegionJson.PKfromJSON(regionproperties);
			orderhistoryPK.regionPK = regionPK;
			orderhistoryPK.date = jsonobj.date;
		}
		return orderhistoryPK;
	}
	static fromJSON = (jsonobj): Orderhistory => {
		let model = new Orderhistory();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.average = parseFloat(jsonobj.average);
		model.highest = parseFloat(jsonobj.highest);
		model.lowest = parseFloat(jsonobj.lowest);
		model.volume = jsonobj.volume;
		model.order_count = jsonobj.order_count;
		return model;
	}
}

export default OrderhistoryJsonsuper;
