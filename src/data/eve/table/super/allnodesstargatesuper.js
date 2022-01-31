//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 31.0.2022 17:49
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

export class Allnodesstargatepk {
    id: string = '';
    getId = () => {
        return this.id;
    }
	init = () => {
		this.id = '';
	}
}

class Allnodesstargatesuper {
	constructor() { }
	tablename: string = 'allnodesstargate';
	PK: Allnodesstargatepk = new Allnodesstargatepk();
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
	to_stargate: string = '';
	system: string = '';
	to_system: string = '';
	deadend: boolean = false;
}

export class Allnodesstargatesearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.id);
		this.addFieldsearcher(this.to_stargate);
		this.addFieldsearcher(this.system);
		this.addFieldsearcher(this.to_system);
		this.addFieldsearcher(this.deadend);
	}

    filtermodel: null;
    id: Numbersearcher = new Numbersearcher("allnodesstargate.id");
    to_stargate: Numbersearcher = new Numbersearcher("allnodesstargate.to_stargate");
    system: Numbersearcher = new Numbersearcher("allnodesstargate.system");
    to_system: Numbersearcher = new Numbersearcher("allnodesstargate.to_system");
    deadend: Booleansearcher = new Booleansearcher("allnodesstargate.deadend");

    addids = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.id.values = this.id.values.concat(numvalues);
    	this.id.operators = this.id.operators.concat(operators);
    }
    addto_stargates = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.to_stargate.values = this.to_stargate.values.concat(numvalues);
    	this.to_stargate.operators = this.to_stargate.operators.concat(operators);
    }
    addsystems = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.system.values = this.system.values.concat(numvalues);
    	this.system.operators = this.system.operators.concat(operators);
    }
    addto_systems = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.to_system.values = this.to_system.values.concat(numvalues);
    	this.to_system.operators = this.to_system.operators.concat(operators);
    }
    adddeadend = (value) => {
    	this.deadend.values = [value];
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

export default Allnodesstargatesuper;
