//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Locationpk } from '../../../../../data/eve/table/super/locationsuper.js';
import Location from '../../../../../data/eve/table/location.js';
import LocationJson from '../conversion/locationjson.js';
import { Systempk } from '../../../../../data/eve/table/super/systemsuper.js';
import SystemJson from '../conversion/systemjson.js';


class Rslocationsuper extends Eveservice {	

  static restserviceselect = 'rslocation_select';
  static restserviceinsert = 'rslocation_insert';
  static restserviceupdate = 'rslocation_update';
  static restservicedelete = 'rslocation_delete';

  //SELECT OPERATIONS
  static SELECT_LOCATION = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_System = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_LOCATION = 10;

  //INSERT OPERATIONS
  static INSERT_LOCATION = 20;

  //DELETE OPERATIONS
  static DELETE_System = 100 + 1;
  static DELETE_LOCATION = 30;

  static extractDataArray = (jsonarray): Location[] => {
    let locations: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      locations.push(LocationJson.fromJSON(jsonarray[i]));
    }
    return locations;
  }

  static extractDataObject = (jsonobject): Location => {
    return LocationJson.fromJSON(jsonobject);
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

  static getOne = async (user, locationpk: Locationpk): Location => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_LOCATION,
      "locationpk": LocationJson.PKtoJSON(locationpk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadLocations4system = async (user, systempk: Locationpk): Location[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_System,
      "systempk": SystemJson.PKtoJSON(systempk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, locationsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": locationsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, locationsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": locationsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, location: Location) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_LOCATION,
      "location": LocationJson.toJSON(location)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, location: Location) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_LOCATION,
      "location": LocationJson.toJSON(location)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, location: Location) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_LOCATION,
      "location": LocationJson.toJSON(location)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rslocationsuper;
