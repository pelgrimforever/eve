//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2022 10:55
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Shipfitmodulepk } from '../../../../../data/eve/table/super/shipfitmodulesuper.js';
import Shipfitmodule from '../../../../../data/eve/table/shipfitmodule.js';
import ShipfitmoduleJson from '../conversion/shipfitmodulejson.js';
import { Evetypepk } from '../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../conversion/evetypejson.js';
import { Shipfitpk } from '../../../../../data/eve/table/super/shipfitsuper.js';
import ShipfitJson from '../conversion/shipfitjson.js';


class Rsshipfitmodulesuper extends Eveservice {	

	static restservice = 'rsshipfitmodule';

	//SELECT OPERATIONS
	static SELECT_SHIPFITMODULE = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Evetype = 100 + 0;
	static SELECT_Shipfit = 100 + 1;

	//UPDATE OPERATIONS
	static UPDATE_SHIPFITMODULE = 10;

	//INSERT OPERATIONS
	static INSERT_SHIPFITMODULE = 20;

	//DELETE OPERATIONS
	static DELETE_Evetype = 100 + 2;
	static DELETE_Shipfit = 100 + 3;
	static DELETE_SHIPFITMODULE = 30;

	static extractDataArray = (jsonarray): Shipfitmodule[] => {
		let shipfitmodules: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			shipfitmodules.push(ShipfitmoduleJson.fromJSON(jsonarray[i]));
		}
   	return shipfitmodules;
	}

	static extractDataObject = (jsonobject): Shipfitmodule => {
    return ShipfitmoduleJson.fromJSON(jsonobject);
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

	static getOne = async (shipfitmodulepk: Shipfitmodulepk): Shipfitmodule => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SHIPFITMODULE },
      "shipfitmodulepk": ShipfitmoduleJson.PKtoJSON(shipfitmodulepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadShipfitmodules4evetype = async (evetypepk: Evetypepk): Shipfitmodule[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Evetype },
     	"evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadShipfitmodules4shipfit = async (shipfitpk: Shipfitpk): Shipfitmodule[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Shipfit },
     	"shipfitpk": ShipfitJson.PKtoJSON(shipfitpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (shipfitmodulesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": shipfitmodulesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (shipfitmodulesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": shipfitmodulesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (shipfitmodule: Shipfitmodule) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_SHIPFITMODULE },
     	"shipfitmodule": ShipfitmoduleJson.toJSON(shipfitmodule)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (shipfitmodule: Shipfitmodule) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_SHIPFITMODULE },
     	"shipfitmodule": ShipfitmoduleJson.toJSON(shipfitmodule)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (shipfitmodule: Shipfitmodule) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_SHIPFITMODULE },
     	"shipfitmodule": ShipfitmoduleJson.toJSON(shipfitmodule)
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

	static sec_getOne = async (user, shipfitmodulepk: Shipfitmodulepk): Shipfitmodule => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SHIPFITMODULE },
      "shipfitmodulepk": ShipfitmoduleJson.PKtoJSON(shipfitmodulepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadShipfitmodules4evetype = async (user, evetypepk: Shipfitmodulepk): Shipfitmodule[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Evetype },
     	"evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadShipfitmodules4shipfit = async (user, shipfitpk: Shipfitmodulepk): Shipfitmodule[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Shipfit },
     	"shipfitpk": ShipfitJson.PKtoJSON(shipfitpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, shipfitmodulesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": shipfitmodulesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, shipfitmodulesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": shipfitmodulesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, shipfitmodule: Shipfitmodule) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_SHIPFITMODULE },
     	"shipfitmodule": ShipfitmoduleJson.toJSON(shipfitmodule)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, shipfitmodule: Shipfitmodule) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_SHIPFITMODULE },
     	"shipfitmodule": ShipfitmoduleJson.toJSON(shipfitmodule)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, shipfitmodule: Shipfitmodule) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_SHIPFITMODULE },
     	"shipfitmodule": ShipfitmoduleJson.toJSON(shipfitmodule)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsshipfitmodulesuper;
