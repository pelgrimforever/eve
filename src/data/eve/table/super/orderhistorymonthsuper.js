//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 14.0.2022 16:56
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
import {Regionpk} from './regionsuper.js';

export class Orderhistorymonthpk {
	evetypePK: Evetypepk = null;
	regionPK: Regionpk = null;
	region = () => {
		if(this.regionPK===null) return '';
		else return this.regionPK.getId();
	}
	getRegion = () => {
		if(this.regionPK===null) return '';
		else return this.regionPK.getId();
	}
	evetype = () => {
		if(this.evetypePK===null) return '';
		else return this.evetypePK.getId();
	}
	getEvetype = () => {
		if(this.evetypePK===null) return '';
		else return this.evetypePK.getId();
	}
	year: number = 0;
    getYear = () => {
        return this.year;
    }
	month: number = 0;
    getMonth = () => {
        return this.month;
    }
	init = () => {
		this.evetypePK = new Evetypepk();
		this.regionPK = new Regionpk();
		this.year = 0;
		this.month = 0;
	}
}

class Orderhistorymonthsuper {
	constructor() { }
	tablename: string = 'orderhistorymonth';
	PK: Orderhistorymonthpk = new Orderhistorymonthpk();
	region = () => {
		if(this.PK===null) return '';
		else return this.PK.region;
	}
	evetype = () => {
		if(this.PK===null) return '';
		else return this.PK.evetype;
	}
	year = () => {
		if(this.PK===null) return 0;
		else return this.PK.year;
	}
	month = () => {
		if(this.PK===null) return 0;
		else return this.PK.month;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getRegion() + " " + this.PK.getEvetype() + " " + this.PK.getYear() + " " + this.PK.getMonth();
		}
		return result;
	}
	average: number = 0;
	highest: number = 0;
	lowest: number = 0;
	volume: string = '';
	order_count: string = '';
}

export class Orderhistorymonthsearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.year);
		this.addFieldsearcher(this.month);
		this.addFieldsearcher(this.average);
		this.addFieldsearcher(this.highest);
		this.addFieldsearcher(this.lowest);
		this.addFieldsearcher(this.volume);
		this.addFieldsearcher(this.order_count);
        this.addKeysearcher(this.evetypesearcher);
        this.addKeysearcher(this.regionsearcher);
	}

    filtermodel: null;
    year: Numbersearcher = new Numbersearcher("orderhistorymonth.year");
    month: Numbersearcher = new Numbersearcher("orderhistorymonth.month");
    average: Numbersearcher = new Numbersearcher("orderhistorymonth.average");
    highest: Numbersearcher = new Numbersearcher("orderhistorymonth.highest");
    lowest: Numbersearcher = new Numbersearcher("orderhistorymonth.lowest");
    volume: Numbersearcher = new Numbersearcher("orderhistorymonth.volume");
    order_count: Numbersearcher = new Numbersearcher("orderhistorymonth.order_count");
    evetypesearcher: Foreignkeysearcher = new Foreignkeysearcher();
    regionsearcher: Foreignkeysearcher = new Foreignkeysearcher();

    addyears = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.year.values = this.year.values.concat(numvalues);
    	this.year.operators = this.year.operators.concat(operators);
    }    
    addmonths = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.month.values = this.month.values.concat(numvalues);
    	this.month.operators = this.month.operators.concat(operators);
    }    
    addaverages = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.average.values = this.average.values.concat(numvalues);
    	this.average.operators = this.average.operators.concat(operators);
    }
    addhighests = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.highest.values = this.highest.values.concat(numvalues);
    	this.highest.operators = this.highest.operators.concat(operators);
    }
    addlowests = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.lowest.values = this.lowest.values.concat(numvalues);
    	this.lowest.operators = this.lowest.operators.concat(operators);
    }
    addvolumes = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.volume.values = this.volume.values.concat(numvalues);
    	this.volume.operators = this.volume.operators.concat(operators);
    }
    addorder_counts = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.order_count.values = this.order_count.values.concat(numvalues);
    	this.order_count.operators = this.order_count.operators.concat(operators);
    }
    setevetype = (evetypesearch) => {
        this.evetypesearcher.setTablesearch(evetypesearch);
    }
    setregion = (regionsearch) => {
        this.regionsearcher.setTablesearch(regionsearch);
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
                "regionsearcher": null,
            }; 
            if(this.evetypesearcher!=null && this.evetypesearcher.used()) {
                kss.evetypesearcher = this.evetypesearcher.toJSON();
            }
            if(this.regionsearcher!=null && this.regionsearcher.used()) {
                kss.regionsearcher = this.regionsearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Orderhistorymonthsuper;
