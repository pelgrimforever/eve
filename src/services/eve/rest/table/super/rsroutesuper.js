//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 4.11.2021 14:51
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Routepk } from '../../../../../data/eve/table/super/routesuper.js';
import Route from '../../../../../data/eve/table/route.js';
import RouteJson from '../conversion/routejson.js';
import { Routetypepk } from '../../../../../data/eve/table/super/routetypesuper.js';
import RoutetypeJson from '../conversion/routetypejson.js';
import { Systempk } from '../../../../../data/eve/table/super/systemsuper.js';
import SystemJson from '../conversion/systemjson.js';


class Rsroutesuper extends Eveservice {	

	static restservice = 'rsroute';

	//SELECT OPERATIONS
	static SELECT_ROUTE = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Routetype = 100 + 0;
	static SELECT_System = 100 + 1;

	//UPDATE OPERATIONS
	static UPDATE_ROUTE = 10;

	//INSERT OPERATIONS
	static INSERT_ROUTE = 20;

	//DELETE OPERATIONS
	static DELETE_Routetype = 100 + 2;
	static DELETE_System = 100 + 3;
	static DELETE_ROUTE = 30;

	static extractDataArray = (jsonarray): Route[] => {
		let routes: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			routes.push(RouteJson.fromJSON(jsonarray[i]));
		}
   	return routes;
	}

	static extractDataObject = (jsonobject): Route => {
    return RouteJson.fromJSON(jsonobject);
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

	static getOne = async (routepk: Routepk): Route => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_ROUTE },
      "routepk": RouteJson.PKtoJSON(routepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadRoutes4routetype = async (routetypepk: Routetypepk): Route[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Routetype },
     	"routetypepk": RoutetypeJson.PKtoJSON(routetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadRoutes4system = async (systempk: Systempk): Route[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_System },
     	"systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (routesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": routesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (routesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": routesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (route: Route) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_ROUTE },
     	"route": RouteJson.toJSON(route)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (route: Route) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_ROUTE },
     	"route": RouteJson.toJSON(route)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (route: Route) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_ROUTE },
     	"route": RouteJson.toJSON(route)
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

	static sec_getOne = async (user, routepk: Routepk): Route => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_ROUTE },
      "routepk": RouteJson.PKtoJSON(routepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadRoutes4routetype = async (user, routetypepk: Routepk): Route[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Routetype },
     	"routetypepk": RoutetypeJson.PKtoJSON(routetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadRoutes4system = async (user, systempk: Routepk): Route[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_System },
     	"systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, routesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": routesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, routesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": routesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, route: Route) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_ROUTE },
     	"route": RouteJson.toJSON(route)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, route: Route) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_ROUTE },
     	"route": RouteJson.toJSON(route)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, route: Route) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_ROUTE },
     	"route": RouteJson.toJSON(route)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsroutesuper;
