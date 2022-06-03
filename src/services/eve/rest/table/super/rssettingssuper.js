//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Settingspk } from '../../../../../data/eve/table/super/settingssuper.js';
import Settings from '../../../../../data/eve/table/settings.js';
import SettingsJson from '../conversion/settingsjson.js';
import { Usersettingspk } from '../../../../../data/eve/table/super/usersettingssuper.js';
import UsersettingsJson from '../conversion/usersettingsjson.js';


class Rssettingssuper extends Eveservice {	

  static restserviceselect = 'rssettings_select';
  static restserviceinsert = 'rssettings_insert';
  static restserviceupdate = 'rssettings_update';
  static restservicedelete = 'rssettings_delete';

  //SELECT OPERATIONS
  static SELECT_SETTINGS = 2;
  static SELECT_Siteusergroup = 100 + 0;
  static SELECT_Usersettings = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_SETTINGS = 10;

  //INSERT OPERATIONS
  static INSERT_SETTINGS = 20;

  //DELETE OPERATIONS
  static DELETE_SETTINGS = 30;

  static extractDataArray = (jsonarray): Settings[] => {
    let settingss: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      settingss.push(SettingsJson.fromJSON(jsonarray[i]));
    }
    return settingss;
  }

  static extractDataObject = (jsonobject): Settings => {
    return SettingsJson.fromJSON(jsonobject);
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

  static getOne = async (user, settingspk: Settingspk): Settings => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SETTINGS,
      "settingspk": SettingsJson.PKtoJSON(settingspk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static loadSettings4usersettings = async (user, usersettingspk: Usersettingspk): Settings[] => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_Usersettings,
      "usersettingspk": UsersettingsJson.PKtoJSON(usersettingspk)
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, settingssearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": settingssearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, settingssearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": settingssearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, settings: Settings) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_SETTINGS,
      "settings": SettingsJson.toJSON(settings)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, settings: Settings) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_SETTINGS,
      "settings": SettingsJson.toJSON(settings)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, settings: Settings) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_SETTINGS,
      "settings": SettingsJson.toJSON(settings)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rssettingssuper;
