//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 20.11.2021 17:22
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
import {Orderspk} from './orderssuper.js';
import {Shipfitorderpk} from './shipfitordersuper.js';

export class Shipfitorderselectedpk {
	ordersPK: Orderspk = null;
	shipfitorderPK: Shipfitorderpk = null;
	username = () => {
		if(this.shipfitorderPK===null) return '';
		else return this.shipfitorderPK.getUsername();
	}
	getUsername = () => {
		if(this.shipfitorderPK===null) return '';
		else return this.shipfitorderPK.getUsername();
	}
	shipname = () => {
		if(this.shipfitorderPK===null) return '';
		else return this.shipfitorderPK.getShipname();
	}
	getShipname = () => {
		if(this.shipfitorderPK===null) return '';
		else return this.shipfitorderPK.getShipname();
	}
	evetype = () => {
		if(this.shipfitorderPK===null) return '';
		else return this.shipfitorderPK.getEvetype();
	}
	getEvetype = () => {
		if(this.shipfitorderPK===null) return '';
		else return this.shipfitorderPK.getEvetype();
	}
	orderid = () => {
		if(this.ordersPK===null) return '';
		else return this.ordersPK.getId();
	}
	getOrderid = () => {
		if(this.ordersPK===null) return '';
		else return this.ordersPK.getId();
	}
	init = () => {
		this.ordersPK = new Orderspk();
		this.shipfitorderPK = new Shipfitorderpk();
	}
}

class Shipfitorderselectedsuper {
	constructor() { }
	tablename: string = 'shipfitorderselected';
	PK: Shipfitorderselectedpk = new Shipfitorderselectedpk();
	username = () => {
		if(this.PK===null) return '';
		else return this.PK.username;
	}
	shipname = () => {
		if(this.PK===null) return '';
		else return this.PK.shipname;
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
			result += this.PK.getUsername() + " " + this.PK.getShipname() + " " + this.PK.getEvetype() + " " + this.PK.getOrderid();
		}
		return result;
	}
	amount: number = 0;
}

export class Shipfitorderselectedsearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.amount);
        this.addKeysearcher(this.orderssearcher);
        this.addKeysearcher(this.shipfitordersearcher);
	}

    filtermodel: null;
    amount: Numbersearcher = new Numbersearcher("shipfitorderselected.amount");
    orderssearcher: Foreignkeysearcher = new Foreignkeysearcher();
    shipfitordersearcher: Foreignkeysearcher = new Foreignkeysearcher();

    addamounts = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.amount.values = this.amount.values.concat(numvalues);
    	this.amount.operators = this.amount.operators.concat(operators);
    }    
    setorders = (orderssearch) => {
        this.orderssearcher.setTablesearch(orderssearch);
    }
    setshipfitorder = (shipfitordersearch) => {
        this.shipfitordersearcher.setTablesearch(shipfitordersearch);
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
                "orderssearcher": null,
                "shipfitordersearcher": null,
            }; 
            if(this.orderssearcher!=null && this.orderssearcher.used()) {
                kss.orderssearcher = this.orderssearcher.toJSON();
            }
            if(this.shipfitordersearcher!=null && this.shipfitordersearcher.used()) {
                kss.shipfitordersearcher = this.shipfitordersearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Shipfitorderselectedsuper;
