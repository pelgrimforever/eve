//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in systemtradeorder.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 12.6.2021 13:57
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Systemtradeorderpk } from '../../../../../data/eve/table/super/systemtradeordersuper.js';
import Systemtradeorder from '../../../../../data/eve/table/systemtradeorder.js';
import SystemtradeorderJson from '../conversion/systemtradeorderjson.js';
import { Orderspk } from '../../../../../data/eve/table/super/orderssuper.js';
import OrdersJson from '../conversion/ordersjson.js';
import { Systemtradepk } from '../../../../../data/eve/table/super/systemtradesuper.js';
import SystemtradeJson from '../conversion/systemtradejson.js';


class Rssystemtradeordersuper extends Eveservice {	

	static restservice = 'rssystemtrade_order';

	//SELECT OPERATIONS
	static SELECT_SYSTEMTRADEORDER = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Ordersbuyorder = 100 + 0;
	static SELECT_Orderssellorder = 100 + 1;
	static SELECT_Systemtrade = 100 + 2;

	//UPDATE OPERATIONS
	static UPDATE_SYSTEMTRADEORDER = 10;

	//INSERT OPERATIONS
	static INSERT_SYSTEMTRADEORDER = 20;

	//DELETE OPERATIONS
	static DELETE_Ordersbuyorder = 100 + 3;
	static DELETE_Orderssellorder = 100 + 4;
	static DELETE_Systemtrade = 100 + 5;
	static DELETE_SYSTEMTRADEORDER = 30;

	static extractDataArray = (jsonarray): Systemtradeorder[] => {
		let systemtradeorders: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			systemtradeorders.push(SystemtradeorderJson.fromJSON(jsonarray[i]));
		}
   	return systemtradeorders;
	}

	static extractDataObject = (jsonobject): Systemtradeorder => {
    return SystemtradeorderJson.fromJSON(jsonobject);
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

	static getOne = async (systemtradeorderpk: Systemtradeorderpk): Systemtradeorder => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SYSTEMTRADEORDER },
      "systemtrade_orderpk": SystemtradeorderJson.PKtoJSON(systemtradeorderpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadSystemtradeorders4ordersBuyorder = async (orderspk: Orderspk): Systemtradeorder[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Ordersbuyorder },
     	"orderspk": OrdersJson.PKtoJSON(orderspk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadSystemtradeorders4ordersSellorder = async (orderspk: Orderspk): Systemtradeorder[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Orderssellorder },
     	"orderspk": OrdersJson.PKtoJSON(orderspk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadSystemtradeorders4systemtrade = async (systemtradepk: Systemtradepk): Systemtradeorder[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Systemtrade },
     	"systemtradepk": SystemtradeJson.PKtoJSON(systemtradepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (systemtradeordersearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": systemtradeordersearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (systemtradeordersearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": systemtradeordersearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (systemtradeorder: Systemtradeorder) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_SYSTEMTRADEORDER },
     	"systemtradeorder": SystemtradeorderJson.toJSON(systemtradeorder)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (systemtradeorder: Systemtradeorder) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_SYSTEMTRADEORDER },
     	"systemtrade_order": SystemtradeorderJson.toJSON(systemtradeorder)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (systemtradeorder: Systemtradeorder) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_SYSTEMTRADEORDER },
     	"systemtrade_order": SystemtradeorderJson.toJSON(systemtradeorder)
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

	static sec_getOne = async (user, systemtradeorderpk: Systemtradeorderpk): Systemtradeorder => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SYSTEMTRADEORDER },
      "systemtrade_orderpk": SystemtradeorderJson.PKtoJSON(systemtradeorderpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadSystemtradeorders4ordersBuyorder = async (user, orderspk: Systemtradeorderpk): Systemtradeorder[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Ordersbuyorder },
     	"orderspk": OrdersJson.PKtoJSON(orderspk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadSystemtradeorders4ordersSellorder = async (user, orderspk: Systemtradeorderpk): Systemtradeorder[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Orderssellorder },
     	"orderspk": OrdersJson.PKtoJSON(orderspk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadSystemtradeorders4systemtrade = async (user, systemtradepk: Systemtradeorderpk): Systemtradeorder[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Systemtrade },
     	"systemtradepk": SystemtradeJson.PKtoJSON(systemtradepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, systemtradeordersearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": systemtradeordersearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, systemtradeordersearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": systemtradeordersearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, systemtradeorder: Systemtradeorder) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_SYSTEMTRADEORDER },
     	"systemtrade_order": SystemtradeorderJson.toJSON(systemtradeorder)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, systemtradeorder: Systemtradeorder) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_SYSTEMTRADEORDER },
     	"systemtrade_order": SystemtradeorderJson.toJSON(systemtradeorder)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, systemtradeorder: Systemtradeorder) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_SYSTEMTRADEORDER },
     	"systemtrade_order": SystemtradeorderJson.toJSON(systemtradeorder)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rssystemtradeordersuper;
