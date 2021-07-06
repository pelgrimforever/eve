//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in orderhist.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 4.6.2021 14:41
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Orderhistpk } from '../../../../../data/eve/table/super/orderhistsuper.js';
import Orderhist from '../../../../../data/eve/table/orderhist.js';
import OrderhistJson from '../conversion/orderhistjson.js';
import { Evetypepk } from '../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../conversion/evetypejson.js';
import { Systempk } from '../../../../../data/eve/table/super/systemsuper.js';
import SystemJson from '../conversion/systemjson.js';


class Rsorderhistsuper extends Eveservice {	

	static restservice = 'rsorder_hist';

	//SELECT OPERATIONS
	static SELECT_ORDERHIST = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Evetype = 100 + 0;
	static SELECT_System = 100 + 1;

	//UPDATE OPERATIONS
	static UPDATE_ORDERHIST = 10;

	//INSERT OPERATIONS
	static INSERT_ORDERHIST = 20;

	//DELETE OPERATIONS
	static DELETE_Evetype = 100 + 2;
	static DELETE_System = 100 + 3;
	static DELETE_ORDERHIST = 30;

	static extractDataArray = (jsonarray): Orderhist[] => {
		let orderhists: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			orderhists.push(OrderhistJson.fromJSON(jsonarray[i]));
		}
   	return orderhists;
	}

	static extractDataObject = (jsonobject): Orderhist => {
    return OrderhistJson.fromJSON(jsonobject);
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

	static getOne = async (orderhistpk: Orderhistpk): Orderhist => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_ORDERHIST },
      "order_histpk": OrderhistJson.PKtoJSON(orderhistpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadOrderhists4evetype = async (evetypepk: Evetypepk): Orderhist[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Evetype },
     	"evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadOrderhists4system = async (systempk: Systempk): Orderhist[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_System },
     	"systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (orderhistsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": orderhistsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (orderhistsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": orderhistsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (orderhist: Orderhist) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_ORDERHIST },
     	"orderhist": OrderhistJson.toJSON(orderhist)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (orderhist: Orderhist) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_ORDERHIST },
     	"order_hist": OrderhistJson.toJSON(orderhist)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (orderhist: Orderhist) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_ORDERHIST },
     	"order_hist": OrderhistJson.toJSON(orderhist)
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

	static sec_getOne = async (user, orderhistpk: Orderhistpk): Orderhist => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_ORDERHIST },
      "order_histpk": OrderhistJson.PKtoJSON(orderhistpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadOrderhists4evetype = async (user, evetypepk: Orderhistpk): Orderhist[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Evetype },
     	"evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadOrderhists4system = async (user, systempk: Orderhistpk): Orderhist[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_System },
     	"systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, orderhistsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": orderhistsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, orderhistsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": orderhistsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, orderhist: Orderhist) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_ORDERHIST },
     	"order_hist": OrderhistJson.toJSON(orderhist)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, orderhist: Orderhist) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_ORDERHIST },
     	"order_hist": OrderhistJson.toJSON(orderhist)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, orderhist: Orderhist) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_ORDERHIST },
     	"order_hist": OrderhistJson.toJSON(orderhist)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsorderhistsuper;
