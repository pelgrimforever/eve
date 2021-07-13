//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in orders.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 12.6.2021 13:57
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Orderspk } from '../../../../../data/eve/table/super/orderssuper.js';
import Orders from '../../../../../data/eve/table/orders.js';
import OrdersJson from '../conversion/ordersjson.js';
import { Evetypepk } from '../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../conversion/evetypejson.js';
import { Systempk } from '../../../../../data/eve/table/super/systemsuper.js';
import SystemJson from '../conversion/systemjson.js';
import { Systemtradeorderpk } from '../../../../../data/eve/table/super/systemtradeordersuper.js';
import SystemtradeorderJson from '../conversion/systemtradeorderjson.js';
import { Tradepk } from '../../../../../data/eve/table/super/tradesuper.js';
import TradeJson from '../conversion/tradejson.js';


class Rsorderssuper extends Eveservice {	

	static restservice = 'rsorders';

	//SELECT OPERATIONS
	static SELECT_ORDERS = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Evetype = 100 + 0;
	static SELECT_System = 100 + 1;
	static SELECT_Systemtradeorderbuyorder = 100 + 2;
	static SELECT_Systemtradeordersellorder = 100 + 3;
	static SELECT_Tradesellorderid = 100 + 4;
	static SELECT_Tradebuyorderid = 100 + 5;

	//UPDATE OPERATIONS
	static UPDATE_ORDERS = 10;

	//INSERT OPERATIONS
	static INSERT_ORDERS = 20;

	//DELETE OPERATIONS
	static DELETE_Evetype = 100 + 6;
	static DELETE_System = 100 + 7;
	static DELETE_ORDERS = 30;

	static extractDataArray = (jsonarray): Orders[] => {
		let orderss: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			orderss.push(OrdersJson.fromJSON(jsonarray[i]));
		}
   	return orderss;
	}

	static extractDataObject = (jsonobject): Orders => {
    return OrdersJson.fromJSON(jsonobject);
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

	static getOne = async (orderspk: Orderspk): Orders => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_ORDERS },
      "orderspk": OrdersJson.PKtoJSON(orderspk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadOrderss4evetype = async (evetypepk: Evetypepk): Orders[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Evetype },
     	"evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadOrderss4system = async (systempk: Systempk): Orders[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_System },
     	"systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadOrders4systemtradeorderBuyorder = async (systemtradeorderBuyorderpk: Systemtradeorderpk): Orders[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Systemtradeorderbuyorder },
     	"systemtrade_orderpk": SystemtradeorderJson.PKtoJSON(systemtradeorderBuyorderpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadOrders4systemtradeorderSellorder = async (systemtradeorderSellorderpk: Systemtradeorderpk): Orders[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Systemtradeordersellorder },
     	"systemtrade_orderpk": SystemtradeorderJson.PKtoJSON(systemtradeorderSellorderpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadOrders4tradeSellorderid = async (tradeSellorderidpk: Tradepk): Orders[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Tradesellorderid },
     	"tradepk": TradeJson.PKtoJSON(tradeSellorderidpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadOrders4tradeBuyorderid = async (tradeBuyorderidpk: Tradepk): Orders[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Tradebuyorderid },
     	"tradepk": TradeJson.PKtoJSON(tradeBuyorderidpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (orderssearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": orderssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (orderssearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": orderssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (orders: Orders) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_ORDERS },
     	"orders": OrdersJson.toJSON(orders)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (orders: Orders) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_ORDERS },
     	"orders": OrdersJson.toJSON(orders)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (orders: Orders) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_ORDERS },
     	"orders": OrdersJson.toJSON(orders)
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

	static sec_getOne = async (user, orderspk: Orderspk): Orders => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_ORDERS },
      "orderspk": OrdersJson.PKtoJSON(orderspk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadOrderss4evetype = async (user, evetypepk: Orderspk): Orders[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Evetype },
     	"evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadOrderss4system = async (user, systempk: Orderspk): Orders[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_System },
     	"systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadOrders4systemtradeorderBuyorder = async (user, systemtradeorderBuyorderpk: Systemtradeorderpk): Orders[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Systemtradeorderbuyorder },
     	"systemtrade_orderpk": SystemtradeorderJson.PKtoJSON(systemtradeorderBuyorderpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadOrders4systemtradeorderSellorder = async (user, systemtradeorderSellorderpk: Systemtradeorderpk): Orders[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Systemtradeordersellorder },
     	"systemtrade_orderpk": SystemtradeorderJson.PKtoJSON(systemtradeorderSellorderpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadOrders4tradeSellorderid = async (user, tradeSellorderidpk: Tradepk): Orders[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Tradesellorderid },
     	"tradepk": TradeJson.PKtoJSON(tradeSellorderidpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadOrders4tradeBuyorderid = async (user, tradeBuyorderidpk: Tradepk): Orders[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Tradebuyorderid },
     	"tradepk": TradeJson.PKtoJSON(tradeBuyorderidpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, orderssearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": orderssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, orderssearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": orderssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, orders: Orders) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_ORDERS },
     	"orders": OrdersJson.toJSON(orders)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, orders: Orders) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_ORDERS },
     	"orders": OrdersJson.toJSON(orders)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, orders: Orders) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_ORDERS },
     	"orders": OrdersJson.toJSON(orders)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsorderssuper;
