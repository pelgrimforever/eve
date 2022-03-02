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
import {Evetypepk} from './evetypesuper.js';
import {Systempk} from './systemsuper.js';

export class Tradecombinedpk {
	evetypePK: Evetypepk = null;
	systemBuysystemPK: Systempk = null;
	systemSellsystemPK: Systempk = null;
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
	evetype = () => {
		if(this.evetypePK===null) return '';
		else return this.evetypePK.getId();
	}
	getEvetype = () => {
		if(this.evetypePK===null) return '';
		else return this.evetypePK.getId();
	}
	init = () => {
		this.evetypePK = new Evetypepk();
		this.systemBuysystemPK = new Systempk();
		this.systemSellsystemPK = new Systempk();
	}
}

class Tradecombinedsuper {
	constructor() { }
	tablename: string = 'tradecombined';
	PK: Tradecombinedpk = new Tradecombinedpk();
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
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getSell_system() + " " + this.PK.getBuy_system() + " " + this.PK.getEvetype();
		}
		return result;
	}
	jumps: number = 0;
	jumpslowsec: number = 0;
	jumpsnullsec: number = 0;
}

export class Tradecombinedsearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.jumps);
		this.addFieldsearcher(this.jumpslowsec);
		this.addFieldsearcher(this.jumpsnullsec);
        this.addKeysearcher(this.evetypesearcher);
        this.addKeysearcher(this.systemBuysystemsearcher);
        this.addKeysearcher(this.systemSellsystemsearcher);
        this.addKeysearcher(this.tradecombinedsellsearcher);
        this.addKeysearcher(this.orders1searcher);
        this.addKeysearcher(this.orders2searcher);
	}

    filtermodel: null;
    jumps: Numbersearcher = new Numbersearcher("tradecombined.jumps");
    jumpslowsec: Numbersearcher = new Numbersearcher("tradecombined.jumpslowsec");
    jumpsnullsec: Numbersearcher = new Numbersearcher("tradecombined.jumpsnullsec");
    evetypesearcher: Foreignkeysearcher = new Foreignkeysearcher();
    systemBuysystemsearcher: Foreignkeysearcher = new Foreignkeysearcher();
    systemSellsystemsearcher: Foreignkeysearcher = new Foreignkeysearcher();
    tradecombinedsellsearcher: Primarykeysearcher = new Primarykeysearcher();
    orders1searcher: Relationalkeysearcher = new Relationalkeysearcher();
    orders2searcher: Relationalkeysearcher = new Relationalkeysearcher();

    addjumpss = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.jumps.values = this.jumps.values.concat(numvalues);
    	this.jumps.operators = this.jumps.operators.concat(operators);
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
    setevetype = (evetypesearch) => {
        this.evetypesearcher.setTablesearch(evetypesearch);
    }
    setsystemBuysystem = (systemsearch) => {
        this.systemBuysystemsearcher.setTablesearch(systemsearch);
    }
    setsystemSellsystem = (systemsearch) => {
        this.systemSellsystemsearcher.setTablesearch(systemsearch);
    }
    settradecombinedsell = (tradecombinedsellsearch) => {
        this.tradecombinedsellsearcher.setTablesearch(tradecombinedsellsearch);
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
                "evetypesearcher": null,
                "systemBuysystemsearcher": null,
                "systemSellsystemsearcher": null,
                "tradecombinedsellsearcher": null,
                "orders1searcher": null,
                "orders2searcher": null,
            }; 
            if(this.evetypesearcher!=null && this.evetypesearcher.used()) {
                kss.evetypesearcher = this.evetypesearcher.toJSON();
            }
            if(this.systemBuysystemsearcher!=null && this.systemBuysystemsearcher.used()) {
                kss.systemBuysystemsearcher = this.systemBuysystemsearcher.toJSON();
            }
            if(this.systemSellsystemsearcher!=null && this.systemSellsystemsearcher.used()) {
                kss.systemSellsystemsearcher = this.systemSellsystemsearcher.toJSON();
            }
            if(this.tradecombinedsellsearcher!=null && this.tradecombinedsellsearcher.used()) {
                kss.tradecombinedsellsearcher = this.tradecombinedsellsearcher.toJSON();
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

export default Tradecombinedsuper;
