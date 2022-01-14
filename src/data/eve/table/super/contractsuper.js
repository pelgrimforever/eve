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

export class Contractpk {
    id: string = '';
    getId = () => {
        return this.id;
    }
	init = () => {
		this.id = '';
	}
}

class Contractsuper {
	constructor() { }
	tablename: string = 'contract';
	PK: Contractpk = new Contractpk();
	id = () => {
		if(this.PK===null) return '';
		else return this.PK.id;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getId();
		}
		return result;
	}
	collateral: number = 0;
	date_expired = '';
	date_issued = '';
	days_to_complete: number = 0;
	end_location_id: string = '';
	for_corporation: boolean = false;
	price: number = 0;
	reward: number = 0;
	start_location_id: string = '';
	title = '';
	type = '';
	volume: number = 0;
	page: number = 0;
	active: boolean = false;
}

export class Contractsearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.id);
		this.addFieldsearcher(this.collateral);
		this.addFieldsearcher(this.date_expired);
		this.addFieldsearcher(this.date_issued);
		this.addFieldsearcher(this.days_to_complete);
		this.addFieldsearcher(this.end_location_id);
		this.addFieldsearcher(this.for_corporation);
		this.addFieldsearcher(this.price);
		this.addFieldsearcher(this.reward);
		this.addFieldsearcher(this.start_location_id);
		this.addFieldsearcher(this.title);
		this.addFieldsearcher(this.type);
		this.addFieldsearcher(this.volume);
		this.addFieldsearcher(this.page);
		this.addFieldsearcher(this.active);
	}

    filtermodel: null;
    id: Numbersearcher = new Numbersearcher("contract.id");
    collateral: Numbersearcher = new Numbersearcher("contract.collateral");
    date_expired: Stringsearcher = new Stringsearcher("contract.date_expired");
    date_issued: Stringsearcher = new Stringsearcher("contract.date_issued");
    days_to_complete: Numbersearcher = new Numbersearcher("contract.days_to_complete");
    end_location_id: Numbersearcher = new Numbersearcher("contract.end_location_id");
    for_corporation: Booleansearcher = new Booleansearcher("contract.for_corporation");
    price: Numbersearcher = new Numbersearcher("contract.price");
    reward: Numbersearcher = new Numbersearcher("contract.reward");
    start_location_id: Numbersearcher = new Numbersearcher("contract.start_location_id");
    title: Stringsearcher = new Stringsearcher("contract.title");
    type: Stringsearcher = new Stringsearcher("contract.type");
    volume: Numbersearcher = new Numbersearcher("contract.volume");
    page: Numbersearcher = new Numbersearcher("contract.page");
    active: Booleansearcher = new Booleansearcher("contract.active");

    addids = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.id.values = this.id.values.concat(numvalues);
    	this.id.operators = this.id.operators.concat(operators);
    }
    addcollaterals = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.collateral.values = this.collateral.values.concat(numvalues);
    	this.collateral.operators = this.collateral.operators.concat(operators);
    }
    adddate_expireds = (values) => {
    	this.date_expired.values = this.date_expired.values.concat(values);
    }
    adddate_issueds = (values) => {
    	this.date_issued.values = this.date_issued.values.concat(values);
    }
    adddays_to_completes = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.days_to_complete.values = this.days_to_complete.values.concat(numvalues);
    	this.days_to_complete.operators = this.days_to_complete.operators.concat(operators);
    }    
    addend_location_ids = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.end_location_id.values = this.end_location_id.values.concat(numvalues);
    	this.end_location_id.operators = this.end_location_id.operators.concat(operators);
    }
    addfor_corporation = (value) => {
    	this.for_corporation.values = [value];
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
    addrewards = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.reward.values = this.reward.values.concat(numvalues);
    	this.reward.operators = this.reward.operators.concat(operators);
    }
    addstart_location_ids = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.start_location_id.values = this.start_location_id.values.concat(numvalues);
    	this.start_location_id.operators = this.start_location_id.operators.concat(operators);
    }
    addtitles = (values) => {
    	this.title.values = this.title.values.concat(values);
    }
    addtypes = (values) => {
    	this.type.values = this.type.values.concat(values);
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
    addpages = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.page.values = this.page.values.concat(numvalues);
    	this.page.operators = this.page.operators.concat(operators);
    }    
    addactive = (value) => {
    	this.active.values = [value];
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
            }; 
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Contractsuper;
