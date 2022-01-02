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

    static getships = async (username, shipname) => {
        const postdata = {
          operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_SHIPS }
        }
        return super.extractDataArray(await super.post(this.restservice, postdata));
    }

    static getmodules = async (username, shipname) => {
        const postdata = {
          operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_MODULES }
        }
        return super.extractDataArray(await super.post(this.restservice, postdata));
    }

    static getcharges = async (username, shipname) => {
        const postdata = {
          operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_CHARGES }
        }
        return super.extractDataArray(await super.post(this.restservice, postdata));
    }

    static getdrones = async (username, shipname) => {
        const postdata = {
          operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_DRONES }
        }
        return super.extractDataArray(await super.post(this.restservice, postdata));
    }

    static getdeployables = async (username, shipname) => {
        const postdata = {
          operation: { type: super.OPERATIONTYPE_SELECT, operation: this.SELECT_DEPLOYABLES }
        }
        return super.extractDataArray(await super.post(this.restservice, postdata));
    }
}

export default Rsviewevetypes;
