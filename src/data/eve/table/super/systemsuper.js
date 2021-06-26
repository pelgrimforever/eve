//Auto generated code
//don't change things here, it will be overwritten
//extend classes in system.ts for table class definitions
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 23.5.2021 16:2
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

export class Systempk {
    id: string = '';
    getId = () => {
        return this.id;
    }
	init = () => {
		this.id = '';
	}
}

class Systemsuper {
	constructor() { }
	tablename: string = 'system';
	PK: Systempk = new Systempk();
	id = () => {
		if(this.PK===null) return '';
		else return this.PK.id;
	}
	securityislandPK: Securityislandpk = null;
	constellationPK: Constellationpk = null;
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getId();
		}
		return result;
	}
	name = '';
	security_class = '';
	security_status: number = 0;
	star_id: string = '';
	noaccess: boolean = false;
	isconstellationborder: boolean = false;
	isregionborder: boolean = false;
}

export class Systemsearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.id);
		this.addFieldsearcher(this.name);
		this.addFieldsearcher(this.security_class);
		this.addFieldsearcher(this.security_status);
		this.addFieldsearcher(this.star_id);
		this.addFieldsearcher(this.noaccess);
		this.addFieldsearcher(this.isconstellationborder);
		this.addFieldsearcher(this.isregionborder);
        this.addKeysearcher(this.securityislandsearcher);
        this.addKeysearcher(this.constellationsearcher);
        this.addKeysearcher(this.systemjumpsSystemendsearcher);
        this.addKeysearcher(this.systemjumpsSystemstartsearcher);
        this.addKeysearcher(this.routesearcher);
        this.addKeysearcher(this.routetypesearcher);
	}

    filtermodel: null;
    id: Numbersearcher = new Numbersearcher("system.id");
    name: Stringsearcher = new Stringsearcher("system.name");
    security_class: Stringsearcher = new Stringsearcher("system.security_class");
    security_status: Numbersearcher = new Numbersearcher("system.security_status");
    star_id: Numbersearcher = new Numbersearcher("system.star_id");
    noaccess: Booleansearcher = new Booleansearcher("system.noaccess");
    isconstellationborder: Booleansearcher = new Booleansearcher("system.isconstellationborder");
    isregionborder: Booleansearcher = new Booleansearcher("system.isregionborder");
    securityislandsearcher: Foreignkeysearcher = new Foreignkeysearcher();
    constellationsearcher: Foreignkeysearcher = new Foreignkeysearcher();
    systemjumpsSystemendsearcher: Primarykeysearcher = new Primarykeysearcher();
    systemjumpsSystemstartsearcher: Primarykeysearcher = new Primarykeysearcher();
    routesearcher: Primarykeysearcher = new Primarykeysearcher();
    routetypesearcher: Relationalkeysearcher = new Relationalkeysearcher();

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
    addsecurity_classs = (values) => {
    	this.security_class.values = this.security_class.values.concat(values);
    }
    addsecurity_statuss = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.security_status.values = this.security_status.values.concat(numvalues);
    	this.security_status.operators = this.security_status.operators.concat(operators);
    }
    addstar_ids = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.star_id.values = this.star_id.values.concat(numvalues);
    	this.star_id.operators = this.star_id.operators.concat(operators);
    }
    addnoaccess = (value) => {
    	this.noaccess.values = [value];
    }
    addisconstellationborder = (value) => {
    	this.isconstellationborder.values = [value];
    }
    addisregionborder = (value) => {
    	this.isregionborder.values = [value];
    }
    setsecurityisland = (securityislandsearch) => {
        this.securityislandsearcher.setTablesearch(securityislandsearch);
    }
    setconstellation = (constellationsearch) => {
        this.constellationsearcher.setTablesearch(constellationsearch);
    }
    setsystemjumpsSystemend = (systemjumpssearch) => {
        this.systemjumpsSystemendsearcher.setTablesearch(systemjumpssearch);
    }
    setsystemjumpsSystemstart = (systemjumpssearch) => {
        this.systemjumpsSystemstartsearcher.setTablesearch(systemjumpssearch);
    }
    setroute = (routesearch) => {
        this.routesearcher.setTablesearch(routesearch);
    }
    setroutetype = (routetypesearch) => {
        this.routetypesearcher.setTablesearch(routetypesearch);
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
                "constellationsearcher": null,
                "systemjumpsSystemendsearcher": null,
                "systemjumpsSystemstartsearcher": null,
                "routesearcher": null,
                "routetypesearcher": null,
            }; 
            if(this.securityislandsearcher!=null && this.securityislandsearcher.used()) {
                kss.securityislandsearcher = this.securityislandsearcher.toJSON();
            }
            if(this.constellationsearcher!=null && this.constellationsearcher.used()) {
                kss.constellationsearcher = this.constellationsearcher.toJSON();
            }
            if(this.systemjumpsSystemendsearcher!=null && this.systemjumpsSystemendsearcher.used()) {
                kss.systemjumpsSystemendsearcher = this.systemjumpsSystemendsearcher.toJSON();
            }
            if(this.systemjumpsSystemstartsearcher!=null && this.systemjumpsSystemstartsearcher.used()) {
                kss.systemjumpsSystemstartsearcher = this.systemjumpsSystemstartsearcher.toJSON();
            }
            if(this.routesearcher!=null && this.routesearcher.used()) {
                kss.routesearcher = this.routesearcher.toJSON();
            }
            if(this.routetypesearcher!=null && this.routetypesearcher.used()) {
                kss.routetypesearcher = this.routetypesearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Systemsuper;
