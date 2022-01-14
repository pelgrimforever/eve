//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 14.0.2022 16:56
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Contractpk } from '../../../../../data/eve/table/super/contractsuper.js';
import Contract from '../../../../../data/eve/table/contract.js';
import ContractJson from '../conversion/contractjson.js';


class Rscontractsuper extends Eveservice {	

	static restservice = 'rscontract';

	//SELECT OPERATIONS
	static SELECT_CONTRACT = 2;
	static SELECT_Siteusergroup = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_CONTRACT = 10;

	//INSERT OPERATIONS
	static INSERT_CONTRACT = 20;

	//DELETE OPERATIONS
	static DELETE_CONTRACT = 30;

	static extractDataArray = (jsonarray): Contract[] => {
		let contracts: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			contracts.push(ContractJson.fromJSON(jsonarray[i]));
		}
   	return contracts;
	}

	static extractDataObject = (jsonobject): Contract => {
    return ContractJson.fromJSON(jsonobject);
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

	static getOne = async (contractpk: Contractpk): Contract => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_CONTRACT },
      "contractpk": ContractJson.PKtoJSON(contractpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static search = async (contractsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": contractsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (contractsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": contractsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (contract: Contract) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_CONTRACT },
     	"contract": ContractJson.toJSON(contract)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (contract: Contract) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_CONTRACT },
     	"contract": ContractJson.toJSON(contract)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (contract: Contract) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_CONTRACT },
     	"contract": ContractJson.toJSON(contract)
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

	static sec_getOne = async (user, contractpk: Contractpk): Contract => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_CONTRACT },
      "contractpk": ContractJson.PKtoJSON(contractpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, contractsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": contractsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, contractsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": contractsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, contract: Contract) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_CONTRACT },
     	"contract": ContractJson.toJSON(contract)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, contract: Contract) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_CONTRACT },
     	"contract": ContractJson.toJSON(contract)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, contract: Contract) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_CONTRACT },
     	"contract": ContractJson.toJSON(contract)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rscontractsuper;
