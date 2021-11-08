//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 24.9.2021 14:50
    Author     : Franky Laseure
*/

import Sitesecurityservice from '../../../../sitesecurityservice.js';
import { Siteusergrouppk } from '../../../../../data/sitesecurity/table/super/siteusergroupsuper.js';
import Siteusergroup from '../../../../../data/sitesecurity/table/siteusergroup.js';
import SiteusergroupJson from '../conversion/siteusergroupjson.js';
import { Siteuserpk } from '../../../../../data/sitesecurity/table/super/siteusersuper.js';
import SiteuserJson from '../conversion/siteuserjson.js';
import { Sitegrouppk } from '../../../../../data/sitesecurity/table/super/sitegroupsuper.js';
import SitegroupJson from '../conversion/sitegroupjson.js';


class Rssiteusergroupsuper extends Sitesecurityservice {	

	static restservice = 'rssiteusergroup';

	//SELECT OPERATIONS
	static SELECT_SITEUSERGROUP = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Siteuser = 100 + 0;
	static SELECT_Sitegroup = 100 + 1;

	//UPDATE OPERATIONS
	static UPDATE_SITEUSERGROUP = 10;

	//INSERT OPERATIONS
	static INSERT_SITEUSERGROUP = 20;

	//DELETE OPERATIONS
	static DELETE_Siteuser = 100 + 2;
	static DELETE_Sitegroup = 100 + 3;
	static DELETE_SITEUSERGROUP = 30;

	static extractDataArray = (jsonarray): Siteusergroup[] => {
		let siteusergroups: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			siteusergroups.push(SiteusergroupJson.fromJSON(jsonarray[i]));
		}
   	return siteusergroups;
	}

	static extractDataObject = (jsonobject): Siteusergroup => {
    return SiteusergroupJson.fromJSON(jsonobject);
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

	static getOne = async (siteusergrouppk: Siteusergrouppk): Siteusergroup => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SITEUSERGROUP },
      "siteusergrouppk": SiteusergroupJson.PKtoJSON(siteusergrouppk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadSiteusergroups4siteuser = async (siteuserpk: Siteuserpk): Siteusergroup[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Siteuser },
     	"siteuserpk": SiteuserJson.PKtoJSON(siteuserpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadSiteusergroups4sitegroup = async (sitegrouppk: Sitegrouppk): Siteusergroup[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Sitegroup },
     	"sitegrouppk": SitegroupJson.PKtoJSON(sitegrouppk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (siteusergroupsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": siteusergroupsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (siteusergroupsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": siteusergroupsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (siteusergroup: Siteusergroup) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_SITEUSERGROUP },
     	"siteusergroup": SiteusergroupJson.toJSON(siteusergroup)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (siteusergroup: Siteusergroup) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_SITEUSERGROUP },
     	"siteusergroup": SiteusergroupJson.toJSON(siteusergroup)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (siteusergroup: Siteusergroup) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_SITEUSERGROUP },
     	"siteusergroup": SiteusergroupJson.toJSON(siteusergroup)
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

	static sec_getOne = async (user, siteusergrouppk: Siteusergrouppk): Siteusergroup => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SITEUSERGROUP },
      "siteusergrouppk": SiteusergroupJson.PKtoJSON(siteusergrouppk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadSiteusergroups4siteuser = async (user, siteuserpk: Siteusergrouppk): Siteusergroup[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Siteuser },
     	"siteuserpk": SiteuserJson.PKtoJSON(siteuserpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadSiteusergroups4sitegroup = async (user, sitegrouppk: Siteusergrouppk): Siteusergroup[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Sitegroup },
     	"sitegrouppk": SitegroupJson.PKtoJSON(sitegrouppk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, siteusergroupsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": siteusergroupsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, siteusergroupsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": siteusergroupsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, siteusergroup: Siteusergroup) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_SITEUSERGROUP },
     	"siteusergroup": SiteusergroupJson.toJSON(siteusergroup)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, siteusergroup: Siteusergroup) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_SITEUSERGROUP },
     	"siteusergroup": SiteusergroupJson.toJSON(siteusergroup)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, siteusergroup: Siteusergroup) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_SITEUSERGROUP },
     	"siteusergroup": SiteusergroupJson.toJSON(siteusergroup)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rssiteusergroupsuper;
