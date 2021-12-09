//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 9.11.2021 14:30
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

export class Systemjumpspk {
	systemSystemendPK: Systempk = null;
	systemSystemstartPK: Systempk = null;
	system_start = () => {
		if(this.systemSystemstartPK===null) return '';
		else return this.systemSystemstartPK.getId();
	}
	getSystem_start = () => {
		if(this.systemSystemstartPK===null) return '';
		else return this.systemSystemstartPK.getId();
	}
	system_end = () => {
		if(this.systemSystemendPK===null) return '';
		else return this.systemSystemendPK.getId();
	}
	getSystem_end = () => {
		if(this.systemSystemendPK===null) return '';
		else return this.systemSystemendPK.getId();
	}
	init = () => {
		this.systemSystemendPK = new Systempk();
		this.systemSystemstartPK = new Systempk();
	}
}

class Systemjumpssuper {
	constructor() { }
	tablename: string = 'systemjumps';
	PK: Systemjumpspk = new Systemjumpspk();
	system_start = () => {
		if(this.PK===null) return '';
		else return this.PK.system_start;
	}
	system_end = () => {
		if(this.PK===null) return '';
		else return this.PK.system_end;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getSystem_start() + " " + this.PK.getSystem_end();
		}
		return result;
	}
	jumps: number = 0;
	jumpslowsec: number = 0;
	jumpsnullsec: number = 0;
	jumpssafe: number = 0;
	jumpssafelowsec: number = 0;
	jumpssafenullsec: number = 0;
}

export class Systemjumpssearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.jumps);
		this.addFieldsearcher(this.jumpslowsec);
		this.addFieldsearcher(this.jumpsnullsec);
		this.addFieldsearcher(this.jumpssafe);
		this.addFieldsearcher(this.jumpssafelowsec);
		this.addFieldsearcher(this.jumpssafenullsec);
        this.addKeysearcher(this.systemSystemendsearcher);
        this.addKeysearcher(this.systemSystemstartsearcher);
	}

    filtermodel: null;
    jumps: Numbersearcher = new Numbersearcher("systemjumps.jumps");
    jumpslowsec: Numbersearcher = new Numbersearcher("systemjumps.jumpslowsec");
    jumpsnullsec: Numbersearcher = new Numbersearcher("systemjumps.jumpsnullsec");
    jumpssafe: Numbersearcher = new Numbersearcher("systemjumps.jumpssafe");
    jumpssafelowsec: Numbersearcher = new Numbersearcher("systemjumps.jumpssafelowsec");
    jumpssafenullsec: Numbersearcher = new Numbersearcher("systemjumps.jumpssafenullsec");
    systemSystemendsearcher: Foreignkeysearcher = new Foreignkeysearcher();
    systemSystemstartsearcher: Foreignkeysearcher = new Foreignkeysearcher();

    addjumpss = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.jumps.values = this.jumps.values.concat(numvalues);
    	this.jumps.operators = this.jumps.operators.concat(operators);
    }    
    addjumpslowsecs = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.jumpslowsec.values = this.jumpslowsec.values.concat(numvalues);
    	this.jumpslowsec.operators = this.jumpslowsec.operators.concat(operators);
    }    
    addjumpsnullsecs = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.jumpsnullsec.values = this.jumpsnullsec.values.concat(numvalues);
    	this.jumpsnullsec.operators = this.jumpsnullsec.operators.concat(operators);
    }    
    addjumpssafes = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.jumpssafe.values = this.jumpssafe.values.concat(numvalues);
    	this.jumpssafe.operators = this.jumpssafe.operators.concat(operators);
    }    
    addjumpssafelowsecs = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.jumpssafelowsec.values = this.jumpssafelowsec.values.concat(numvalues);
    	this.jumpssafelowsec.operators = this.jumpssafelowsec.operators.concat(operators);
    }    
    addjumpssafenullsecs = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.jumpssafenullsec.values = this.jumpssafenullsec.values.concat(numvalues);
    	this.jumpssafenullsec.operators = this.jumpssafenullsec.operators.concat(operators);
    }    
    setsystemSystemend = (systemsearch) => {
        this.systemSystemendsearcher.setTablesearch(systemsearch);
    }
    setsystemSystemstart = (systemsearch) => {
        this.systemSystemstartsearcher.setTablesearch(systemsearch);
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
                "systemSystemendsearcher": null,
                "systemSystemstartsearcher": null,
            }; 
            if(this.systemSystemendsearcher!=null && this.systemSystemendsearcher.used()) {
                kss.systemSystemendsearcher = this.systemSystemendsearcher.toJSON();
            }
            if(this.systemSystemstartsearcher!=null && this.systemSystemstartsearcher.used()) {
                kss.systemSystemstartsearcher = this.systemSystemstartsearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Systemjumpssuper;
