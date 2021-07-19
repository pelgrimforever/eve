//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in routetype.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 18.6.2021 14:35
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Routetypepk } from '../../../../../data/eve/table/super/routetypesuper.js';
import Routetype from '../../../../../data/eve/table/routetype.js';
import RoutetypeJson from '../conversion/routetypejson.js';
import { Securityislandpk } from '../../../../../data/eve/table/super/securityislandsuper.js';
import SecurityislandJson from '../conversion/securityislandjson.js';
import { Routepk } from '../../../../../data/eve/table/super/routesuper.js';
import RouteJson from '../conversion/routejson.js';


class Rsroutetypesuper extends Eveservice {	

	static restservice = 'rsroutetype';

	//SELECT OPERATIONS
	static SELECT_ROUTETYPE = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Securityisland = 100 + 0;
	static SELECT_Route = 100 + 1;

	//UPDATE OPERATIONS
	static UPDATE_ROUTETYPE = 10;

	//INSERT OPERATIONS
	static INSERT_ROUTETYPE = 20;

	//DELETE OPERATIONS
	static DELETE_Securityisland = 100 + 2;
	static DELETE_ROUTETYPE = 30;

	static extractDataArray = (jsonarray): Routetype[] => {
		let routetypes: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			routetypes.push(RoutetypeJson.fromJSON(jsonarray[i]));
		}
   	return routetypes;
	}

	static extractDataObject = (jsonobject): Routetype => {
    return RoutetypeJson.fromJSON(jsonobject);
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

	static getOne = async (routetypepk: Routetypepk): Routetype => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_ROUTETYPE },
      "routetypepk": RoutetypeJson.PKtoJSON(routetypepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadRoutetypes4securityisland = async (securityislandpk: Securityislandpk): Routetype[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Securityisland },
     	"security_islandpk": SecurityislandJson.PKtoJSON(securityislandpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadRoutetype4route = async (routepk: Routepk): Routetype[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Route },
     	"routepk": RouteJson.PKtoJSON(routepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (routetypesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": routetypesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (routetypesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": routetypesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (routetype: Routetype) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_ROUTETYPE },
     	"routetype": RoutetypeJson.toJSON(routetype)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (routetype: Routetype) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_ROUTETYPE },
     	"routetype": RoutetypeJson.toJSON(routetype)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (routetype: Routetype) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_ROUTETYPE },
     	"routetype": RoutetypeJson.toJSON(routetype)
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

	static sec_getOne = async (user, routetypepk: Routetypepk): Routetype => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_ROUTETYPE },
      "routetypepk": RoutetypeJson.PKtoJSON(routetypepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadRoutetypes4securityisland = async (user, securityislandpk: Routetypepk): Routetype[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Securityisland },
     	"security_islandpk": SecurityislandJson.PKtoJSON(securityislandpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadRoutetype4route = async (user, routepk: Routepk): Routetype[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Route },
     	"routepk": RouteJson.PKtoJSON(routepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, routetypesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": routetypesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, routetypesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": routetypesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, routetype: Routetype) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_ROUTETYPE },
     	"routetype": RoutetypeJson.toJSON(routetype)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, routetype: Routetype) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_ROUTETYPE },
     	"routetype": RoutetypeJson.toJSON(routetype)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, routetype: Routetype) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_ROUTETYPE },
     	"routetype": RoutetypeJson.toJSON(routetype)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsroutetypesuper;
