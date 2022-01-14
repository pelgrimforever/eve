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
import {Orderspk} from './orderssuper.js';
import {Tradecombinedpk} from './tradecombinedsuper.js';

export class Tradecombinedsellpk {
	ordersBuyorderidPK: Orderspk = null;
	ordersSellorderidPK: Orderspk = null;
	tradecombinedPK: Tradecombinedpk = null;
	sell_system = () => {
		if(this.tradecombinedPK===null) return '';
		else return this.tradecombinedPK.getSell_system();
	}
	getSell_system = () => {
		if(this.tradecombinedPK===null) return '';
		else return this.tradecombinedPK.getSell_system();
	}
	buy_system = () => {
		if(this.tradecombinedPK===null) return '';
		else return this.tradecombinedPK.getBuy_system();
	}
	getBuy_system = () => {
		if(this.tradecombinedPK===null) return '';
		else return this.tradecombinedPK.getBuy_system();
	}
	evetype = () => {
		if(this.tradecombinedPK===null) return '';
		else return this.tradecombinedPK.getEvetype();
	}
	getEvetype = () => {
		if(this.tradecombinedPK===null) return '';
		else return this.tradecombinedPK.getEvetype();
	}
	buy_order_id = () => {
		if(this.ordersBuyorderidPK===null) return '';
		else return this.ordersBuyorderidPK.getId();
	}
	getBuy_order_id = () => {
		if(this.ordersBuyorderidPK===null) return '';
		else return this.ordersBuyorderidPK.getId();
	}
	sell_order_id = () => {
		if(this.ordersSellorderidPK===null) return '';
		else return this.ordersSellorderidPK.getId();
	}
	getSell_order_id = () => {
		if(this.ordersSellorderidPK===null) return '';
		else return this.ordersSellorderidPK.getId();
	}
	init = () => {
		this.ordersBuyorderidPK = new Orderspk();
		this.ordersSellorderidPK = new Orderspk();
		this.tradecombinedPK = new Tradecombinedpk();
	}
}

class Tradecombinedsellsuper {
	constructor() { }
	tablename: string = 'tradecombinedsell';
	PK: Tradecombinedsellpk = new Tradecombinedsellpk();
	sell_system = () => {
		if(this.PK===null) return '';
		else return this.PK.sell_system;
	}
	buy_system = () => {
		if(this.PK===null) return '';
		else return this.PK.buy_system;
	}
	evetype = () => {
		if(this.PK===null) return '';
		else return this.PK.evetype;
	}
	buy_order_id = () => {
		if(this.PK===null) return '';
		else return this.PK.buy_order_id;
	}
	sell_order_id = () => {
		if(this.PK===null) return '';
		else return this.PK.sell_order_id;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getSell_system() + " " + this.PK.getBuy_system() + " " + this.PK.getEvetype() + " " + this.PK.getBuy_order_id() + " " + this.PK.getSell_order_id();
		}
		return result;
	}
	amount: string = '';
	buy_order_value: number = 0;
	sell_order_value: number = 0;
	profit: number = 0;
}

export class Tradecombinedsellsearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.amount);
		this.addFieldsearcher(this.buy_order_value);
		this.addFieldsearcher(this.sell_order_value);
		this.addFieldsearcher(this.profit);
        this.addKeysearcher(this.ordersBuyorderidsearcher);
        this.addKeysearcher(this.ordersSellorderidsearcher);
        this.addKeysearcher(this.tradecombinedsearcher);
	}

    filtermodel: null;
    amount: Numbersearcher = new Numbersearcher("tradecombinedsell.amount");
    buy_order_value: Numbersearcher = new Numbersearcher("tradecombinedsell.buy_order_value");
    sell_order_value: Numbersearcher = new Numbersearcher("tradecombinedsell.sell_order_value");
    profit: Numbersearcher = new Numbersearcher("tradecombinedsell.profit");
    ordersBuyorderidsearcher: Foreignkeysearcher = new Foreignkeysearcher();
    ordersSellorderidsearcher: Foreignkeysearcher = new Foreignkeysearcher();
    tradecombinedsearcher: Foreignkeysearcher = new Foreignkeysearcher();

    addamounts = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.amount.values = this.amount.values.concat(numvalues);
    	this.amount.operators = this.amount.operators.concat(operators);
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
    setordersBuyorderid = (orderssearch) => {
        this.ordersBuyorderidsearcher.setTablesearch(orderssearch);
    }
    setordersSellorderid = (orderssearch) => {
        this.ordersSellorderidsearcher.setTablesearch(orderssearch);
    }
    settradecombined = (tradecombinedsearch) => {
        this.tradecombinedsearcher.setTablesearch(tradecombinedsearch);
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
                "ordersBuyorderidsearcher": null,
                "ordersSellorderidsearcher": null,
                "tradecombinedsearcher": null,
            }; 
            if(this.ordersBuyorderidsearcher!=null && this.ordersBuyorderidsearcher.used()) {
                kss.ordersBuyorderidsearcher = this.ordersBuyorderidsearcher.toJSON();
            }
            if(this.ordersSellorderidsearcher!=null && this.ordersSellorderidsearcher.used()) {
                kss.ordersSellorderidsearcher = this.ordersSellorderidsearcher.toJSON();
            }
            if(this.tradecombinedsearcher!=null && this.tradecombinedsearcher.used()) {
                kss.tradecombinedsearcher = this.tradecombinedsearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Tradecombinedsellsuper;
