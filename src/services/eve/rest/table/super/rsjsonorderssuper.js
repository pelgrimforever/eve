//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in jsonorders.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 18.6.2021 14:35
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Jsonorderspk } from '../../../../../data/eve/table/super/jsonorderssuper.js';
import Jsonorders from '../../../../../data/eve/table/jsonorders.js';
import JsonordersJson from '../conversion/jsonordersjson.js';


class Rsjsonorderssuper extends Eveservice {	

	static restservice = 'rsjson_orders';

	//SELECT OPERATIONS
	static SELECT_JSONORDERS = 2;
	static SELECT_Siteusergroup = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_JSONORDERS = 10;

	//INSERT OPERATIONS
	static INSERT_JSONORDERS = 20;

	//DELETE OPERATIONS
	static DELETE_JSONORDERS = 30;

	static extractDataArray = (jsonarray): Jsonorders[] => {
		let jsonorderss: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			jsonorderss.push(JsonordersJson.fromJSON(jsonarray[i]));
		}
   	return jsonorderss;
	}

	static extractDataObject = (jsonobject): Jsonorders => {
    return JsonordersJson.fromJSON(jsonobject);
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

	static getOne = async (jsonorderspk: Jsonorderspk): Jsonorders => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_JSONORDERS },
      "json_orderspk": JsonordersJson.PKtoJSON(jsonorderspk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static search = async (jsonorderssearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": jsonorderssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (jsonorderssearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": jsonorderssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (jsonorders: Jsonorders) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_JSONORDERS },
     	"jsonorders": JsonordersJson.toJSON(jsonorders)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (jsonorders: Jsonorders) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_JSONORDERS },
     	"json_orders": JsonordersJson.toJSON(jsonorders)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (jsonorders: Jsonorders) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_JSONORDERS },
     	"json_orders": JsonordersJson.toJSON(jsonorders)
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

	static sec_getOne = async (user, jsonorderspk: Jsonorderspk): Jsonorders => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_JSONORDERS },
      "json_orderspk": JsonordersJson.PKtoJSON(jsonorderspk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, jsonorderssearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": jsonorderssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, jsonorderssearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": jsonorderssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, jsonorders: Jsonorders) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_JSONORDERS },
     	"json_orders": JsonordersJson.toJSON(jsonorders)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, jsonorders: Jsonorders) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_JSONORDERS },
     	"json_orders": JsonordersJson.toJSON(jsonorders)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, jsonorders: Jsonorders) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_JSONORDERS },
     	"json_orders": JsonordersJson.toJSON(jsonorders)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsjsonorderssuper;
