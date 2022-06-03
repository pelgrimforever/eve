//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 20.4.2022 10:3
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
import {Frontendpagepk} from './frontendpagesuper.js';
import {Eveuserpk} from './eveusersuper.js';

export class Frontendpageauthpk {
	frontendpagePK: Frontendpagepk = null;
	eveuserPK: Eveuserpk = null;
	username = () => {
		if(this.eveuserPK===null) return '';
		else return this.eveuserPK.getUsername();
	}
	getUsername = () => {
		if(this.eveuserPK===null) return '';
		else return this.eveuserPK.getUsername();
	}
	frontendpage = () => {
		if(this.frontendpagePK===null) return '';
		else return this.frontendpagePK.getName();
	}
	getFrontendpage = () => {
		if(this.frontendpagePK===null) return '';
		else return this.frontendpagePK.getName();
	}
	init = () => {
		this.frontendpagePK = new Frontendpagepk();
		this.eveuserPK = new Eveuserpk();
	}
}

class Frontendpageauthsuper {
	constructor() { }
	tablename: string = 'frontendpageauth';
	PK: Frontendpageauthpk = new Frontendpageauthpk();
	username = () => {
		if(this.PK===null) return '';
		else return this.PK.username;
	}
	frontendpage = () => {
		if(this.PK===null) return '';
		else return this.PK.frontendpage;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getUsername() + " " + this.PK.getFrontendpage();
		}
		return result;
	}
}

export class Frontendpageauthsearcher extends Tablesearch {
	constructor() { 
		super(); 
        this.addKeysearcher(this.frontendpagesearcher);
        this.addKeysearcher(this.eveusersearcher);
	}

    filtermodel: null;
    frontendpagesearcher: Foreignkeysearcher = new Foreignkeysearcher();
    eveusersearcher: Foreignkeysearcher = new Foreignkeysearcher();

    setfrontendpage = (frontendpagesearch) => {
        this.frontendpagesearcher.setTablesearch(frontendpagesearch);
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
                "frontendpagesearcher": null,
                "eveusersearcher": null,
            }; 
            if(this.frontendpagesearcher!=null && this.frontendpagesearcher.used()) {
                kss.frontendpagesearcher = this.frontendpagesearcher.toJSON();
            }
            if(this.eveusersearcher!=null && this.eveusersearcher.used()) {
                kss.eveusersearcher = this.eveusersearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Frontendpageauthsuper;
