//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 14.0.2022 16:56
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Contractitempk } from '../../../../../data/eve/table/super/contractitemsuper.js';
import Contractitem from '../../../../../data/eve/table/contractitem.js';
import ContractitemJson from '../conversion/contractitemjson.js';
import { Evetypepk } from '../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../conversion/evetypejson.js';
import { Contractpk } from '../../../../../data/eve/table/super/contractsuper.js';
import ContractJson from '../conversion/contractjson.js';


class Rscontractitemsuper extends Eveservice {	

	static restservice = 'rscontractitem';

	//SELECT OPERATIONS
	static SELECT_CONTRACTITEM = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Evetype = 100 + 0;
	static SELECT_Contract = 100 + 1;

	//UPDATE OPERATIONS
	static UPDATE_CONTRACTITEM = 10;

	//INSERT OPERATIONS
	static INSERT_CONTRACTITEM = 20;

	//DELETE OPERATIONS
	static DELETE_Evetype = 100 + 2;
	static DELETE_Contract = 100 + 3;
	static DELETE_CONTRACTITEM = 30;

	static extractDataArray = (jsonarray): Contractitem[] => {
		let contractitems: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			contractitems.push(ContractitemJson.fromJSON(jsonarray[i]));
		}
   	return contractitems;
	}

	static extractDataObject = (jsonobject): Contractitem => {
    return ContractitemJson.fromJSON(jsonobject);
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

	static getOne = async (contractitempk: Contractitempk): Contractitem => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_CONTRACTITEM },
      "contractitempk": ContractitemJson.PKtoJSON(contractitempk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadContractitems4evetype = async (evetypepk: Evetypepk): Contractitem[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Evetype },
     	"evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadContractitems4contract = async (contractpk: Contractpk): Contractitem[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Contract },
     	"contractpk": ContractJson.PKtoJSON(contractpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (contractitemsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": contractitemsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (contractitemsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": contractitemsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (contractitem: Contractitem) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_CONTRACTITEM },
     	"contractitem": ContractitemJson.toJSON(contractitem)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (contractitem: Contractitem) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_CONTRACTITEM },
     	"contractitem": ContractitemJson.toJSON(contractitem)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (contractitem: Contractitem) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_CONTRACTITEM },
     	"contractitem": ContractitemJson.toJSON(contractitem)
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

	static sec_getOne = async (user, contractitempk: Contractitempk): Contractitem => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_CONTRACTITEM },
      "contractitempk": ContractitemJson.PKtoJSON(contractitempk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadContractitems4evetype = async (user, evetypepk: Contractitempk): Contractitem[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Evetype },
     	"evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadContractitems4contract = async (user, contractpk: Contractitempk): Contractitem[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Contract },
     	"contractpk": ContractJson.PKtoJSON(contractpk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, contractitemsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": contractitemsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, contractitemsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": contractitemsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, contractitem: Contractitem) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_CONTRACTITEM },
     	"contractitem": ContractitemJson.toJSON(contractitem)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, contractitem: Contractitem) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_CONTRACTITEM },
     	"contractitem": ContractitemJson.toJSON(contractitem)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, contractitem: Contractitem) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_CONTRACTITEM },
     	"contractitem": ContractitemJson.toJSON(contractitem)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rscontractitemsuper;
