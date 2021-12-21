//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 16.11.2021 15:46
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Stationservicepk } from '../../../../../data/eve/table/super/stationservicesuper.js';
import Stationservice from '../../../../../data/eve/table/stationservice.js';
import StationserviceJson from '../conversion/stationservicejson.js';
import { Stationpk } from '../../../../../data/eve/table/super/stationsuper.js';
import StationJson from '../conversion/stationjson.js';


class Rsstationservicesuper extends Eveservice {	

	static restservice = 'rsstation_service';

	//SELECT OPERATIONS
	static SELECT_STATIONSERVICE = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Station = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_STATIONSERVICE = 10;

	//INSERT OPERATIONS
	static INSERT_STATIONSERVICE = 20;

	//DELETE OPERATIONS
	static DELETE_Station = 100 + 1;
	static DELETE_STATIONSERVICE = 30;

	static extractDataArray = (jsonarray): Stationservice[] => {
		let stationservices: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			stationservices.push(StationserviceJson.fromJSON(jsonarray[i]));
		}
   	return stationservices;
	}

	static extractDataObject = (jsonobject): Stationservice => {
    return StationserviceJson.fromJSON(jsonobject);
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

	static getOne = async (stationservicepk: Stationservicepk): Stationservice => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_STATIONSERVICE },
      "station_servicepk": StationserviceJson.PKtoJSON(stationservicepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadStationservices4station = async (stationpk: Stationpk): Stationservice[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Station },
     	"stationpk": StationJson.PKtoJSON(stationpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (stationservicesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": stationservicesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (stationservicesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": stationservicesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (stationservice: Stationservice) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_STATIONSERVICE },
     	"stationservice": StationserviceJson.toJSON(stationservice)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (stationservice: Stationservice) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_STATIONSERVICE },
     	"station_service": StationserviceJson.toJSON(stationservice)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (stationservice: Stationservice) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_STATIONSERVICE },
     	"station_service": StationserviceJson.toJSON(stationservice)
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

	static sec_getOne = async (user, stationservicepk: Stationservicepk): Stationservice => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_STATIONSERVICE },
      "station_servicepk": StationserviceJson.PKtoJSON(stationservicepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadStationservices4station = async (user, stationpk: Stationservicepk): Stationservice[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Station },
     	"stationpk": StationJson.PKtoJSON(stationpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, stationservicesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": stationservicesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, stationservicesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": stationservicesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, stationservice: Stationservice) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_STATIONSERVICE },
     	"station_service": StationserviceJson.toJSON(stationservice)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, stationservice: Stationservice) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_STATIONSERVICE },
     	"station_service": StationserviceJson.toJSON(stationservice)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, stationservice: Stationservice) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_STATIONSERVICE },
     	"station_service": StationserviceJson.toJSON(stationservice)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsstationservicesuper;
