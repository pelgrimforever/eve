//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2022 10:55
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Syssettingspk } from '../../../../../data/eve/table/super/syssettingssuper.js';
import Syssettings from '../../../../../data/eve/table/syssettings.js';
import SyssettingsJson from '../conversion/syssettingsjson.js';


class Rssyssettingssuper extends Eveservice {	

	static restservice = 'rssyssettings';

	//SELECT OPERATIONS
	static SELECT_SYSSETTINGS = 2;
	static SELECT_Siteusergroup = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_SYSSETTINGS = 10;

	//INSERT OPERATIONS
	static INSERT_SYSSETTINGS = 20;

	//DELETE OPERATIONS
	static DELETE_SYSSETTINGS = 30;

	static extractDataArray = (jsonarray): Syssettings[] => {
		let syssettingss: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			syssettingss.push(SyssettingsJson.fromJSON(jsonarray[i]));
		}
   	return syssettingss;
	}

	static extractDataObject = (jsonobject): Syssettings => {
    return SyssettingsJson.fromJSON(jsonobject);
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

	static getOne = async (syssettingspk: Syssettingspk): Syssettings => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SYSSETTINGS },
      "syssettingspk": SyssettingsJson.PKtoJSON(syssettingspk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static search = async (syssettingssearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": syssettingssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (syssettingssearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": syssettingssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (syssettings: Syssettings) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_SYSSETTINGS },
     	"syssettings": SyssettingsJson.toJSON(syssettings)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (syssettings: Syssettings) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_SYSSETTINGS },
     	"syssettings": SyssettingsJson.toJSON(syssettings)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (syssettings: Syssettings) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_SYSSETTINGS },
     	"syssettings": SyssettingsJson.toJSON(syssettings)
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

	static sec_getOne = async (user, syssettingspk: Syssettingspk): Syssettings => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SYSSETTINGS },
      "syssettingspk": SyssettingsJson.PKtoJSON(syssettingspk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, syssettingssearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": syssettingssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, syssettingssearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": syssettingssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, syssettings: Syssettings) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_SYSSETTINGS },
     	"syssettings": SyssettingsJson.toJSON(syssettings)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, syssettings: Syssettings) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_SYSSETTINGS },
     	"syssettings": SyssettingsJson.toJSON(syssettings)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, syssettings: Syssettings) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_SYSSETTINGS },
     	"syssettings": SyssettingsJson.toJSON(syssettings)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rssyssettingssuper;
