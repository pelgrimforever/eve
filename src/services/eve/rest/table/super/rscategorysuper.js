//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in category.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 18.6.2021 14:35
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Categorypk } from '../../../../../data/eve/table/super/categorysuper.js';
import Category from '../../../../../data/eve/table/category.js';
import CategoryJson from '../conversion/categoryjson.js';


class Rscategorysuper extends Eveservice {	

	static restservice = 'rscategory';

	//SELECT OPERATIONS
	static SELECT_CATEGORY = 2;
	static SELECT_Siteusergroup = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_CATEGORY = 10;

	//INSERT OPERATIONS
	static INSERT_CATEGORY = 20;

	//DELETE OPERATIONS
	static DELETE_CATEGORY = 30;

	static extractDataArray = (jsonarray): Category[] => {
		let categorys: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			categorys.push(CategoryJson.fromJSON(jsonarray[i]));
		}
   	return categorys;
	}

	static extractDataObject = (jsonobject): Category => {
    return CategoryJson.fromJSON(jsonobject);
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

	static getOne = async (categorypk: Categorypk): Category => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_CATEGORY },
      "categorypk": CategoryJson.PKtoJSON(categorypk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static search = async (categorysearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": categorysearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (categorysearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": categorysearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (category: Category) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_CATEGORY },
     	"category": CategoryJson.toJSON(category)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (category: Category) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_CATEGORY },
     	"category": CategoryJson.toJSON(category)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (category: Category) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_CATEGORY },
     	"category": CategoryJson.toJSON(category)
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

	static sec_getOne = async (user, categorypk: Categorypk): Category => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_CATEGORY },
      "categorypk": CategoryJson.PKtoJSON(categorypk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, categorysearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": categorysearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, categorysearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": categorysearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, category: Category) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_CATEGORY },
     	"category": CategoryJson.toJSON(category)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, category: Category) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_CATEGORY },
     	"category": CategoryJson.toJSON(category)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, category: Category) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_CATEGORY },
     	"category": CategoryJson.toJSON(category)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rscategorysuper;
