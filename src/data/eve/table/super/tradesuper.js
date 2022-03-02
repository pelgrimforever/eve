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
import {Orderspk} from './orderssuper.js';

export class Tradepk {
	ordersSellorderidPK: Orderspk = null;
	ordersBuyorderidPK: Orderspk = null;
	sell_order_id = () => {
		if(this.ordersSellorderidPK===null) return '';
		else return this.ordersSellorderidPK.getId();
	}
	getSell_order_id = () => {
		if(this.ordersSellorderidPK===null) return '';
		else return this.ordersSellorderidPK.getId();
	}
	buy_order_id = () => {
		if(this.ordersBuyorderidPK===null) return '';
		else return this.ordersBuyorderidPK.getId();
	}
	getBuy_order_id = () => {
		if(this.ordersBuyorderidPK===null) return '';
		else return this.ordersBuyorderidPK.getId();
	}
	init = () => {
		this.ordersSellorderidPK = new Orderspk();
		this.ordersBuyorderidPK = new Orderspk();
	}
}

class Tradesuper {
	constructor() { }
	tablename: string = 'trade';
	PK: Tradepk = new Tradepk();
	sell_order_id = () => {
		if(this.PK===null) return '';
		else return this.PK.sell_order_id;
	}
	buy_order_id = () => {
		if(this.PK===null) return '';
		else return this.PK.buy_order_id;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getSell_order_id() + " " + this.PK.getBuy_order_id();
		}
		return result;
	}
	total_volume: number = 0;
	buy_order_value: number = 0;
	sell_order_value: number = 0;
	profit: number = 0;
	jumps: number = 0;
	runs: number = 0;
	total_jumps: number = 0;
	profit_per_jump: number = 0;
	singlerun_profit_per_jump: number = 0;
	maxunits_per_run: number = 0;
	jumpslowsec: number = 0;
	jumpsnullsec: number = 0;
}

export class Tradesearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.total_volume);
		this.addFieldsearcher(this.buy_order_value);
		this.addFieldsearcher(this.sell_order_value);
		this.addFieldsearcher(this.profit);
		this.addFieldsearcher(this.jumps);
		this.addFieldsearcher(this.runs);
		this.addFieldsearcher(this.total_jumps);
		this.addFieldsearcher(this.profit_per_jump);
		this.addFieldsearcher(this.singlerun_profit_per_jump);
		this.addFieldsearcher(this.maxunits_per_run);
		this.addFieldsearcher(this.jumpslowsec);
		this.addFieldsearcher(this.jumpsnullsec);
        this.addKeysearcher(this.ordersSellorderidsearcher);
        this.addKeysearcher(this.ordersBuyorderidsearcher);
	}

    filtermodel: null;
    total_volume: Numbersearcher = new Numbersearcher("trade.total_volume");
    buy_order_value: Numbersearcher = new Numbersearcher("trade.buy_order_value");
    sell_order_value: Numbersearcher = new Numbersearcher("trade.sell_order_value");
    profit: Numbersearcher = new Numbersearcher("trade.profit");
    jumps: Numbersearcher = new Numbersearcher("trade.jumps");
    runs: Numbersearcher = new Numbersearcher("trade.runs");
    total_jumps: Numbersearcher = new Numbersearcher("trade.total_jumps");
    profit_per_jump: Numbersearcher = new Numbersearcher("trade.profit_per_jump");
    singlerun_profit_per_jump: Numbersearcher = new Numbersearcher("trade.singlerun_profit_per_jump");
    maxunits_per_run: Numbersearcher = new Numbersearcher("trade.maxunits_per_run");
    jumpslowsec: Numbersearcher = new Numbersearcher("trade.jumpslowsec");
    jumpsnullsec: Numbersearcher = new Numbersearcher("trade.jumpsnullsec");
    ordersSellorderidsearcher: Foreignkeysearcher = new Foreignkeysearcher();
    ordersBuyorderidsearcher: Foreignkeysearcher = new Foreignkeysearcher();

    addtotal_volumes = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.total_volume.values = this.total_volume.values.concat(numvalues);
    	this.total_volume.operators = this.total_volume.operators.concat(operators);
    }
    addbuy_order_values = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.buy_order_value.values = this.buy_order_value.values.concat(numvalues);
    	this.buy_order_value.operators = this.buy_order_value.operators.concat(operators);
    }
    addsell_order_values = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.sell_order_value.values = this.sell_order_value.values.concat(numvalues);
    	this.sell_order_value.operators = this.sell_order_value.operators.concat(operators);
    }
    addprofits = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.profit.values = this.profit.values.concat(numvalues);
    	this.profit.operators = this.profit.operators.concat(operators);
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
    addrunss = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.runs.values = this.runs.values.concat(numvalues);
    	this.runs.operators = this.runs.operators.concat(operators);
    }    
    addtotal_jumpss = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.total_jumps.values = this.total_jumps.values.concat(numvalues);
    	this.total_jumps.operators = this.total_jumps.operators.concat(operators);
    }    
    addprofit_per_jumps = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.profit_per_jump.values = this.profit_per_jump.values.concat(numvalues);
    	this.profit_per_jump.operators = this.profit_per_jump.operators.concat(operators);
    }
    addsinglerun_profit_per_jumps = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.singlerun_profit_per_jump.values = this.singlerun_profit_per_jump.values.concat(numvalues);
    	this.singlerun_profit_per_jump.operators = this.singlerun_profit_per_jump.operators.concat(operators);
    }
    addmaxunits_per_runs = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.maxunits_per_run.values = this.maxunits_per_run.values.concat(numvalues);
    	this.maxunits_per_run.operators = this.maxunits_per_run.operators.concat(operators);
    }    
    addjumpslowsecs = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.jumpslowsec.values = this.jumpslowsec.values.concat(numvalues);
    	this.jumpslowsec.operators = this.jumpslowsec.operators.concat(operators);
    }    
    addjumpsnullsecs = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.jumpsnullsec.values = this.jumpsnullsec.values.concat(numvalues);
    	this.jumpsnullsec.operators = this.jumpsnullsec.operators.concat(operators);
    }    
    setordersSellorderid = (orderssearch) => {
        this.ordersSellorderidsearcher.setTablesearch(orderssearch);
    }
    setordersBuyorderid = (orderssearch) => {
        this.ordersBuyorderidsearcher.setTablesearch(orderssearch);
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
                "ordersSellorderidsearcher": null,
                "ordersBuyorderidsearcher": null,
            }; 
            if(this.ordersSellorderidsearcher!=null && this.ordersSellorderidsearcher.used()) {
                kss.ordersSellorderidsearcher = this.ordersSellorderidsearcher.toJSON();
            }
            if(this.ordersBuyorderidsearcher!=null && this.ordersBuyorderidsearcher.used()) {
                kss.ordersBuyorderidsearcher = this.ordersBuyorderidsearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Tradesuper;
