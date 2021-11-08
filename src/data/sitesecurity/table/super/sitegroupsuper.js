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

export class Sitegrouppk {
    groupname: string = '';
    getGroupname = () => {
        return this.groupname;
    }
	init = () => {
		this.groupname = "";
	}
}

class Sitegroupsuper {
	constructor() { }
	tablename: string = 'sitegroup';
	PK: Sitegrouppk = new Sitegrouppk();
	groupname = () => {
		if(this.PK===null) return '';
		else return this.PK.groupname;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getGroupname();
		}
		return result;
	}
	groupdescription = '';
}

export class Sitegroupsearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.groupname);
		this.addFieldsearcher(this.groupdescription);
        this.addKeysearcher(this.siteusergroupsearcher);
        this.addKeysearcher(this.siteusersearcher);
	}

    filtermodel: null;
    groupname: Stringsearcher = new Stringsearcher("sitegroup.groupname");
    groupdescription: Stringsearcher = new Stringsearcher("sitegroup.groupdescription");
    siteusergroupsearcher: Primarykeysearcher = new Primarykeysearcher();
    siteusersearcher: Relationalkeysearcher = new Relationalkeysearcher();

    addgroupnames = (values) => {
    	this.groupname.values = this.groupname.values.concat(values);
    }
    addgroupdescriptions = (values) => {
    	this.groupdescription.values = this.groupdescription.values.concat(values);
    }
    setsiteusergroup = (siteusergroupsearch) => {
        this.siteusergroupsearcher.setTablesearch(siteusergroupsearch);
    }
    setsiteuser = (siteusersearch) => {
        this.siteusersearcher.setTablesearch(siteusersearch);
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
                "siteusersearcher": null,
            }; 
            if(this.siteusergroupsearcher!=null && this.siteusergroupsearcher.used()) {
                kss.siteusergroupsearcher = this.siteusergroupsearcher.toJSON();
            }
            if(this.siteusersearcher!=null && this.siteusersearcher.used()) {
                kss.siteusersearcher = this.siteusersearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Sitegroupsuper;
