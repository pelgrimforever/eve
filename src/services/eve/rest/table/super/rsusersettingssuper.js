//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Usersettingspk } from '../../../../../data/eve/table/super/usersettingssuper.js';
import Usersettings from '../../../../../data/eve/table/usersettings.js';
import UsersettingsJson from '../conversion/usersettingsjson.js';
import { Settingspk } from '../../../../../data/eve/table/super/settingssuper.js';
import SettingsJson from '../conversion/settingsjson.js';


class Rsusersettingssuper extends Eveservice {	

  static restserviceselect = 'rsusersettings_select';
  static restserviceinsert = 'rsusersettings_insert';
  static restserviceupdate = 'rsusersettings_update';
  static restservicedelete = 'rsusersettings_delete';

  //SELECT OPERATIONS
  static SELECT_USERSETTINGS = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Settings = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_USERSETTINGS = 10;

  //INSERT OPERATIONS
  static INSERT_USERSETTINGS = 20;

  //DELETE OPERATIONS
  static DELETE_Settings = 100 + 1;
  static DELETE_USERSETTINGS = 30;

  static extractDataArray = (jsonarray): Usersettings[] => {
    let usersettingss: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      usersettingss.push(UsersettingsJson.fromJSON(jsonarray[i]));
    }
    return usersettingss;
  }

  static extractDataObject = (jsonobject): Usersettings => {
    return UsersettingsJson.fromJSON(jsonobject);
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

  static getOne = async (user, usersettingspk: Usersettingspk): Usersettings => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_USERSETTINGS,
      "usersettingspk": UsersettingsJson.PKtoJSON(usersettingspk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadUsersettingss4settings = async (user, settingspk: Usersettingspk): Usersettings[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Settings,
      "settingspk": SettingsJson.PKtoJSON(settingspk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, usersettingssearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": usersettingssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, usersettingssearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": usersettingssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, usersettings: Usersettings) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_USERSETTINGS,
      "usersettings": UsersettingsJson.toJSON(usersettings)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, usersettings: Usersettings) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_USERSETTINGS,
      "usersettings": UsersettingsJson.toJSON(usersettings)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, usersettings: Usersettings) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_USERSETTINGS,
      "usersettings": UsersettingsJson.toJSON(usersettings)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsusersettingssuper;
