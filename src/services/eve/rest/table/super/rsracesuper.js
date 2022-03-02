//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2022 10:55
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Racepk } from '../../../../../data/eve/table/super/racesuper.js';
import Race from '../../../../../data/eve/table/race.js';
import RaceJson from '../conversion/racejson.js';
import { Factionpk } from '../../../../../data/eve/table/super/factionsuper.js';
import FactionJson from '../conversion/factionjson.js';


class Rsracesuper extends Eveservice {	

	static restservice = 'rsrace';

	//SELECT OPERATIONS
	static SELECT_RACE = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Faction = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_RACE = 10;

	//INSERT OPERATIONS
	static INSERT_RACE = 20;

	//DELETE OPERATIONS
	static DELETE_Faction = 100 + 1;
	static DELETE_RACE = 30;

	static extractDataArray = (jsonarray): Race[] => {
		let races: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			races.push(RaceJson.fromJSON(jsonarray[i]));
		}
   	return races;
	}

	static extractDataObject = (jsonobject): Race => {
    return RaceJson.fromJSON(jsonobject);
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

	static getOne = async (racepk: Racepk): Race => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_RACE },
      "racepk": RaceJson.PKtoJSON(racepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadRaces4faction = async (factionpk: Factionpk): Race[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Faction },
     	"factionpk": FactionJson.PKtoJSON(factionpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (racesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": racesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (racesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": racesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (race: Race) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_RACE },
     	"race": RaceJson.toJSON(race)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (race: Race) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_RACE },
     	"race": RaceJson.toJSON(race)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (race: Race) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_RACE },
     	"race": RaceJson.toJSON(race)
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

	static sec_getOne = async (user, racepk: Racepk): Race => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_RACE },
      "racepk": RaceJson.PKtoJSON(racepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadRaces4faction = async (user, factionpk: Racepk): Race[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Faction },
     	"factionpk": FactionJson.PKtoJSON(factionpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, racesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": racesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, racesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": racesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, race: Race) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_RACE },
     	"race": RaceJson.toJSON(race)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, race: Race) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_RACE },
     	"race": RaceJson.toJSON(race)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, race: Race) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_RACE },
     	"race": RaceJson.toJSON(race)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsracesuper;
