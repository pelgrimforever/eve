//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 19.0.2022 22:13
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Allnodessystempk } from '../../../../../data/eve/table/super/allnodessystemsuper.js';
import Allnodessystem from '../../../../../data/eve/table/allnodessystem.js';
import AllnodessystemJson from '../conversion/allnodessystemjson.js';


class Rsallnodessystemsuper extends Eveservice {	

	static restservice = 'rsallnodes_system';

	//SELECT OPERATIONS
	static SELECT_ALLNODESSYSTEM = 2;
	static SELECT_Siteusergroup = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_ALLNODESSYSTEM = 10;

	//INSERT OPERATIONS
	static INSERT_ALLNODESSYSTEM = 20;

	//DELETE OPERATIONS
	static DELETE_ALLNODESSYSTEM = 30;

	static extractDataArray = (jsonarray): Allnodessystem[] => {
		let allnodessystems: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			allnodessystems.push(AllnodessystemJson.fromJSON(jsonarray[i]));
		}
   	return allnodessystems;
	}

	static extractDataObject = (jsonobject): Allnodessystem => {
    return AllnodessystemJson.fromJSON(jsonobject);
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

	static getOne = async (allnodessystempk: Allnodessystempk): Allnodessystem => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_ALLNODESSYSTEM },
      "allnodes_systempk": AllnodessystemJson.PKtoJSON(allnodessystempk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static search = async (allnodessystemsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": allnodessystemsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (allnodessystemsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": allnodessystemsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (allnodessystem: Allnodessystem) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_ALLNODESSYSTEM },
     	"allnodessystem": AllnodessystemJson.toJSON(allnodessystem)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (allnodessystem: Allnodessystem) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_ALLNODESSYSTEM },
     	"allnodes_system": AllnodessystemJson.toJSON(allnodessystem)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (allnodessystem: Allnodessystem) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_ALLNODESSYSTEM },
     	"allnodes_system": AllnodessystemJson.toJSON(allnodessystem)
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

	static sec_getOne = async (user, allnodessystempk: Allnodessystempk): Allnodessystem => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_ALLNODESSYSTEM },
      "allnodes_systempk": AllnodessystemJson.PKtoJSON(allnodessystempk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, allnodessystemsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": allnodessystemsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, allnodessystemsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": allnodessystemsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, allnodessystem: Allnodessystem) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_ALLNODESSYSTEM },
     	"allnodes_system": AllnodessystemJson.toJSON(allnodessystem)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, allnodessystem: Allnodessystem) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_ALLNODESSYSTEM },
     	"allnodes_system": AllnodessystemJson.toJSON(allnodessystem)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, allnodessystem: Allnodessystem) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_ALLNODESSYSTEM },
     	"allnodes_system": AllnodessystemJson.toJSON(allnodessystem)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsallnodessystemsuper;
