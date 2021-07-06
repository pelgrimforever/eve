//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in marketgroup.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 4.6.2021 14:41
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Marketgrouppk } from '../../../../../data/eve/table/super/marketgroupsuper.js';
import Marketgroup from '../../../../../data/eve/table/marketgroup.js';
import MarketgroupJson from '../conversion/marketgroupjson.js';


class Rsmarketgroupsuper extends Eveservice {	

	static restservice = 'rsmarket_group';

	//SELECT OPERATIONS
	static SELECT_MARKETGROUP = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Marketgroupparentid = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_MARKETGROUP = 10;

	//INSERT OPERATIONS
	static INSERT_MARKETGROUP = 20;

	//DELETE OPERATIONS
	static DELETE_Marketgroupparentid = 100 + 1;
	static DELETE_MARKETGROUP = 30;

	static extractDataArray = (jsonarray): Marketgroup[] => {
		let marketgroups: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			marketgroups.push(MarketgroupJson.fromJSON(jsonarray[i]));
		}
   	return marketgroups;
	}

	static extractDataObject = (jsonobject): Marketgroup => {
    return MarketgroupJson.fromJSON(jsonobject);
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

	static getOne = async (marketgrouppk: Marketgrouppk): Marketgroup => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_MARKETGROUP },
      "market_grouppk": MarketgroupJson.PKtoJSON(marketgrouppk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadMarketgroups4marketgroupParentid = async (marketgrouppk: Marketgrouppk): Marketgroup[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Marketgroupparentid },
     	"market_grouppk": MarketgroupJson.PKtoJSON(marketgrouppk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (marketgroupsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": marketgroupsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (marketgroupsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": marketgroupsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (marketgroup: Marketgroup) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_MARKETGROUP },
     	"marketgroup": MarketgroupJson.toJSON(marketgroup)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (marketgroup: Marketgroup) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_MARKETGROUP },
     	"market_group": MarketgroupJson.toJSON(marketgroup)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (marketgroup: Marketgroup) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_MARKETGROUP },
     	"market_group": MarketgroupJson.toJSON(marketgroup)
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

	static sec_getOne = async (user, marketgrouppk: Marketgrouppk): Marketgroup => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_MARKETGROUP },
      "market_grouppk": MarketgroupJson.PKtoJSON(marketgrouppk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadMarketgroups4marketgroupParentid = async (user, marketgrouppk: Marketgrouppk): Marketgroup[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Marketgroupparentid },
     	"market_grouppk": MarketgroupJson.PKtoJSON(marketgrouppk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, marketgroupsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": marketgroupsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, marketgroupsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": marketgroupsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, marketgroup: Marketgroup) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_MARKETGROUP },
     	"market_group": MarketgroupJson.toJSON(marketgroup)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, marketgroup: Marketgroup) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_MARKETGROUP },
     	"market_group": MarketgroupJson.toJSON(marketgroup)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, marketgroup: Marketgroup) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_MARKETGROUP },
     	"market_group": MarketgroupJson.toJSON(marketgroup)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsmarketgroupsuper;
