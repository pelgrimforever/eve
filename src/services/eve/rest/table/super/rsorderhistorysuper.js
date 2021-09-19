//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in orderhistory.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 18.8.2021 11:31
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Orderhistorypk } from '../../../../../data/eve/table/super/orderhistorysuper.js';
import Orderhistory from '../../../../../data/eve/table/orderhistory.js';
import OrderhistoryJson from '../conversion/orderhistoryjson.js';
import { Evetypepk } from '../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../conversion/evetypejson.js';
import { Regionpk } from '../../../../../data/eve/table/super/regionsuper.js';
import RegionJson from '../conversion/regionjson.js';


class Rsorderhistorysuper extends Eveservice {	

	static restservice = 'rsorder_history';

	//SELECT OPERATIONS
	static SELECT_ORDERHISTORY = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Evetype = 100 + 0;
	static SELECT_Region = 100 + 1;

	//UPDATE OPERATIONS
	static UPDATE_ORDERHISTORY = 10;

	//INSERT OPERATIONS
	static INSERT_ORDERHISTORY = 20;

	//DELETE OPERATIONS
	static DELETE_Evetype = 100 + 2;
	static DELETE_Region = 100 + 3;
	static DELETE_ORDERHISTORY = 30;

	static extractDataArray = (jsonarray): Orderhistory[] => {
		let orderhistorys: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			orderhistorys.push(OrderhistoryJson.fromJSON(jsonarray[i]));
		}
   	return orderhistorys;
	}

	static extractDataObject = (jsonobject): Orderhistory => {
    return OrderhistoryJson.fromJSON(jsonobject);
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

	static getOne = async (orderhistorypk: Orderhistorypk): Orderhistory => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_ORDERHISTORY },
      "order_historypk": OrderhistoryJson.PKtoJSON(orderhistorypk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadOrderhistorys4evetype = async (evetypepk: Evetypepk): Orderhistory[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Evetype },
     	"evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadOrderhistorys4region = async (regionpk: Regionpk): Orderhistory[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Region },
     	"regionpk": RegionJson.PKtoJSON(regionpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (orderhistorysearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": orderhistorysearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (orderhistorysearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": orderhistorysearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (orderhistory: Orderhistory) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_ORDERHISTORY },
     	"orderhistory": OrderhistoryJson.toJSON(orderhistory)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (orderhistory: Orderhistory) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_ORDERHISTORY },
     	"order_history": OrderhistoryJson.toJSON(orderhistory)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (orderhistory: Orderhistory) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_ORDERHISTORY },
     	"order_history": OrderhistoryJson.toJSON(orderhistory)
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

	static sec_getOne = async (user, orderhistorypk: Orderhistorypk): Orderhistory => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_ORDERHISTORY },
      "order_historypk": OrderhistoryJson.PKtoJSON(orderhistorypk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadOrderhistorys4evetype = async (user, evetypepk: Orderhistorypk): Orderhistory[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Evetype },
     	"evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadOrderhistorys4region = async (user, regionpk: Orderhistorypk): Orderhistory[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Region },
     	"regionpk": RegionJson.PKtoJSON(regionpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, orderhistorysearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": orderhistorysearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, orderhistorysearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": orderhistorysearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, orderhistory: Orderhistory) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_ORDERHISTORY },
     	"order_history": OrderhistoryJson.toJSON(orderhistory)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, orderhistory: Orderhistory) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_ORDERHISTORY },
     	"order_history": OrderhistoryJson.toJSON(orderhistory)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, orderhistory: Orderhistory) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_ORDERHISTORY },
     	"order_history": OrderhistoryJson.toJSON(orderhistory)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsorderhistorysuper;
