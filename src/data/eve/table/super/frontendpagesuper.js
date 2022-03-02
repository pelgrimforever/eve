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

export class Frontendpagepk {
    name: string = '';
    getName = () => {
        return this.name;
    }
	init = () => {
		this.name = "";
	}
}

class Frontendpagesuper {
	constructor() { }
	tablename: string = 'frontendpage';
	PK: Frontendpagepk = new Frontendpagepk();
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
}

export class Frontendpagesearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.name);
        this.addKeysearcher(this.frontendpageauthsearcher);
        this.addKeysearcher(this.eveusersearcher);
	}

    filtermodel: null;
    name: Stringsearcher = new Stringsearcher("frontendpage.name");
    frontendpageauthsearcher: Primarykeysearcher = new Primarykeysearcher();
    eveusersearcher: Relationalkeysearcher = new Relationalkeysearcher();

    addnames = (values) => {
    	this.name.values = this.name.values.concat(values);
    }
    setfrontendpageauth = (frontendpageauthsearch) => {
        this.frontendpageauthsearcher.setTablesearch(frontendpageauthsearch);
    }
    seteveuser = (eveusersearch) => {
        this.eveusersearcher.setTablesearch(eveusersearch);
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
                "frontendpageauthsearcher": null,
                "eveusersearcher": null,
            }; 
            if(this.frontendpageauthsearcher!=null && this.frontendpageauthsearcher.used()) {
                kss.frontendpageauthsearcher = this.frontendpageauthsearcher.toJSON();
            }
            if(this.eveusersearcher!=null && this.eveusersearcher.used()) {
                kss.eveusersearcher = this.eveusersearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Frontendpagesuper;
