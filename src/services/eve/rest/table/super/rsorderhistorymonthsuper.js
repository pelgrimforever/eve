//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 19.0.2022 22:13
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Orderhistorymonthpk } from '../../../../../data/eve/table/super/orderhistorymonthsuper.js';
import Orderhistorymonth from '../../../../../data/eve/table/orderhistorymonth.js';
import OrderhistorymonthJson from '../conversion/orderhistorymonthjson.js';
import { Evetypepk } from '../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../conversion/evetypejson.js';
import { Regionpk } from '../../../../../data/eve/table/super/regionsuper.js';
import RegionJson from '../conversion/regionjson.js';


class Rsorderhistorymonthsuper extends Eveservice {	

	static restservice = 'rsorder_history_month';

	//SELECT OPERATIONS
	static SELECT_ORDERHISTORYMONTH = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Evetype = 100 + 0;
	static SELECT_Region = 100 + 1;

	//UPDATE OPERATIONS
	static UPDATE_ORDERHISTORYMONTH = 10;

	//INSERT OPERATIONS
	static INSERT_ORDERHISTORYMONTH = 20;

	//DELETE OPERATIONS
	static DELETE_Evetype = 100 + 2;
	static DELETE_Region = 100 + 3;
	static DELETE_ORDERHISTORYMONTH = 30;

	static extractDataArray = (jsonarray): Orderhistorymonth[] => {
		let orderhistorymonths: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			orderhistorymonths.push(OrderhistorymonthJson.fromJSON(jsonarray[i]));
		}
   	return orderhistorymonths;
	}

	static extractDataObject = (jsonobject): Orderhistorymonth => {
    return OrderhistorymonthJson.fromJSON(jsonobject);
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

	static getOne = async (orderhistorymonthpk: Orderhistorymonthpk): Orderhistorymonth => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_ORDERHISTORYMONTH },
      "order_history_monthpk": OrderhistorymonthJson.PKtoJSON(orderhistorymonthpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadOrderhistorymonths4evetype = async (evetypepk: Evetypepk): Orderhistorymonth[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Evetype },
     	"evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadOrderhistorymonths4region = async (regionpk: Regionpk): Orderhistorymonth[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Region },
     	"regionpk": RegionJson.PKtoJSON(regionpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (orderhistorymonthsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": orderhistorymonthsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (orderhistorymonthsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": orderhistorymonthsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (orderhistorymonth: Orderhistorymonth) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_ORDERHISTORYMONTH },
     	"orderhistorymonth": OrderhistorymonthJson.toJSON(orderhistorymonth)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (orderhistorymonth: Orderhistorymonth) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_ORDERHISTORYMONTH },
     	"order_history_month": OrderhistorymonthJson.toJSON(orderhistorymonth)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (orderhistorymonth: Orderhistorymonth) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_ORDERHISTORYMONTH },
     	"order_history_month": OrderhistorymonthJson.toJSON(orderhistorymonth)
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

	static sec_getOne = async (user, orderhistorymonthpk: Orderhistorymonthpk): Orderhistorymonth => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_ORDERHISTORYMONTH },
      "order_history_monthpk": OrderhistorymonthJson.PKtoJSON(orderhistorymonthpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadOrderhistorymonths4evetype = async (user, evetypepk: Orderhistorymonthpk): Orderhistorymonth[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Evetype },
     	"evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadOrderhistorymonths4region = async (user, regionpk: Orderhistorymonthpk): Orderhistorymonth[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Region },
     	"regionpk": RegionJson.PKtoJSON(regionpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, orderhistorymonthsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": orderhistorymonthsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, orderhistorymonthsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": orderhistorymonthsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, orderhistorymonth: Orderhistorymonth) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_ORDERHISTORYMONTH },
     	"order_history_month": OrderhistorymonthJson.toJSON(orderhistorymonth)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, orderhistorymonth: Orderhistorymonth) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_ORDERHISTORYMONTH },
     	"order_history_month": OrderhistorymonthJson.toJSON(orderhistorymonth)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, orderhistorymonth: Orderhistorymonth) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_ORDERHISTORYMONTH },
     	"order_history_month": OrderhistorymonthJson.toJSON(orderhistorymonth)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsorderhistorymonthsuper;
