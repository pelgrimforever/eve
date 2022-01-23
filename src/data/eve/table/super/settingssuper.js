//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 19.0.2022 22:13
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

export class Settingspk {
    name: string = '';
    getName = () => {
        return this.name;
    }
	init = () => {
		this.name = "";
	}
}

class Settingssuper {
	constructor() { }
	tablename: string = 'settings';
	PK: Settingspk = new Settingspk();
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

export class Settingssearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.name);
		this.addFieldsearcher(this.value);
        this.addKeysearcher(this.usersettingssearcher);
	}

    filtermodel: null;
    name: Stringsearcher = new Stringsearcher("settings.name");
    value: Stringsearcher = new Stringsearcher("settings.value");
    usersettingssearcher: Primarykeysearcher = new Primarykeysearcher();

    addnames = (values) => {
    	this.name.values = this.name.values.concat(values);
    }
    addvalues = (values) => {
    	this.value.values = this.value.values.concat(values);
    }
    setusersettings = (usersettingssearch) => {
        this.usersettingssearcher.setTablesearch(usersettingssearch);
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
                "usersettingssearcher": null,
            }; 
            if(this.usersettingssearcher!=null && this.usersettingssearcher.used()) {
                kss.usersettingssearcher = this.usersettingssearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Settingssuper;
