//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 30.10.2021 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Stockpk } from '../../../../../data/eve/table/super/stocksuper.js';
import Stock from '../../../../../data/eve/table/stock.js';
import StockJson from '../conversion/stockjson.js';
import { Evetypepk } from '../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../conversion/evetypejson.js';
import { Stocktradepk } from '../../../../../data/eve/table/super/stocktradesuper.js';
import StocktradeJson from '../conversion/stocktradejson.js';


class Rsstocksuper extends Eveservice {	

	static restservice = 'rsstock';

	//SELECT OPERATIONS
	static SELECT_STOCK = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Evetype = 100 + 0;
	static SELECT_Stocktrade = 100 + 1;

	//UPDATE OPERATIONS
	static UPDATE_STOCK = 10;

	//INSERT OPERATIONS
	static INSERT_STOCK = 20;

	//DELETE OPERATIONS
	static DELETE_Evetype = 100 + 2;
	static DELETE_STOCK = 30;

	static extractDataArray = (jsonarray): Stock[] => {
		let stocks: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			stocks.push(StockJson.fromJSON(jsonarray[i]));
		}
   	return stocks;
	}

	static extractDataObject = (jsonobject): Stock => {
    return StockJson.fromJSON(jsonobject);
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

	static getOne = async (stockpk: Stockpk): Stock => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_STOCK },
      "stockpk": StockJson.PKtoJSON(stockpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadStocks4evetype = async (evetypepk: Evetypepk): Stock[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Evetype },
     	"evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadStock4stocktrade = async (stocktradepk: Stocktradepk): Stock[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Stocktrade },
     	"stocktradepk": StocktradeJson.PKtoJSON(stocktradepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (stocksearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": stocksearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (stocksearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": stocksearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (stock: Stock) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_STOCK },
     	"stock": StockJson.toJSON(stock)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (stock: Stock) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_STOCK },
     	"stock": StockJson.toJSON(stock)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (stock: Stock) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_STOCK },
     	"stock": StockJson.toJSON(stock)
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

	static sec_getOne = async (user, stockpk: Stockpk): Stock => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_STOCK },
      "stockpk": StockJson.PKtoJSON(stockpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadStocks4evetype = async (user, evetypepk: Stockpk): Stock[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Evetype },
     	"evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadStock4stocktrade = async (user, stocktradepk: Stocktradepk): Stock[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Stocktrade },
     	"stocktradepk": StocktradeJson.PKtoJSON(stocktradepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, stocksearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": stocksearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, stocksearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": stocksearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, stock: Stock) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_STOCK },
     	"stock": StockJson.toJSON(stock)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, stock: Stock) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_STOCK },
     	"stock": StockJson.toJSON(stock)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, stock: Stock) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_STOCK },
     	"stock": StockJson.toJSON(stock)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsstocksuper;
