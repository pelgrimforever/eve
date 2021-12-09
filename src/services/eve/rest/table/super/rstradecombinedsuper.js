//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 9.11.2021 14:30
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Tradecombinedpk } from '../../../../../data/eve/table/super/tradecombinedsuper.js';
import Tradecombined from '../../../../../data/eve/table/tradecombined.js';
import TradecombinedJson from '../conversion/tradecombinedjson.js';
import { Evetypepk } from '../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../conversion/evetypejson.js';
import { Systempk } from '../../../../../data/eve/table/super/systemsuper.js';
import SystemJson from '../conversion/systemjson.js';
import { Tradecombinedsellpk } from '../../../../../data/eve/table/super/tradecombinedsellsuper.js';
import TradecombinedsellJson from '../conversion/tradecombinedselljson.js';


class Rstradecombinedsuper extends Eveservice {	

	static restservice = 'rstradecombined';

	//SELECT OPERATIONS
	static SELECT_TRADECOMBINED = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Evetype = 100 + 0;
	static SELECT_Systembuysystem = 100 + 1;
	static SELECT_Systemsellsystem = 100 + 2;
	static SELECT_Tradecombinedsell = 100 + 3;

	//UPDATE OPERATIONS
	static UPDATE_TRADECOMBINED = 10;

	//INSERT OPERATIONS
	static INSERT_TRADECOMBINED = 20;

	//DELETE OPERATIONS
	static DELETE_Evetype = 100 + 4;
	static DELETE_Systembuysystem = 100 + 5;
	static DELETE_Systemsellsystem = 100 + 6;
	static DELETE_TRADECOMBINED = 30;

	static extractDataArray = (jsonarray): Tradecombined[] => {
		let tradecombineds: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			tradecombineds.push(TradecombinedJson.fromJSON(jsonarray[i]));
		}
   	return tradecombineds;
	}

	static extractDataObject = (jsonobject): Tradecombined => {
    return TradecombinedJson.fromJSON(jsonobject);
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

	static getOne = async (tradecombinedpk: Tradecombinedpk): Tradecombined => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_TRADECOMBINED },
      "tradecombinedpk": TradecombinedJson.PKtoJSON(tradecombinedpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadTradecombineds4evetype = async (evetypepk: Evetypepk): Tradecombined[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Evetype },
     	"evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadTradecombineds4systemBuysystem = async (systempk: Systempk): Tradecombined[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Systembuysystem },
     	"systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadTradecombineds4systemSellsystem = async (systempk: Systempk): Tradecombined[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Systemsellsystem },
     	"systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadTradecombined4tradecombinedsell = async (tradecombinedsellpk: Tradecombinedsellpk): Tradecombined[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Tradecombinedsell },
     	"tradecombined_sellpk": TradecombinedsellJson.PKtoJSON(tradecombinedsellpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (tradecombinedsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": tradecombinedsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (tradecombinedsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": tradecombinedsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (tradecombined: Tradecombined) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_TRADECOMBINED },
     	"tradecombined": TradecombinedJson.toJSON(tradecombined)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (tradecombined: Tradecombined) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_TRADECOMBINED },
     	"tradecombined": TradecombinedJson.toJSON(tradecombined)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (tradecombined: Tradecombined) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_TRADECOMBINED },
     	"tradecombined": TradecombinedJson.toJSON(tradecombined)
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

	static sec_getOne = async (user, tradecombinedpk: Tradecombinedpk): Tradecombined => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_TRADECOMBINED },
      "tradecombinedpk": TradecombinedJson.PKtoJSON(tradecombinedpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadTradecombineds4evetype = async (user, evetypepk: Tradecombinedpk): Tradecombined[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Evetype },
     	"evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadTradecombineds4systemBuysystem = async (user, systempk: Tradecombinedpk): Tradecombined[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Systembuysystem },
     	"systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadTradecombineds4systemSellsystem = async (user, systempk: Tradecombinedpk): Tradecombined[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Systemsellsystem },
     	"systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadTradecombined4tradecombinedsell = async (user, tradecombinedsellpk: Tradecombinedsellpk): Tradecombined[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Tradecombinedsell },
     	"tradecombined_sellpk": TradecombinedsellJson.PKtoJSON(tradecombinedsellpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, tradecombinedsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": tradecombinedsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, tradecombinedsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": tradecombinedsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, tradecombined: Tradecombined) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_TRADECOMBINED },
     	"tradecombined": TradecombinedJson.toJSON(tradecombined)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, tradecombined: Tradecombined) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_TRADECOMBINED },
     	"tradecombined": TradecombinedJson.toJSON(tradecombined)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, tradecombined: Tradecombined) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_TRADECOMBINED },
     	"tradecombined": TradecombinedJson.toJSON(tradecombined)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rstradecombinedsuper;
