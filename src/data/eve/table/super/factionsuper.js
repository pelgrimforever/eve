//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 20.4.2022 10:3
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
import {Systempk} from './systemsuper.js';

export class Factionpk {
    id: string = '';
    getId = () => {
        return this.id;
    }
	init = () => {
		this.id = '';
	}
}

class Factionsuper {
	constructor() { }
	tablename: string = 'faction';
	PK: Factionpk = new Factionpk();
	id = () => {
		if(this.PK===null) return '';
		else return this.PK.id;
	}
	systemPK: Systempk = null;
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getId();
		}
		return result;
	}
	name = '';
	description = '';
	is_unique: boolean = false;
	size_factor: number = 0;
	station_count: number = 0;
	station_system_count: number = 0;
	corporation: string = '';
	militia_corporation: string = '';
}

export class Factionsearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.id);
		this.addFieldsearcher(this.name);
		this.addFieldsearcher(this.description);
		this.addFieldsearcher(this.is_unique);
		this.addFieldsearcher(this.size_factor);
		this.addFieldsearcher(this.station_count);
		this.addFieldsearcher(this.station_system_count);
		this.addFieldsearcher(this.corporation);
		this.addFieldsearcher(this.militia_corporation);
        this.addKeysearcher(this.systemsearcher);
	}

    filtermodel: null;
    id: Numbersearcher = new Numbersearcher("faction.id");
    name: Stringsearcher = new Stringsearcher("faction.name");
    description: Stringsearcher = new Stringsearcher("faction.description");
    is_unique: Booleansearcher = new Booleansearcher("faction.is_unique");
    size_factor: Numbersearcher = new Numbersearcher("faction.size_factor");
    station_count: Numbersearcher = new Numbersearcher("faction.station_count");
    station_system_count: Numbersearcher = new Numbersearcher("faction.station_system_count");
    corporation: Numbersearcher = new Numbersearcher("faction.corporation");
    militia_corporation: Numbersearcher = new Numbersearcher("faction.militia_corporation");
    systemsearcher: Foreignkeysearcher = new Foreignkeysearcher();

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
    adddescriptions = (values) => {
    	this.description.values = this.description.values.concat(values);
    }
    addis_unique = (value) => {
    	this.is_unique.values = [value];
    }
    addsize_factors = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.size_factor.values = this.size_factor.values.concat(numvalues);
    	this.size_factor.operators = this.size_factor.operators.concat(operators);
    }
    addstation_counts = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.station_count.values = this.station_count.values.concat(numvalues);
    	this.station_count.operators = this.station_count.operators.concat(operators);
    }    
    addstation_system_counts = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.station_system_count.values = this.station_system_count.values.concat(numvalues);
    	this.station_system_count.operators = this.station_system_count.operators.concat(operators);
    }    
    addcorporations = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.corporation.values = this.corporation.values.concat(numvalues);
    	this.corporation.operators = this.corporation.operators.concat(operators);
    }
    addmilitia_corporations = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.militia_corporation.values = this.militia_corporation.values.concat(numvalues);
    	this.militia_corporation.operators = this.militia_corporation.operators.concat(operators);
    }
    setsystem = (systemsearch) => {
        this.systemsearcher.setTablesearch(systemsearch);
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
                "systemsearcher": null,
            }; 
            if(this.systemsearcher!=null && this.systemsearcher.used()) {
                kss.systemsearcher = this.systemsearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Factionsuper;
