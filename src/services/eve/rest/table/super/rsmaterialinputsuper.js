//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Materialinputpk } from '../../../../../data/eve/table/super/materialinputsuper.js';
import Materialinput from '../../../../../data/eve/table/materialinput.js';
import MaterialinputJson from '../conversion/materialinputjson.js';
import { Evetypepk } from '../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../conversion/evetypejson.js';


class Rsmaterialinputsuper extends Eveservice {	

  static restserviceselect = 'rsmaterialinput_select';
  static restserviceinsert = 'rsmaterialinput_insert';
  static restserviceupdate = 'rsmaterialinput_update';
  static restservicedelete = 'rsmaterialinput_delete';

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

  static getOne = async (user, materialinputpk: Materialinputpk): Materialinput => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_MATERIALINPUT,
      "materialinputpk": MaterialinputJson.PKtoJSON(materialinputpk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadMaterialinputs4evetype = async (user, evetypepk: Materialinputpk): Materialinput[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Evetype,
      "evetypepk": EvetypeJson.PKtoJSON(evetypepk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, materialinputsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": materialinputsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, materialinputsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": materialinputsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, materialinput: Materialinput) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_MATERIALINPUT,
      "materialinput": MaterialinputJson.toJSON(materialinput)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, materialinput: Materialinput) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_MATERIALINPUT,
      "materialinput": MaterialinputJson.toJSON(materialinput)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, materialinput: Materialinput) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_MATERIALINPUT,
      "materialinput": MaterialinputJson.toJSON(materialinput)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsmaterialinputsuper;
