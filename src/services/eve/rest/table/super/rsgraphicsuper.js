//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Eveservice from '../../../../eveservice.js';
import { Graphicpk } from '../../../../../data/eve/table/super/graphicsuper.js';
import Graphic from '../../../../../data/eve/table/graphic.js';
import GraphicJson from '../conversion/graphicjson.js';


class Rsgraphicsuper extends Eveservice {	

  static restserviceselect = 'rsgraphic_select';
  static restserviceinsert = 'rsgraphic_insert';
  static restserviceupdate = 'rsgraphic_update';
  static restservicedelete = 'rsgraphic_delete';

  //SELECT OPERATIONS
  static SELECT_GRAPHIC = 2;
  static SELECT_Siteusergroup = 100 + 0;

  //UPDATE OPERATIONS
  static UPDATE_GRAPHIC = 10;

  //INSERT OPERATIONS
  static INSERT_GRAPHIC = 20;

  //DELETE OPERATIONS
  static DELETE_GRAPHIC = 30;

  static extractDataArray = (jsonarray): Graphic[] => {
    let graphics: [] = [];
    for(let i = 0; i < jsonarray.length; i++) {
      graphics.push(GraphicJson.fromJSON(jsonarray[i]));
    }
    return graphics;
  }

  static extractDataObject = (jsonobject): Graphic => {
    return GraphicJson.fromJSON(jsonobject);
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

  static getOne = async (user, graphicpk: Graphicpk): Graphic => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_GRAPHIC,
      "graphicpk": GraphicJson.PKtoJSON(graphicpk)
    }
    return this.extractDataObject(await super.post(this.restserviceselect, postdata));
  }

  static search = async (user, graphicsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCH,
      "search": graphicsearcher.toJSON()
    }
    return this.extractDataArray(await super.post(this.restserviceselect, postdata));
  }

  static searchcount = async (user, graphicsearcher) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.SELECT_SEARCHCOUNT,
      "search": graphicsearcher.toJSON()
    }
    return this.extractDataCount(await super.post(this.restserviceselect, postdata));
  }

  static insert = async (user, graphic: Graphic) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.INSERT_GRAPHIC,
      "graphic": GraphicJson.toJSON(graphic)
    }
    return await super.post(this.restserviceinsert, postdata);
  }

  static save = async (user, graphic: Graphic) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.UPDATE_GRAPHIC,
      "graphic": GraphicJson.toJSON(graphic)
    }
    return await super.post(this.restserviceupdate, postdata);
  }

  static del = async (user, graphic: Graphic) => {
    const postdata = {
      auth: user===null ? null : user.auth,
      operation: this.DELETE_GRAPHIC,
      "graphic": GraphicJson.toJSON(graphic)
    }
    return await super.post(this.restservicedelete, postdata);
  }

}

export default Rsgraphicsuper;
