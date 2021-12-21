//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 16.11.2021 15:46
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

export class Stargatepk {
    id: string = '';
    getId = () => {
        return this.id;
    }
	init = () => {
		this.id = '';
	}
}

class Stargatesuper {
	constructor() { }
	tablename: string = 'stargate';
	PK: Stargatepk = new Stargatepk();
	id = () => {
		if(this.PK===null) return '';
		else return this.PK.id;
	}
	systemSystemPK: Systemsystempk = null;
	systemTosystemPK: Systemtosystempk = null;
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getId();
		}
		return result;
	}
	to_stargate: string = '';
	name = '';
	x: number = 0;
	y: number = 0;
	z: number = 0;
	isconstellationborder: boolean = false;
	isregionborder: boolean = false;
	downloaddate: string = '';
	downloaddateUI: string = '';
}

export class Stargatesearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.id);
		this.addFieldsearcher(this.to_stargate);
		this.addFieldsearcher(this.name);
		this.addFieldsearcher(this.x);
		this.addFieldsearcher(this.y);
		this.addFieldsearcher(this.z);
		this.addFieldsearcher(this.isconstellationborder);
		this.addFieldsearcher(this.isregionborder);
		this.addFieldsearcher(this.downloaddate);
        this.addKeysearcher(this.systemSystemsearcher);
        this.addKeysearcher(this.systemTosystemsearcher);
	}

    filtermodel: null;
    id: Numbersearcher = new Numbersearcher("stargate.id");
    to_stargate: Numbersearcher = new Numbersearcher("stargate.to_stargate");
    name: Stringsearcher = new Stringsearcher("stargate.name");
    x: Numbersearcher = new Numbersearcher("stargate.x");
    y: Numbersearcher = new Numbersearcher("stargate.y");
    z: Numbersearcher = new Numbersearcher("stargate.z");
    isconstellationborder: Booleansearcher = new Booleansearcher("stargate.isconstellationborder");
    isregionborder: Booleansearcher = new Booleansearcher("stargate.isregionborder");
    downloaddate: Datesearcher = new Datesearcher("stargate.downloaddate");
    systemSystemsearcher: Foreignkeysearcher = new Foreignkeysearcher();
    systemTosystemsearcher: Foreignkeysearcher = new Foreignkeysearcher();

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
    addnames = (values) => {
    	this.name.values = this.name.values.concat(values);
    }
    addxs = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.x.values = this.x.values.concat(numvalues);
    	this.x.operators = this.x.operators.concat(operators);
    }
    addys = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.y.values = this.y.values.concat(numvalues);
    	this.y.operators = this.y.operators.concat(operators);
    }
    addzs = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.z.values = this.z.values.concat(numvalues);
    	this.z.operators = this.z.operators.concat(operators);
    }
    addisconstellationborder = (value) => {
    	this.isconstellationborder.values = [value];
    }
    addisregionborder = (value) => {
    	this.isregionborder.values = [value];
    }
    adddownloaddates = (values, operators) => {
    	this.downloaddate.values = this.downloaddate.values.concat(values);
    	this.downloaddate.operators = this.downloaddate.operators.concat(operators);
    }
    setsystemSystem = (systemsearch) => {
        this.systemSystemsearcher.setTablesearch(systemsearch);
    }
    setsystemTosystem = (systemsearch) => {
        this.systemTosystemsearcher.setTablesearch(systemsearch);
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
                "systemSystemsearcher": null,
                "systemTosystemsearcher": null,
            }; 
            if(this.systemSystemsearcher!=null && this.systemSystemsearcher.used()) {
                kss.systemSystemsearcher = this.systemSystemsearcher.toJSON();
            }
            if(this.systemTosystemsearcher!=null && this.systemTosystemsearcher.used()) {
                kss.systemTosystemsearcher = this.systemTosystemsearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Stargatesuper;
