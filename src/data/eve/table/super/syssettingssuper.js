//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 14.0.2022 16:56
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

export class Syssettingspk {
    name: string = '';
    getName = () => {
        return this.name;
    }
	init = () => {
		this.name = "";
	}
}

class Syssettingssuper {
	constructor() { }
	tablename: string = 'syssettings';
	PK: Syssettingspk = new Syssettingspk();
	name = () => {
		if(this.PK===null) return '';
		else return this.PK.name;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getName();
		}
		return result;
	}
	value = '';
}

export class Syssettingssearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.name);
		this.addFieldsearcher(this.value);
	}

    filtermodel: null;
    name: Stringsearcher = new Stringsearcher("syssettings.name");
    value: Stringsearcher = new Stringsearcher("syssettings.value");

    addnames = (values) => {
    	this.name.values = this.name.values.concat(values);
    }
    addvalues = (values) => {
    	this.value.values = this.value.values.concat(values);
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

export default Syssettingssuper;
