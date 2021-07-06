//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in evetype.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 4.6.2021 14:41
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Evetypepk } from '../../../../../data/eve/table/super/evetypesuper.js';
import Evetype from '../../../../../data/eve/table/evetype.js';
import EvetypeJson from '../conversion/evetypejson.js';
import { Marketgrouppk } from '../../../../../data/eve/table/super/marketgroupsuper.js';
import MarketgroupJson from '../conversion/marketgroupjson.js';
import { Typegrouppk } from '../../../../../data/eve/table/super/typegroupsuper.js';
import TypegroupJson from '../conversion/typegroupjson.js';
import { Graphicpk } from '../../../../../data/eve/table/super/graphicsuper.js';
import GraphicJson from '../conversion/graphicjson.js';
import { Orderhistorypk } from '../../../../../data/eve/table/super/orderhistorysuper.js';
import OrderhistoryJson from '../conversion/orderhistoryjson.js';


class Rsevetypesuper extends Eveservice {	

	static restservice = 'rsevetype';

	//SELECT OPERATIONS
	static SELECT_EVETYPE = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Marketgroup = 100 + 0;
	static SELECT_Typegroup = 100 + 1;
	static SELECT_Graphic = 100 + 2;
	static SELECT_Orderhistory = 100 + 3;

	//UPDATE OPERATIONS
	static UPDATE_EVETYPE = 10;

	//INSERT OPERATIONS
	static INSERT_EVETYPE = 20;

	//DELETE OPERATIONS
	static DELETE_Marketgroup = 100 + 4;
	static DELETE_Typegroup = 100 + 5;
	static DELETE_Graphic = 100 + 6;
	static DELETE_EVETYPE = 30;

	static extractDataArray = (jsonarray): Evetype[] => {
		let evetypes: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			evetypes.push(EvetypeJson.fromJSON(jsonarray[i]));
		}
   	return evetypes;
	}

	static extractDataObject = (jsonobject): Evetype => {
    return EvetypeJson.fromJSON(jsonobject);
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

	static getOne = async (evetypepk: Evetypepk): Evetype => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_EVETYPE },
      "evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadEvetypes4marketgroup = async (marketgrouppk: Marketgrouppk): Evetype[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Marketgroup },
     	"market_grouppk": MarketgroupJson.PKtoJSON(marketgrouppk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadEvetypes4typegroup = async (typegrouppk: Typegrouppk): Evetype[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Typegroup },
     	"typegrouppk": TypegroupJson.PKtoJSON(typegrouppk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadEvetypes4graphic = async (graphicpk: Graphicpk): Evetype[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Graphic },
     	"graphicpk": GraphicJson.PKtoJSON(graphicpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadEvetype4orderhistory = async (orderhistorypk: Orderhistorypk): Evetype[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Orderhistory },
     	"order_historypk": OrderhistoryJson.PKtoJSON(orderhistorypk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (evetypesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": evetypesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (evetypesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": evetypesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (evetype: Evetype) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_EVETYPE },
     	"evetype": EvetypeJson.toJSON(evetype)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (evetype: Evetype) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_EVETYPE },
     	"evetype": EvetypeJson.toJSON(evetype)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (evetype: Evetype) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_EVETYPE },
     	"evetype": EvetypeJson.toJSON(evetype)
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

	static sec_getOne = async (user, evetypepk: Evetypepk): Evetype => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_EVETYPE },
      "evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadEvetypes4marketgroup = async (user, marketgrouppk: Evetypepk): Evetype[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Marketgroup },
     	"market_grouppk": MarketgroupJson.PKtoJSON(marketgrouppk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadEvetypes4typegroup = async (user, typegrouppk: Evetypepk): Evetype[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Typegroup },
     	"typegrouppk": TypegroupJson.PKtoJSON(typegrouppk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadEvetypes4graphic = async (user, graphicpk: Evetypepk): Evetype[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Graphic },
     	"graphicpk": GraphicJson.PKtoJSON(graphicpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadEvetype4orderhistory = async (user, orderhistorypk: Orderhistorypk): Evetype[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Orderhistory },
     	"order_historypk": OrderhistoryJson.PKtoJSON(orderhistorypk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, evetypesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": evetypesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, evetypesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": evetypesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, evetype: Evetype) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_EVETYPE },
     	"evetype": EvetypeJson.toJSON(evetype)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, evetype: Evetype) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_EVETYPE },
     	"evetype": EvetypeJson.toJSON(evetype)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, evetype: Evetype) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_EVETYPE },
     	"evetype": EvetypeJson.toJSON(evetype)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsevetypesuper;
