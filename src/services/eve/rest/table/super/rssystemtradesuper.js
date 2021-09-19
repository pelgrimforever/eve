//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in systemtrade.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 18.8.2021 11:31
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Systemtradepk } from '../../../../../data/eve/table/super/systemtradesuper.js';
import Systemtrade from '../../../../../data/eve/table/systemtrade.js';
import SystemtradeJson from '../conversion/systemtradejson.js';
import { Systempk } from '../../../../../data/eve/table/super/systemsuper.js';
import SystemJson from '../conversion/systemjson.js';
import { Systemtradeorderpk } from '../../../../../data/eve/table/super/systemtradeordersuper.js';
import SystemtradeorderJson from '../conversion/systemtradeorderjson.js';


class Rssystemtradesuper extends Eveservice {	

	static restservice = 'rssystemtrade';

	//SELECT OPERATIONS
	static SELECT_SYSTEMTRADE = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Systemsellsystem = 100 + 0;
	static SELECT_Systembuysystem = 100 + 1;
	static SELECT_Systemtradeorder = 100 + 2;

	//UPDATE OPERATIONS
	static UPDATE_SYSTEMTRADE = 10;

	//INSERT OPERATIONS
	static INSERT_SYSTEMTRADE = 20;

	//DELETE OPERATIONS
	static DELETE_Systemsellsystem = 100 + 3;
	static DELETE_Systembuysystem = 100 + 4;
	static DELETE_SYSTEMTRADE = 30;

	static extractDataArray = (jsonarray): Systemtrade[] => {
		let systemtrades: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			systemtrades.push(SystemtradeJson.fromJSON(jsonarray[i]));
		}
   	return systemtrades;
	}

	static extractDataObject = (jsonobject): Systemtrade => {
    return SystemtradeJson.fromJSON(jsonobject);
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

	static getOne = async (systemtradepk: Systemtradepk): Systemtrade => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SYSTEMTRADE },
      "systemtradepk": SystemtradeJson.PKtoJSON(systemtradepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadSystemtrades4systemSellsystem = async (systempk: Systempk): Systemtrade[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Systemsellsystem },
     	"systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadSystemtrades4systemBuysystem = async (systempk: Systempk): Systemtrade[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Systembuysystem },
     	"systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadSystemtrade4systemtradeorder = async (systemtradeorderpk: Systemtradeorderpk): Systemtrade[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Systemtradeorder },
     	"systemtrade_orderpk": SystemtradeorderJson.PKtoJSON(systemtradeorderpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (systemtradesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": systemtradesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (systemtradesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": systemtradesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (systemtrade: Systemtrade) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_SYSTEMTRADE },
     	"systemtrade": SystemtradeJson.toJSON(systemtrade)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (systemtrade: Systemtrade) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_SYSTEMTRADE },
     	"systemtrade": SystemtradeJson.toJSON(systemtrade)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (systemtrade: Systemtrade) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_SYSTEMTRADE },
     	"systemtrade": SystemtradeJson.toJSON(systemtrade)
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

	static sec_getOne = async (user, systemtradepk: Systemtradepk): Systemtrade => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SYSTEMTRADE },
      "systemtradepk": SystemtradeJson.PKtoJSON(systemtradepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadSystemtrades4systemSellsystem = async (user, systempk: Systemtradepk): Systemtrade[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Systemsellsystem },
     	"systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadSystemtrades4systemBuysystem = async (user, systempk: Systemtradepk): Systemtrade[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Systembuysystem },
     	"systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadSystemtrade4systemtradeorder = async (user, systemtradeorderpk: Systemtradeorderpk): Systemtrade[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Systemtradeorder },
     	"systemtrade_orderpk": SystemtradeorderJson.PKtoJSON(systemtradeorderpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, systemtradesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": systemtradesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, systemtradesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": systemtradesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, systemtrade: Systemtrade) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_SYSTEMTRADE },
     	"systemtrade": SystemtradeJson.toJSON(systemtrade)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, systemtrade: Systemtrade) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_SYSTEMTRADE },
     	"systemtrade": SystemtradeJson.toJSON(systemtrade)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, systemtrade: Systemtrade) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_SYSTEMTRADE },
     	"systemtrade": SystemtradeJson.toJSON(systemtrade)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rssystemtradesuper;
