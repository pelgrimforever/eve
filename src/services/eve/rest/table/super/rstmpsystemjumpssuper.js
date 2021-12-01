//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 30.10.2021 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Tmpsystemjumpspk } from '../../../../../data/eve/table/super/tmpsystemjumpssuper.js';
import Tmpsystemjumps from '../../../../../data/eve/table/tmpsystemjumps.js';
import TmpsystemjumpsJson from '../conversion/tmpsystemjumpsjson.js';


class Rstmpsystemjumpssuper extends Eveservice {	

	static restservice = 'rstmp_system_jumps';

	//SELECT OPERATIONS
	static SELECT_TMPSYSTEMJUMPS = 2;
	static SELECT_Siteusergroup = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_TMPSYSTEMJUMPS = 10;

	//INSERT OPERATIONS
	static INSERT_TMPSYSTEMJUMPS = 20;

	//DELETE OPERATIONS
	static DELETE_TMPSYSTEMJUMPS = 30;

	static extractDataArray = (jsonarray): Tmpsystemjumps[] => {
		let tmpsystemjumpss: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			tmpsystemjumpss.push(TmpsystemjumpsJson.fromJSON(jsonarray[i]));
		}
   	return tmpsystemjumpss;
	}

	static extractDataObject = (jsonobject): Tmpsystemjumps => {
    return TmpsystemjumpsJson.fromJSON(jsonobject);
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

	static getOne = async (tmpsystemjumpspk: Tmpsystemjumpspk): Tmpsystemjumps => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_TMPSYSTEMJUMPS },
      "tmp_system_jumpspk": TmpsystemjumpsJson.PKtoJSON(tmpsystemjumpspk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static search = async (tmpsystemjumpssearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": tmpsystemjumpssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (tmpsystemjumpssearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": tmpsystemjumpssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (tmpsystemjumps: Tmpsystemjumps) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_TMPSYSTEMJUMPS },
     	"tmpsystemjumps": TmpsystemjumpsJson.toJSON(tmpsystemjumps)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (tmpsystemjumps: Tmpsystemjumps) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_TMPSYSTEMJUMPS },
     	"tmp_system_jumps": TmpsystemjumpsJson.toJSON(tmpsystemjumps)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (tmpsystemjumps: Tmpsystemjumps) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_TMPSYSTEMJUMPS },
     	"tmp_system_jumps": TmpsystemjumpsJson.toJSON(tmpsystemjumps)
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

	static sec_getOne = async (user, tmpsystemjumpspk: Tmpsystemjumpspk): Tmpsystemjumps => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_TMPSYSTEMJUMPS },
      "tmp_system_jumpspk": TmpsystemjumpsJson.PKtoJSON(tmpsystemjumpspk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, tmpsystemjumpssearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": tmpsystemjumpssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, tmpsystemjumpssearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": tmpsystemjumpssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, tmpsystemjumps: Tmpsystemjumps) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_TMPSYSTEMJUMPS },
     	"tmp_system_jumps": TmpsystemjumpsJson.toJSON(tmpsystemjumps)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, tmpsystemjumps: Tmpsystemjumps) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_TMPSYSTEMJUMPS },
     	"tmp_system_jumps": TmpsystemjumpsJson.toJSON(tmpsystemjumps)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, tmpsystemjumps: Tmpsystemjumps) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_TMPSYSTEMJUMPS },
     	"tmp_system_jumps": TmpsystemjumpsJson.toJSON(tmpsystemjumps)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rstmpsystemjumpssuper;
