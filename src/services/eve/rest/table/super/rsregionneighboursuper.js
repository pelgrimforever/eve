//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Regionneighbourpk } from '../../../../../data/eve/table/super/regionneighboursuper.js';
import Regionneighbour from '../../../../../data/eve/table/regionneighbour.js';
import RegionneighbourJson from '../conversion/regionneighbourjson.js';
import { Regionpk } from '../../../../../data/eve/table/super/regionsuper.js';
import RegionJson from '../conversion/regionjson.js';


class Rsregionneighboursuper extends Eveservice {	

  static restserviceselect = 'rsregion_neighbour_select';
  static restserviceinsert = 'rsregion_neighbour_insert';
  static restserviceupdate = 'rsregion_neighbour_update';
  static restservicedelete = 'rsregion_neighbour_delete';

  //SELECT OPERATIONS
  static SELECT_REGIONNEIGHBOUR = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Regionregion = 100 + 0;
  static SELECT_Regionneighbour = 100 + 1;

  //UPDATE OPERATIONS
  static UPDATE_REGIONNEIGHBOUR = 10;

  //INSERT OPERATIONS
  static INSERT_REGIONNEIGHBOUR = 20;

  //DELETE OPERATIONS
  static DELETE_Regionregion = 100 + 2;
  static DELETE_Regionneighbour = 100 + 3;
  static DELETE_REGIONNEIGHBOUR = 30;

  static extractDataArray = (jsonarray): Regionneighbour[] => {
    let regionneighbours: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      regionneighbours.push(RegionneighbourJson.fromJSON(jsonarray[i]));
    }
    return regionneighbours;
  }

  static extractDataObject = (jsonobject): Regionneighbour => {
    return RegionneighbourJson.fromJSON(jsonobject);
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

  static getOne = async (user, regionneighbourpk: Regionneighbourpk): Regionneighbour => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_REGIONNEIGHBOUR,
      "region_neighbourpk": RegionneighbourJson.PKtoJSON(regionneighbourpk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadRegionneighbours4regionRegion = async (user, regionpk: Regionneighbourpk): Regionneighbour[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Regionregion,
      "regionpk": RegionJson.PKtoJSON(regionpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadRegionneighbours4regionNeighbour = async (user, regionpk: Regionneighbourpk): Regionneighbour[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Regionneighbour,
      "regionpk": RegionJson.PKtoJSON(regionpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, regionneighboursearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": regionneighboursearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, regionneighboursearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": regionneighboursearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, regionneighbour: Regionneighbour) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_REGIONNEIGHBOUR,
      "region_neighbour": RegionneighbourJson.toJSON(regionneighbour)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, regionneighbour: Regionneighbour) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_REGIONNEIGHBOUR,
      "region_neighbour": RegionneighbourJson.toJSON(regionneighbour)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, regionneighbour: Regionneighbour) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_REGIONNEIGHBOUR,
      "region_neighbour": RegionneighbourJson.toJSON(regionneighbour)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsregionneighboursuper;
