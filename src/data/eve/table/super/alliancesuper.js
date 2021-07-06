//Auto generated code
//don't change things here, it will be overwritten
//extend classes in alliance.ts for table class definitions
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 4.6.2021 14:41
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

export class Alliancepk {
    id: string = '';
    getId = () => {
        return this.id;
    }
	init = () => {
		this.id = '';
	}
}

class Alliancesuper {
	constructor() { }
	tablename: string = 'alliance';
	PK: Alliancepk = new Alliancepk();
	id = () => {
		if(this.PK===null) return '';
		else return this.PK.id;
	}
	corporationCreatorcorporationPK: Corporationcreatorcorporationpk = null;
	corporationExecutorcorporationPK: Corporationexecutorcorporationpk = null;
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getId();
		}
		return result;
	}
	name = '';
	creator: string = '';
	date_founded = '';
	ticker = '';
	faction_id: string = '';
}

export class Alliancesearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.id);
		this.addFieldsearcher(this.name);
		this.addFieldsearcher(this.creator);
		this.addFieldsearcher(this.date_founded);
		this.addFieldsearcher(this.ticker);
		this.addFieldsearcher(this.faction_id);
        this.addKeysearcher(this.corporationCreatorcorporationsearcher);
        this.addKeysearcher(this.corporationExecutorcorporationsearcher);
	}

    filtermodel: null;
    id: Numbersearcher = new Numbersearcher("alliance.id");
    name: Stringsearcher = new Stringsearcher("alliance.name");
    creator: Numbersearcher = new Numbersearcher("alliance.creator");
    date_founded: Stringsearcher = new Stringsearcher("alliance.date_founded");
    ticker: Stringsearcher = new Stringsearcher("alliance.ticker");
    faction_id: Numbersearcher = new Numbersearcher("alliance.faction_id");
    corporationCreatorcorporationsearcher: Foreignkeysearcher = new Foreignkeysearcher();
    corporationExecutorcorporationsearcher: Foreignkeysearcher = new Foreignkeysearcher();

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
    addcreators = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.creator.values = this.creator.values.concat(numvalues);
    	this.creator.operators = this.creator.operators.concat(operators);
    }
    adddate_foundeds = (values) => {
    	this.date_founded.values = this.date_founded.values.concat(values);
    }
    addtickers = (values) => {
    	this.ticker.values = this.ticker.values.concat(values);
    }
    addfaction_ids = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.faction_id.values = this.faction_id.values.concat(numvalues);
    	this.faction_id.operators = this.faction_id.operators.concat(operators);
    }
    setcorporationCreatorcorporation = (corporationsearch) => {
        this.corporationCreatorcorporationsearcher.setTablesearch(corporationsearch);
    }
    setcorporationExecutorcorporation = (corporationsearch) => {
        this.corporationExecutorcorporationsearcher.setTablesearch(corporationsearch);
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
                "corporationCreatorcorporationsearcher": null,
                "corporationExecutorcorporationsearcher": null,
            }; 
            if(this.corporationCreatorcorporationsearcher!=null && this.corporationCreatorcorporationsearcher.used()) {
                kss.corporationCreatorcorporationsearcher = this.corporationCreatorcorporationsearcher.toJSON();
            }
            if(this.corporationExecutorcorporationsearcher!=null && this.corporationExecutorcorporationsearcher.used()) {
                kss.corporationExecutorcorporationsearcher = this.corporationExecutorcorporationsearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Alliancesuper;
