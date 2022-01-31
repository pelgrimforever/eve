//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 31.0.2022 17:49
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

export class Materialinputpk {
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
    addtimestamp: string = '';
    addtimestampUI: string = '';
    getAddtimestamp = () => {
        return this.addtimestamp;
    }
	init = () => {
		this.evetypePK = new Evetypepk();
		this.username = "";
		this.addtimestamp = "";
	}
}

class Materialinputsuper {
	constructor() { }
	tablename: string = 'materialinput';
	PK: Materialinputpk = new Materialinputpk();
	username = () => {
		if(this.PK===null) return '';
		else return this.PK.username;
	}
	evetype = () => {
		if(this.PK===null) return '';
		else return this.PK.evetype;
	}
	addtimestamp = () => {
		if(this.PK===null) return '';
		else return this.PK.addtimestamp;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getUsername() + " " + this.PK.getEvetype() + " " + this.PK.getAddtimestamp();
		}
		return result;
	}
	amount: string = '';
	unitprice: number = 0;
	usedamount: string = '';
}

export class Materialinputsearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.username);
		this.addFieldsearcher(this.addtimestamp);
		this.addFieldsearcher(this.amount);
		this.addFieldsearcher(this.unitprice);
		this.addFieldsearcher(this.usedamount);
        this.addKeysearcher(this.evetypesearcher);
	}

    filtermodel: null;
    username: Stringsearcher = new Stringsearcher("materialinput.username");
    addtimestamp: Stringsearcher = new Stringsearcher("materialinput.addtimestamp");
    amount: Numbersearcher = new Numbersearcher("materialinput.amount");
    unitprice: Numbersearcher = new Numbersearcher("materialinput.unitprice");
    usedamount: Numbersearcher = new Numbersearcher("materialinput.usedamount");
    evetypesearcher: Foreignkeysearcher = new Foreignkeysearcher();

    addusernames = (values) => {
    	this.username.values = this.username.values.concat(values);
    }
    addaddtimestamps = (values) => {
    	this.addtimestamp.values = this.addtimestamp.values.concat(values);
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
    addunitprices = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.unitprice.values = this.unitprice.values.concat(numvalues);
    	this.unitprice.operators = this.unitprice.operators.concat(operators);
    }
    addusedamounts = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.usedamount.values = this.usedamount.values.concat(numvalues);
    	this.usedamount.operators = this.usedamount.operators.concat(operators);
    }
    setevetype = (evetypesearch) => {
        this.evetypesearcher.setTablesearch(evetypesearch);
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
            }; 
            if(this.evetypesearcher!=null && this.evetypesearcher.used()) {
                kss.evetypesearcher = this.evetypesearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Materialinputsuper;
