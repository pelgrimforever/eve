//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in Rsviewevetypessuper
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 18.11.2021 18:23
    Author     : Franky Laseure
*/

import Rsviewevetypessuper from './super/rsviewevetypessuper';

class Rsviewevetypes extends Rsviewevetypessuper {

    static SELECT_SHIPS = 2;
    static SELECT_MODULES = 3;
    static SELECT_CHARGES = 4;
    static SELECT_DRONES = 5;
    static SELECT_DEPLOYABLES = 6;
    static SELECT_MINERALS = 7;
    static SELECT_SALVAGED = 8;
    static SELECT_BLEUPRINT = 9;

    static getships = async () => {
        const postdata = {
          operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SHIPS }
        }
        return super.extractDataArray(await super.post(this.restservice, postdata));
    }

    static getmodules = async () => {
        const postdata = {
          operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_MODULES }
        }
        return super.extractDataArray(await super.post(this.restservice, postdata));
    }

    static getcharges = async () => {
        const postdata = {
          operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_CHARGES }
        }
        return super.extractDataArray(await super.post(this.restservice, postdata));
    }

    static getdrones = async () => {
        const postdata = {
          operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_DRONES }
        }
        return super.extractDataArray(await super.post(this.restservice, postdata));
    }

    static getdeployables = async () => {
        const postdata = {
          operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_DEPLOYABLES }
        }
        return super.extractDataArray(await super.post(this.restservice, postdata));
    }

    static getminerals = async () => {
        const postdata = {
          operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_MINERALS }
        }
        return super.extractDataArray(await super.post(this.restservice, postdata));
    }

    static getsalvagedmaterials = async () => {
        const postdata = {
          operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SALVAGED }
        }
        return super.extractDataArray(await super.post(this.restservice, postdata));
    }

    static getblueprints = async (searchstring) => {
        const postdata = {
          operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_BLEUPRINT },
          searchstring: searchstring
        }
        return super.extractDataArray(await super.post(this.restservice, postdata));
    }

}

export default Rsviewevetypes;
