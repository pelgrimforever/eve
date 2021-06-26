//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in faction.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 23.5.2021 16:2
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Factionpk } from '../../../../../data/eve/table/super/factionsuper.js';
import Faction from '../../../../../data/eve/table/faction.js';
import FactionJson from '../conversion/factionjson.js';
import { Systempk } from '../../../../../data/eve/table/super/systemsuper.js';
import SystemJson from '../conversion/systemjson.js';


class Rsfactionsuper extends Eveservice {	

	static restservice = 'rsfaction';

	//SELECT OPERATIONS
	static SELECT_FACTION = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_System = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_FACTION = 10;

	//INSERT OPERATIONS
	static INSERT_FACTION = 20;

	//DELETE OPERATIONS
	static DELETE_System = 100 + 1;
	static DELETE_FACTION = 30;

	static extractDataArray = (jsonarray): Faction[] => {
		let factions: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			factions.push(FactionJson.fromJSON(jsonarray[i]));
		}
   	return factions;
	}

	static extractDataObject = (jsonobject): Faction => {
    return FactionJson.fromJSON(jsonobject);
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

	static getOne = async (factionpk: Factionpk): Faction => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_FACTION },
      "factionpk": FactionJson.PKtoJSON(factionpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadFactions4system = async (systempk: Systempk): Faction[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_System },
     	"systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (factionsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": factionsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (factionsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": factionsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (faction: Faction) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_FACTION },
     	"faction": FactionJson.toJSON(faction)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (faction: Faction) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_FACTION },
     	"faction": FactionJson.toJSON(faction)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (faction: Faction) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_FACTION },
     	"faction": FactionJson.toJSON(faction)
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

	static sec_getOne = async (user, factionpk: Factionpk): Faction => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_FACTION },
      "factionpk": FactionJson.PKtoJSON(factionpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadFactions4system = async (user, systempk: Factionpk): Faction[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_System },
     	"systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, factionsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": factionsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, factionsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": factionsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, faction: Faction) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_FACTION },
     	"faction": FactionJson.toJSON(faction)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, faction: Faction) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_FACTION },
     	"faction": FactionJson.toJSON(faction)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, faction: Faction) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_FACTION },
     	"faction": FactionJson.toJSON(faction)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsfactionsuper;
