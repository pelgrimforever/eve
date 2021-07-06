//Auto generated code
//don't change things here, it will be overwritten
//extend classes in constellation.ts for table class definitions
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 4.6.2021 14:41
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

export class Constellationpk {
    id: string = '';
    getId = () => {
        return this.id;
    }
	init = () => {
		this.id = '';
	}
}

class Constellationsuper {
	constructor() { }
	tablename: string = 'constellation';
	PK: Constellationpk = new Constellationpk();
	id = () => {
		if(this.PK===null) return '';
		else return this.PK.id;
	}
	regionPK: Regionpk = null;
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getId();
		}
		return result;
	}
	name = '';
	noaccess: boolean = false;
}

export class Constellationsearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.id);
		this.addFieldsearcher(this.name);
		this.addFieldsearcher(this.noaccess);
        this.addKeysearcher(this.regionsearcher);
        this.addKeysearcher(this.constellationneighbourNeighboursearcher);
        this.addKeysearcher(this.constellationneighbourConstellationsearcher);
	}

    filtermodel: null;
    id: Numbersearcher = new Numbersearcher("constellation.id");
    name: Stringsearcher = new Stringsearcher("constellation.name");
    noaccess: Booleansearcher = new Booleansearcher("constellation.noaccess");
    regionsearcher: Foreignkeysearcher = new Foreignkeysearcher();
    constellationneighbourNeighboursearcher: Primarykeysearcher = new Primarykeysearcher();
    constellationneighbourConstellationsearcher: Primarykeysearcher = new Primarykeysearcher();

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
    addnoaccess = (value) => {
    	this.noaccess.values = [value];
    }
    setregion = (regionsearch) => {
        this.regionsearcher.setTablesearch(regionsearch);
    }
    setconstellationneighbourNeighbour = (constellationneighboursearch) => {
        this.constellationneighbourNeighboursearcher.setTablesearch(constellationneighboursearch);
    }
    setconstellationneighbourConstellation = (constellationneighboursearch) => {
        this.constellationneighbourConstellationsearcher.setTablesearch(constellationneighboursearch);
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
                "regionsearcher": null,
                "constellationneighbourNeighboursearcher": null,
                "constellationneighbourConstellationsearcher": null,
            }; 
            if(this.regionsearcher!=null && this.regionsearcher.used()) {
                kss.regionsearcher = this.regionsearcher.toJSON();
            }
            if(this.constellationneighbourNeighboursearcher!=null && this.constellationneighbourNeighboursearcher.used()) {
                kss.constellationneighbourNeighboursearcher = this.constellationneighbourNeighboursearcher.toJSON();
            }
            if(this.constellationneighbourConstellationsearcher!=null && this.constellationneighbourConstellationsearcher.used()) {
                kss.constellationneighbourConstellationsearcher = this.constellationneighbourConstellationsearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Constellationsuper;
