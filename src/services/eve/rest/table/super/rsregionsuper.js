//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in region.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 18.8.2021 11:31
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Regionpk } from '../../../../../data/eve/table/super/regionsuper.js';
import Region from '../../../../../data/eve/table/region.js';
import RegionJson from '../conversion/regionjson.js';
import { Orderhistorypk } from '../../../../../data/eve/table/super/orderhistorysuper.js';
import OrderhistoryJson from '../conversion/orderhistoryjson.js';
import { Regionneighbourpk } from '../../../../../data/eve/table/super/regionneighboursuper.js';
import RegionneighbourJson from '../conversion/regionneighbourjson.js';


class Rsregionsuper extends Eveservice {	

	static restservice = 'rsregion';

	//SELECT OPERATIONS
	static SELECT_REGION = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Orderhistory = 100 + 0;
	static SELECT_Regionneighbourregion = 100 + 1;
	static SELECT_Regionneighbourneighbour = 100 + 2;

	//UPDATE OPERATIONS
	static UPDATE_REGION = 10;

	//INSERT OPERATIONS
	static INSERT_REGION = 20;

	//DELETE OPERATIONS
	static DELETE_REGION = 30;

	static extractDataArray = (jsonarray): Region[] => {
		let regions: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			regions.push(RegionJson.fromJSON(jsonarray[i]));
		}
   	return regions;
	}

	static extractDataObject = (jsonobject): Region => {
    return RegionJson.fromJSON(jsonobject);
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

	static getOne = async (regionpk: Regionpk): Region => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_REGION },
      "regionpk": RegionJson.PKtoJSON(regionpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadRegion4orderhistory = async (orderhistorypk: Orderhistorypk): Region[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Orderhistory },
     	"order_historypk": OrderhistoryJson.PKtoJSON(orderhistorypk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadRegion4regionneighbourRegion = async (regionneighbourRegionpk: Regionneighbourpk): Region[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Regionneighbourregion },
     	"region_neighbourpk": RegionneighbourJson.PKtoJSON(regionneighbourRegionpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadRegion4regionneighbourNeighbour = async (regionneighbourNeighbourpk: Regionneighbourpk): Region[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Regionneighbourneighbour },
     	"region_neighbourpk": RegionneighbourJson.PKtoJSON(regionneighbourNeighbourpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (regionsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": regionsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (regionsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": regionsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (region: Region) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_REGION },
     	"region": RegionJson.toJSON(region)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (region: Region) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_REGION },
     	"region": RegionJson.toJSON(region)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (region: Region) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_REGION },
     	"region": RegionJson.toJSON(region)
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

	static sec_getOne = async (user, regionpk: Regionpk): Region => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_REGION },
      "regionpk": RegionJson.PKtoJSON(regionpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadRegion4orderhistory = async (user, orderhistorypk: Orderhistorypk): Region[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Orderhistory },
     	"order_historypk": OrderhistoryJson.PKtoJSON(orderhistorypk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadRegion4regionneighbourRegion = async (user, regionneighbourRegionpk: Regionneighbourpk): Region[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Regionneighbourregion },
     	"region_neighbourpk": RegionneighbourJson.PKtoJSON(regionneighbourRegionpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadRegion4regionneighbourNeighbour = async (user, regionneighbourNeighbourpk: Regionneighbourpk): Region[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Regionneighbourneighbour },
     	"region_neighbourpk": RegionneighbourJson.PKtoJSON(regionneighbourNeighbourpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, regionsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": regionsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, regionsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": regionsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, region: Region) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_REGION },
     	"region": RegionJson.toJSON(region)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, region: Region) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_REGION },
     	"region": RegionJson.toJSON(region)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, region: Region) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_REGION },
     	"region": RegionJson.toJSON(region)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsregionsuper;
