//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 4.11.2021 14:51
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

export class Stockpk {
	evetypePK: Evetypepk = null;
	evetype = () => {
		if(this.evetypePK===null) return '';
		else return this.evetypePK.getId();
	}
	getEvetype = () => {
		if(this.evetypePK===null) return '';
		else return this.evetypePK.getId();
	}
    username: string = '';
    getUsername = () => {
        return this.username;
    }
	init = () => {
		this.evetypePK = new Evetypepk();
		this.username = "";
	}
}

class Stocksuper {
	constructor() { }
	tablename: string = 'stock';
	PK: Stockpk = new Stockpk();
	username = () => {
		if(this.PK===null) return '';
		else return this.PK.username;
	}
	evetype = () => {
		if(this.PK===null) return '';
		else return this.PK.evetype;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getUsername() + " " + this.PK.getEvetype();
		}
		return result;
	}
	amount: string = '';
}

export class Stocksearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.username);
		this.addFieldsearcher(this.amount);
        this.addKeysearcher(this.evetypesearcher);
        this.addKeysearcher(this.stocktradesearcher);
	}

    filtermodel: null;
    username: Stringsearcher = new Stringsearcher("stock.username");
    amount: Numbersearcher = new Numbersearcher("stock.amount");
    evetypesearcher: Foreignkeysearcher = new Foreignkeysearcher();
    stocktradesearcher: Primarykeysearcher = new Primarykeysearcher();

    addusernames = (values) => {
    	this.username.values = this.username.values.concat(values);
    }
    addamounts = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.amount.values = this.amount.values.concat(numvalues);
    	this.amount.operators = this.amount.operators.concat(operators);
    }
    setevetype = (evetypesearch) => {
        this.evetypesearcher.setTablesearch(evetypesearch);
    }
    setstocktrade = (stocktradesearch) => {
        this.stocktradesearcher.setTablesearch(stocktradesearch);
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
                "stocktradesearcher": null,
            }; 
            if(this.evetypesearcher!=null && this.evetypesearcher.used()) {
                kss.evetypesearcher = this.evetypesearcher.toJSON();
            }
            if(this.stocktradesearcher!=null && this.stocktradesearcher.used()) {
                kss.stocktradesearcher = this.stocktradesearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Stocksuper;
