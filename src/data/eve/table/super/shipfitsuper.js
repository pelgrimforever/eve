//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 19.11.2021 16:16
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

export class Shipfitpk {
    username: string = '';
    getUsername = () => {
        return this.username;
    }
    shipname: string = '';
    getShipname = () => {
        return this.shipname;
    }
	init = () => {
		this.username = "";
		this.shipname = "";
	}
}

class Shipfitsuper {
	constructor() { }
	tablename: string = 'shipfit';
	PK: Shipfitpk = new Shipfitpk();
	username = () => {
		if(this.PK===null) return '';
		else return this.PK.username;
	}
	shipname = () => {
		if(this.PK===null) return '';
		else return this.PK.shipname;
	}
	evetypePK: Evetypepk = null;
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getUsername() + " " + this.PK.getShipname();
		}
		return result;
	}
}

export class Shipfitsearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.username);
		this.addFieldsearcher(this.shipname);
        this.addKeysearcher(this.evetypesearcher);
        this.addKeysearcher(this.shipfitmodulesearcher);
        this.addKeysearcher(this.shipfitordersearcher);
	}

    filtermodel: null;
    username: Stringsearcher = new Stringsearcher("shipfit.username");
    shipname: Stringsearcher = new Stringsearcher("shipfit.shipname");
    evetypesearcher: Foreignkeysearcher = new Foreignkeysearcher();
    shipfitmodulesearcher: Primarykeysearcher = new Primarykeysearcher();
    shipfitordersearcher: Primarykeysearcher = new Primarykeysearcher();

    addusernames = (values) => {
    	this.username.values = this.username.values.concat(values);
    }
    addshipnames = (values) => {
    	this.shipname.values = this.shipname.values.concat(values);
    }
    setevetype = (evetypesearch) => {
        this.evetypesearcher.setTablesearch(evetypesearch);
    }
    setshipfitmodule = (shipfitmodulesearch) => {
        this.shipfitmodulesearcher.setTablesearch(shipfitmodulesearch);
    }
    setshipfitorder = (shipfitordersearch) => {
        this.shipfitordersearcher.setTablesearch(shipfitordersearch);
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
                "shipfitmodulesearcher": null,
                "shipfitordersearcher": null,
            }; 
            if(this.evetypesearcher!=null && this.evetypesearcher.used()) {
                kss.evetypesearcher = this.evetypesearcher.toJSON();
            }
            if(this.shipfitmodulesearcher!=null && this.shipfitmodulesearcher.used()) {
                kss.shipfitmodulesearcher = this.shipfitmodulesearcher.toJSON();
            }
            if(this.shipfitordersearcher!=null && this.shipfitordersearcher.used()) {
                kss.shipfitordersearcher = this.shipfitordersearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Shipfitsuper;
