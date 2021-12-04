//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 4.11.2021 14:51
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Stocktradepk } from '../../../../../data/eve/table/super/stocktradesuper.js';
import Stocktrade from '../../../../../data/eve/table/stocktrade.js';
import StocktradeJson from '../conversion/stocktradejson.js';
import { Stockpk } from '../../../../../data/eve/table/super/stocksuper.js';
import StockJson from '../conversion/stockjson.js';


class Rsstocktradesuper extends Eveservice {	

	static restservice = 'rsstocktrade';

	//SELECT OPERATIONS
	static SELECT_STOCKTRADE = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Stock = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_STOCKTRADE = 10;

	//INSERT OPERATIONS
	static INSERT_STOCKTRADE = 20;

	//DELETE OPERATIONS
	static DELETE_Stock = 100 + 1;
	static DELETE_STOCKTRADE = 30;

	static extractDataArray = (jsonarray): Stocktrade[] => {
		let stocktrades: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			stocktrades.push(StocktradeJson.fromJSON(jsonarray[i]));
		}
   	return stocktrades;
	}

	static extractDataObject = (jsonobject): Stocktrade => {
    return StocktradeJson.fromJSON(jsonobject);
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

	static getOne = async (stocktradepk: Stocktradepk): Stocktrade => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_STOCKTRADE },
      "stocktradepk": StocktradeJson.PKtoJSON(stocktradepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadStocktrades4stock = async (stockpk: Stockpk): Stocktrade[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Stock },
     	"stockpk": StockJson.PKtoJSON(stockpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (stocktradesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": stocktradesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (stocktradesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": stocktradesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (stocktrade: Stocktrade) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_STOCKTRADE },
     	"stocktrade": StocktradeJson.toJSON(stocktrade)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (stocktrade: Stocktrade) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_STOCKTRADE },
     	"stocktrade": StocktradeJson.toJSON(stocktrade)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (stocktrade: Stocktrade) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_STOCKTRADE },
     	"stocktrade": StocktradeJson.toJSON(stocktrade)
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

	static sec_getOne = async (user, stocktradepk: Stocktradepk): Stocktrade => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_STOCKTRADE },
      "stocktradepk": StocktradeJson.PKtoJSON(stocktradepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadStocktrades4stock = async (user, stockpk: Stocktradepk): Stocktrade[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Stock },
     	"stockpk": StockJson.PKtoJSON(stockpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, stocktradesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": stocktradesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, stocktradesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": stocktradesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, stocktrade: Stocktrade) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_STOCKTRADE },
     	"stocktrade": StocktradeJson.toJSON(stocktrade)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, stocktrade: Stocktrade) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_STOCKTRADE },
     	"stocktrade": StocktradeJson.toJSON(stocktrade)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, stocktrade: Stocktrade) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_STOCKTRADE },
     	"stocktrade": StocktradeJson.toJSON(stocktrade)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsstocktradesuper;
