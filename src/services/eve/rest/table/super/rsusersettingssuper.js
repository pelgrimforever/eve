//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 8.10.2021 7:21
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Usersettingspk } from '../../../../../data/eve/table/super/usersettingssuper.js';
import Usersettings from '../../../../../data/eve/table/usersettings.js';
import UsersettingsJson from '../conversion/usersettingsjson.js';
import { Settingspk } from '../../../../../data/eve/table/super/settingssuper.js';
import SettingsJson from '../conversion/settingsjson.js';


class Rsusersettingssuper extends Eveservice {	

	static restservice = 'rsusersettings';

	//SELECT OPERATIONS
	static SELECT_USERSETTINGS = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Settings = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_USERSETTINGS = 10;

	//INSERT OPERATIONS
	static INSERT_USERSETTINGS = 20;

	//DELETE OPERATIONS
	static DELETE_Settings = 100 + 1;
	static DELETE_USERSETTINGS = 30;

	static extractDataArray = (jsonarray): Usersettings[] => {
		let usersettingss: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			usersettingss.push(UsersettingsJson.fromJSON(jsonarray[i]));
		}
   	return usersettingss;
	}

	static extractDataObject = (jsonobject): Usersettings => {
    return UsersettingsJson.fromJSON(jsonobject);
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

	static getOne = async (usersettingspk: Usersettingspk): Usersettings => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_USERSETTINGS },
      "usersettingspk": UsersettingsJson.PKtoJSON(usersettingspk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadUsersettingss4settings = async (settingspk: Settingspk): Usersettings[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Settings },
     	"settingspk": SettingsJson.PKtoJSON(settingspk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (usersettingssearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": usersettingssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (usersettingssearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": usersettingssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (usersettings: Usersettings) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_USERSETTINGS },
     	"usersettings": UsersettingsJson.toJSON(usersettings)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (usersettings: Usersettings) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_USERSETTINGS },
     	"usersettings": UsersettingsJson.toJSON(usersettings)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (usersettings: Usersettings) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_USERSETTINGS },
     	"usersettings": UsersettingsJson.toJSON(usersettings)
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

	static sec_getOne = async (user, usersettingspk: Usersettingspk): Usersettings => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_USERSETTINGS },
      "usersettingspk": UsersettingsJson.PKtoJSON(usersettingspk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadUsersettingss4settings = async (user, settingspk: Usersettingspk): Usersettings[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Settings },
     	"settingspk": SettingsJson.PKtoJSON(settingspk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, usersettingssearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": usersettingssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, usersettingssearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": usersettingssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, usersettings: Usersettings) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_USERSETTINGS },
     	"usersettings": UsersettingsJson.toJSON(usersettings)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, usersettings: Usersettings) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_USERSETTINGS },
     	"usersettings": UsersettingsJson.toJSON(usersettings)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, usersettings: Usersettings) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_USERSETTINGS },
     	"usersettings": UsersettingsJson.toJSON(usersettings)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsusersettingssuper;
