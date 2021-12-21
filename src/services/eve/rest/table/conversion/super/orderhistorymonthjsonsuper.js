//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 16.11.2021 15:46
    Author     : Franky Laseure
*/

import { Orderhistorymonthpk } from '../../../../../../data/eve/table/super/orderhistorymonthsuper.js';
import Orderhistorymonth from '../../../../../../data/eve/table/orderhistorymonth.js';
import { Evetypepk } from '../../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../evetypejson.js';
import { Regionpk } from '../../../../../../data/eve/table/super/regionsuper.js';
import RegionJson from '../regionjson.js';
import Moment from 'moment';
import OrderhistorymonthJson from '../orderhistorymonthjson.js';

class OrderhistorymonthJsonsuper {
	static PKtoJSON = (orderhistorymonthPK) => {
		let jsonobj = {
			"year": null,
			"month": null,
			"evetype": orderhistorymonthPK.evetypePK==null ? null : "" + orderhistorymonthPK.evetypePK.getId(),

			"region": orderhistorymonthPK.regionPK==null ? null : "" + orderhistorymonthPK.regionPK.getId(),

		};
		if(orderhistorymonthPK!=null) {
			jsonobj.year = orderhistorymonthPK.year;
			jsonobj.month = orderhistorymonthPK.month;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (orderhistorymonthPK) => {
		return JSON.stringify(this.PKtoJSON(orderhistorymonthPK));
	}
	
	static toJSON = (orderhistorymonth) => {
		var jsonobj = {
			"PK": this.PKtoJSON(orderhistorymonth.PK),
			"average": "" + orderhistorymonth.average,
			"highest": "" + orderhistorymonth.highest,
			"lowest": "" + orderhistorymonth.lowest,
			"volume": "" + orderhistorymonth.volume,
			"order_count": "" + orderhistorymonth.order_count,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Orderhistorymonthpk => {
		let orderhistorymonthPK = new Orderhistorymonthpk();
		if(jsonobj!=null) {
			let evetypeproperties = {
				"id": "" + jsonobj.evetype,
			}
			let evetypePK = EvetypeJson.PKfromJSON(evetypeproperties);
			orderhistorymonthPK.evetypePK = evetypePK;
			let regionproperties = {
				"id": "" + jsonobj.region,
			}
			let regionPK = RegionJson.PKfromJSON(regionproperties);
			orderhistorymonthPK.regionPK = regionPK;
			orderhistorymonthPK.year = jsonobj.year;
			orderhistorymonthPK.month = jsonobj.month;
		}
		return orderhistorymonthPK;
	}
	static fromJSON = (jsonobj): Orderhistorymonth => {
		let model = new Orderhistorymonth();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.average = parseFloat(jsonobj.average);
		model.highest = parseFloat(jsonobj.highest);
		model.lowest = parseFloat(jsonobj.lowest);
		model.volume = "" + jsonobj.volume;
		model.order_count = "" + jsonobj.order_count;
		return model;
	}
}

export default OrderhistorymonthJsonsuper;
