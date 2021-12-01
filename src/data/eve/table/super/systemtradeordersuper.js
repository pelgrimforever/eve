//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 30.10.2021 10:4
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
import {Systemtradepk} from './systemtradesuper.js';

export class Systemtradeorderpk {
	ordersBuyorderPK: Orderspk = null;
	ordersSellorderPK: Orderspk = null;
	systemtradePK: Systemtradepk = null;
	sell_system = () => {
		if(this.systemtradePK===null) return '';
		else return this.systemtradePK.getSell_system();
	}
	getSell_system = () => {
		if(this.systemtradePK===null) return '';
		else return this.systemtradePK.getSell_system();
	}
	buy_system = () => {
		if(this.systemtradePK===null) return '';
		else return this.systemtradePK.getBuy_system();
	}
	getBuy_system = () => {
		if(this.systemtradePK===null) return '';
		else return this.systemtradePK.getBuy_system();
	}
	sell_order = () => {
		if(this.ordersSellorderPK===null) return '';
		else return this.ordersSellorderPK.getId();
	}
	getSell_order = () => {
		if(this.ordersSellorderPK===null) return '';
		else return this.ordersSellorderPK.getId();
	}
	buy_order = () => {
		if(this.ordersBuyorderPK===null) return '';
		else return this.ordersBuyorderPK.getId();
	}
	getBuy_order = () => {
		if(this.ordersBuyorderPK===null) return '';
		else return this.ordersBuyorderPK.getId();
	}
	init = () => {
		this.ordersBuyorderPK = new Orderspk();
		this.ordersSellorderPK = new Orderspk();
		this.systemtradePK = new Systemtradepk();
	}
}

class Systemtradeordersuper {
	constructor() { }
	tablename: string = 'systemtradeorder';
	PK: Systemtradeorderpk = new Systemtradeorderpk();
	sell_system = () => {
		if(this.PK===null) return '';
		else return this.PK.sell_system;
	}
	buy_system = () => {
		if(this.PK===null) return '';
		else return this.PK.buy_system;
	}
	sell_order = () => {
		if(this.PK===null) return '';
		else return this.PK.sell_order;
	}
	buy_order = () => {
		if(this.PK===null) return '';
		else return this.PK.buy_order;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getSell_system() + " " + this.PK.getBuy_system() + " " + this.PK.getSell_order() + " " + this.PK.getBuy_order();
		}
		return result;
	}
	amount: string = '';
	sellprice: number = 0;
	buyprice: number = 0;
	profit: number = 0;
	cargovolume: number = 0;
}

export class Systemtradeordersearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.amount);
		this.addFieldsearcher(this.sellprice);
		this.addFieldsearcher(this.buyprice);
		this.addFieldsearcher(this.profit);
		this.addFieldsearcher(this.cargovolume);
        this.addKeysearcher(this.ordersBuyordersearcher);
        this.addKeysearcher(this.ordersSellordersearcher);
        this.addKeysearcher(this.systemtradesearcher);
	}

    filtermodel: null;
    amount: Numbersearcher = new Numbersearcher("systemtradeorder.amount");
    sellprice: Numbersearcher = new Numbersearcher("systemtradeorder.sellprice");
    buyprice: Numbersearcher = new Numbersearcher("systemtradeorder.buyprice");
    profit: Numbersearcher = new Numbersearcher("systemtradeorder.profit");
    cargovolume: Numbersearcher = new Numbersearcher("systemtradeorder.cargovolume");
    ordersBuyordersearcher: Foreignkeysearcher = new Foreignkeysearcher();
    ordersSellordersearcher: Foreignkeysearcher = new Foreignkeysearcher();
    systemtradesearcher: Foreignkeysearcher = new Foreignkeysearcher();

    addamounts = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.amount.values = this.amount.values.concat(numvalues);
    	this.amount.operators = this.amount.operators.concat(operators);
    }
    addsellprices = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.sellprice.values = this.sellprice.values.concat(numvalues);
    	this.sellprice.operators = this.sellprice.operators.concat(operators);
    }
    addbuyprices = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.buyprice.values = this.buyprice.values.concat(numvalues);
    	this.buyprice.operators = this.buyprice.operators.concat(operators);
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
    addcargovolumes = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.cargovolume.values = this.cargovolume.values.concat(numvalues);
    	this.cargovolume.operators = this.cargovolume.operators.concat(operators);
    }
    setordersBuyorder = (orderssearch) => {
        this.ordersBuyordersearcher.setTablesearch(orderssearch);
    }
    setordersSellorder = (orderssearch) => {
        this.ordersSellordersearcher.setTablesearch(orderssearch);
    }
    setsystemtrade = (systemtradesearch) => {
        this.systemtradesearcher.setTablesearch(systemtradesearch);
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
                "ordersBuyordersearcher": null,
                "ordersSellordersearcher": null,
                "systemtradesearcher": null,
            }; 
            if(this.ordersBuyordersearcher!=null && this.ordersBuyordersearcher.used()) {
                kss.ordersBuyordersearcher = this.ordersBuyordersearcher.toJSON();
            }
            if(this.ordersSellordersearcher!=null && this.ordersSellordersearcher.used()) {
                kss.ordersSellordersearcher = this.ordersSellordersearcher.toJSON();
            }
            if(this.systemtradesearcher!=null && this.systemtradesearcher.used()) {
                kss.systemtradesearcher = this.systemtradesearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Systemtradeordersuper;
