//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 4.11.2021 14:51
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Constellationpk } from '../../../../../data/eve/table/super/constellationsuper.js';
import Constellation from '../../../../../data/eve/table/constellation.js';
import ConstellationJson from '../conversion/constellationjson.js';
import { Regionpk } from '../../../../../data/eve/table/super/regionsuper.js';
import RegionJson from '../conversion/regionjson.js';
import { Constellationneighbourpk } from '../../../../../data/eve/table/super/constellationneighboursuper.js';
import ConstellationneighbourJson from '../conversion/constellationneighbourjson.js';


class Rsconstellationsuper extends Eveservice {	

	static restservice = 'rsconstellation';

	//SELECT OPERATIONS
	static SELECT_CONSTELLATION = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Region = 100 + 0;
	static SELECT_Constellationneighbourneighbour = 100 + 1;
	static SELECT_Constellationneighbourconstellation = 100 + 2;

	//UPDATE OPERATIONS
	static UPDATE_CONSTELLATION = 10;

	//INSERT OPERATIONS
	static INSERT_CONSTELLATION = 20;

	//DELETE OPERATIONS
	static DELETE_Region = 100 + 3;
	static DELETE_CONSTELLATION = 30;

	static extractDataArray = (jsonarray): Constellation[] => {
		let constellations: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			constellations.push(ConstellationJson.fromJSON(jsonarray[i]));
		}
   	return constellations;
	}

	static extractDataObject = (jsonobject): Constellation => {
    return ConstellationJson.fromJSON(jsonobject);
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

	static getOne = async (constellationpk: Constellationpk): Constellation => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_CONSTELLATION },
      "constellationpk": ConstellationJson.PKtoJSON(constellationpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadConstellations4region = async (regionpk: Regionpk): Constellation[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Region },
     	"regionpk": RegionJson.PKtoJSON(regionpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadConstellation4constellationneighbourNeighbour = async (constellationneighbourNeighbourpk: Constellationneighbourpk): Constellation[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Constellationneighbourneighbour },
     	"constellation_neighbourpk": ConstellationneighbourJson.PKtoJSON(constellationneighbourNeighbourpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadConstellation4constellationneighbourConstellation = async (constellationneighbourConstellationpk: Constellationneighbourpk): Constellation[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Constellationneighbourconstellation },
     	"constellation_neighbourpk": ConstellationneighbourJson.PKtoJSON(constellationneighbourConstellationpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (constellationsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": constellationsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (constellationsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": constellationsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (constellation: Constellation) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_CONSTELLATION },
     	"constellation": ConstellationJson.toJSON(constellation)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (constellation: Constellation) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_CONSTELLATION },
     	"constellation": ConstellationJson.toJSON(constellation)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (constellation: Constellation) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_CONSTELLATION },
     	"constellation": ConstellationJson.toJSON(constellation)
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

	static sec_getOne = async (user, constellationpk: Constellationpk): Constellation => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_CONSTELLATION },
      "constellationpk": ConstellationJson.PKtoJSON(constellationpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadConstellations4region = async (user, regionpk: Constellationpk): Constellation[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Region },
     	"regionpk": RegionJson.PKtoJSON(regionpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadConstellation4constellationneighbourNeighbour = async (user, constellationneighbourNeighbourpk: Constellationneighbourpk): Constellation[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Constellationneighbourneighbour },
     	"constellation_neighbourpk": ConstellationneighbourJson.PKtoJSON(constellationneighbourNeighbourpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadConstellation4constellationneighbourConstellation = async (user, constellationneighbourConstellationpk: Constellationneighbourpk): Constellation[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Constellationneighbourconstellation },
     	"constellation_neighbourpk": ConstellationneighbourJson.PKtoJSON(constellationneighbourConstellationpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, constellationsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": constellationsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, constellationsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": constellationsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, constellation: Constellation) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_CONSTELLATION },
     	"constellation": ConstellationJson.toJSON(constellation)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, constellation: Constellation) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_CONSTELLATION },
     	"constellation": ConstellationJson.toJSON(constellation)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, constellation: Constellation) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_CONSTELLATION },
     	"constellation": ConstellationJson.toJSON(constellation)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsconstellationsuper;
