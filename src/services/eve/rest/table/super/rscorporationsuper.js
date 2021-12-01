//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 30.10.2021 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Corporationpk } from '../../../../../data/eve/table/super/corporationsuper.js';
import Corporation from '../../../../../data/eve/table/corporation.js';
import CorporationJson from '../conversion/corporationjson.js';
import { Stationpk } from '../../../../../data/eve/table/super/stationsuper.js';
import StationJson from '../conversion/stationjson.js';
import { Factionpk } from '../../../../../data/eve/table/super/factionsuper.js';
import FactionJson from '../conversion/factionjson.js';
import { Alliancepk } from '../../../../../data/eve/table/super/alliancesuper.js';
import AllianceJson from '../conversion/alliancejson.js';


class Rscorporationsuper extends Eveservice {	

	static restservice = 'rscorporation';

	//SELECT OPERATIONS
	static SELECT_CORPORATION = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Station = 100 + 0;
	static SELECT_Faction = 100 + 1;
	static SELECT_Alliance = 100 + 2;

	//UPDATE OPERATIONS
	static UPDATE_CORPORATION = 10;

	//INSERT OPERATIONS
	static INSERT_CORPORATION = 20;

	//DELETE OPERATIONS
	static DELETE_Station = 100 + 3;
	static DELETE_Faction = 100 + 4;
	static DELETE_Alliance = 100 + 5;
	static DELETE_CORPORATION = 30;

	static extractDataArray = (jsonarray): Corporation[] => {
		let corporations: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			corporations.push(CorporationJson.fromJSON(jsonarray[i]));
		}
   	return corporations;
	}

	static extractDataObject = (jsonobject): Corporation => {
    return CorporationJson.fromJSON(jsonobject);
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

	static getOne = async (corporationpk: Corporationpk): Corporation => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_CORPORATION },
      "corporationpk": CorporationJson.PKtoJSON(corporationpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadCorporations4station = async (stationpk: Stationpk): Corporation[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Station },
     	"stationpk": StationJson.PKtoJSON(stationpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadCorporations4faction = async (factionpk: Factionpk): Corporation[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Faction },
     	"factionpk": FactionJson.PKtoJSON(factionpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadCorporations4alliance = async (alliancepk: Alliancepk): Corporation[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Alliance },
     	"alliancepk": AllianceJson.PKtoJSON(alliancepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (corporationsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": corporationsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (corporationsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": corporationsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (corporation: Corporation) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_CORPORATION },
     	"corporation": CorporationJson.toJSON(corporation)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (corporation: Corporation) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_CORPORATION },
     	"corporation": CorporationJson.toJSON(corporation)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (corporation: Corporation) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_CORPORATION },
     	"corporation": CorporationJson.toJSON(corporation)
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

	static sec_getOne = async (user, corporationpk: Corporationpk): Corporation => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_CORPORATION },
      "corporationpk": CorporationJson.PKtoJSON(corporationpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadCorporations4station = async (user, stationpk: Corporationpk): Corporation[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Station },
     	"stationpk": StationJson.PKtoJSON(stationpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadCorporations4faction = async (user, factionpk: Corporationpk): Corporation[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Faction },
     	"factionpk": FactionJson.PKtoJSON(factionpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadCorporations4alliance = async (user, alliancepk: Corporationpk): Corporation[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Alliance },
     	"alliancepk": AllianceJson.PKtoJSON(alliancepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, corporationsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": corporationsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, corporationsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": corporationsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, corporation: Corporation) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_CORPORATION },
     	"corporation": CorporationJson.toJSON(corporation)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, corporation: Corporation) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_CORPORATION },
     	"corporation": CorporationJson.toJSON(corporation)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, corporation: Corporation) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_CORPORATION },
     	"corporation": CorporationJson.toJSON(corporation)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rscorporationsuper;
