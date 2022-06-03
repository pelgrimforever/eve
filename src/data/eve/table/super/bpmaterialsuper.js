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
import {Evetypepk} from './evetypesuper.js';

export class Bpmaterialpk {
	evetypeBpPK: Evetypepk = null;
	evetypeMaterialPK: Evetypepk = null;
	bp = () => {
		if(this.evetypeBpPK===null) return '';
		else return this.evetypeBpPK.getId();
	}
	getBp = () => {
		if(this.evetypeBpPK===null) return '';
		else return this.evetypeBpPK.getId();
	}
	material = () => {
		if(this.evetypeMaterialPK===null) return '';
		else return this.evetypeMaterialPK.getId();
	}
	getMaterial = () => {
		if(this.evetypeMaterialPK===null) return '';
		else return this.evetypeMaterialPK.getId();
	}
	init = () => {
		this.evetypeBpPK = new Evetypepk();
		this.evetypeMaterialPK = new Evetypepk();
	}
}

class Bpmaterialsuper {
	constructor() { }
	tablename: string = 'bpmaterial';
	PK: Bpmaterialpk = new Bpmaterialpk();
	bp = () => {
		if(this.PK===null) return '';
		else return this.PK.bp;
	}
	material = () => {
		if(this.PK===null) return '';
		else return this.PK.material;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getBp() + " " + this.PK.getMaterial();
		}
		return result;
	}
	amount: string = '';
}

export class Bpmaterialsearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.amount);
        this.addKeysearcher(this.evetypeBpsearcher);
        this.addKeysearcher(this.evetypeMaterialsearcher);
	}

    filtermodel: null;
    amount: Numbersearcher = new Numbersearcher("bpmaterial.amount");
    evetypeBpsearcher: Foreignkeysearcher = new Foreignkeysearcher();
    evetypeMaterialsearcher: Foreignkeysearcher = new Foreignkeysearcher();

    addamounts = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.amount.values = this.amount.values.concat(numvalues);
    	this.amount.operators = this.amount.operators.concat(operators);
    }
    setevetypeBp = (evetypesearch) => {
        this.evetypeBpsearcher.setTablesearch(evetypesearch);
    }
    setevetypeMaterial = (evetypesearch) => {
        this.evetypeMaterialsearcher.setTablesearch(evetypesearch);
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
                "evetypeBpsearcher": null,
                "evetypeMaterialsearcher": null,
            }; 
            if(this.evetypeBpsearcher!=null && this.evetypeBpsearcher.used()) {
                kss.evetypeBpsearcher = this.evetypeBpsearcher.toJSON();
            }
            if(this.evetypeMaterialsearcher!=null && this.evetypeMaterialsearcher.used()) {
                kss.evetypeMaterialsearcher = this.evetypeMaterialsearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Bpmaterialsuper;
