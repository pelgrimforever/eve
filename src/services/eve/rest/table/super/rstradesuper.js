//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 9.11.2021 14:30
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Tradepk } from '../../../../../data/eve/table/super/tradesuper.js';
import Trade from '../../../../../data/eve/table/trade.js';
import TradeJson from '../conversion/tradejson.js';
import { Orderspk } from '../../../../../data/eve/table/super/orderssuper.js';
import OrdersJson from '../conversion/ordersjson.js';


class Rstradesuper extends Eveservice {	

	static restservice = 'rstrade';

	//SELECT OPERATIONS
	static SELECT_TRADE = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Orderssellorderid = 100 + 0;
	static SELECT_Ordersbuyorderid = 100 + 1;

	//UPDATE OPERATIONS
	static UPDATE_TRADE = 10;

	//INSERT OPERATIONS
	static INSERT_TRADE = 20;

	//DELETE OPERATIONS
	static DELETE_Orderssellorderid = 100 + 2;
	static DELETE_Ordersbuyorderid = 100 + 3;
	static DELETE_TRADE = 30;

	static extractDataArray = (jsonarray): Trade[] => {
		let trades: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			trades.push(TradeJson.fromJSON(jsonarray[i]));
		}
   	return trades;
	}

	static extractDataObject = (jsonobject): Trade => {
    return TradeJson.fromJSON(jsonobject);
	}

	static getcount = async () => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_COUNT }
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

  static getall = async () => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static getOne = async (tradepk: Tradepk): Trade => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_TRADE },
      "tradepk": TradeJson.PKtoJSON(tradepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadTrades4ordersSellorderid = async (orderspk: Orderspk): Trade[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Orderssellorderid },
     	"orderspk": OrdersJson.PKtoJSON(orderspk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadTrades4ordersBuyorderid = async (orderspk: Orderspk): Trade[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Ordersbuyorderid },
     	"orderspk": OrdersJson.PKtoJSON(orderspk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (tradesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": tradesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (tradesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": tradesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (trade: Trade) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_TRADE },
     	"trade": TradeJson.toJSON(trade)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (trade: Trade) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_TRADE },
     	"trade": TradeJson.toJSON(trade)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (trade: Trade) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_TRADE },
     	"trade": TradeJson.toJSON(trade)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION START

	static sec_getcount = async (user) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: super.SELECT_COUNT }
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

  static sec_getall = async (user) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: super.SELECT_ALL }
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_getOne = async (user, tradepk: Tradepk): Trade => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_TRADE },
      "tradepk": TradeJson.PKtoJSON(tradepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadTrades4ordersSellorderid = async (user, orderspk: Tradepk): Trade[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Orderssellorderid },
     	"orderspk": OrdersJson.PKtoJSON(orderspk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadTrades4ordersBuyorderid = async (user, orderspk: Tradepk): Trade[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Ordersbuyorderid },
     	"orderspk": OrdersJson.PKtoJSON(orderspk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, tradesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": tradesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, tradesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": tradesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, trade: Trade) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_TRADE },
     	"trade": TradeJson.toJSON(trade)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, trade: Trade) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_TRADE },
     	"trade": TradeJson.toJSON(trade)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, trade: Trade) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_TRADE },
     	"trade": TradeJson.toJSON(trade)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rstradesuper;
