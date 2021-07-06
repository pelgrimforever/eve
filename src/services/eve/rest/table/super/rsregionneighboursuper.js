//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in regionneighbour.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 4.6.2021 14:41
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Regionneighbourpk } from '../../../../../data/eve/table/super/regionneighboursuper.js';
import Regionneighbour from '../../../../../data/eve/table/regionneighbour.js';
import RegionneighbourJson from '../conversion/regionneighbourjson.js';
import { Regionpk } from '../../../../../data/eve/table/super/regionsuper.js';
import RegionJson from '../conversion/regionjson.js';


class Rsregionneighboursuper extends Eveservice {	

	static restservice = 'rsregion_neighbour';

	//SELECT OPERATIONS
	static SELECT_REGIONNEIGHBOUR = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Regionregion = 100 + 0;
	static SELECT_Regionneighbour = 100 + 1;

	//UPDATE OPERATIONS
	static UPDATE_REGIONNEIGHBOUR = 10;

	//INSERT OPERATIONS
	static INSERT_REGIONNEIGHBOUR = 20;

	//DELETE OPERATIONS
	static DELETE_Regionregion = 100 + 2;
	static DELETE_Regionneighbour = 100 + 3;
	static DELETE_REGIONNEIGHBOUR = 30;

	static extractDataArray = (jsonarray): Regionneighbour[] => {
		let regionneighbours: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			regionneighbours.push(RegionneighbourJson.fromJSON(jsonarray[i]));
		}
   	return regionneighbours;
	}

	static extractDataObject = (jsonobject): Regionneighbour => {
    return RegionneighbourJson.fromJSON(jsonobject);
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

	static getOne = async (regionneighbourpk: Regionneighbourpk): Regionneighbour => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_REGIONNEIGHBOUR },
      "region_neighbourpk": RegionneighbourJson.PKtoJSON(regionneighbourpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadRegionneighbours4regionRegion = async (regionpk: Regionpk): Regionneighbour[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Regionregion },
     	"regionpk": RegionJson.PKtoJSON(regionpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadRegionneighbours4regionNeighbour = async (regionpk: Regionpk): Regionneighbour[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Regionneighbour },
     	"regionpk": RegionJson.PKtoJSON(regionpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (regionneighboursearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": regionneighboursearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (regionneighboursearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": regionneighboursearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (regionneighbour: Regionneighbour) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_REGIONNEIGHBOUR },
     	"regionneighbour": RegionneighbourJson.toJSON(regionneighbour)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (regionneighbour: Regionneighbour) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_REGIONNEIGHBOUR },
     	"region_neighbour": RegionneighbourJson.toJSON(regionneighbour)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (regionneighbour: Regionneighbour) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_REGIONNEIGHBOUR },
     	"region_neighbour": RegionneighbourJson.toJSON(regionneighbour)
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

	static sec_getOne = async (user, regionneighbourpk: Regionneighbourpk): Regionneighbour => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_REGIONNEIGHBOUR },
      "region_neighbourpk": RegionneighbourJson.PKtoJSON(regionneighbourpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadRegionneighbours4regionRegion = async (user, regionpk: Regionneighbourpk): Regionneighbour[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Regionregion },
     	"regionpk": RegionJson.PKtoJSON(regionpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadRegionneighbours4regionNeighbour = async (user, regionpk: Regionneighbourpk): Regionneighbour[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Regionneighbour },
     	"regionpk": RegionJson.PKtoJSON(regionpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, regionneighboursearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": regionneighboursearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, regionneighboursearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": regionneighboursearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, regionneighbour: Regionneighbour) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_REGIONNEIGHBOUR },
     	"region_neighbour": RegionneighbourJson.toJSON(regionneighbour)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, regionneighbour: Regionneighbour) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_REGIONNEIGHBOUR },
     	"region_neighbour": RegionneighbourJson.toJSON(regionneighbour)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, regionneighbour: Regionneighbour) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_REGIONNEIGHBOUR },
     	"region_neighbour": RegionneighbourJson.toJSON(regionneighbour)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsregionneighboursuper;
