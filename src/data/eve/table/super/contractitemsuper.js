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
import {Evetypepk} from './evetypesuper.js';
import {Contractpk} from './contractsuper.js';

export class Contractitempk {
    id: string = '';
    getId = () => {
        return this.id;
    }
	init = () => {
		this.id = '';
	}
}

class Contractitemsuper {
	constructor() { }
	tablename: string = 'contractitem';
	PK: Contractitempk = new Contractitempk();
	id = () => {
		if(this.PK===null) return '';
		else return this.PK.id;
	}
	evetypePK: Evetypepk = null;
	contractPK: Contractpk = null;
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getId();
		}
		return result;
	}
	blueprint_copy: boolean = false;
	included: boolean = false;
	quantity: string = '';
	material_efficiency: number = 0;
	runs: number = 0;
	time_efficiency: number = 0;
}

export class Contractitemsearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.id);
		this.addFieldsearcher(this.blueprint_copy);
		this.addFieldsearcher(this.included);
		this.addFieldsearcher(this.quantity);
		this.addFieldsearcher(this.material_efficiency);
		this.addFieldsearcher(this.runs);
		this.addFieldsearcher(this.time_efficiency);
        this.addKeysearcher(this.evetypesearcher);
        this.addKeysearcher(this.contractsearcher);
	}

    filtermodel: null;
    id: Numbersearcher = new Numbersearcher("contractitem.id");
    blueprint_copy: Booleansearcher = new Booleansearcher("contractitem.blueprint_copy");
    included: Booleansearcher = new Booleansearcher("contractitem.included");
    quantity: Numbersearcher = new Numbersearcher("contractitem.quantity");
    material_efficiency: Numbersearcher = new Numbersearcher("contractitem.material_efficiency");
    runs: Numbersearcher = new Numbersearcher("contractitem.runs");
    time_efficiency: Numbersearcher = new Numbersearcher("contractitem.time_efficiency");
    evetypesearcher: Foreignkeysearcher = new Foreignkeysearcher();
    contractsearcher: Foreignkeysearcher = new Foreignkeysearcher();

    addids = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.id.values = this.id.values.concat(numvalues);
    	this.id.operators = this.id.operators.concat(operators);
    }
    addblueprint_copy = (value) => {
    	this.blueprint_copy.values = [value];
    }
    addincluded = (value) => {
    	this.included.values = [value];
    }
    addquantitys = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.quantity.values = this.quantity.values.concat(numvalues);
    	this.quantity.operators = this.quantity.operators.concat(operators);
    }
    addmaterial_efficiencys = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.material_efficiency.values = this.material_efficiency.values.concat(numvalues);
    	this.material_efficiency.operators = this.material_efficiency.operators.concat(operators);
    }    
    addrunss = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.runs.values = this.runs.values.concat(numvalues);
    	this.runs.operators = this.runs.operators.concat(operators);
    }    
    addtime_efficiencys = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.time_efficiency.values = this.time_efficiency.values.concat(numvalues);
    	this.time_efficiency.operators = this.time_efficiency.operators.concat(operators);
    }    
    setevetype = (evetypesearch) => {
        this.evetypesearcher.setTablesearch(evetypesearch);
    }
    setcontract = (contractsearch) => {
        this.contractsearcher.setTablesearch(contractsearch);
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
                "evetypesearcher": null,
                "contractsearcher": null,
            }; 
            if(this.evetypesearcher!=null && this.evetypesearcher.used()) {
                kss.evetypesearcher = this.evetypesearcher.toJSON();
            }
            if(this.contractsearcher!=null && this.contractsearcher.used()) {
                kss.contractsearcher = this.contractsearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Contractitemsuper;
