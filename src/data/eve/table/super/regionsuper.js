//Auto generated code
//don't change things here, it will be overwritten
//extend classes in region.ts for table class definitions
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 18.6.2021 14:35
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

export class Regionpk {
    id: string = '';
    getId = () => {
        return this.id;
    }
	init = () => {
		this.id = '';
	}
}

class Regionsuper {
	constructor() { }
	tablename: string = 'region';
	PK: Regionpk = new Regionpk();
	id = () => {
		if(this.PK===null) return '';
		else return this.PK.id;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getId();
		}
		return result;
	}
	name = '';
	noaccess: boolean = false;
	orderpages: number = 0;
	ordererrors: number = 0;
}

export class Regionsearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.id);
		this.addFieldsearcher(this.name);
		this.addFieldsearcher(this.noaccess);
		this.addFieldsearcher(this.orderpages);
		this.addFieldsearcher(this.ordererrors);
        this.addKeysearcher(this.orderhistorysearcher);
        this.addKeysearcher(this.evetypesearcher);
        this.addKeysearcher(this.regionneighbourRegionsearcher);
        this.addKeysearcher(this.regionneighbourNeighboursearcher);
	}

    filtermodel: null;
    id: Numbersearcher = new Numbersearcher("region.id");
    name: Stringsearcher = new Stringsearcher("region.name");
    noaccess: Booleansearcher = new Booleansearcher("region.noaccess");
    orderpages: Numbersearcher = new Numbersearcher("region.orderpages");
    ordererrors: Numbersearcher = new Numbersearcher("region.ordererrors");
    orderhistorysearcher: Primarykeysearcher = new Primarykeysearcher();
    evetypesearcher: Relationalkeysearcher = new Relationalkeysearcher();
    regionneighbourRegionsearcher: Primarykeysearcher = new Primarykeysearcher();
    regionneighbourNeighboursearcher: Primarykeysearcher = new Primarykeysearcher();

    addids = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.id.values = this.id.values.concat(numvalues);
    	this.id.operators = this.id.operators.concat(operators);
    }
    addnames = (values) => {
    	this.name.values = this.name.values.concat(values);
    }
    addnoaccess = (value) => {
    	this.noaccess.values = [value];
    }
    addorderpagess = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.orderpages.values = this.orderpages.values.concat(numvalues);
    	this.orderpages.operators = this.orderpages.operators.concat(operators);
    }    
    addordererrorss = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.ordererrors.values = this.ordererrors.values.concat(numvalues);
    	this.ordererrors.operators = this.ordererrors.operators.concat(operators);
    }    
    setorderhistory = (orderhistorysearch) => {
        this.orderhistorysearcher.setTablesearch(orderhistorysearch);
    }
    setevetype = (evetypesearch) => {
        this.evetypesearcher.setTablesearch(evetypesearch);
    }
    setregionneighbourRegion = (regionneighboursearch) => {
        this.regionneighbourRegionsearcher.setTablesearch(regionneighboursearch);
    }
    setregionneighbourNeighbour = (regionneighboursearch) => {
        this.regionneighbourNeighboursearcher.setTablesearch(regionneighboursearch);
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
                "orderhistorysearcher": null,
                "evetypesearcher": null,
                "regionneighbourRegionsearcher": null,
                "regionneighbourNeighboursearcher": null,
            }; 
            if(this.orderhistorysearcher!=null && this.orderhistorysearcher.used()) {
                kss.orderhistorysearcher = this.orderhistorysearcher.toJSON();
            }
            if(this.evetypesearcher!=null && this.evetypesearcher.used()) {
                kss.evetypesearcher = this.evetypesearcher.toJSON();
            }
            if(this.regionneighbourRegionsearcher!=null && this.regionneighbourRegionsearcher.used()) {
                kss.regionneighbourRegionsearcher = this.regionneighbourRegionsearcher.toJSON();
            }
            if(this.regionneighbourNeighboursearcher!=null && this.regionneighbourNeighboursearcher.used()) {
                kss.regionneighbourNeighboursearcher = this.regionneighbourNeighboursearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Regionsuper;
