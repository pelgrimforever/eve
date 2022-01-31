//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 31.0.2022 17:49
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Shipfitpk } from '../../../../../data/eve/table/super/shipfitsuper.js';
import Shipfit from '../../../../../data/eve/table/shipfit.js';
import ShipfitJson from '../conversion/shipfitjson.js';
import { Evetypepk } from '../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../conversion/evetypejson.js';
import { Shipfitmodulepk } from '../../../../../data/eve/table/super/shipfitmodulesuper.js';
import ShipfitmoduleJson from '../conversion/shipfitmodulejson.js';
import { Shipfitorderpk } from '../../../../../data/eve/table/super/shipfitordersuper.js';
import ShipfitorderJson from '../conversion/shipfitorderjson.js';


class Rsshipfitsuper extends Eveservice {	

	static restservice = 'rsshipfit';

	//SELECT OPERATIONS
	static SELECT_SHIPFIT = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Evetype = 100 + 0;
	static SELECT_Shipfitmodule = 100 + 1;
	static SELECT_Shipfitorder = 100 + 2;

	//UPDATE OPERATIONS
	static UPDATE_SHIPFIT = 10;

	//INSERT OPERATIONS
	static INSERT_SHIPFIT = 20;

	//DELETE OPERATIONS
	static DELETE_Evetype = 100 + 3;
	static DELETE_SHIPFIT = 30;

	static extractDataArray = (jsonarray): Shipfit[] => {
		let shipfits: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			shipfits.push(ShipfitJson.fromJSON(jsonarray[i]));
		}
   	return shipfits;
	}

	static extractDataObject = (jsonobject): Shipfit => {
    return ShipfitJson.fromJSON(jsonobject);
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

	static getOne = async (shipfitpk: Shipfitpk): Shipfit => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SHIPFIT },
      "shipfitpk": ShipfitJson.PKtoJSON(shipfitpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadShipfits4evetype = async (evetypepk: Evetypepk): Shipfit[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Evetype },
     	"evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadShipfit4shipfitmodule = async (shipfitmodulepk: Shipfitmodulepk): Shipfit[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Shipfitmodule },
     	"shipfitmodulepk": ShipfitmoduleJson.PKtoJSON(shipfitmodulepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadShipfit4shipfitorder = async (shipfitorderpk: Shipfitorderpk): Shipfit[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Shipfitorder },
     	"shipfitorderpk": ShipfitorderJson.PKtoJSON(shipfitorderpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (shipfitsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": shipfitsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (shipfitsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": shipfitsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (shipfit: Shipfit) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_SHIPFIT },
     	"shipfit": ShipfitJson.toJSON(shipfit)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (shipfit: Shipfit) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_SHIPFIT },
     	"shipfit": ShipfitJson.toJSON(shipfit)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (shipfit: Shipfit) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_SHIPFIT },
     	"shipfit": ShipfitJson.toJSON(shipfit)
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

	static sec_getOne = async (user, shipfitpk: Shipfitpk): Shipfit => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SHIPFIT },
      "shipfitpk": ShipfitJson.PKtoJSON(shipfitpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadShipfits4evetype = async (user, evetypepk: Shipfitpk): Shipfit[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Evetype },
     	"evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadShipfit4shipfitmodule = async (user, shipfitmodulepk: Shipfitmodulepk): Shipfit[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Shipfitmodule },
     	"shipfitmodulepk": ShipfitmoduleJson.PKtoJSON(shipfitmodulepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadShipfit4shipfitorder = async (user, shipfitorderpk: Shipfitorderpk): Shipfit[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Shipfitorder },
     	"shipfitorderpk": ShipfitorderJson.PKtoJSON(shipfitorderpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, shipfitsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": shipfitsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, shipfitsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": shipfitsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, shipfit: Shipfit) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_SHIPFIT },
     	"shipfit": ShipfitJson.toJSON(shipfit)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, shipfit: Shipfit) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_SHIPFIT },
     	"shipfit": ShipfitJson.toJSON(shipfit)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, shipfit: Shipfit) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_SHIPFIT },
     	"shipfit": ShipfitJson.toJSON(shipfit)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsshipfitsuper;
