//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 19.0.2022 22:13
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Settingspk } from '../../../../../data/eve/table/super/settingssuper.js';
import Settings from '../../../../../data/eve/table/settings.js';
import SettingsJson from '../conversion/settingsjson.js';
import { Usersettingspk } from '../../../../../data/eve/table/super/usersettingssuper.js';
import UsersettingsJson from '../conversion/usersettingsjson.js';


class Rssettingssuper extends Eveservice {	

	static restservice = 'rssettings';

	//SELECT OPERATIONS
	static SELECT_SETTINGS = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Usersettings = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_SETTINGS = 10;

	//INSERT OPERATIONS
	static INSERT_SETTINGS = 20;

	//DELETE OPERATIONS
	static DELETE_SETTINGS = 30;

	static extractDataArray = (jsonarray): Settings[] => {
		let settingss: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			settingss.push(SettingsJson.fromJSON(jsonarray[i]));
		}
   	return settingss;
	}

	static extractDataObject = (jsonobject): Settings => {
    return SettingsJson.fromJSON(jsonobject);
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

	static getOne = async (settingspk: Settingspk): Settings => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SETTINGS },
      "settingspk": SettingsJson.PKtoJSON(settingspk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadSettings4usersettings = async (usersettingspk: Usersettingspk): Settings[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Usersettings },
     	"usersettingspk": UsersettingsJson.PKtoJSON(usersettingspk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (settingssearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": settingssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (settingssearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": settingssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (settings: Settings) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_SETTINGS },
     	"settings": SettingsJson.toJSON(settings)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (settings: Settings) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_SETTINGS },
     	"settings": SettingsJson.toJSON(settings)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (settings: Settings) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_SETTINGS },
     	"settings": SettingsJson.toJSON(settings)
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

	static sec_getOne = async (user, settingspk: Settingspk): Settings => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SETTINGS },
      "settingspk": SettingsJson.PKtoJSON(settingspk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadSettings4usersettings = async (user, usersettingspk: Usersettingspk): Settings[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Usersettings },
     	"usersettingspk": UsersettingsJson.PKtoJSON(usersettingspk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, settingssearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": settingssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, settingssearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": settingssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, settings: Settings) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_SETTINGS },
     	"settings": SettingsJson.toJSON(settings)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, settings: Settings) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_SETTINGS },
     	"settings": SettingsJson.toJSON(settings)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, settings: Settings) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_SETTINGS },
     	"settings": SettingsJson.toJSON(settings)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rssettingssuper;
