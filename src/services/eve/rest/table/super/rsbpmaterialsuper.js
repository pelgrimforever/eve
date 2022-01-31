//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 31.0.2022 17:49
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Bpmaterialpk } from '../../../../../data/eve/table/super/bpmaterialsuper.js';
import Bpmaterial from '../../../../../data/eve/table/bpmaterial.js';
import BpmaterialJson from '../conversion/bpmaterialjson.js';
import { Evetypepk } from '../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../conversion/evetypejson.js';


class Rsbpmaterialsuper extends Eveservice {	

	static restservice = 'rsbpmaterial';

	//SELECT OPERATIONS
	static SELECT_BPMATERIAL = 2;
	static SELECT_Siteusergroup = 100 + 0;
	static SELECT_Evetypebp = 100 + 0;
	static SELECT_Evetypematerial = 100 + 1;

	//UPDATE OPERATIONS
	static UPDATE_BPMATERIAL = 10;

	//INSERT OPERATIONS
	static INSERT_BPMATERIAL = 20;

	//DELETE OPERATIONS
	static DELETE_Evetypebp = 100 + 2;
	static DELETE_Evetypematerial = 100 + 3;
	static DELETE_BPMATERIAL = 30;

	static extractDataArray = (jsonarray): Bpmaterial[] => {
		let bpmaterials: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			bpmaterials.push(BpmaterialJson.fromJSON(jsonarray[i]));
		}
   	return bpmaterials;
	}

	static extractDataObject = (jsonobject): Bpmaterial => {
    return BpmaterialJson.fromJSON(jsonobject);
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

	static getOne = async (bpmaterialpk: Bpmaterialpk): Bpmaterial => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_BPMATERIAL },
      "bpmaterialpk": BpmaterialJson.PKtoJSON(bpmaterialpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static loadBpmaterials4evetypeBp = async (evetypepk: Evetypepk): Bpmaterial[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Evetypebp },
     	"evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static loadBpmaterials4evetypeMaterial = async (evetypepk: Evetypepk): Bpmaterial[] => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_Evetypematerial },
     	"evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static search = async (bpmaterialsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": bpmaterialsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (bpmaterialsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": bpmaterialsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (bpmaterial: Bpmaterial) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_BPMATERIAL },
     	"bpmaterial": BpmaterialJson.toJSON(bpmaterial)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (bpmaterial: Bpmaterial) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_BPMATERIAL },
     	"bpmaterial": BpmaterialJson.toJSON(bpmaterial)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (bpmaterial: Bpmaterial) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_BPMATERIAL },
     	"bpmaterial": BpmaterialJson.toJSON(bpmaterial)
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

	static sec_getOne = async (user, bpmaterialpk: Bpmaterialpk): Bpmaterial => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_BPMATERIAL },
      "bpmaterialpk": BpmaterialJson.PKtoJSON(bpmaterialpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_loadBpmaterials4evetypeBp = async (user, evetypepk: Bpmaterialpk): Bpmaterial[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Evetypebp },
     	"evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_loadBpmaterials4evetypeMaterial = async (user, evetypepk: Bpmaterialpk): Bpmaterial[] => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_Evetypematerial },
     	"evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, bpmaterialsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": bpmaterialsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, bpmaterialsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": bpmaterialsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, bpmaterial: Bpmaterial) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_BPMATERIAL },
     	"bpmaterial": BpmaterialJson.toJSON(bpmaterial)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, bpmaterial: Bpmaterial) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_BPMATERIAL },
     	"bpmaterial": BpmaterialJson.toJSON(bpmaterial)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, bpmaterial: Bpmaterial) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_BPMATERIAL },
     	"bpmaterial": BpmaterialJson.toJSON(bpmaterial)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsbpmaterialsuper;
