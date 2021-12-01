//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 30.10.2021 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Tradecombinedsellpk } from '../../../../../data/eve/table/super/tradecombinedsellsuper.js';
import Tradecombinedsell from '../../../../../data/eve/table/tradecombinedsell.js';
import TradecombinedsellJson from '../conversion/tradecombinedselljson.js';
import { Orderspk } from '../../../../../data/eve/table/super/orderssuper.js';
import OrdersJson from '../conversion/ordersjson.js';
import { Tradecombinedpk } from '../../../../../data/eve/table/super/tradecombinedsuper.js';
import TradecombinedJson from '../conversion/tradecombinedjson.js';


class Rstradecombinedsellsuper extends Eveservice {	

	static restservice = 'rstradecombined_sell';

	//SELECT OPERATIONS
	static SELECT_TRADECOMBINEDSELL = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Ordersbuyorderid = 100 + 0;
	static SELECT_Orderssellorderid = 100 + 1;
	static SELECT_Tradecombined = 100 + 2;

	//UPDATE OPERATIONS
	static UPDATE_TRADECOMBINEDSELL = 10;

	//INSERT OPERATIONS
	static INSERT_TRADECOMBINEDSELL = 20;

	//DELETE OPERATIONS
	static DELETE_Ordersbuyorderid = 100 + 3;
	static DELETE_Orderssellorderid = 100 + 4;
	static DELETE_Tradecombined = 100 + 5;
	static DELETE_TRADECOMBINEDSELL = 30;

	static extractDataArray = (jsonarray): Tradecombinedsell[] => {
		let tradecombinedsells: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			tradecombinedsells.push(TradecombinedsellJson.fromJSON(jsonarray[i]));
		}
   	return tradecombinedsells;
	}

	static extractDataObject = (jsonobject): Tradecombinedsell => {
    return TradecombinedsellJson.fromJSON(jsonobject);
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

	static getOne = async (tradecombinedsellpk: Tradecombinedsellpk): Tradecombinedsell => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_TRADECOMBINEDSELL },
      "tradecombined_sellpk": TradecombinedsellJson.PKtoJSON(tradecombinedsellpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadTradecombinedsells4ordersBuyorderid = async (orderspk: Orderspk): Tradecombinedsell[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Ordersbuyorderid },
     	"orderspk": OrdersJson.PKtoJSON(orderspk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadTradecombinedsells4ordersSellorderid = async (orderspk: Orderspk): Tradecombinedsell[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Orderssellorderid },
     	"orderspk": OrdersJson.PKtoJSON(orderspk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadTradecombinedsells4tradecombined = async (tradecombinedpk: Tradecombinedpk): Tradecombinedsell[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Tradecombined },
     	"tradecombinedpk": TradecombinedJson.PKtoJSON(tradecombinedpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (tradecombinedsellsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": tradecombinedsellsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (tradecombinedsellsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": tradecombinedsellsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (tradecombinedsell: Tradecombinedsell) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_TRADECOMBINEDSELL },
     	"tradecombinedsell": TradecombinedsellJson.toJSON(tradecombinedsell)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (tradecombinedsell: Tradecombinedsell) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_TRADECOMBINEDSELL },
     	"tradecombined_sell": TradecombinedsellJson.toJSON(tradecombinedsell)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (tradecombinedsell: Tradecombinedsell) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_TRADECOMBINEDSELL },
     	"tradecombined_sell": TradecombinedsellJson.toJSON(tradecombinedsell)
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

	static sec_getOne = async (user, tradecombinedsellpk: Tradecombinedsellpk): Tradecombinedsell => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_TRADECOMBINEDSELL },
      "tradecombined_sellpk": TradecombinedsellJson.PKtoJSON(tradecombinedsellpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadTradecombinedsells4ordersBuyorderid = async (user, orderspk: Tradecombinedsellpk): Tradecombinedsell[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Ordersbuyorderid },
     	"orderspk": OrdersJson.PKtoJSON(orderspk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadTradecombinedsells4ordersSellorderid = async (user, orderspk: Tradecombinedsellpk): Tradecombinedsell[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Orderssellorderid },
     	"orderspk": OrdersJson.PKtoJSON(orderspk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadTradecombinedsells4tradecombined = async (user, tradecombinedpk: Tradecombinedsellpk): Tradecombinedsell[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Tradecombined },
     	"tradecombinedpk": TradecombinedJson.PKtoJSON(tradecombinedpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, tradecombinedsellsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": tradecombinedsellsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, tradecombinedsellsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": tradecombinedsellsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, tradecombinedsell: Tradecombinedsell) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_TRADECOMBINEDSELL },
     	"tradecombined_sell": TradecombinedsellJson.toJSON(tradecombinedsell)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, tradecombinedsell: Tradecombinedsell) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_TRADECOMBINEDSELL },
     	"tradecombined_sell": TradecombinedsellJson.toJSON(tradecombinedsell)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, tradecombinedsell: Tradecombinedsell) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_TRADECOMBINEDSELL },
     	"tradecombined_sell": TradecombinedsellJson.toJSON(tradecombinedsell)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rstradecombinedsellsuper;