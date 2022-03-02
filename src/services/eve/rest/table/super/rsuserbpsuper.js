//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2022 10:55
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Userbppk } from '../../../../../data/eve/table/super/userbpsuper.js';
import Userbp from '../../../../../data/eve/table/userbp.js';
import UserbpJson from '../conversion/userbpjson.js';
import { Evetypepk } from '../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../conversion/evetypejson.js';


class Rsuserbpsuper extends Eveservice {	

	static restservice = 'rsuserbp';

	//SELECT OPERATIONS
	static SELECT_USERBP = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Evetype = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_USERBP = 10;

	//INSERT OPERATIONS
	static INSERT_USERBP = 20;

	//DELETE OPERATIONS
	static DELETE_Evetype = 100 + 1;
	static DELETE_USERBP = 30;

	static extractDataArray = (jsonarray): Userbp[] => {
		let userbps: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			userbps.push(UserbpJson.fromJSON(jsonarray[i]));
		}
   	return userbps;
	}

	static extractDataObject = (jsonobject): Userbp => {
    return UserbpJson.fromJSON(jsonobject);
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

	static getOne = async (userbppk: Userbppk): Userbp => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_USERBP },
      "userbppk": UserbpJson.PKtoJSON(userbppk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadUserbps4evetype = async (evetypepk: Evetypepk): Userbp[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Evetype },
     	"evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (userbpsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": userbpsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (userbpsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": userbpsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (userbp: Userbp) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_USERBP },
     	"userbp": UserbpJson.toJSON(userbp)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (userbp: Userbp) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_USERBP },
     	"userbp": UserbpJson.toJSON(userbp)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (userbp: Userbp) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_USERBP },
     	"userbp": UserbpJson.toJSON(userbp)
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

	static sec_getOne = async (user, userbppk: Userbppk): Userbp => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_USERBP },
      "userbppk": UserbpJson.PKtoJSON(userbppk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadUserbps4evetype = async (user, evetypepk: Userbppk): Userbp[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Evetype },
     	"evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, userbpsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": userbpsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, userbpsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": userbpsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, userbp: Userbp) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_USERBP },
     	"userbp": UserbpJson.toJSON(userbp)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, userbp: Userbp) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_USERBP },
     	"userbp": UserbpJson.toJSON(userbp)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, userbp: Userbp) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_USERBP },
     	"userbp": UserbpJson.toJSON(userbp)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsuserbpsuper;
