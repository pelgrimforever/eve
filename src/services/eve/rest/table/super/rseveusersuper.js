//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2022 10:55
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Eveuserpk } from '../../../../../data/eve/table/super/eveusersuper.js';
import Eveuser from '../../../../../data/eve/table/eveuser.js';
import EveuserJson from '../conversion/eveuserjson.js';
import { Frontendpageauthpk } from '../../../../../data/eve/table/super/frontendpageauthsuper.js';
import FrontendpageauthJson from '../conversion/frontendpageauthjson.js';


class Rseveusersuper extends Eveservice {	

	static restservice = 'rseveuser';

	//SELECT OPERATIONS
	static SELECT_EVEUSER = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Frontendpageauth = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_EVEUSER = 10;

	//INSERT OPERATIONS
	static INSERT_EVEUSER = 20;

	//DELETE OPERATIONS
	static DELETE_EVEUSER = 30;

	static extractDataArray = (jsonarray): Eveuser[] => {
		let eveusers: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			eveusers.push(EveuserJson.fromJSON(jsonarray[i]));
		}
   	return eveusers;
	}

	static extractDataObject = (jsonobject): Eveuser => {
    return EveuserJson.fromJSON(jsonobject);
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

	static getOne = async (eveuserpk: Eveuserpk): Eveuser => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_EVEUSER },
      "eveuserpk": EveuserJson.PKtoJSON(eveuserpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadEveuser4frontendpageauth = async (frontendpageauthpk: Frontendpageauthpk): Eveuser[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Frontendpageauth },
     	"frontendpage_authpk": FrontendpageauthJson.PKtoJSON(frontendpageauthpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (eveusersearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": eveusersearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (eveusersearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": eveusersearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (eveuser: Eveuser) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_EVEUSER },
     	"eveuser": EveuserJson.toJSON(eveuser)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (eveuser: Eveuser) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_EVEUSER },
     	"eveuser": EveuserJson.toJSON(eveuser)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (eveuser: Eveuser) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_EVEUSER },
     	"eveuser": EveuserJson.toJSON(eveuser)
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

	static sec_getOne = async (user, eveuserpk: Eveuserpk): Eveuser => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_EVEUSER },
      "eveuserpk": EveuserJson.PKtoJSON(eveuserpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadEveuser4frontendpageauth = async (user, frontendpageauthpk: Frontendpageauthpk): Eveuser[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Frontendpageauth },
     	"frontendpage_authpk": FrontendpageauthJson.PKtoJSON(frontendpageauthpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, eveusersearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": eveusersearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, eveusersearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": eveusersearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, eveuser: Eveuser) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_EVEUSER },
     	"eveuser": EveuserJson.toJSON(eveuser)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, eveuser: Eveuser) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_EVEUSER },
     	"eveuser": EveuserJson.toJSON(eveuser)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, eveuser: Eveuser) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_EVEUSER },
     	"eveuser": EveuserJson.toJSON(eveuser)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rseveusersuper;
