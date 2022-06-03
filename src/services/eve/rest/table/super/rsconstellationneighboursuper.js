//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Constellationneighbourpk } from '../../../../../data/eve/table/super/constellationneighboursuper.js';
import Constellationneighbour from '../../../../../data/eve/table/constellationneighbour.js';
import ConstellationneighbourJson from '../conversion/constellationneighbourjson.js';
import { Constellationpk } from '../../../../../data/eve/table/super/constellationsuper.js';
import ConstellationJson from '../conversion/constellationjson.js';


class Rsconstellationneighboursuper extends Eveservice {	

  static restserviceselect = 'rsconstellation_neighbour_select';
  static restserviceinsert = 'rsconstellation_neighbour_insert';
  static restserviceupdate = 'rsconstellation_neighbour_update';
  static restservicedelete = 'rsconstellation_neighbour_delete';

  //SELECT OPERATIONS
  static SELECT_CONSTELLATIONNEIGHBOUR = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Constellationneighbour = 100 + 0;
  static SELECT_Constellationconstellation = 100 + 1;

  //UPDATE OPERATIONS
  static UPDATE_CONSTELLATIONNEIGHBOUR = 10;

  //INSERT OPERATIONS
  static INSERT_CONSTELLATIONNEIGHBOUR = 20;

  //DELETE OPERATIONS
  static DELETE_Constellationneighbour = 100 + 2;
  static DELETE_Constellationconstellation = 100 + 3;
  static DELETE_CONSTELLATIONNEIGHBOUR = 30;

  static extractDataArray = (jsonarray): Constellationneighbour[] => {
    let constellationneighbours: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      constellationneighbours.push(ConstellationneighbourJson.fromJSON(jsonarray[i]));
    }
    return constellationneighbours;
  }

  static extractDataObject = (jsonobject): Constellationneighbour => {
    return ConstellationneighbourJson.fromJSON(jsonobject);
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

  static getOne = async (user, constellationneighbourpk: Constellationneighbourpk): Constellationneighbour => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_CONSTELLATIONNEIGHBOUR,
      "constellation_neighbourpk": ConstellationneighbourJson.PKtoJSON(constellationneighbourpk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadConstellationneighbours4constellationNeighbour = async (user, constellationpk: Constellationneighbourpk): Constellationneighbour[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Constellationneighbour,
      "constellationpk": ConstellationJson.PKtoJSON(constellationpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadConstellationneighbours4constellationConstellation = async (user, constellationpk: Constellationneighbourpk): Constellationneighbour[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Constellationconstellation,
      "constellationpk": ConstellationJson.PKtoJSON(constellationpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, constellationneighboursearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": constellationneighboursearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, constellationneighboursearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": constellationneighboursearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, constellationneighbour: Constellationneighbour) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_CONSTELLATIONNEIGHBOUR,
      "constellation_neighbour": ConstellationneighbourJson.toJSON(constellationneighbour)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, constellationneighbour: Constellationneighbour) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_CONSTELLATIONNEIGHBOUR,
      "constellation_neighbour": ConstellationneighbourJson.toJSON(constellationneighbour)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, constellationneighbour: Constellationneighbour) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_CONSTELLATIONNEIGHBOUR,
      "constellation_neighbour": ConstellationneighbourJson.toJSON(constellationneighbour)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsconstellationneighboursuper;
