//Auto generated code
//don't change things here, it will be overwritten
//redefine classes in graphic.service.ts
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 18.6.2021 14:35
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Graphicpk } from '../../../../../data/eve/table/super/graphicsuper.js';
import Graphic from '../../../../../data/eve/table/graphic.js';
import GraphicJson from '../conversion/graphicjson.js';


class Rsgraphicsuper extends Eveservice {	

	static restservice = 'rsgraphic';

	//SELECT OPERATIONS
	static SELECT_GRAPHIC = 2;
	static SELECT_Siteusergroup = 100 + 0;

	//UPDATE OPERATIONS
	static UPDATE_GRAPHIC = 10;

	//INSERT OPERATIONS
	static INSERT_GRAPHIC = 20;

	//DELETE OPERATIONS
	static DELETE_GRAPHIC = 30;

	static extractDataArray = (jsonarray): Graphic[] => {
		let graphics: [] = [];
		for(let i = 0; i < jsonarray.length; i++) {
			graphics.push(GraphicJson.fromJSON(jsonarray[i]));
		}
   	return graphics;
	}

	static extractDataObject = (jsonobject): Graphic => {
    return GraphicJson.fromJSON(jsonobject);
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

	static getOne = async (graphicpk: Graphicpk): Graphic => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_GRAPHIC },
      "graphicpk": GraphicJson.PKtoJSON(graphicpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static search = async (graphicsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCH },
     	"search": graphicsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static searchcount = async (graphicsearcher) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": graphicsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static insert = async (graphic: Graphic) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_INSERT, operation: this.INSERT_GRAPHIC },
     	"graphic": GraphicJson.toJSON(graphic)
    }
    return await super.post(this.restservice, postdata);
	}

	static save = async (graphic: Graphic) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_UPDATE, operation: this.UPDATE_GRAPHIC },
     	"graphic": GraphicJson.toJSON(graphic)
    }
    return await super.post(this.restservice, postdata);
	}

	static del = async (graphic: Graphic) => {
    const postdata = {
      operation: { type: super.OPERATIONTYPE_DELETE, operation: this.DELETE_GRAPHIC },
     	"graphic": GraphicJson.toJSON(graphic)
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

	static sec_getOne = async (user, graphicpk: Graphicpk): Graphic => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_GRAPHIC },
      "graphicpk": GraphicJson.PKtoJSON(graphicpk)
    }
    return this.extractDataObject(await super.post(this.restservice, postdata));
	}

	static sec_search = async (user, graphicsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCH },
     	"search": graphicsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restservice, postdata));
  }

	static sec_searchcount = async (user, graphicsearcher) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SEARCHCOUNT },
     	"search": graphicsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restservice, postdata));
	}

	static sec_insert = async (user, graphic: Graphic) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREINSERT, operation: this.INSERT_GRAPHIC },
     	"graphic": GraphicJson.toJSON(graphic)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_save = async (user, graphic: Graphic) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREUPDATE, operation: this.UPDATE_GRAPHIC },
     	"graphic": GraphicJson.toJSON(graphic)
    }
    return await super.post(this.restservice, postdata);
	}

	static sec_del = async (user, graphic: Graphic) => {
    const postdata = {
    	auth: user===null ? null : user.auth,
      operation: { type: super.OPERATIONTYPE_SECUREDELETE, operation: this.DELETE_GRAPHIC },
     	"graphic": GraphicJson.toJSON(graphic)
    }
    return await super.post(this.restservice, postdata);
	}

//SECURE SECTION END

}

export default Rsgraphicsuper;
