//Auto generated code
//don't change things here, it will be overwritten
//extend classes in orderhistory.ts for table class definitions
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 18.6.2021 14:35
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

export class Orderhistorypk {
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
    date: string = '';
    getDate = () => {
        return this.date;
    }
	init = () => {
		this.evetypePK = new Evetypepk();
		this.regionPK = new Regionpk();
		this.date = "";
	}
}

class Orderhistorysuper {
	constructor() { }
	tablename: string = 'orderhistory';
	PK: Orderhistorypk = new Orderhistorypk();
	region = () => {
		if(this.PK===null) return '';
		else return this.PK.region;
	}
	evetype = () => {
		if(this.PK===null) return '';
		else return this.PK.evetype;
	}
	date = () => {
		if(this.PK===null) return '';
		else return this.PK.date;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getRegion() + " " + this.PK.getEvetype() + " " + this.PK.getDate();
		}
		return result;
	}
	average: number = 0;
	highest: number = 0;
	lowest: number = 0;
	volume: number = 0;
	order_count: number = 0;
}

export class Orderhistorysearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.date);
		this.addFieldsearcher(this.average);
		this.addFieldsearcher(this.highest);
		this.addFieldsearcher(this.lowest);
		this.addFieldsearcher(this.volume);
		this.addFieldsearcher(this.order_count);
        this.addKeysearcher(this.evetypesearcher);
        this.addKeysearcher(this.regionsearcher);
	}

    filtermodel: null;
    date: Datesearcher = new Datesearcher("orderhistory.date");
    average: Numbersearcher = new Numbersearcher("orderhistory.average");
    highest: Numbersearcher = new Numbersearcher("orderhistory.highest");
    lowest: Numbersearcher = new Numbersearcher("orderhistory.lowest");
    volume: Numbersearcher = new Numbersearcher("orderhistory.volume");
    order_count: Numbersearcher = new Numbersearcher("orderhistory.order_count");
    evetypesearcher: Foreignkeysearcher = new Foreignkeysearcher();
    regionsearcher: Foreignkeysearcher = new Foreignkeysearcher();

    adddates = (values, operators) => {
    	this.date.values = this.date.values.concat(values);
    	this.date.operators = this.date.operators.concat(operators);
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

export default Orderhistorysuper;
