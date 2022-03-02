//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2022 10:55
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Frontendpagepk } from '../../../../../data/eve/table/super/frontendpagesuper.js';
import Frontendpage from '../../../../../data/eve/table/frontendpage.js';
import FrontendpageJson from '../conversion/frontendpagejson.js';
import { Frontendpageauthpk } from '../../../../../data/eve/table/super/frontendpageauthsuper.js';
import FrontendpageauthJson from '../conversion/frontendpageauthjson.js';


class Rsfrontendpagesuper extends Eveservice {	

	static restservice = 'rsfrontendpage';

	//SELECT OPERATIONS
	static SELECT_FRONTENDPAGE = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Frontendpageauth = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_FRONTENDPAGE = 10;

	//INSERT OPERATIONS
	static INSERT_FRONTENDPAGE = 20;

	//DELETE OPERATIONS
	static DELETE_FRONTENDPAGE = 30;

	static extractDataArray = (jsonarray): Frontendpage[] => {
		let frontendpages: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			frontendpages.push(FrontendpageJson.fromJSON(jsonarray[i]));
		}
   	return frontendpages;
	}

	static extractDataObject = (jsonobject): Frontendpage => {
    return FrontendpageJson.fromJSON(jsonobject);
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

	static getOne = async (frontendpagepk: Frontendpagepk): Frontendpage => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_FRONTENDPAGE },
      "frontendpagepk": FrontendpageJson.PKtoJSON(frontendpagepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadFrontendpage4frontendpageauth = async (frontendpageauthpk: Frontendpageauthpk): Frontendpage[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Frontendpageauth },
     	"frontendpage_authpk": FrontendpageauthJson.PKtoJSON(frontendpageauthpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (frontendpagesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": frontendpagesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (frontendpagesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": frontendpagesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (frontendpage: Frontendpage) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_FRONTENDPAGE },
     	"frontendpage": FrontendpageJson.toJSON(frontendpage)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (frontendpage: Frontendpage) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_FRONTENDPAGE },
     	"frontendpage": FrontendpageJson.toJSON(frontendpage)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (frontendpage: Frontendpage) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_FRONTENDPAGE },
     	"frontendpage": FrontendpageJson.toJSON(frontendpage)
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

	static sec_getOne = async (user, frontendpagepk: Frontendpagepk): Frontendpage => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_FRONTENDPAGE },
      "frontendpagepk": FrontendpageJson.PKtoJSON(frontendpagepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadFrontendpage4frontendpageauth = async (user, frontendpageauthpk: Frontendpageauthpk): Frontendpage[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Frontendpageauth },
     	"frontendpage_authpk": FrontendpageauthJson.PKtoJSON(frontendpageauthpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, frontendpagesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": frontendpagesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, frontendpagesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": frontendpagesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, frontendpage: Frontendpage) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_FRONTENDPAGE },
     	"frontendpage": FrontendpageJson.toJSON(frontendpage)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, frontendpage: Frontendpage) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_FRONTENDPAGE },
     	"frontendpage": FrontendpageJson.toJSON(frontendpage)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, frontendpage: Frontendpage) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_FRONTENDPAGE },
     	"frontendpage": FrontendpageJson.toJSON(frontendpage)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsfrontendpagesuper;
