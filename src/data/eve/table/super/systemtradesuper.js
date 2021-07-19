//Auto generated code
//don't change things here, it will be overwritten
//extend classes in systemtrade.ts for table class definitions
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

export class Systemtradepk {
	systemSellsystemPK: Systempk = null;
	systemBuysystemPK: Systempk = null;
	sell_system = () => {
		if(this.systemSellsystemPK===null) return '';
		else return this.systemSellsystemPK.getId();
	}
	getSell_system = () => {
		if(this.systemSellsystemPK===null) return '';
		else return this.systemSellsystemPK.getId();
	}
	buy_system = () => {
		if(this.systemBuysystemPK===null) return '';
		else return this.systemBuysystemPK.getId();
	}
	getBuy_system = () => {
		if(this.systemBuysystemPK===null) return '';
		else return this.systemBuysystemPK.getId();
	}
	init = () => {
		this.systemSellsystemPK = new Systempk();
		this.systemBuysystemPK = new Systempk();
	}
}

class Systemtradesuper {
	constructor() { }
	tablename: string = 'systemtrade';
	PK: Systemtradepk = new Systemtradepk();
	sell_system = () => {
		if(this.PK===null) return '';
		else return this.PK.sell_system;
	}
	buy_system = () => {
		if(this.PK===null) return '';
		else return this.PK.buy_system;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getSell_system() + " " + this.PK.getBuy_system();
		}
		return result;
	}
	profit: number = 0;
	total_cargo_volume: number = 0;
	jumps: number = 0;
}

export class Systemtradesearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.profit);
		this.addFieldsearcher(this.total_cargo_volume);
		this.addFieldsearcher(this.jumps);
        this.addKeysearcher(this.systemSellsystemsearcher);
        this.addKeysearcher(this.systemBuysystemsearcher);
        this.addKeysearcher(this.systemtradeordersearcher);
        this.addKeysearcher(this.orders1searcher);
        this.addKeysearcher(this.orders2searcher);
	}

    filtermodel: null;
    profit: Numbersearcher = new Numbersearcher("systemtrade.profit");
    total_cargo_volume: Numbersearcher = new Numbersearcher("systemtrade.total_cargo_volume");
    jumps: Numbersearcher = new Numbersearcher("systemtrade.jumps");
    systemSellsystemsearcher: Foreignkeysearcher = new Foreignkeysearcher();
    systemBuysystemsearcher: Foreignkeysearcher = new Foreignkeysearcher();
    systemtradeordersearcher: Primarykeysearcher = new Primarykeysearcher();
    orders1searcher: Relationalkeysearcher = new Relationalkeysearcher();
    orders2searcher: Relationalkeysearcher = new Relationalkeysearcher();

    addprofits = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.profit.values = this.profit.values.concat(numvalues);
    	this.profit.operators = this.profit.operators.concat(operators);
    }
    addtotal_cargo_volumes = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.total_cargo_volume.values = this.total_cargo_volume.values.concat(numvalues);
    	this.total_cargo_volume.operators = this.total_cargo_volume.operators.concat(operators);
    }
    addjumpss = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.jumps.values = this.jumps.values.concat(numvalues);
    	this.jumps.operators = this.jumps.operators.concat(operators);
    }    
    setsystemSellsystem = (systemsearch) => {
        this.systemSellsystemsearcher.setTablesearch(systemsearch);
    }
    setsystemBuysystem = (systemsearch) => {
        this.systemBuysystemsearcher.setTablesearch(systemsearch);
    }
    setsystemtradeorder = (systemtradeordersearch) => {
        this.systemtradeordersearcher.setTablesearch(systemtradeordersearch);
    }
    setorders1 = (orderssearch) => {
        this.orders1searcher.setTablesearch(orderssearch);
    }
    setorders2 = (orderssearch) => {
        this.orders2searcher.setTablesearch(orderssearch);
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
                "systemSellsystemsearcher": null,
                "systemBuysystemsearcher": null,
                "systemtradeordersearcher": null,
                "orders1searcher": null,
                "orders2searcher": null,
            }; 
            if(this.systemSellsystemsearcher!=null && this.systemSellsystemsearcher.used()) {
                kss.systemSellsystemsearcher = this.systemSellsystemsearcher.toJSON();
            }
            if(this.systemBuysystemsearcher!=null && this.systemBuysystemsearcher.used()) {
                kss.systemBuysystemsearcher = this.systemBuysystemsearcher.toJSON();
            }
            if(this.systemtradeordersearcher!=null && this.systemtradeordersearcher.used()) {
                kss.systemtradeordersearcher = this.systemtradeordersearcher.toJSON();
            }
            if(this.orders1searcher!=null && this.orders1searcher.used()) {
                kss.orders1searcher = this.orders1searcher.toJSON();
            }
            if(this.orders2searcher!=null && this.orders2searcher.used()) {
                kss.orders2searcher = this.orders2searcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Systemtradesuper;
