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
import {Stockpk} from './stocksuper.js';

export class Stocktradepk {
	stockPK: Stockpk = null;
	username = () => {
		if(this.stockPK===null) return '';
		else return this.stockPK.getUsername();
	}
	getUsername = () => {
		if(this.stockPK===null) return '';
		else return this.stockPK.getUsername();
	}
	evetype = () => {
		if(this.stockPK===null) return '';
		else return this.stockPK.getEvetype();
	}
	getEvetype = () => {
		if(this.stockPK===null) return '';
		else return this.stockPK.getEvetype();
	}
    orderid: string = '';
    getOrderid = () => {
        return this.orderid;
    }
	init = () => {
		this.stockPK = new Stockpk();
		this.orderid = '';
	}
}

class Stocktradesuper {
	constructor() { }
	tablename: string = 'stocktrade';
	PK: Stocktradepk = new Stocktradepk();
	username = () => {
		if(this.PK===null) return '';
		else return this.PK.username;
	}
	evetype = () => {
		if(this.PK===null) return '';
		else return this.PK.evetype;
	}
	orderid = () => {
		if(this.PK===null) return '';
		else return this.PK.orderid;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getUsername() + " " + this.PK.getEvetype() + " " + this.PK.getOrderid();
		}
		return result;
	}
	sellamount: string = '';
}

export class Stocktradesearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.orderid);
		this.addFieldsearcher(this.sellamount);
        this.addKeysearcher(this.stocksearcher);
	}

    filtermodel: null;
    orderid: Numbersearcher = new Numbersearcher("stocktrade.orderid");
    sellamount: Numbersearcher = new Numbersearcher("stocktrade.sellamount");
    stocksearcher: Foreignkeysearcher = new Foreignkeysearcher();

    addorderids = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.orderid.values = this.orderid.values.concat(numvalues);
    	this.orderid.operators = this.orderid.operators.concat(operators);
    }
    addsellamounts = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.sellamount.values = this.sellamount.values.concat(numvalues);
    	this.sellamount.operators = this.sellamount.operators.concat(operators);
    }
    setstock = (stocksearch) => {
        this.stocksearcher.setTablesearch(stocksearch);
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
                "stocksearcher": null,
            }; 
            if(this.stocksearcher!=null && this.stocksearcher.used()) {
                kss.stocksearcher = this.stocksearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Stocktradesuper;
