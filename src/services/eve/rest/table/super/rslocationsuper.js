//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 19.0.2022 22:13
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Locationpk } from '../../../../../data/eve/table/super/locationsuper.js';
import Location from '../../../../../data/eve/table/location.js';
import LocationJson from '../conversion/locationjson.js';
import { Systempk } from '../../../../../data/eve/table/super/systemsuper.js';
import SystemJson from '../conversion/systemjson.js';


class Rslocationsuper extends Eveservice {	

	static restservice = 'rslocation';

	//SELECT OPERATIONS
	static SELECT_LOCATION = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_System = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_LOCATION = 10;

	//INSERT OPERATIONS
	static INSERT_LOCATION = 20;

	//DELETE OPERATIONS
	static DELETE_System = 100 + 1;
	static DELETE_LOCATION = 30;

	static extractDataArray = (jsonarray): Location[] => {
		let locations: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			locations.push(LocationJson.fromJSON(jsonarray[i]));
		}
   	return locations;
	}

	static extractDataObject = (jsonobject): Location => {
    return LocationJson.fromJSON(jsonobject);
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

	static getOne = async (locationpk: Locationpk): Location => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_LOCATION },
      "locationpk": LocationJson.PKtoJSON(locationpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadLocations4system = async (systempk: Systempk): Location[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_System },
     	"systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (locationsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": locationsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (locationsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": locationsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (location: Location) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_LOCATION },
     	"location": LocationJson.toJSON(location)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (location: Location) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_LOCATION },
     	"location": LocationJson.toJSON(location)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (location: Location) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_LOCATION },
     	"location": LocationJson.toJSON(location)
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

	static sec_getOne = async (user, locationpk: Locationpk): Location => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_LOCATION },
      "locationpk": LocationJson.PKtoJSON(locationpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadLocations4system = async (user, systempk: Locationpk): Location[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_System },
     	"systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, locationsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": locationsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, locationsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": locationsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, location: Location) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_LOCATION },
     	"location": LocationJson.toJSON(location)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, location: Location) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_LOCATION },
     	"location": LocationJson.toJSON(location)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, location: Location) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_LOCATION },
     	"location": LocationJson.toJSON(location)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rslocationsuper;
