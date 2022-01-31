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

export class Userbppk {
	evetypePK: Evetypepk = null;
	bp = () => {
		if(this.evetypePK===null) return '';
		else return this.evetypePK.getId();
	}
	getBp = () => {
		if(this.evetypePK===null) return '';
		else return this.evetypePK.getId();
	}
    username: string = '';
    getUsername = () => {
        return this.username;
    }
	serialnumber: number = 0;
    getSerialnumber = () => {
        return this.serialnumber;
    }
	init = () => {
		this.evetypePK = new Evetypepk();
		this.username = "";
		this.serialnumber = 0;
	}
}

class Userbpsuper {
	constructor() { }
	tablename: string = 'userbp';
	PK: Userbppk = new Userbppk();
	username = () => {
		if(this.PK===null) return '';
		else return this.PK.username;
	}
	bp = () => {
		if(this.PK===null) return '';
		else return this.PK.bp;
	}
	serialnumber = () => {
		if(this.PK===null) return 0;
		else return this.PK.serialnumber;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getUsername() + " " + this.PK.getBp() + " " + this.PK.getSerialnumber();
		}
		return result;
	}
	original: boolean = false;
	materialefficiency: number = 0;
	amountproduced: number = 0;
	totalamount: number = 0;
	bpprice: number = 0;
	researchcost: number = 0;
	stationfee: number = 0;
}

export class Userbpsearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.username);
		this.addFieldsearcher(this.serialnumber);
		this.addFieldsearcher(this.original);
		this.addFieldsearcher(this.materialefficiency);
		this.addFieldsearcher(this.amountproduced);
		this.addFieldsearcher(this.totalamount);
		this.addFieldsearcher(this.bpprice);
		this.addFieldsearcher(this.researchcost);
		this.addFieldsearcher(this.stationfee);
        this.addKeysearcher(this.evetypesearcher);
	}

    filtermodel: null;
    username: Stringsearcher = new Stringsearcher("userbp.username");
    serialnumber: Numbersearcher = new Numbersearcher("userbp.serialnumber");
    original: Booleansearcher = new Booleansearcher("userbp.original");
    materialefficiency: Numbersearcher = new Numbersearcher("userbp.materialefficiency");
    amountproduced: Numbersearcher = new Numbersearcher("userbp.amountproduced");
    totalamount: Numbersearcher = new Numbersearcher("userbp.totalamount");
    bpprice: Numbersearcher = new Numbersearcher("userbp.bpprice");
    researchcost: Numbersearcher = new Numbersearcher("userbp.researchcost");
    stationfee: Numbersearcher = new Numbersearcher("userbp.stationfee");
    evetypesearcher: Foreignkeysearcher = new Foreignkeysearcher();

    addusernames = (values) => {
    	this.username.values = this.username.values.concat(values);
    }
    addserialnumbers = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.serialnumber.values = this.serialnumber.values.concat(numvalues);
    	this.serialnumber.operators = this.serialnumber.operators.concat(operators);
    }    
    addoriginal = (value) => {
    	this.original.values = [value];
    }
    addmaterialefficiencys = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.materialefficiency.values = this.materialefficiency.values.concat(numvalues);
    	this.materialefficiency.operators = this.materialefficiency.operators.concat(operators);
    }    
    addamountproduceds = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.amountproduced.values = this.amountproduced.values.concat(numvalues);
    	this.amountproduced.operators = this.amountproduced.operators.concat(operators);
    }    
    addtotalamounts = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.totalamount.values = this.totalamount.values.concat(numvalues);
    	this.totalamount.operators = this.totalamount.operators.concat(operators);
    }    
    addbpprices = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.bpprice.values = this.bpprice.values.concat(numvalues);
    	this.bpprice.operators = this.bpprice.operators.concat(operators);
    }
    addresearchcosts = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.researchcost.values = this.researchcost.values.concat(numvalues);
    	this.researchcost.operators = this.researchcost.operators.concat(operators);
    }
    addstationfees = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.stationfee.values = this.stationfee.values.concat(numvalues);
    	this.stationfee.operators = this.stationfee.operators.concat(operators);
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

export default Userbpsuper;
