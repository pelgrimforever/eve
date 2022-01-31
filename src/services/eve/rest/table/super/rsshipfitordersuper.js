//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 31.0.2022 17:49
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Shipfitorderpk } from '../../../../../data/eve/table/super/shipfitordersuper.js';
import Shipfitorder from '../../../../../data/eve/table/shipfitorder.js';
import ShipfitorderJson from '../conversion/shipfitorderjson.js';
import { Shipfitpk } from '../../../../../data/eve/table/super/shipfitsuper.js';
import ShipfitJson from '../conversion/shipfitjson.js';
import { Evetypepk } from '../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../conversion/evetypejson.js';
import { Shipfitorderselectedpk } from '../../../../../data/eve/table/super/shipfitorderselectedsuper.js';
import ShipfitorderselectedJson from '../conversion/shipfitorderselectedjson.js';


class Rsshipfitordersuper extends Eveservice {	

	static restservice = 'rsshipfitorder';

	//SELECT OPERATIONS
	static SELECT_SHIPFITORDER = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Shipfit = 100 + 0;
	static SELECT_Evetype = 100 + 1;
	static SELECT_Shipfitorderselected = 100 + 2;

	//UPDATE OPERATIONS
	static UPDATE_SHIPFITORDER = 10;

	//INSERT OPERATIONS
	static INSERT_SHIPFITORDER = 20;

	//DELETE OPERATIONS
	static DELETE_Shipfit = 100 + 3;
	static DELETE_Evetype = 100 + 4;
	static DELETE_SHIPFITORDER = 30;

	static extractDataArray = (jsonarray): Shipfitorder[] => {
		let shipfitorders: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			shipfitorders.push(ShipfitorderJson.fromJSON(jsonarray[i]));
		}
   	return shipfitorders;
	}

	static extractDataObject = (jsonobject): Shipfitorder => {
    return ShipfitorderJson.fromJSON(jsonobject);
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

	static getOne = async (shipfitorderpk: Shipfitorderpk): Shipfitorder => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SHIPFITORDER },
      "shipfitorderpk": ShipfitorderJson.PKtoJSON(shipfitorderpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadShipfitorders4shipfit = async (shipfitpk: Shipfitpk): Shipfitorder[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Shipfit },
     	"shipfitpk": ShipfitJson.PKtoJSON(shipfitpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadShipfitorders4evetype = async (evetypepk: Evetypepk): Shipfitorder[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Evetype },
     	"evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadShipfitorder4shipfitorderselected = async (shipfitorderselectedpk: Shipfitorderselectedpk): Shipfitorder[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Shipfitorderselected },
     	"shipfitorderselectedpk": ShipfitorderselectedJson.PKtoJSON(shipfitorderselectedpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (shipfitordersearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": shipfitordersearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (shipfitordersearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": shipfitordersearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (shipfitorder: Shipfitorder) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_SHIPFITORDER },
     	"shipfitorder": ShipfitorderJson.toJSON(shipfitorder)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (shipfitorder: Shipfitorder) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_SHIPFITORDER },
     	"shipfitorder": ShipfitorderJson.toJSON(shipfitorder)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (shipfitorder: Shipfitorder) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_SHIPFITORDER },
     	"shipfitorder": ShipfitorderJson.toJSON(shipfitorder)
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

	static sec_getOne = async (user, shipfitorderpk: Shipfitorderpk): Shipfitorder => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SHIPFITORDER },
      "shipfitorderpk": ShipfitorderJson.PKtoJSON(shipfitorderpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadShipfitorders4shipfit = async (user, shipfitpk: Shipfitorderpk): Shipfitorder[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Shipfit },
     	"shipfitpk": ShipfitJson.PKtoJSON(shipfitpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadShipfitorders4evetype = async (user, evetypepk: Shipfitorderpk): Shipfitorder[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Evetype },
     	"evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadShipfitorder4shipfitorderselected = async (user, shipfitorderselectedpk: Shipfitorderselectedpk): Shipfitorder[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Shipfitorderselected },
     	"shipfitorderselectedpk": ShipfitorderselectedJson.PKtoJSON(shipfitorderselectedpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, shipfitordersearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": shipfitordersearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, shipfitordersearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": shipfitordersearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, shipfitorder: Shipfitorder) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_SHIPFITORDER },
     	"shipfitorder": ShipfitorderJson.toJSON(shipfitorder)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, shipfitorder: Shipfitorder) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_SHIPFITORDER },
     	"shipfitorder": ShipfitorderJson.toJSON(shipfitorder)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, shipfitorder: Shipfitorder) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_SHIPFITORDER },
     	"shipfitorder": ShipfitorderJson.toJSON(shipfitorder)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsshipfitordersuper;
