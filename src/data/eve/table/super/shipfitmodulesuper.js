//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 17.11.2021 15:34
    Author     : Franky Laseure
*/

import Tablesearch from '../../../search/tablesearch.js';
import Datesearcher from '../../../search/datesearcher.js';
import Timesearcher from '../../../search/timesearcher.js';
import Numbersearcher from '../../../search/numbersearcher.js';
import Booleansearcher from '../../../search/booleansearcher.js';
import Stringsearcher from '../../../search/stringsearcher.js';
import Foreignkeysearcher from '../../../search/foreignkeysearcher.js';
import Primarykeysearcher from '../../../search/primarykeysearcher.js';
import Relationalkeysearcher from '../../../search/relationalkeysearcher.js';
import {Evetypepk} from './evetypesuper.js';
import {Shipfitpk} from './shipfitsuper.js';

export class Shipfitmodulepk {
	evetypePK: Evetypepk = null;
	shipfitPK: Shipfitpk = null;
	username = () => {
		if(this.shipfitPK===null) return '';
		else return this.shipfitPK.getUsername();
	}
	getUsername = () => {
		if(this.shipfitPK===null) return '';
		else return this.shipfitPK.getUsername();
	}
	shipname = () => {
		if(this.shipfitPK===null) return '';
		else return this.shipfitPK.getShipname();
	}
	getShipname = () => {
		if(this.shipfitPK===null) return '';
		else return this.shipfitPK.getShipname();
	}
	moduletype = () => {
		if(this.evetypePK===null) return '';
		else return this.evetypePK.getId();
	}
	getModuletype = () => {
		if(this.evetypePK===null) return '';
		else return this.evetypePK.getId();
	}
	init = () => {
		this.evetypePK = new Evetypepk();
		this.shipfitPK = new Shipfitpk();
	}
}

class Shipfitmodulesuper {
	constructor() { }
	tablename: string = 'shipfitmodule';
	PK: Shipfitmodulepk = new Shipfitmodulepk();
	username = () => {
		if(this.PK===null) return '';
		else return this.PK.username;
	}
	shipname = () => {
		if(this.PK===null) return '';
		else return this.PK.shipname;
	}
	moduletype = () => {
		if(this.PK===null) return '';
		else return this.PK.moduletype;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getUsername() + " " + this.PK.getShipname() + " " + this.PK.getModuletype();
		}
		return result;
	}
	amount: number = 0;
}

export class Shipfitmodulesearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.amount);
        this.addKeysearcher(this.evetypesearcher);
        this.addKeysearcher(this.shipfitsearcher);
	}

    filtermodel: null;
    amount: Numbersearcher = new Numbersearcher("shipfitmodule.amount");
    evetypesearcher: Foreignkeysearcher = new Foreignkeysearcher();
    shipfitsearcher: Foreignkeysearcher = new Foreignkeysearcher();

    addamounts = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.amount.values = this.amount.values.concat(numvalues);
    	this.amount.operators = this.amount.operators.concat(operators);
    }    
    setevetype = (evetypesearch) => {
        this.evetypesearcher.setTablesearch(evetypesearch);
    }
    setshipfit = (shipfitsearch) => {
        this.shipfitsearcher.setTablesearch(shipfitsearch);
    }

    toJSON = () => {
        let jsonobj = {
        	"andor": this.andoroperator,
        	"maxresults": this.maxresults,
        	"docount": this.docount,
        	"primarykeys": [],
        	"fields": {},
        	"keysearch": {}
        }; 
        if(this.used()) {
            //primarykeys not implemented yet
            jsonobj.primarykeys = [];
            let i=0;
            for(i=0; i<this.fieldsearchers.length; i++) {
                var fieldsearcher = this.fieldsearchers[i];
                if(fieldsearcher.used()) {
                    jsonobj.fields[fieldsearcher.getshortname()] = fieldsearcher.toJSON();
                }
            }
            var kss = {
                "evetypesearcher": null,
                "shipfitsearcher": null,
            }; 
            if(this.evetypesearcher!=null && this.evetypesearcher.used()) {
                kss.evetypesearcher = this.evetypesearcher.toJSON();
            }
            if(this.shipfitsearcher!=null && this.shipfitsearcher.used()) {
                kss.shipfitsearcher = this.shipfitsearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Shipfitmodulesuper;
