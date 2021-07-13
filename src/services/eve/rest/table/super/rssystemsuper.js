//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in system.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 12.6.2021 13:57
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Systempk } from '../../../../../data/eve/table/super/systemsuper.js';
import System from '../../../../../data/eve/table/system.js';
import SystemJson from '../conversion/systemjson.js';
import { Securityislandpk } from '../../../../../data/eve/table/super/securityislandsuper.js';
import SecurityislandJson from '../conversion/securityislandjson.js';
import { Constellationpk } from '../../../../../data/eve/table/super/constellationsuper.js';
import ConstellationJson from '../conversion/constellationjson.js';
import { Systemjumpspk } from '../../../../../data/eve/table/super/systemjumpssuper.js';
import SystemjumpsJson from '../conversion/systemjumpsjson.js';
import { Routepk } from '../../../../../data/eve/table/super/routesuper.js';
import RouteJson from '../conversion/routejson.js';
import { Systemtradepk } from '../../../../../data/eve/table/super/systemtradesuper.js';
import SystemtradeJson from '../conversion/systemtradejson.js';


class Rssystemsuper extends Eveservice {	

	static restservice = 'rssystem';

	//SELECT OPERATIONS
	static SELECT_SYSTEM = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Securityisland = 100 + 0;
	static SELECT_Constellation = 100 + 1;
	static SELECT_Systemjumpssystemend = 100 + 2;
	static SELECT_Systemjumpssystemstart = 100 + 3;
	static SELECT_Route = 100 + 4;
	static SELECT_Systemtradesellsystem = 100 + 5;
	static SELECT_Systemtradebuysystem = 100 + 6;

	//UPDATE OPERATIONS
	static UPDATE_SYSTEM = 10;

	//INSERT OPERATIONS
	static INSERT_SYSTEM = 20;

	//DELETE OPERATIONS
	static DELETE_Securityisland = 100 + 7;
	static DELETE_Constellation = 100 + 8;
	static DELETE_SYSTEM = 30;

	static extractDataArray = (jsonarray): System[] => {
		let systems: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			systems.push(SystemJson.fromJSON(jsonarray[i]));
		}
   	return systems;
	}

	static extractDataObject = (jsonobject): System => {
    return SystemJson.fromJSON(jsonobject);
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

	static getOne = async (systempk: Systempk): System => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SYSTEM },
      "systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadSystems4securityisland = async (securityislandpk: Securityislandpk): System[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Securityisland },
     	"security_islandpk": SecurityislandJson.PKtoJSON(securityislandpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadSystems4constellation = async (constellationpk: Constellationpk): System[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Constellation },
     	"constellationpk": ConstellationJson.PKtoJSON(constellationpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadSystem4systemjumpsSystemend = async (systemjumpsSystemendpk: Systemjumpspk): System[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Systemjumpssystemend },
     	"systemjumpspk": SystemjumpsJson.PKtoJSON(systemjumpsSystemendpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadSystem4systemjumpsSystemstart = async (systemjumpsSystemstartpk: Systemjumpspk): System[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Systemjumpssystemstart },
     	"systemjumpspk": SystemjumpsJson.PKtoJSON(systemjumpsSystemstartpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadSystem4route = async (routepk: Routepk): System[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Route },
     	"routepk": RouteJson.PKtoJSON(routepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadSystem4systemtradeSellsystem = async (systemtradeSellsystempk: Systemtradepk): System[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Systemtradesellsystem },
     	"systemtradepk": SystemtradeJson.PKtoJSON(systemtradeSellsystempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadSystem4systemtradeBuysystem = async (systemtradeBuysystempk: Systemtradepk): System[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Systemtradebuysystem },
     	"systemtradepk": SystemtradeJson.PKtoJSON(systemtradeBuysystempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (systemsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": systemsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (systemsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": systemsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (system: System) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_SYSTEM },
     	"system": SystemJson.toJSON(system)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (system: System) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_SYSTEM },
     	"system": SystemJson.toJSON(system)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (system: System) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_SYSTEM },
     	"system": SystemJson.toJSON(system)
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

	static sec_getOne = async (user, systempk: Systempk): System => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SYSTEM },
      "systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadSystems4securityisland = async (user, securityislandpk: Systempk): System[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Securityisland },
     	"security_islandpk": SecurityislandJson.PKtoJSON(securityislandpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadSystems4constellation = async (user, constellationpk: Systempk): System[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Constellation },
     	"constellationpk": ConstellationJson.PKtoJSON(constellationpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadSystem4systemjumpsSystemend = async (user, systemjumpsSystemendpk: Systemjumpspk): System[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Systemjumpssystemend },
     	"systemjumpspk": SystemjumpsJson.PKtoJSON(systemjumpsSystemendpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadSystem4systemjumpsSystemstart = async (user, systemjumpsSystemstartpk: Systemjumpspk): System[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Systemjumpssystemstart },
     	"systemjumpspk": SystemjumpsJson.PKtoJSON(systemjumpsSystemstartpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadSystem4route = async (user, routepk: Routepk): System[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Route },
     	"routepk": RouteJson.PKtoJSON(routepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadSystem4systemtradeSellsystem = async (user, systemtradeSellsystempk: Systemtradepk): System[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Systemtradesellsystem },
     	"systemtradepk": SystemtradeJson.PKtoJSON(systemtradeSellsystempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadSystem4systemtradeBuysystem = async (user, systemtradeBuysystempk: Systemtradepk): System[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Systemtradebuysystem },
     	"systemtradepk": SystemtradeJson.PKtoJSON(systemtradeBuysystempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, systemsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": systemsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, systemsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": systemsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, system: System) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_SYSTEM },
     	"system": SystemJson.toJSON(system)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, system: System) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_SYSTEM },
     	"system": SystemJson.toJSON(system)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, system: System) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_SYSTEM },
     	"system": SystemJson.toJSON(system)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rssystemsuper;
