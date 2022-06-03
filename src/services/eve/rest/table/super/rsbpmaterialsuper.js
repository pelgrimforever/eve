//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Bpmaterialpk } from '../../../../../data/eve/table/super/bpmaterialsuper.js';
import Bpmaterial from '../../../../../data/eve/table/bpmaterial.js';
import BpmaterialJson from '../conversion/bpmaterialjson.js';
import { Evetypepk } from '../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../conversion/evetypejson.js';


class Rsbpmaterialsuper extends Eveservice {	

  static restserviceselect = 'rsbpmaterial_select';
  static restserviceinsert = 'rsbpmaterial_insert';
  static restserviceupdate = 'rsbpmaterial_update';
  static restservicedelete = 'rsbpmaterial_delete';

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

  static getcount = async (user) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: super.SELECT_COUNT
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static getall = async (user) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: super.SELECT_ALL
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static getOne = async (user, bpmaterialpk: Bpmaterialpk): Bpmaterial => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_BPMATERIAL,
      "bpmaterialpk": BpmaterialJson.PKtoJSON(bpmaterialpk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadBpmaterials4evetypeBp = async (user, evetypepk: Bpmaterialpk): Bpmaterial[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Evetypebp,
      "evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadBpmaterials4evetypeMaterial = async (user, evetypepk: Bpmaterialpk): Bpmaterial[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Evetypematerial,
      "evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, bpmaterialsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": bpmaterialsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, bpmaterialsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": bpmaterialsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, bpmaterial: Bpmaterial) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_BPMATERIAL,
      "bpmaterial": BpmaterialJson.toJSON(bpmaterial)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, bpmaterial: Bpmaterial) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_BPMATERIAL,
      "bpmaterial": BpmaterialJson.toJSON(bpmaterial)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, bpmaterial: Bpmaterial) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_BPMATERIAL,
      "bpmaterial": BpmaterialJson.toJSON(bpmaterial)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsbpmaterialsuper;
