//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Constellationpk } from '../../../../../data/eve/table/super/constellationsuper.js';
import Constellation from '../../../../../data/eve/table/constellation.js';
import ConstellationJson from '../conversion/constellationjson.js';
import { Regionpk } from '../../../../../data/eve/table/super/regionsuper.js';
import RegionJson from '../conversion/regionjson.js';
import { Constellationneighbourpk } from '../../../../../data/eve/table/super/constellationneighboursuper.js';
import ConstellationneighbourJson from '../conversion/constellationneighbourjson.js';


class Rsconstellationsuper extends Eveservice {	

  static restserviceselect = 'rsconstellation_select';
  static restserviceinsert = 'rsconstellation_insert';
  static restserviceupdate = 'rsconstellation_update';
  static restservicedelete = 'rsconstellation_delete';

  //SELECT OPERATIONS
  static SELECT_CONSTELLATION = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Region = 100 + 0;
  static SELECT_Constellationneighbourneighbour = 100 + 1;
  static SELECT_Constellationneighbourconstellation = 100 + 2;

  //UPDATE OPERATIONS
  static UPDATE_CONSTELLATION = 10;

  //INSERT OPERATIONS
  static INSERT_CONSTELLATION = 20;

  //DELETE OPERATIONS
  static DELETE_Region = 100 + 3;
  static DELETE_CONSTELLATION = 30;

  static extractDataArray = (jsonarray): Constellation[] => {
    let constellations: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      constellations.push(ConstellationJson.fromJSON(jsonarray[i]));
    }
    return constellations;
  }

  static extractDataObject = (jsonobject): Constellation => {
    return ConstellationJson.fromJSON(jsonobject);
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

  static getOne = async (user, constellationpk: Constellationpk): Constellation => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_CONSTELLATION,
      "constellationpk": ConstellationJson.PKtoJSON(constellationpk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadConstellations4region = async (user, regionpk: Constellationpk): Constellation[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Region,
      "regionpk": RegionJson.PKtoJSON(regionpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadConstellation4constellationneighbourNeighbour = async (user, constellationneighbourNeighbourpk: Constellationneighbourpk): Constellation[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Constellationneighbourneighbour,
      "constellation_neighbourpk": ConstellationneighbourJson.PKtoJSON(constellationneighbourNeighbourpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadConstellation4constellationneighbourConstellation = async (user, constellationneighbourConstellationpk: Constellationneighbourpk): Constellation[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Constellationneighbourconstellation,
      "constellation_neighbourpk": ConstellationneighbourJson.PKtoJSON(constellationneighbourConstellationpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, constellationsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": constellationsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, constellationsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": constellationsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, constellation: Constellation) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_CONSTELLATION,
      "constellation": ConstellationJson.toJSON(constellation)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, constellation: Constellation) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_CONSTELLATION,
      "constellation": ConstellationJson.toJSON(constellation)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, constellation: Constellation) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_CONSTELLATION,
      "constellation": ConstellationJson.toJSON(constellation)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsconstellationsuper;
