//Auto generated code
//don't change things here, it will be overwritten
//extend classes in siteusergroup.ts for table class definitions
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 14.5.2021 13:42
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

export class Siteusergrouppk {
	siteuserPK: Siteuserpk = null;
	sitegroupPK: Sitegrouppk = null;
	username = () => {
		if(this.siteuserPK===null) return '';
		else return this.siteuserPK.getUsername();
	}
	getUsername = () => {
		if(this.siteuserPK===null) return '';
		else return this.siteuserPK.getUsername();
	}
	groupname = () => {
		if(this.sitegroupPK===null) return '';
		else return this.sitegroupPK.getGroupname();
	}
	getGroupname = () => {
		if(this.sitegroupPK===null) return '';
		else return this.sitegroupPK.getGroupname();
	}
	init = () => {
		this.siteuserPK = new Siteuserpk();
		this.sitegroupPK = new Sitegrouppk();
	}
}

class Siteusergroupsuper {
	constructor() { }
	tablename: string = 'siteusergroup';
	PK: Siteusergrouppk = new Siteusergrouppk();
	username = () => {
		if(this.PK===null) return '';
		else return this.PK.username;
	}
	groupname = () => {
		if(this.PK===null) return '';
		else return this.PK.groupname;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getUsername() + " " + this.PK.getGroupname();
		}
		return result;
	}
}

export class Siteusergroupsearcher extends Tablesearch {
	constructor() { 
		super(); 
        this.addKeysearcher(this.siteusersearcher);
        this.addKeysearcher(this.sitegroupsearcher);
	}

    filtermodel: null;
    siteusersearcher: Foreignkeysearcher = new Foreignkeysearcher();
    sitegroupsearcher: Foreignkeysearcher = new Foreignkeysearcher();

    setsiteuser = (siteusersearch) => {
        this.siteusersearcher.setTablesearch(siteusersearch);
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
                "siteusersearcher": null,
                "sitegroupsearcher": null,
            }; 
            if(this.siteusersearcher!=null && this.siteusersearcher.used()) {
                kss.siteusersearcher = this.siteusersearcher.toJSON();
            }
            if(this.sitegroupsearcher!=null && this.sitegroupsearcher.used()) {
                kss.sitegroupsearcher = this.sitegroupsearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Siteusergroupsuper;
