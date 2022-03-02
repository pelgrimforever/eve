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

export class Eveuserpk {
    username: string = '';
    getUsername = () => {
        return this.username;
    }
	init = () => {
		this.username = "";
	}
}

class Eveusersuper {
	constructor() { }
	tablename: string = 'eveuser';
	PK: Eveuserpk = new Eveuserpk();
	username = () => {
		if(this.PK===null) return '';
		else return this.PK.username;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getUsername();
		}
		return result;
	}
	createdat: string = '';
	createdatUI: string = '';
	admin: boolean = false;
}

export class Eveusersearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.username);
		this.addFieldsearcher(this.createdat);
		this.addFieldsearcher(this.admin);
        this.addKeysearcher(this.frontendpageauthsearcher);
        this.addKeysearcher(this.frontendpagesearcher);
	}

    filtermodel: null;
    username: Stringsearcher = new Stringsearcher("eveuser.username");
    createdat: Datesearcher = new Datesearcher("eveuser.createdat");
    admin: Booleansearcher = new Booleansearcher("eveuser.admin");
    frontendpageauthsearcher: Primarykeysearcher = new Primarykeysearcher();
    frontendpagesearcher: Relationalkeysearcher = new Relationalkeysearcher();

    addusernames = (values) => {
    	this.username.values = this.username.values.concat(values);
    }
    addcreatedats = (values, operators) => {
    	this.createdat.values = this.createdat.values.concat(values);
    	this.createdat.operators = this.createdat.operators.concat(operators);
    }
    addadmin = (value) => {
    	this.admin.values = [value];
    }
    setfrontendpageauth = (frontendpageauthsearch) => {
        this.frontendpageauthsearcher.setTablesearch(frontendpageauthsearch);
    }
    setfrontendpage = (frontendpagesearch) => {
        this.frontendpagesearcher.setTablesearch(frontendpagesearch);
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
                "frontendpagesearcher": null,
            }; 
            if(this.frontendpageauthsearcher!=null && this.frontendpageauthsearcher.used()) {
                kss.frontendpageauthsearcher = this.frontendpageauthsearcher.toJSON();
            }
            if(this.frontendpagesearcher!=null && this.frontendpagesearcher.used()) {
                kss.frontendpagesearcher = this.frontendpagesearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Eveusersuper;
