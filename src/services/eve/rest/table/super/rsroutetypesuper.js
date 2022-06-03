//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Routetypepk } from '../../../../../data/eve/table/super/routetypesuper.js';
import Routetype from '../../../../../data/eve/table/routetype.js';
import RoutetypeJson from '../conversion/routetypejson.js';
import { Securityislandpk } from '../../../../../data/eve/table/super/securityislandsuper.js';
import SecurityislandJson from '../conversion/securityislandjson.js';


class Rsroutetypesuper extends Eveservice {	

  static restserviceselect = 'rsroutetype_select';
  static restserviceinsert = 'rsroutetype_insert';
  static restserviceupdate = 'rsroutetype_update';
  static restservicedelete = 'rsroutetype_delete';

  //SELECT OPERATIONS
  static SELECT_ROUTETYPE = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Securityisland = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_ROUTETYPE = 10;

  //INSERT OPERATIONS
  static INSERT_ROUTETYPE = 20;

  //DELETE OPERATIONS
  static DELETE_Securityisland = 100 + 1;
  static DELETE_ROUTETYPE = 30;

  static extractDataArray = (jsonarray): Routetype[] => {
    let routetypes: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      routetypes.push(RoutetypeJson.fromJSON(jsonarray[i]));
    }
    return routetypes;
  }

  static extractDataObject = (jsonobject): Routetype => {
    return RoutetypeJson.fromJSON(jsonobject);
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

  static getOne = async (user, routetypepk: Routetypepk): Routetype => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_ROUTETYPE,
      "routetypepk": RoutetypeJson.PKtoJSON(routetypepk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadRoutetypes4securityisland = async (user, securityislandpk: Routetypepk): Routetype[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Securityisland,
      "security_islandpk": SecurityislandJson.PKtoJSON(securityislandpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, routetypesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": routetypesearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, routetypesearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": routetypesearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, routetype: Routetype) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_ROUTETYPE,
      "routetype": RoutetypeJson.toJSON(routetype)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, routetype: Routetype) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_ROUTETYPE,
      "routetype": RoutetypeJson.toJSON(routetype)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, routetype: Routetype) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_ROUTETYPE,
      "routetype": RoutetypeJson.toJSON(routetype)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsroutetypesuper;
