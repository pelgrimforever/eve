//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 4.11.2021 14:51
    Author     : Franky Laseure
*/

import { Stockpk } from '../../../../../../data/eve/table/super/stocksuper.js';
import Stock from '../../../../../../data/eve/table/stock.js';
import { Evetypepk } from '../../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../evetypejson.js';
import Moment from 'moment';
import StockJson from '../stockjson.js';

class StockJsonsuper {
	static PKtoJSON = (stockPK) => {
		let jsonobj = {
			"username": null,
			"evetype": stockPK.evetypePK==null ? null : "" + stockPK.evetypePK.getId(),

		};
		if(stockPK!=null) {
			jsonobj.username = stockPK.username;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (stockPK) => {
		return JSON.stringify(this.PKtoJSON(stockPK));
	}
	
	static toJSON = (stock) => {
		var jsonobj = {
			"PK": this.PKtoJSON(stock.PK),
			"amount": "" + stock.amount,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Stockpk => {
		let stockPK = new Stockpk();
		if(jsonobj!=null) {
			let evetypeproperties = {
				"id": "" + jsonobj.evetype,
			}
			let evetypePK = EvetypeJson.PKfromJSON(evetypeproperties);
			stockPK.evetypePK = evetypePK;
			stockPK.username = jsonobj.username;
		}
		return stockPK;
	}
	static fromJSON = (jsonobj): Stock => {
		let model = new Stock();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.amount = "" + jsonobj.amount;
		return model;
	}
}

export default StockJsonsuper;
