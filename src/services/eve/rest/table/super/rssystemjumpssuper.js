//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 14.0.2022 16:56
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Systemjumpspk } from '../../../../../data/eve/table/super/systemjumpssuper.js';
import Systemjumps from '../../../../../data/eve/table/systemjumps.js';
import SystemjumpsJson from '../conversion/systemjumpsjson.js';
import { Systempk } from '../../../../../data/eve/table/super/systemsuper.js';
import SystemJson from '../conversion/systemjson.js';


class Rssystemjumpssuper extends Eveservice {	

	static restservice = 'rssystemjumps';

	//SELECT OPERATIONS
	static SELECT_SYSTEMJUMPS = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Systemsystemend = 100 + 0;
	static SELECT_Systemsystemstart = 100 + 1;

	//UPDATE OPERATIONS
	static UPDATE_SYSTEMJUMPS = 10;

	//INSERT OPERATIONS
	static INSERT_SYSTEMJUMPS = 20;

	//DELETE OPERATIONS
	static DELETE_Systemsystemend = 100 + 2;
	static DELETE_Systemsystemstart = 100 + 3;
	static DELETE_SYSTEMJUMPS = 30;

	static extractDataArray = (jsonarray): Systemjumps[] => {
		let systemjumpss: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			systemjumpss.push(SystemjumpsJson.fromJSON(jsonarray[i]));
		}
   	return systemjumpss;
	}

	static extractDataObject = (jsonobject): Systemjumps => {
    return SystemjumpsJson.fromJSON(jsonobject);
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

	static getOne = async (systemjumpspk: Systemjumpspk): Systemjumps => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SYSTEMJUMPS },
      "systemjumpspk": SystemjumpsJson.PKtoJSON(systemjumpspk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadSystemjumpss4systemSystemend = async (systempk: Systempk): Systemjumps[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Systemsystemend },
     	"systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadSystemjumpss4systemSystemstart = async (systempk: Systempk): Systemjumps[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Systemsystemstart },
     	"systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (systemjumpssearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": systemjumpssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (systemjumpssearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": systemjumpssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (systemjumps: Systemjumps) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_SYSTEMJUMPS },
     	"systemjumps": SystemjumpsJson.toJSON(systemjumps)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (systemjumps: Systemjumps) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_SYSTEMJUMPS },
     	"systemjumps": SystemjumpsJson.toJSON(systemjumps)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (systemjumps: Systemjumps) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_SYSTEMJUMPS },
     	"systemjumps": SystemjumpsJson.toJSON(systemjumps)
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

	static sec_getOne = async (user, systemjumpspk: Systemjumpspk): Systemjumps => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SYSTEMJUMPS },
      "systemjumpspk": SystemjumpsJson.PKtoJSON(systemjumpspk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadSystemjumpss4systemSystemend = async (user, systempk: Systemjumpspk): Systemjumps[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Systemsystemend },
     	"systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadSystemjumpss4systemSystemstart = async (user, systempk: Systemjumpspk): Systemjumps[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Systemsystemstart },
     	"systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, systemjumpssearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": systemjumpssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, systemjumpssearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": systemjumpssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, systemjumps: Systemjumps) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_SYSTEMJUMPS },
     	"systemjumps": SystemjumpsJson.toJSON(systemjumps)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, systemjumps: Systemjumps) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_SYSTEMJUMPS },
     	"systemjumps": SystemjumpsJson.toJSON(systemjumps)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, systemjumps: Systemjumps) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_SYSTEMJUMPS },
     	"systemjumps": SystemjumpsJson.toJSON(systemjumps)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rssystemjumpssuper;
