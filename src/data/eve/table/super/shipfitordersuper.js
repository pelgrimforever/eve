//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 22.1.2022 10:55
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
import {Shipfitpk} from './shipfitsuper.js';
import {Evetypepk} from './evetypesuper.js';

export class Shipfitorderpk {
	shipfitPK: Shipfitpk = null;
	evetypePK: Evetypepk = null;
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
	evetype = () => {
		if(this.evetypePK===null) return '';
		else return this.evetypePK.getId();
	}
	getEvetype = () => {
		if(this.evetypePK===null) return '';
		else return this.evetypePK.getId();
	}
	init = () => {
		this.shipfitPK = new Shipfitpk();
		this.evetypePK = new Evetypepk();
	}
}

class Shipfitordersuper {
	constructor() { }
	tablename: string = 'shipfitorder';
	PK: Shipfitorderpk = new Shipfitorderpk();
	username = () => {
		if(this.PK===null) return '';
		else return this.PK.username;
	}
	shipname = () => {
		if(this.PK===null) return '';
		else return this.PK.shipname;
	}
	evetype = () => {
		if(this.PK===null) return '';
		else return this.PK.evetype;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getUsername() + " " + this.PK.getShipname() + " " + this.PK.getEvetype();
		}
		return result;
	}
	amountwanted: number = 0;
	amountinstock: number = 0;
}

export class Shipfitordersearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.amountwanted);
		this.addFieldsearcher(this.amountinstock);
        this.addKeysearcher(this.shipfitsearcher);
        this.addKeysearcher(this.evetypesearcher);
        this.addKeysearcher(this.shipfitorderselectedsearcher);
        this.addKeysearcher(this.orderssearcher);
	}

    filtermodel: null;
    amountwanted: Numbersearcher = new Numbersearcher("shipfitorder.amountwanted");
    amountinstock: Numbersearcher = new Numbersearcher("shipfitorder.amountinstock");
    shipfitsearcher: Foreignkeysearcher = new Foreignkeysearcher();
    evetypesearcher: Foreignkeysearcher = new Foreignkeysearcher();
    shipfitorderselectedsearcher: Primarykeysearcher = new Primarykeysearcher();
    orderssearcher: Relationalkeysearcher = new Relationalkeysearcher();

    addamountwanteds = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.amountwanted.values = this.amountwanted.values.concat(numvalues);
    	this.amountwanted.operators = this.amountwanted.operators.concat(operators);
    }    
    addamountinstocks = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.amountinstock.values = this.amountinstock.values.concat(numvalues);
    	this.amountinstock.operators = this.amountinstock.operators.concat(operators);
    }    
    setshipfit = (shipfitsearch) => {
        this.shipfitsearcher.setTablesearch(shipfitsearch);
    }
    setevetype = (evetypesearch) => {
        this.evetypesearcher.setTablesearch(evetypesearch);
    }
    setshipfitorderselected = (shipfitorderselectedsearch) => {
        this.shipfitorderselectedsearcher.setTablesearch(shipfitorderselectedsearch);
    }
    setorders = (orderssearch) => {
        this.orderssearcher.setTablesearch(orderssearch);
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
                "shipfitsearcher": null,
                "evetypesearcher": null,
                "shipfitorderselectedsearcher": null,
                "orderssearcher": null,
            }; 
            if(this.shipfitsearcher!=null && this.shipfitsearcher.used()) {
                kss.shipfitsearcher = this.shipfitsearcher.toJSON();
            }
            if(this.evetypesearcher!=null && this.evetypesearcher.used()) {
                kss.evetypesearcher = this.evetypesearcher.toJSON();
            }
            if(this.shipfitorderselectedsearcher!=null && this.shipfitorderselectedsearcher.used()) {
                kss.shipfitorderselectedsearcher = this.shipfitorderselectedsearcher.toJSON();
            }
            if(this.orderssearcher!=null && this.orderssearcher.used()) {
                kss.orderssearcher = this.orderssearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Shipfitordersuper;
