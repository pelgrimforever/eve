//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in siteuser.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 14.5.2021 13:42
    Author     : Franky Laseure
*/

import Sitesecurityservice from '../../../../sitesecurityservice.js';
import { Siteuserpk } from '../../../../../data/sitesecurity/table/super/siteusersuper.js';
import Siteuser from '../../../../../data/sitesecurity/table/siteuser.js';
import SiteuserJson from '../conversion/siteuserjson.js';
import { Siteusergrouppk } from '../../../../../data/sitesecurity/table/super/siteusergroupsuper.js';
import SiteusergroupJson from '../conversion/siteusergroupjson.js';


class Rssiteusersuper extends Sitesecurityservice {	

	static restservice = 'rssiteuser';

	//SELECT OPERATIONS
	static SELECT_SITEUSER = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Siteusergroup = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_SITEUSER = 10;

	//INSERT OPERATIONS
	static INSERT_SITEUSER = 20;

	//DELETE OPERATIONS
	static DELETE_SITEUSER = 30;

	static extractDataArray = (jsonarray): Siteuser[] => {
		let siteusers: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			siteusers.push(SiteuserJson.fromJSON(jsonarray[i]));
		}
   	return siteusers;
	}

	static extractDataObject = (jsonobject): Siteuser => {
    return SiteuserJson.fromJSON(jsonobject);
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

	static getOne = async (siteuserpk: Siteuserpk): Siteuser => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SITEUSER },
      "siteuserpk": SiteuserJson.PKtoJSON(siteuserpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadSiteuser4siteusergroup = async (siteusergrouppk: Siteusergrouppk): Siteuser[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Siteusergroup },
     	"siteusergrouppk": SiteusergroupJson.PKtoJSON(siteusergrouppk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (siteusersearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": siteusersearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (siteusersearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": siteusersearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (siteuser: Siteuser) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_SITEUSER },
     	"siteuser": SiteuserJson.toJSON(siteuser)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (siteuser: Siteuser) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_SITEUSER },
     	"siteuser": SiteuserJson.toJSON(siteuser)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (siteuser: Siteuser) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_SITEUSER },
     	"siteuser": SiteuserJson.toJSON(siteuser)
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

	static sec_getOne = async (user, siteuserpk: Siteuserpk): Siteuser => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SITEUSER },
      "siteuserpk": SiteuserJson.PKtoJSON(siteuserpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadSiteuser4siteusergroup = async (user, siteusergrouppk: Siteusergrouppk): Siteuser[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Siteusergroup },
     	"siteusergrouppk": SiteusergroupJson.PKtoJSON(siteusergrouppk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, siteusersearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": siteusersearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, siteusersearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": siteusersearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, siteuser: Siteuser) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_SITEUSER },
     	"siteuser": SiteuserJson.toJSON(siteuser)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, siteuser: Siteuser) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_SITEUSER },
     	"siteuser": SiteuserJson.toJSON(siteuser)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, siteuser: Siteuser) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_SITEUSER },
     	"siteuser": SiteuserJson.toJSON(siteuser)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rssiteusersuper;
