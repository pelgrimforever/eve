//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 9.11.2021 14:30
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Securityislandpk } from '../../../../../data/eve/table/super/securityislandsuper.js';
import Securityisland from '../../../../../data/eve/table/securityisland.js';
import SecurityislandJson from '../conversion/securityislandjson.js';


class Rssecurityislandsuper extends Eveservice {	

	static restservice = 'rssecurity_island';

	//SELECT OPERATIONS
	static SELECT_SECURITYISLAND = 2;
	static SELECT_Siteusergroup = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_SECURITYISLAND = 10;

	//INSERT OPERATIONS
	static INSERT_SECURITYISLAND = 20;

	//DELETE OPERATIONS
	static DELETE_SECURITYISLAND = 30;

	static extractDataArray = (jsonarray): Securityisland[] => {
		let securityislands: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			securityislands.push(SecurityislandJson.fromJSON(jsonarray[i]));
		}
   	return securityislands;
	}

	static extractDataObject = (jsonobject): Securityisland => {
    return SecurityislandJson.fromJSON(jsonobject);
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

	static getOne = async (securityislandpk: Securityislandpk): Securityisland => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SECURITYISLAND },
      "security_islandpk": SecurityislandJson.PKtoJSON(securityislandpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static search = async (securityislandsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": securityislandsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (securityislandsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": securityislandsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (securityisland: Securityisland) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_SECURITYISLAND },
     	"securityisland": SecurityislandJson.toJSON(securityisland)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (securityisland: Securityisland) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_SECURITYISLAND },
     	"security_island": SecurityislandJson.toJSON(securityisland)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (securityisland: Securityisland) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_SECURITYISLAND },
     	"security_island": SecurityislandJson.toJSON(securityisland)
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

	static sec_getOne = async (user, securityislandpk: Securityislandpk): Securityisland => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SECURITYISLAND },
      "security_islandpk": SecurityislandJson.PKtoJSON(securityislandpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, securityislandsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": securityislandsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, securityislandsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": securityislandsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, securityisland: Securityisland) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_SECURITYISLAND },
     	"security_island": SecurityislandJson.toJSON(securityisland)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, securityisland: Securityisland) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_SECURITYISLAND },
     	"security_island": SecurityislandJson.toJSON(securityisland)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, securityisland: Securityisland) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_SECURITYISLAND },
     	"security_island": SecurityislandJson.toJSON(securityisland)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rssecurityislandsuper;
