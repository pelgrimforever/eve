//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in sitegroup.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 14.5.2021 13:42
    Author     : Franky Laseure
*/

import Sitesecurityservice from '../../../../sitesecurityservice.js';
import { Sitegrouppk } from '../../../../../data/sitesecurity/table/super/sitegroupsuper.js';
import Sitegroup from '../../../../../data/sitesecurity/table/sitegroup.js';
import SitegroupJson from '../conversion/sitegroupjson.js';
import { Siteusergrouppk } from '../../../../../data/sitesecurity/table/super/siteusergroupsuper.js';
import SiteusergroupJson from '../conversion/siteusergroupjson.js';


class Rssitegroupsuper extends Sitesecurityservice {	

	static restservice = 'rssitegroup';

	//SELECT OPERATIONS
	static SELECT_SITEGROUP = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Siteusergroup = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_SITEGROUP = 10;

	//INSERT OPERATIONS
	static INSERT_SITEGROUP = 20;

	//DELETE OPERATIONS
	static DELETE_SITEGROUP = 30;

	static extractDataArray = (jsonarray): Sitegroup[] => {
		let sitegroups: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			sitegroups.push(SitegroupJson.fromJSON(jsonarray[i]));
		}
   	return sitegroups;
	}

	static extractDataObject = (jsonobject): Sitegroup => {
    return SitegroupJson.fromJSON(jsonobject);
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

	static getOne = async (sitegrouppk: Sitegrouppk): Sitegroup => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SITEGROUP },
      "sitegrouppk": SitegroupJson.PKtoJSON(sitegrouppk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadSitegroup4siteusergroup = async (siteusergrouppk: Siteusergrouppk): Sitegroup[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Siteusergroup },
     	"siteusergrouppk": SiteusergroupJson.PKtoJSON(siteusergrouppk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (sitegroupsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": sitegroupsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (sitegroupsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": sitegroupsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (sitegroup: Sitegroup) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_SITEGROUP },
     	"sitegroup": SitegroupJson.toJSON(sitegroup)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (sitegroup: Sitegroup) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_SITEGROUP },
     	"sitegroup": SitegroupJson.toJSON(sitegroup)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (sitegroup: Sitegroup) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_SITEGROUP },
     	"sitegroup": SitegroupJson.toJSON(sitegroup)
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

	static sec_getOne = async (user, sitegrouppk: Sitegrouppk): Sitegroup => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SITEGROUP },
      "sitegrouppk": SitegroupJson.PKtoJSON(sitegrouppk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadSitegroup4siteusergroup = async (user, siteusergrouppk: Siteusergrouppk): Sitegroup[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Siteusergroup },
     	"siteusergrouppk": SiteusergroupJson.PKtoJSON(siteusergrouppk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, sitegroupsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": sitegroupsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, sitegroupsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": sitegroupsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, sitegroup: Sitegroup) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_SITEGROUP },
     	"sitegroup": SitegroupJson.toJSON(sitegroup)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, sitegroup: Sitegroup) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_SITEGROUP },
     	"sitegroup": SitegroupJson.toJSON(sitegroup)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, sitegroup: Sitegroup) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_SITEGROUP },
     	"sitegroup": SitegroupJson.toJSON(sitegroup)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rssitegroupsuper;
