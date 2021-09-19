//Auto generated code
//don't change things here, it will be overwritten
//extend classes in tmpsystemjumps.ts for table class definitions
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 18.8.2021 11:31
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

export class Tmpsystemjumpspk {
    system: string = '';
    getSystem = () => {
        return this.system;
    }
	init = () => {
		this.system = '';
	}
}

class Tmpsystemjumpssuper {
	constructor() { }
	tablename: string = 'tmpsystemjumps';
	PK: Tmpsystemjumpspk = new Tmpsystemjumpspk();
	system = () => {
		if(this.PK===null) return '';
		else return this.PK.system;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getSystem();
		}
		return result;
	}
	jump: number = 0;
	maxjumps: number = 0;
	previoussystem: string = '';
}

export class Tmpsystemjumpssearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.system);
		this.addFieldsearcher(this.jump);
		this.addFieldsearcher(this.maxjumps);
		this.addFieldsearcher(this.previoussystem);
	}

    filtermodel: null;
    system: Numbersearcher = new Numbersearcher("tmpsystemjumps.system");
    jump: Numbersearcher = new Numbersearcher("tmpsystemjumps.jump");
    maxjumps: Numbersearcher = new Numbersearcher("tmpsystemjumps.maxjumps");
    previoussystem: Numbersearcher = new Numbersearcher("tmpsystemjumps.previoussystem");

    addsystems = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.system.values = this.system.values.concat(numvalues);
    	this.system.operators = this.system.operators.concat(operators);
    }
    addjumps = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.jump.values = this.jump.values.concat(numvalues);
    	this.jump.operators = this.jump.operators.concat(operators);
    }    
    addmaxjumpss = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.maxjumps.values = this.maxjumps.values.concat(numvalues);
    	this.maxjumps.operators = this.maxjumps.operators.concat(operators);
    }    
    addprevioussystems = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.previoussystem.values = this.previoussystem.values.concat(numvalues);
    	this.previoussystem.operators = this.previoussystem.operators.concat(operators);
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
            }; 
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Tmpsystemjumpssuper;
