//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Rsviewevetypessuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 18.11.2021 18:23
    Author     : Franky Laseure
*/

import Rsviewevetypessuper from './super/rsviewevetypessuper.js';
import ViewevetypesJson from './conversion/viewevetypesjson.js';

class Rsviewevetypes extends Rsviewevetypessuper {

    static SELECT_SHIPS = 2;
    static SELECT_MODULES = 3;
    static SELECT_CHARGES = 4;
    static SELECT_DRONES = 5;
    static SELECT_DEPLOYABLES = 6;
    static SELECT_MINERALS = 7;
    static SELECT_SALVAGED = 8;
    static SELECT_BLEUPRINT = 9;
    static SELECT_BLEUPRINTRESULT = 10;
    static SELECT_COMMODITY = 11;
    static SELECT_MATERIAL = 12;
    static SELECT_PLANETARYCOMMODITY = 13;

    static getships = async (user) => {
        const postdata = {
          auth: user!=null ? user.auth : null,
          operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SHIPS }
        }
        return super.extractDataArray(await super.post(this.restservice, postdata));
    }

    static getmodules = async (user) => {
        const postdata = {
          auth: user!=null ? user.auth : null,
          operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_MODULES }
        }
        return super.extractDataArray(await super.post(this.restservice, postdata));
    }

    static getcharges = async (user) => {
        const postdata = {
          auth: user!=null ? user.auth : null,
          operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_CHARGES }
        }
        return super.extractDataArray(await super.post(this.restservice, postdata));
    }

    static getdrones = async (user) => {
        const postdata = {
          auth: user!=null ? user.auth : null,
          operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_DRONES }
        }
        return super.extractDataArray(await super.post(this.restservice, postdata));
    }

    static getdeployables = async (user) => {
        const postdata = {
          auth: user!=null ? user.auth : null,
          operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_DEPLOYABLES }
        }
        return super.extractDataArray(await super.post(this.restservice, postdata));
    }

    static getminerals = async (user) => {
        const postdata = {
          auth: user!=null ? user.auth : null,
          operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_MINERALS }
        }
        return super.extractDataArray(await super.post(this.restservice, postdata));
    }

    static getsalvagedmaterials = async (user) => {
        const postdata = {
          auth: user!=null ? user.auth : null,
          operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_SALVAGED }
        }
        return super.extractDataArray(await super.post(this.restservice, postdata));
    }

    static getblueprints = async (user, searchstring) => {
        const postdata = {
          auth: user!=null ? user.auth : null,
          operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_BLEUPRINT },
          searchstring: searchstring
        }
        return super.extractDataArray(await super.post(this.restservice, postdata));
    }

    static getblueprintresult = async (user, viewblueprint) => {
        const postdata = {
          auth: user!=null ? user.auth : null,
          operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_BLEUPRINTRESULT },
          viewblueprint: ViewevetypesJson.fromJSON(viewblueprint)
        }
        return super.extractDataObject(await super.post(this.restservice, postdata));
    }

    static getcommodities = async (user, searchstring) => {
        const postdata = {
          auth: user!=null ? user.auth : null,
          operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_COMMODITY },
          searchstring: searchstring
        }
        return super.extractDataArray(await super.post(this.restservice, postdata));
    }

    static getmaterials = async (user, searchstring) => {
        const postdata = {
          auth: user!=null ? user.auth : null,
          operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_MATERIAL },
          searchstring: searchstring
        }
        return super.extractDataArray(await super.post(this.restservice, postdata));
    }

    static getplanetarycommodities = async (user, searchstring) => {
        const postdata = {
          auth: user!=null ? user.auth : null,
          operation: { type: super.OPERATIONTYPE_SECURESELECT, operation: this.SELECT_PLANETARYCOMMODITY },
          searchstring: searchstring
        }
        return super.extractDataArray(await super.post(this.restservice, postdata));
    }

}

export default Rsviewevetypes;
