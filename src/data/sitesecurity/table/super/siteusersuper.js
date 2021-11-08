//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 24.9.2021 14:50
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

export class Siteuserpk {
    username: string = '';
    getUsername = () => {
        return this.username;
    }
	init = () => {
		this.username = "";
	}
}

class Siteusersuper {
	constructor() { }
	tablename: string = 'siteuser';
	PK: Siteuserpk = new Siteuserpk();
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
	userpassword = '';
}

export class Siteusersearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.username);
		this.addFieldsearcher(this.userpassword);
        this.addKeysearcher(this.siteusergroupsearcher);
        this.addKeysearcher(this.sitegroupsearcher);
	}

    filtermodel: null;
    username: Stringsearcher = new Stringsearcher("siteuser.username");
    userpassword: Stringsearcher = new Stringsearcher("siteuser.userpassword");
    siteusergroupsearcher: Primarykeysearcher = new Primarykeysearcher();
    sitegroupsearcher: Relationalkeysearcher = new Relationalkeysearcher();

    addusernames = (values) => {
    	this.username.values = this.username.values.concat(values);
    }
    adduserpasswords = (values) => {
    	this.userpassword.values = this.userpassword.values.concat(values);
    }
    setsiteusergroup = (siteusergroupsearch) => {
        this.siteusergroupsearcher.setTablesearch(siteusergroupsearch);
    }
    setsitegroup = (sitegroupsearch) => {
        this.sitegroupsearcher.setTablesearch(sitegroupsearch);
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
                "siteusergroupsearcher": null,
                "sitegroupsearcher": null,
            }; 
            if(this.siteusergroupsearcher!=null && this.siteusergroupsearcher.used()) {
                kss.siteusergroupsearcher = this.siteusergroupsearcher.toJSON();
            }
            if(this.sitegroupsearcher!=null && this.sitegroupsearcher.used()) {
                kss.sitegroupsearcher = this.sitegroupsearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Siteusersuper;
