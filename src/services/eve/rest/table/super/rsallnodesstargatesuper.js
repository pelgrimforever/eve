//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 19.0.2022 22:13
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Allnodesstargatepk } from '../../../../../data/eve/table/super/allnodesstargatesuper.js';
import Allnodesstargate from '../../../../../data/eve/table/allnodesstargate.js';
import AllnodesstargateJson from '../conversion/allnodesstargatejson.js';


class Rsallnodesstargatesuper extends Eveservice {	

	static restservice = 'rsallnodes_stargate';

	//SELECT OPERATIONS
	static SELECT_ALLNODESSTARGATE = 2;
	static SELECT_Siteusergroup = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_ALLNODESSTARGATE = 10;

	//INSERT OPERATIONS
	static INSERT_ALLNODESSTARGATE = 20;

	//DELETE OPERATIONS
	static DELETE_ALLNODESSTARGATE = 30;

	static extractDataArray = (jsonarray): Allnodesstargate[] => {
		let allnodesstargates: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			allnodesstargates.push(AllnodesstargateJson.fromJSON(jsonarray[i]));
		}
   	return allnodesstargates;
	}

	static extractDataObject = (jsonobject): Allnodesstargate => {
    return AllnodesstargateJson.fromJSON(jsonobject);
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

	static getOne = async (allnodesstargatepk: Allnodesstargatepk): Allnodesstargate => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_ALLNODESSTARGATE },
      "allnodes_stargatepk": AllnodesstargateJson.PKtoJSON(allnodesstargatepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static search = async (allnodesstargatesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": allnodesstargatesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (allnodesstargatesearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": allnodesstargatesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (allnodesstargate: Allnodesstargate) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_ALLNODESSTARGATE },
     	"allnodesstargate": AllnodesstargateJson.toJSON(allnodesstargate)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (allnodesstargate: Allnodesstargate) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_ALLNODESSTARGATE },
     	"allnodes_stargate": AllnodesstargateJson.toJSON(allnodesstargate)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (allnodesstargate: Allnodesstargate) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_ALLNODESSTARGATE },
     	"allnodes_stargate": AllnodesstargateJson.toJSON(allnodesstargate)
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

	static sec_getOne = async (user, allnodesstargatepk: Allnodesstargatepk): Allnodesstargate => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_ALLNODESSTARGATE },
      "allnodes_stargatepk": AllnodesstargateJson.PKtoJSON(allnodesstargatepk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, allnodesstargatesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": allnodesstargatesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, allnodesstargatesearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": allnodesstargatesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, allnodesstargate: Allnodesstargate) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_ALLNODESSTARGATE },
     	"allnodes_stargate": AllnodesstargateJson.toJSON(allnodesstargate)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, allnodesstargate: Allnodesstargate) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_ALLNODESSTARGATE },
     	"allnodes_stargate": AllnodesstargateJson.toJSON(allnodesstargate)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, allnodesstargate: Allnodesstargate) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_ALLNODESSTARGATE },
     	"allnodes_stargate": AllnodesstargateJson.toJSON(allnodesstargate)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsallnodesstargatesuper;
