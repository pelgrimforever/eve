//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 14.0.2022 16:56
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Shipfitorderselectedpk } from '../../../../../data/eve/table/super/shipfitorderselectedsuper.js';
import Shipfitorderselected from '../../../../../data/eve/table/shipfitorderselected.js';
import ShipfitorderselectedJson from '../conversion/shipfitorderselectedjson.js';
import { Orderspk } from '../../../../../data/eve/table/super/orderssuper.js';
import OrdersJson from '../conversion/ordersjson.js';
import { Shipfitorderpk } from '../../../../../data/eve/table/super/shipfitordersuper.js';
import ShipfitorderJson from '../conversion/shipfitorderjson.js';


class Rsshipfitorderselectedsuper extends Eveservice {	

	static restservice = 'rsshipfitorderselected';

	//SELECT OPERATIONS
	static SELECT_SHIPFITORDERSELECTED = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Orders = 100 + 0;
	static SELECT_Shipfitorder = 100 + 1;

	//UPDATE OPERATIONS
	static UPDATE_SHIPFITORDERSELECTED = 10;

	//INSERT OPERATIONS
	static INSERT_SHIPFITORDERSELECTED = 20;

	//DELETE OPERATIONS
	static DELETE_Orders = 100 + 2;
	static DELETE_Shipfitorder = 100 + 3;
	static DELETE_SHIPFITORDERSELECTED = 30;

	static extractDataArray = (jsonarray): Shipfitorderselected[] => {
		let shipfitorderselecteds: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			shipfitorderselecteds.push(ShipfitorderselectedJson.fromJSON(jsonarray[i]));
		}
   	return shipfitorderselecteds;
	}

	static extractDataObject = (jsonobject): Shipfitorderselected => {
    return ShipfitorderselectedJson.fromJSON(jsonobject);
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

	static getOne = async (shipfitorderselectedpk: Shipfitorderselectedpk): Shipfitorderselected => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SHIPFITORDERSELECTED },
      "shipfitorderselectedpk": ShipfitorderselectedJson.PKtoJSON(shipfitorderselectedpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadShipfitorderselecteds4orders = async (orderspk: Orderspk): Shipfitorderselected[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Orders },
     	"orderspk": OrdersJson.PKtoJSON(orderspk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadShipfitorderselecteds4shipfitorder = async (shipfitorderpk: Shipfitorderpk): Shipfitorderselected[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Shipfitorder },
     	"shipfitorderpk": ShipfitorderJson.PKtoJSON(shipfitorderpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (shipfitorderselectedsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": shipfitorderselectedsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (shipfitorderselectedsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": shipfitorderselectedsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (shipfitorderselected: Shipfitorderselected) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_SHIPFITORDERSELECTED },
     	"shipfitorderselected": ShipfitorderselectedJson.toJSON(shipfitorderselected)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (shipfitorderselected: Shipfitorderselected) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_SHIPFITORDERSELECTED },
     	"shipfitorderselected": ShipfitorderselectedJson.toJSON(shipfitorderselected)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (shipfitorderselected: Shipfitorderselected) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_SHIPFITORDERSELECTED },
     	"shipfitorderselected": ShipfitorderselectedJson.toJSON(shipfitorderselected)
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

	static sec_getOne = async (user, shipfitorderselectedpk: Shipfitorderselectedpk): Shipfitorderselected => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SHIPFITORDERSELECTED },
      "shipfitorderselectedpk": ShipfitorderselectedJson.PKtoJSON(shipfitorderselectedpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadShipfitorderselecteds4orders = async (user, orderspk: Shipfitorderselectedpk): Shipfitorderselected[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Orders },
     	"orderspk": OrdersJson.PKtoJSON(orderspk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadShipfitorderselecteds4shipfitorder = async (user, shipfitorderpk: Shipfitorderselectedpk): Shipfitorderselected[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Shipfitorder },
     	"shipfitorderpk": ShipfitorderJson.PKtoJSON(shipfitorderpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, shipfitorderselectedsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": shipfitorderselectedsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, shipfitorderselectedsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": shipfitorderselectedsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, shipfitorderselected: Shipfitorderselected) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_SHIPFITORDERSELECTED },
     	"shipfitorderselected": ShipfitorderselectedJson.toJSON(shipfitorderselected)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, shipfitorderselected: Shipfitorderselected) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_SHIPFITORDERSELECTED },
     	"shipfitorderselected": ShipfitorderselectedJson.toJSON(shipfitorderselected)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, shipfitorderselected: Shipfitorderselected) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_SHIPFITORDERSELECTED },
     	"shipfitorderselected": ShipfitorderselectedJson.toJSON(shipfitorderselected)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsshipfitorderselectedsuper;
