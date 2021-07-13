//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in typegroup.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 12.6.2021 13:57
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Typegrouppk } from '../../../../../data/eve/table/super/typegroupsuper.js';
import Typegroup from '../../../../../data/eve/table/typegroup.js';
import TypegroupJson from '../conversion/typegroupjson.js';
import { Categorypk } from '../../../../../data/eve/table/super/categorysuper.js';
import CategoryJson from '../conversion/categoryjson.js';


class Rstypegroupsuper extends Eveservice {	

	static restservice = 'rstypegroup';

	//SELECT OPERATIONS
	static SELECT_TYPEGROUP = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Category = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_TYPEGROUP = 10;

	//INSERT OPERATIONS
	static INSERT_TYPEGROUP = 20;

	//DELETE OPERATIONS
	static DELETE_Category = 100 + 1;
	static DELETE_TYPEGROUP = 30;

	static extractDataArray = (jsonarray): Typegroup[] => {
		let typegroups: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			typegroups.push(TypegroupJson.fromJSON(jsonarray[i]));
		}
   	return typegroups;
	}

	static extractDataObject = (jsonobject): Typegroup => {
    return TypegroupJson.fromJSON(jsonobject);
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

	static getOne = async (typegrouppk: Typegrouppk): Typegroup => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_TYPEGROUP },
      "typegrouppk": TypegroupJson.PKtoJSON(typegrouppk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadTypegroups4category = async (categorypk: Categorypk): Typegroup[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Category },
     	"categorypk": CategoryJson.PKtoJSON(categorypk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (typegroupsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": typegroupsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (typegroupsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": typegroupsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (typegroup: Typegroup) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_TYPEGROUP },
     	"typegroup": TypegroupJson.toJSON(typegroup)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (typegroup: Typegroup) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_TYPEGROUP },
     	"typegroup": TypegroupJson.toJSON(typegroup)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (typegroup: Typegroup) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_TYPEGROUP },
     	"typegroup": TypegroupJson.toJSON(typegroup)
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

	static sec_getOne = async (user, typegrouppk: Typegrouppk): Typegroup => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_TYPEGROUP },
      "typegrouppk": TypegroupJson.PKtoJSON(typegrouppk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadTypegroups4category = async (user, categorypk: Typegrouppk): Typegroup[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Category },
     	"categorypk": CategoryJson.PKtoJSON(categorypk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, typegroupsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": typegroupsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, typegroupsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": typegroupsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, typegroup: Typegroup) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_TYPEGROUP },
     	"typegroup": TypegroupJson.toJSON(typegroup)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, typegroup: Typegroup) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_TYPEGROUP },
     	"typegroup": TypegroupJson.toJSON(typegroup)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, typegroup: Typegroup) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_TYPEGROUP },
     	"typegroup": TypegroupJson.toJSON(typegroup)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rstypegroupsuper;
