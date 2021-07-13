//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in constellationneighbour.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 12.6.2021 13:57
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Constellationneighbourpk } from '../../../../../data/eve/table/super/constellationneighboursuper.js';
import Constellationneighbour from '../../../../../data/eve/table/constellationneighbour.js';
import ConstellationneighbourJson from '../conversion/constellationneighbourjson.js';
import { Constellationpk } from '../../../../../data/eve/table/super/constellationsuper.js';
import ConstellationJson from '../conversion/constellationjson.js';


class Rsconstellationneighboursuper extends Eveservice {	

	static restservice = 'rsconstellation_neighbour';

	//SELECT OPERATIONS
	static SELECT_CONSTELLATIONNEIGHBOUR = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Constellationneighbour = 100 + 0;
	static SELECT_Constellationconstellation = 100 + 1;

	//UPDATE OPERATIONS
	static UPDATE_CONSTELLATIONNEIGHBOUR = 10;

	//INSERT OPERATIONS
	static INSERT_CONSTELLATIONNEIGHBOUR = 20;

	//DELETE OPERATIONS
	static DELETE_Constellationneighbour = 100 + 2;
	static DELETE_Constellationconstellation = 100 + 3;
	static DELETE_CONSTELLATIONNEIGHBOUR = 30;

	static extractDataArray = (jsonarray): Constellationneighbour[] => {
		let constellationneighbours: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			constellationneighbours.push(ConstellationneighbourJson.fromJSON(jsonarray[i]));
		}
   	return constellationneighbours;
	}

	static extractDataObject = (jsonobject): Constellationneighbour => {
    return ConstellationneighbourJson.fromJSON(jsonobject);
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

	static getOne = async (constellationneighbourpk: Constellationneighbourpk): Constellationneighbour => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_CONSTELLATIONNEIGHBOUR },
      "constellation_neighbourpk": ConstellationneighbourJson.PKtoJSON(constellationneighbourpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadConstellationneighbours4constellationNeighbour = async (constellationpk: Constellationpk): Constellationneighbour[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Constellationneighbour },
     	"constellationpk": ConstellationJson.PKtoJSON(constellationpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadConstellationneighbours4constellationConstellation = async (constellationpk: Constellationpk): Constellationneighbour[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Constellationconstellation },
     	"constellationpk": ConstellationJson.PKtoJSON(constellationpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (constellationneighboursearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": constellationneighboursearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (constellationneighboursearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": constellationneighboursearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (constellationneighbour: Constellationneighbour) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_CONSTELLATIONNEIGHBOUR },
     	"constellationneighbour": ConstellationneighbourJson.toJSON(constellationneighbour)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (constellationneighbour: Constellationneighbour) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_CONSTELLATIONNEIGHBOUR },
     	"constellation_neighbour": ConstellationneighbourJson.toJSON(constellationneighbour)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (constellationneighbour: Constellationneighbour) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_CONSTELLATIONNEIGHBOUR },
     	"constellation_neighbour": ConstellationneighbourJson.toJSON(constellationneighbour)
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

	static sec_getOne = async (user, constellationneighbourpk: Constellationneighbourpk): Constellationneighbour => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_CONSTELLATIONNEIGHBOUR },
      "constellation_neighbourpk": ConstellationneighbourJson.PKtoJSON(constellationneighbourpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadConstellationneighbours4constellationNeighbour = async (user, constellationpk: Constellationneighbourpk): Constellationneighbour[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Constellationneighbour },
     	"constellationpk": ConstellationJson.PKtoJSON(constellationpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadConstellationneighbours4constellationConstellation = async (user, constellationpk: Constellationneighbourpk): Constellationneighbour[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Constellationconstellation },
     	"constellationpk": ConstellationJson.PKtoJSON(constellationpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, constellationneighboursearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": constellationneighboursearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, constellationneighboursearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": constellationneighboursearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, constellationneighbour: Constellationneighbour) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_CONSTELLATIONNEIGHBOUR },
     	"constellation_neighbour": ConstellationneighbourJson.toJSON(constellationneighbour)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, constellationneighbour: Constellationneighbour) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_CONSTELLATIONNEIGHBOUR },
     	"constellation_neighbour": ConstellationneighbourJson.toJSON(constellationneighbour)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, constellationneighbour: Constellationneighbour) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_CONSTELLATIONNEIGHBOUR },
     	"constellation_neighbour": ConstellationneighbourJson.toJSON(constellationneighbour)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsconstellationneighboursuper;
