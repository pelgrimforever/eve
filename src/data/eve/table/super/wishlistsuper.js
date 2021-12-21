//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 16.11.2021 17:36
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

export class Wishlistpk {
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

class Wishlistsuper {
	constructor() { }
	tablename: string = 'wishlist';
	PK: Wishlistpk = new Wishlistpk();
	evetype = () => {
		if(this.PK===null) return '';
		else return this.PK.evetype;
	}
	username = () => {
		if(this.PK===null) return '';
		else return this.PK.username;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getEvetype() + " " + this.PK.getUsername();
		}
		return result;
	}
	maxprice: number = 0;
}

export class Wishlistsearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.username);
		this.addFieldsearcher(this.maxprice);
        this.addKeysearcher(this.evetypesearcher);
	}

    filtermodel: null;
    username: Stringsearcher = new Stringsearcher("wishlist.username");
    maxprice: Numbersearcher = new Numbersearcher("wishlist.maxprice");
    evetypesearcher: Foreignkeysearcher = new Foreignkeysearcher();

    addusernames = (values) => {
    	this.username.values = this.username.values.concat(values);
    }
    addmaxprices = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.maxprice.values = this.maxprice.values.concat(numvalues);
    	this.maxprice.operators = this.maxprice.operators.concat(operators);
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

export default Wishlistsuper;
