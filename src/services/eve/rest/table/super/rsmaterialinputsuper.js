//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 22.1.2022 10:55
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Materialinputpk } from '../../../../../data/eve/table/super/materialinputsuper.js';
import Materialinput from '../../../../../data/eve/table/materialinput.js';
import MaterialinputJson from '../conversion/materialinputjson.js';
import { Evetypepk } from '../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../conversion/evetypejson.js';


class Rsmaterialinputsuper extends Eveservice {	

	static restservice = 'rsmaterialinput';

	//SELECT OPERATIONS
	static SELECT_MATERIALINPUT = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Evetype = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_MATERIALINPUT = 10;

	//INSERT OPERATIONS
	static INSERT_MATERIALINPUT = 20;

	//DELETE OPERATIONS
	static DELETE_Evetype = 100 + 1;
	static DELETE_MATERIALINPUT = 30;

	static extractDataArray = (jsonarray): Materialinput[] => {
		let materialinputs: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			materialinputs.push(MaterialinputJson.fromJSON(jsonarray[i]));
		}
   	return materialinputs;
	}

	static extractDataObject = (jsonobject): Materialinput => {
    return MaterialinputJson.fromJSON(jsonobject);
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

	static getOne = async (materialinputpk: Materialinputpk): Materialinput => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_MATERIALINPUT },
      "materialinputpk": MaterialinputJson.PKtoJSON(materialinputpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadMaterialinputs4evetype = async (evetypepk: Evetypepk): Materialinput[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Evetype },
     	"evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (materialinputsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": materialinputsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (materialinputsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": materialinputsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (materialinput: Materialinput) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_MATERIALINPUT },
     	"materialinput": MaterialinputJson.toJSON(materialinput)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (materialinput: Materialinput) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_MATERIALINPUT },
     	"materialinput": MaterialinputJson.toJSON(materialinput)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (materialinput: Materialinput) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_MATERIALINPUT },
     	"materialinput": MaterialinputJson.toJSON(materialinput)
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

	static sec_getOne = async (user, materialinputpk: Materialinputpk): Materialinput => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_MATERIALINPUT },
      "materialinputpk": MaterialinputJson.PKtoJSON(materialinputpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadMaterialinputs4evetype = async (user, evetypepk: Materialinputpk): Materialinput[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Evetype },
     	"evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, materialinputsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": materialinputsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, materialinputsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": materialinputsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, materialinput: Materialinput) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_MATERIALINPUT },
     	"materialinput": MaterialinputJson.toJSON(materialinput)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, materialinput: Materialinput) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_MATERIALINPUT },
     	"materialinput": MaterialinputJson.toJSON(materialinput)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, materialinput: Materialinput) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_MATERIALINPUT },
     	"materialinput": MaterialinputJson.toJSON(materialinput)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsmaterialinputsuper;
