//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Regionpk } from '../../../../../data/eve/table/super/regionsuper.js';
import Region from '../../../../../data/eve/table/region.js';
import RegionJson from '../conversion/regionjson.js';
import { Orderhistorymonthpk } from '../../../../../data/eve/table/super/orderhistorymonthsuper.js';
import OrderhistorymonthJson from '../conversion/orderhistorymonthjson.js';
import { Orderhistorypk } from '../../../../../data/eve/table/super/orderhistorysuper.js';
import OrderhistoryJson from '../conversion/orderhistoryjson.js';
import { Regionneighbourpk } from '../../../../../data/eve/table/super/regionneighboursuper.js';
import RegionneighbourJson from '../conversion/regionneighbourjson.js';


class Rsregionsuper extends Eveservice {	

  static restserviceselect = 'rsregion_select';
  static restserviceinsert = 'rsregion_insert';
  static restserviceupdate = 'rsregion_update';
  static restservicedelete = 'rsregion_delete';

  //SELECT OPERATIONS
  static SELECT_REGION = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Orderhistorymonth = 100 + 0;
  static SELECT_Orderhistory = 100 + 1;
  static SELECT_Regionneighbourregion = 100 + 2;
  static SELECT_Regionneighbourneighbour = 100 + 3;

  //UPDATE OPERATIONS
  static UPDATE_REGION = 10;

  //INSERT OPERATIONS
  static INSERT_REGION = 20;

  //DELETE OPERATIONS
  static DELETE_REGION = 30;

  static extractDataArray = (jsonarray): Region[] => {
    let regions: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      regions.push(RegionJson.fromJSON(jsonarray[i]));
    }
    return regions;
  }

  static extractDataObject = (jsonobject): Region => {
    return RegionJson.fromJSON(jsonobject);
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

  static getOne = async (user, regionpk: Regionpk): Region => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_REGION,
      "regionpk": RegionJson.PKtoJSON(regionpk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadRegion4orderhistorymonth = async (user, orderhistorymonthpk: Orderhistorymonthpk): Region[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Orderhistorymonth,
      "order_history_monthpk": OrderhistorymonthJson.PKtoJSON(orderhistorymonthpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadRegion4orderhistory = async (user, orderhistorypk: Orderhistorypk): Region[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Orderhistory,
      "order_historypk": OrderhistoryJson.PKtoJSON(orderhistorypk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadRegion4regionneighbourRegion = async (user, regionneighbourRegionpk: Regionneighbourpk): Region[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Regionneighbourregion,
      "region_neighbourpk": RegionneighbourJson.PKtoJSON(regionneighbourRegionpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static loadRegion4regionneighbourNeighbour = async (user, regionneighbourNeighbourpk: Regionneighbourpk): Region[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Regionneighbourneighbour,
      "region_neighbourpk": RegionneighbourJson.PKtoJSON(regionneighbourNeighbourpk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, regionsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": regionsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, regionsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": regionsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, region: Region) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_REGION,
      "region": RegionJson.toJSON(region)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, region: Region) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_REGION,
      "region": RegionJson.toJSON(region)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, region: Region) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_REGION,
      "region": RegionJson.toJSON(region)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsregionsuper;
