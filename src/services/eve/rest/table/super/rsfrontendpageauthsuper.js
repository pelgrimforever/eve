//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2022 10:55
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Frontendpageauthpk } from '../../../../../data/eve/table/super/frontendpageauthsuper.js';
import Frontendpageauth from '../../../../../data/eve/table/frontendpageauth.js';
import FrontendpageauthJson from '../conversion/frontendpageauthjson.js';
import { Frontendpagepk } from '../../../../../data/eve/table/super/frontendpagesuper.js';
import FrontendpageJson from '../conversion/frontendpagejson.js';
import { Eveuserpk } from '../../../../../data/eve/table/super/eveusersuper.js';
import EveuserJson from '../conversion/eveuserjson.js';


class Rsfrontendpageauthsuper extends Eveservice {	

	static restservice = 'rsfrontendpage_auth';

	//SELECT OPERATIONS
	static SELECT_FRONTENDPAGEAUTH = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Frontendpage = 100 + 0;
	static SELECT_Eveuser = 100 + 1;

	//UPDATE OPERATIONS
	static UPDATE_FRONTENDPAGEAUTH = 10;

	//INSERT OPERATIONS
	static INSERT_FRONTENDPAGEAUTH = 20;

	//DELETE OPERATIONS
	static DELETE_Frontendpage = 100 + 2;
	static DELETE_Eveuser = 100 + 3;
	static DELETE_FRONTENDPAGEAUTH = 30;

	static extractDataArray = (jsonarray): Frontendpageauth[] => {
		let frontendpageauths: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			frontendpageauths.push(FrontendpageauthJson.fromJSON(jsonarray[i]));
		}
   	return frontendpageauths;
	}

	static extractDataObject = (jsonobject): Frontendpageauth => {
    return FrontendpageauthJson.fromJSON(jsonobject);
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

	static getOne = async (frontendpageauthpk: Frontendpageauthpk): Frontendpageauth => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_FRONTENDPAGEAUTH },
      "frontendpage_authpk": FrontendpageauthJson.PKtoJSON(frontendpageauthpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadFrontendpageauths4frontendpage = async (frontendpagepk: Frontendpagepk): Frontendpageauth[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Frontendpage },
     	"frontendpagepk": FrontendpageJson.PKtoJSON(frontendpagepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadFrontendpageauths4eveuser = async (eveuserpk: Eveuserpk): Frontendpageauth[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Eveuser },
     	"eveuserpk": EveuserJson.PKtoJSON(eveuserpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (frontendpageauthsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": frontendpageauthsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (frontendpageauthsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": frontendpageauthsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (frontendpageauth: Frontendpageauth) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_FRONTENDPAGEAUTH },
     	"frontendpageauth": FrontendpageauthJson.toJSON(frontendpageauth)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (frontendpageauth: Frontendpageauth) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_FRONTENDPAGEAUTH },
     	"frontendpage_auth": FrontendpageauthJson.toJSON(frontendpageauth)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (frontendpageauth: Frontendpageauth) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_FRONTENDPAGEAUTH },
     	"frontendpage_auth": FrontendpageauthJson.toJSON(frontendpageauth)
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

	static sec_getOne = async (user, frontendpageauthpk: Frontendpageauthpk): Frontendpageauth => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_FRONTENDPAGEAUTH },
      "frontendpage_authpk": FrontendpageauthJson.PKtoJSON(frontendpageauthpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadFrontendpageauths4frontendpage = async (user, frontendpagepk: Frontendpageauthpk): Frontendpageauth[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Frontendpage },
     	"frontendpagepk": FrontendpageJson.PKtoJSON(frontendpagepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadFrontendpageauths4eveuser = async (user, eveuserpk: Frontendpageauthpk): Frontendpageauth[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Eveuser },
     	"eveuserpk": EveuserJson.PKtoJSON(eveuserpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, frontendpageauthsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": frontendpageauthsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, frontendpageauthsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": frontendpageauthsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, frontendpageauth: Frontendpageauth) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_FRONTENDPAGEAUTH },
     	"frontendpage_auth": FrontendpageauthJson.toJSON(frontendpageauth)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, frontendpageauth: Frontendpageauth) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_FRONTENDPAGEAUTH },
     	"frontendpage_auth": FrontendpageauthJson.toJSON(frontendpageauth)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, frontendpageauth: Frontendpageauth) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_FRONTENDPAGEAUTH },
     	"frontendpage_auth": FrontendpageauthJson.toJSON(frontendpageauth)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsfrontendpageauthsuper;
