//Auto generated code
//don't change things here, it will be overwritten
//extend classes in orderhist.ts for table class definitions
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 18.8.2021 11:31
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

export class Orderhistpk {
    id: string = '';
    getId = () => {
        return this.id;
    }
	init = () => {
		this.id = '';
	}
}

class Orderhistsuper {
	constructor() { }
	tablename: string = 'orderhist';
	PK: Orderhistpk = new Orderhistpk();
	id = () => {
		if(this.PK===null) return '';
		else return this.PK.id;
	}
	evetypePK: Evetypepk = null;
	systemPK: Systempk = null;
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getId();
		}
		return result;
	}
	isopen: boolean = false;
	volume_total: number = 0;
	volume_remain: number = 0;
	range = '';
	range_number: number = 0;
	price: number = 0;
	min_volume: number = 0;
	location: string = '';
	is_buy_order: boolean = false;
	issued = '';
	duration: number = 0;
}

export class Orderhistsearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.id);
		this.addFieldsearcher(this.isopen);
		this.addFieldsearcher(this.volume_total);
		this.addFieldsearcher(this.volume_remain);
		this.addFieldsearcher(this.range);
		this.addFieldsearcher(this.range_number);
		this.addFieldsearcher(this.price);
		this.addFieldsearcher(this.min_volume);
		this.addFieldsearcher(this.location);
		this.addFieldsearcher(this.is_buy_order);
		this.addFieldsearcher(this.issued);
		this.addFieldsearcher(this.duration);
        this.addKeysearcher(this.evetypesearcher);
        this.addKeysearcher(this.systemsearcher);
	}

    filtermodel: null;
    id: Numbersearcher = new Numbersearcher("orderhist.id");
    isopen: Booleansearcher = new Booleansearcher("orderhist.isopen");
    volume_total: Numbersearcher = new Numbersearcher("orderhist.volume_total");
    volume_remain: Numbersearcher = new Numbersearcher("orderhist.volume_remain");
    range: Stringsearcher = new Stringsearcher("orderhist.range");
    range_number: Numbersearcher = new Numbersearcher("orderhist.range_number");
    price: Numbersearcher = new Numbersearcher("orderhist.price");
    min_volume: Numbersearcher = new Numbersearcher("orderhist.min_volume");
    location: Numbersearcher = new Numbersearcher("orderhist.location");
    is_buy_order: Booleansearcher = new Booleansearcher("orderhist.is_buy_order");
    issued: Stringsearcher = new Stringsearcher("orderhist.issued");
    duration: Numbersearcher = new Numbersearcher("orderhist.duration");
    evetypesearcher: Foreignkeysearcher = new Foreignkeysearcher();
    systemsearcher: Foreignkeysearcher = new Foreignkeysearcher();

    addids = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.id.values = this.id.values.concat(numvalues);
    	this.id.operators = this.id.operators.concat(operators);
    }
    addisopen = (value) => {
    	this.isopen.values = [value];
    }
    addvolume_totals = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.volume_total.values = this.volume_total.values.concat(numvalues);
    	this.volume_total.operators = this.volume_total.operators.concat(operators);
    }    
    addvolume_remains = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.volume_remain.values = this.volume_remain.values.concat(numvalues);
    	this.volume_remain.operators = this.volume_remain.operators.concat(operators);
    }    
    addranges = (values) => {
    	this.range.values = this.range.values.concat(values);
    }
    addrange_numbers = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.range_number.values = this.range_number.values.concat(numvalues);
    	this.range_number.operators = this.range_number.operators.concat(operators);
    }    
    addprices = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.price.values = this.price.values.concat(numvalues);
    	this.price.operators = this.price.operators.concat(operators);
    }
    addmin_volumes = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.min_volume.values = this.min_volume.values.concat(numvalues);
    	this.min_volume.operators = this.min_volume.operators.concat(operators);
    }    
    addlocations = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.location.values = this.location.values.concat(numvalues);
    	this.location.operators = this.location.operators.concat(operators);
    }
    addis_buy_order = (value) => {
    	this.is_buy_order.values = [value];
    }
    addissueds = (values) => {
    	this.issued.values = this.issued.values.concat(values);
    }
    adddurations = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.duration.values = this.duration.values.concat(numvalues);
    	this.duration.operators = this.duration.operators.concat(operators);
    }    
    setevetype = (evetypesearch) => {
        this.evetypesearcher.setTablesearch(evetypesearch);
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
                "evetypesearcher": null,
                "systemsearcher": null,
            }; 
            if(this.evetypesearcher!=null && this.evetypesearcher.used()) {
                kss.evetypesearcher = this.evetypesearcher.toJSON();
            }
            if(this.systemsearcher!=null && this.systemsearcher.used()) {
                kss.systemsearcher = this.systemsearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Orderhistsuper;
