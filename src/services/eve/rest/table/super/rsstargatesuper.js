//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 30.10.2021 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Stargatepk } from '../../../../../data/eve/table/super/stargatesuper.js';
import Stargate from '../../../../../data/eve/table/stargate.js';
import StargateJson from '../conversion/stargatejson.js';
import { Systempk } from '../../../../../data/eve/table/super/systemsuper.js';
import SystemJson from '../conversion/systemjson.js';


class Rsstargatesuper extends Eveservice {	

	static restservice = 'rsstargate';

	//SELECT OPERATIONS
	static SELECT_STARGATE = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Systemsystem = 100 + 0;
	static SELECT_Systemtosystem = 100 + 1;

	//UPDATE OPERATIONS
	static UPDATE_STARGATE = 10;

	//INSERT OPERATIONS
	static INSERT_STARGATE = 20;

	//DELETE OPERATIONS
	static DELETE_Systemsystem = 100 + 2;
	static DELETE_Systemtosystem = 100 + 3;
	static DELETE_STARGATE = 30;

	static extractDataArray = (jsonarray): Stargate[] => {
		let stargates: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			stargates.push(StargateJson.fromJSON(jsonarray[i]));
		}
   	return stargates;
	}

	static extractDataObject = (jsonobject): Stargate => {
    return StargateJson.fromJSON(jsonobject);
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

	static getOne = async (stargatepk: Stargatepk): Stargate => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_STARGATE },
      "stargatepk": StargateJson.PKtoJSON(stargatepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadStargates4systemSystem = async (systempk: Systempk): Stargate[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Systemsystem },
     	"systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadStargates4systemTosystem = async (systempk: Systempk): Stargate[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Systemtosystem },
     	"systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (stargatesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": stargatesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (stargatesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": stargatesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (stargate: Stargate) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_STARGATE },
     	"stargate": StargateJson.toJSON(stargate)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (stargate: Stargate) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_STARGATE },
     	"stargate": StargateJson.toJSON(stargate)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (stargate: Stargate) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_STARGATE },
     	"stargate": StargateJson.toJSON(stargate)
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

	static sec_getOne = async (user, stargatepk: Stargatepk): Stargate => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_STARGATE },
      "stargatepk": StargateJson.PKtoJSON(stargatepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadStargates4systemSystem = async (user, systempk: Stargatepk): Stargate[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Systemsystem },
     	"systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadStargates4systemTosystem = async (user, systempk: Stargatepk): Stargate[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Systemtosystem },
     	"systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, stargatesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": stargatesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, stargatesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": stargatesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, stargate: Stargate) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_STARGATE },
     	"stargate": StargateJson.toJSON(stargate)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, stargate: Stargate) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_STARGATE },
     	"stargate": StargateJson.toJSON(stargate)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, stargate: Stargate) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_STARGATE },
     	"stargate": StargateJson.toJSON(stargate)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsstargatesuper;
