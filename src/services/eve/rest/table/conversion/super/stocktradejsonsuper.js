//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 22.1.2022 10:55
    Author     : Franky Laseure
*/

import { Stocktradepk } from '../../../../../../data/eve/table/super/stocktradesuper.js';
import Stocktrade from '../../../../../../data/eve/table/stocktrade.js';
import { Stockpk } from '../../../../../../data/eve/table/super/stocksuper.js';
import StockJson from '../stockjson.js';
import Moment from 'moment';
import StocktradeJson from '../stocktradejson.js';

class StocktradeJsonsuper {
	static PKtoJSON = (stocktradePK) => {
		let jsonobj = {
			"orderid": null,
			"username": stocktradePK.stockPK==null ? null : stocktradePK.stockPK.getUsername(),
			"evetype": stocktradePK.stockPK==null ? null : "" + stocktradePK.stockPK.getEvetype(),

		};
		if(stocktradePK!=null) {
			jsonobj.orderid = "" + stocktradePK.orderid;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (stocktradePK) => {
		return JSON.stringify(this.PKtoJSON(stocktradePK));
	}
	
	static toJSON = (stocktrade) => {
		var jsonobj = {
			"PK": this.PKtoJSON(stocktrade.PK),
			"sellamount": "" + stocktrade.sellamount,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Stocktradepk => {
		let stocktradePK = new Stocktradepk();
		if(jsonobj!=null) {
			let stockproperties = {
				"username": jsonobj.username,
				"evetype": "" + jsonobj.evetype,
			}
			let stockPK = StockJson.PKfromJSON(stockproperties);
			stocktradePK.stockPK = stockPK;
			stocktradePK.orderid = jsonobj.orderid;
		}
		return stocktradePK;
	}
	static fromJSON = (jsonobj): Stocktrade => {
		let model = new Stocktrade();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.sellamount = "" + jsonobj.sellamount;
		return model;
	}
}

export default StocktradeJsonsuper;
