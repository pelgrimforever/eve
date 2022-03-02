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
import {Securityislandpk} from './securityislandsuper.js';

export class Routetypepk {
    id: string = '';
    getId = () => {
        return this.id;
    }
	init = () => {
		this.id = '';
	}
}

class Routetypesuper {
	constructor() { }
	tablename: string = 'routetype';
	PK: Routetypepk = new Routetypepk();
	id = () => {
		if(this.PK===null) return '';
		else return this.PK.id;
	}
	securityislandPK: Securityislandpk = null;
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getId();
		}
		return result;
	}
	name = '';
}

export class Routetypesearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.id);
		this.addFieldsearcher(this.name);
        this.addKeysearcher(this.securityislandsearcher);
	}

    filtermodel: null;
    id: Numbersearcher = new Numbersearcher("routetype.id");
    name: Stringsearcher = new Stringsearcher("routetype.name");
    securityislandsearcher: Foreignkeysearcher = new Foreignkeysearcher();

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
    setsecurityisland = (securityislandsearch) => {
        this.securityislandsearcher.setTablesearch(securityislandsearch);
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
                "securityislandsearcher": null,
            }; 
            if(this.securityislandsearcher!=null && this.securityislandsearcher.used()) {
                kss.securityislandsearcher = this.securityislandsearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Routetypesuper;
