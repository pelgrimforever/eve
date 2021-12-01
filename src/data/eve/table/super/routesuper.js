//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 30.10.2021 10:4
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
import {Routetypepk} from './routetypesuper.js';
import {Systempk} from './systemsuper.js';

export class Routepk {
	routetypePK: Routetypepk = null;
	systemPK: Systempk = null;
	routetype = () => {
		if(this.routetypePK===null) return '';
		else return this.routetypePK.getId();
	}
	getRoutetype = () => {
		if(this.routetypePK===null) return '';
		else return this.routetypePK.getId();
	}
	system = () => {
		if(this.systemPK===null) return '';
		else return this.systemPK.getId();
	}
	getSystem = () => {
		if(this.systemPK===null) return '';
		else return this.systemPK.getId();
	}
	init = () => {
		this.routetypePK = new Routetypepk();
		this.systemPK = new Systempk();
	}
}

class Routesuper {
	constructor() { }
	tablename: string = 'route';
	PK: Routepk = new Routepk();
	routetype = () => {
		if(this.PK===null) return '';
		else return this.PK.routetype;
	}
	system = () => {
		if(this.PK===null) return '';
		else return this.PK.system;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getRoutetype() + " " + this.PK.getSystem();
		}
		return result;
	}
	jsonroutes = '';
}

export class Routesearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.jsonroutes);
        this.addKeysearcher(this.routetypesearcher);
        this.addKeysearcher(this.systemsearcher);
	}

    filtermodel: null;
    jsonroutes: Stringsearcher = new Stringsearcher("route.jsonroutes");
    routetypesearcher: Foreignkeysearcher = new Foreignkeysearcher();
    systemsearcher: Foreignkeysearcher = new Foreignkeysearcher();

    addjsonroutess = (values) => {
    	this.jsonroutes.values = this.jsonroutes.values.concat(values);
    }
    setroutetype = (routetypesearch) => {
        this.routetypesearcher.setTablesearch(routetypesearch);
    }
    setsystem = (systemsearch) => {
        this.systemsearcher.setTablesearch(systemsearch);
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
                "routetypesearcher": null,
                "systemsearcher": null,
            }; 
            if(this.routetypesearcher!=null && this.routetypesearcher.used()) {
                kss.routetypesearcher = this.routetypesearcher.toJSON();
            }
            if(this.systemsearcher!=null && this.systemsearcher.used()) {
                kss.systemsearcher = this.systemsearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Routesuper;
