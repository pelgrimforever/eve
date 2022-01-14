//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 14.0.2022 16:56
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Alliancepk } from '../../../../../data/eve/table/super/alliancesuper.js';
import Alliance from '../../../../../data/eve/table/alliance.js';
import AllianceJson from '../conversion/alliancejson.js';
import { Corporationpk } from '../../../../../data/eve/table/super/corporationsuper.js';
import CorporationJson from '../conversion/corporationjson.js';


class Rsalliancesuper extends Eveservice {	

	static restservice = 'rsalliance';

	//SELECT OPERATIONS
	static SELECT_ALLIANCE = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Corporationcreatorcorporation = 100 + 0;
	static SELECT_Corporationexecutorcorporation = 100 + 1;

	//UPDATE OPERATIONS
	static UPDATE_ALLIANCE = 10;

	//INSERT OPERATIONS
	static INSERT_ALLIANCE = 20;

	//DELETE OPERATIONS
	static DELETE_Corporationcreatorcorporation = 100 + 2;
	static DELETE_Corporationexecutorcorporation = 100 + 3;
	static DELETE_ALLIANCE = 30;

	static extractDataArray = (jsonarray): Alliance[] => {
		let alliances: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			alliances.push(AllianceJson.fromJSON(jsonarray[i]));
		}
   	return alliances;
	}

	static extractDataObject = (jsonobject): Alliance => {
    return AllianceJson.fromJSON(jsonobject);
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

	static getOne = async (alliancepk: Alliancepk): Alliance => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_ALLIANCE },
      "alliancepk": AllianceJson.PKtoJSON(alliancepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadAlliances4corporationCreatorcorporation = async (corporationpk: Corporationpk): Alliance[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Corporationcreatorcorporation },
     	"corporationpk": CorporationJson.PKtoJSON(corporationpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadAlliances4corporationExecutorcorporation = async (corporationpk: Corporationpk): Alliance[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Corporationexecutorcorporation },
     	"corporationpk": CorporationJson.PKtoJSON(corporationpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (alliancesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": alliancesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (alliancesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": alliancesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (alliance: Alliance) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_ALLIANCE },
     	"alliance": AllianceJson.toJSON(alliance)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (alliance: Alliance) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_ALLIANCE },
     	"alliance": AllianceJson.toJSON(alliance)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (alliance: Alliance) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_ALLIANCE },
     	"alliance": AllianceJson.toJSON(alliance)
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

	static sec_getOne = async (user, alliancepk: Alliancepk): Alliance => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_ALLIANCE },
      "alliancepk": AllianceJson.PKtoJSON(alliancepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadAlliances4corporationCreatorcorporation = async (user, corporationpk: Alliancepk): Alliance[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Corporationcreatorcorporation },
     	"corporationpk": CorporationJson.PKtoJSON(corporationpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadAlliances4corporationExecutorcorporation = async (user, corporationpk: Alliancepk): Alliance[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Corporationexecutorcorporation },
     	"corporationpk": CorporationJson.PKtoJSON(corporationpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, alliancesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": alliancesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, alliancesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": alliancesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, alliance: Alliance) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_ALLIANCE },
     	"alliance": AllianceJson.toJSON(alliance)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, alliance: Alliance) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_ALLIANCE },
     	"alliance": AllianceJson.toJSON(alliance)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, alliance: Alliance) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_ALLIANCE },
     	"alliance": AllianceJson.toJSON(alliance)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsalliancesuper;
