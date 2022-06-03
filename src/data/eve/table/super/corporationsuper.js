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
import {Stationpk} from './stationsuper.js';
import {Factionpk} from './factionsuper.js';
import {Alliancepk} from './alliancesuper.js';

export class Corporationpk {
    id: string = '';
    getId = () => {
        return this.id;
    }
	init = () => {
		this.id = '';
	}
}

class Corporationsuper {
	constructor() { }
	tablename: string = 'corporation';
	PK: Corporationpk = new Corporationpk();
	id = () => {
		if(this.PK===null) return '';
		else return this.PK.id;
	}
	stationPK: Stationpk = null;
	factionPK: Factionpk = null;
	alliancePK: Alliancepk = null;
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getId();
		}
		return result;
	}
	name = '';
	ceo: string = '';
	creator: string = '';
	member_count: number = 0;
	tax_rate: number = 0;
	ticker = '';
	date_founded = '';
	description = '';
	shares: number = 0;
	url = '';
	war_eligible: boolean = false;
}

export class Corporationsearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.id);
		this.addFieldsearcher(this.name);
		this.addFieldsearcher(this.ceo);
		this.addFieldsearcher(this.creator);
		this.addFieldsearcher(this.member_count);
		this.addFieldsearcher(this.tax_rate);
		this.addFieldsearcher(this.ticker);
		this.addFieldsearcher(this.date_founded);
		this.addFieldsearcher(this.description);
		this.addFieldsearcher(this.shares);
		this.addFieldsearcher(this.url);
		this.addFieldsearcher(this.war_eligible);
        this.addKeysearcher(this.stationsearcher);
        this.addKeysearcher(this.factionsearcher);
        this.addKeysearcher(this.alliancesearcher);
	}

    filtermodel: null;
    id: Numbersearcher = new Numbersearcher("corporation.id");
    name: Stringsearcher = new Stringsearcher("corporation.name");
    ceo: Numbersearcher = new Numbersearcher("corporation.ceo");
    creator: Numbersearcher = new Numbersearcher("corporation.creator");
    member_count: Numbersearcher = new Numbersearcher("corporation.member_count");
    tax_rate: Numbersearcher = new Numbersearcher("corporation.tax_rate");
    ticker: Stringsearcher = new Stringsearcher("corporation.ticker");
    date_founded: Stringsearcher = new Stringsearcher("corporation.date_founded");
    description: Stringsearcher = new Stringsearcher("corporation.description");
    shares: Numbersearcher = new Numbersearcher("corporation.shares");
    url: Stringsearcher = new Stringsearcher("corporation.url");
    war_eligible: Booleansearcher = new Booleansearcher("corporation.war_eligible");
    stationsearcher: Foreignkeysearcher = new Foreignkeysearcher();
    factionsearcher: Foreignkeysearcher = new Foreignkeysearcher();
    alliancesearcher: Foreignkeysearcher = new Foreignkeysearcher();

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
    addceos = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.ceo.values = this.ceo.values.concat(numvalues);
    	this.ceo.operators = this.ceo.operators.concat(operators);
    }
    addcreators = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.creator.values = this.creator.values.concat(numvalues);
    	this.creator.operators = this.creator.operators.concat(operators);
    }
    addmember_counts = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.member_count.values = this.member_count.values.concat(numvalues);
    	this.member_count.operators = this.member_count.operators.concat(operators);
    }    
    addtax_rates = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.tax_rate.values = this.tax_rate.values.concat(numvalues);
    	this.tax_rate.operators = this.tax_rate.operators.concat(operators);
    }
    addtickers = (values) => {
    	this.ticker.values = this.ticker.values.concat(values);
    }
    adddate_foundeds = (values) => {
    	this.date_founded.values = this.date_founded.values.concat(values);
    }
    adddescriptions = (values) => {
    	this.description.values = this.description.values.concat(values);
    }
    addsharess = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.shares.values = this.shares.values.concat(numvalues);
    	this.shares.operators = this.shares.operators.concat(operators);
    }    
    addurls = (values) => {
    	this.url.values = this.url.values.concat(values);
    }
    addwar_eligible = (value) => {
    	this.war_eligible.values = [value];
    }
    setstation = (stationsearch) => {
        this.stationsearcher.setTablesearch(stationsearch);
    }
    setfaction = (factionsearch) => {
        this.factionsearcher.setTablesearch(factionsearch);
    }
    setalliance = (alliancesearch) => {
        this.alliancesearcher.setTablesearch(alliancesearch);
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
                "stationsearcher": null,
                "factionsearcher": null,
                "alliancesearcher": null,
            }; 
            if(this.stationsearcher!=null && this.stationsearcher.used()) {
                kss.stationsearcher = this.stationsearcher.toJSON();
            }
            if(this.factionsearcher!=null && this.factionsearcher.used()) {
                kss.factionsearcher = this.factionsearcher.toJSON();
            }
            if(this.alliancesearcher!=null && this.alliancesearcher.used()) {
                kss.alliancesearcher = this.alliancesearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Corporationsuper;
