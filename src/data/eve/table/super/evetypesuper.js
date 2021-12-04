//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 4.11.2021 14:51
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
import {Marketgrouppk} from './marketgroupsuper.js';
import {Typegrouppk} from './typegroupsuper.js';
import {Graphicpk} from './graphicsuper.js';

export class Evetypepk {
    id: string = '';
    getId = () => {
        return this.id;
    }
	init = () => {
		this.id = '';
	}
}

class Evetypesuper {
	constructor() { }
	tablename: string = 'evetype';
	PK: Evetypepk = new Evetypepk();
	id = () => {
		if(this.PK===null) return '';
		else return this.PK.id;
	}
	marketgroupPK: Marketgrouppk = null;
	typegroupPK: Typegrouppk = null;
	graphicPK: Graphicpk = null;
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getId();
		}
		return result;
	}
	name = '';
	published: boolean = false;
	description = '';
	capacity: number = 0;
	icon: string = '';
	mass: number = 0;
	packaged_volume: number = 0;
	portion_size: number = 0;
	radius: number = 0;
	volume: number = 0;
	avg_buyorder: number = 0;
	avg_sellorder: number = 0;
	min_buyorder: number = 0;
	max_buyorder: number = 0;
	min_selorder: number = 0;
	max_selorder: number = 0;
}

export class Evetypesearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.id);
		this.addFieldsearcher(this.name);
		this.addFieldsearcher(this.published);
		this.addFieldsearcher(this.description);
		this.addFieldsearcher(this.capacity);
		this.addFieldsearcher(this.icon);
		this.addFieldsearcher(this.mass);
		this.addFieldsearcher(this.packaged_volume);
		this.addFieldsearcher(this.portion_size);
		this.addFieldsearcher(this.radius);
		this.addFieldsearcher(this.volume);
		this.addFieldsearcher(this.avg_buyorder);
		this.addFieldsearcher(this.avg_sellorder);
		this.addFieldsearcher(this.min_buyorder);
		this.addFieldsearcher(this.max_buyorder);
		this.addFieldsearcher(this.min_selorder);
		this.addFieldsearcher(this.max_selorder);
        this.addKeysearcher(this.marketgroupsearcher);
        this.addKeysearcher(this.typegroupsearcher);
        this.addKeysearcher(this.graphicsearcher);
        this.addKeysearcher(this.stocksearcher);
        this.addKeysearcher(this.orderhistorysearcher);
        this.addKeysearcher(this.regionsearcher);
        this.addKeysearcher(this.tradecombinedsearcher);
        this.addKeysearcher(this.system1searcher);
        this.addKeysearcher(this.system2searcher);
	}

    filtermodel: null;
    id: Numbersearcher = new Numbersearcher("evetype.id");
    name: Stringsearcher = new Stringsearcher("evetype.name");
    published: Booleansearcher = new Booleansearcher("evetype.published");
    description: Stringsearcher = new Stringsearcher("evetype.description");
    capacity: Numbersearcher = new Numbersearcher("evetype.capacity");
    icon: Numbersearcher = new Numbersearcher("evetype.icon");
    mass: Numbersearcher = new Numbersearcher("evetype.mass");
    packaged_volume: Numbersearcher = new Numbersearcher("evetype.packaged_volume");
    portion_size: Numbersearcher = new Numbersearcher("evetype.portion_size");
    radius: Numbersearcher = new Numbersearcher("evetype.radius");
    volume: Numbersearcher = new Numbersearcher("evetype.volume");
    avg_buyorder: Numbersearcher = new Numbersearcher("evetype.avg_buyorder");
    avg_sellorder: Numbersearcher = new Numbersearcher("evetype.avg_sellorder");
    min_buyorder: Numbersearcher = new Numbersearcher("evetype.min_buyorder");
    max_buyorder: Numbersearcher = new Numbersearcher("evetype.max_buyorder");
    min_selorder: Numbersearcher = new Numbersearcher("evetype.min_selorder");
    max_selorder: Numbersearcher = new Numbersearcher("evetype.max_selorder");
    marketgroupsearcher: Foreignkeysearcher = new Foreignkeysearcher();
    typegroupsearcher: Foreignkeysearcher = new Foreignkeysearcher();
    graphicsearcher: Foreignkeysearcher = new Foreignkeysearcher();
    stocksearcher: Primarykeysearcher = new Primarykeysearcher();
    orderhistorysearcher: Primarykeysearcher = new Primarykeysearcher();
    regionsearcher: Relationalkeysearcher = new Relationalkeysearcher();
    tradecombinedsearcher: Primarykeysearcher = new Primarykeysearcher();
    system1searcher: Relationalkeysearcher = new Relationalkeysearcher();
    system2searcher: Relationalkeysearcher = new Relationalkeysearcher();

    addids = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.id.values = this.id.values.concat(numvalues);
    	this.id.operators = this.id.operators.concat(operators);
    }
    addnames = (values) => {
    	this.name.values = this.name.values.concat(values);
    }
    addpublished = (value) => {
    	this.published.values = [value];
    }
    adddescriptions = (values) => {
    	this.description.values = this.description.values.concat(values);
    }
    addcapacitys = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.capacity.values = this.capacity.values.concat(numvalues);
    	this.capacity.operators = this.capacity.operators.concat(operators);
    }
    addicons = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.icon.values = this.icon.values.concat(numvalues);
    	this.icon.operators = this.icon.operators.concat(operators);
    }
    addmasss = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.mass.values = this.mass.values.concat(numvalues);
    	this.mass.operators = this.mass.operators.concat(operators);
    }
    addpackaged_volumes = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.packaged_volume.values = this.packaged_volume.values.concat(numvalues);
    	this.packaged_volume.operators = this.packaged_volume.operators.concat(operators);
    }
    addportion_sizes = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.portion_size.values = this.portion_size.values.concat(numvalues);
    	this.portion_size.operators = this.portion_size.operators.concat(operators);
    }    
    addradiuss = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.radius.values = this.radius.values.concat(numvalues);
    	this.radius.operators = this.radius.operators.concat(operators);
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
    addavg_buyorders = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.avg_buyorder.values = this.avg_buyorder.values.concat(numvalues);
    	this.avg_buyorder.operators = this.avg_buyorder.operators.concat(operators);
    }
    addavg_sellorders = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.avg_sellorder.values = this.avg_sellorder.values.concat(numvalues);
    	this.avg_sellorder.operators = this.avg_sellorder.operators.concat(operators);
    }
    addmin_buyorders = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.min_buyorder.values = this.min_buyorder.values.concat(numvalues);
    	this.min_buyorder.operators = this.min_buyorder.operators.concat(operators);
    }
    addmax_buyorders = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.max_buyorder.values = this.max_buyorder.values.concat(numvalues);
    	this.max_buyorder.operators = this.max_buyorder.operators.concat(operators);
    }
    addmin_selorders = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.min_selorder.values = this.min_selorder.values.concat(numvalues);
    	this.min_selorder.operators = this.min_selorder.operators.concat(operators);
    }
    addmax_selorders = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.max_selorder.values = this.max_selorder.values.concat(numvalues);
    	this.max_selorder.operators = this.max_selorder.operators.concat(operators);
    }
    setmarketgroup = (marketgroupsearch) => {
        this.marketgroupsearcher.setTablesearch(marketgroupsearch);
    }
    settypegroup = (typegroupsearch) => {
        this.typegroupsearcher.setTablesearch(typegroupsearch);
    }
    setgraphic = (graphicsearch) => {
        this.graphicsearcher.setTablesearch(graphicsearch);
    }
    setstock = (stocksearch) => {
        this.stocksearcher.setTablesearch(stocksearch);
    }
    setorderhistory = (orderhistorysearch) => {
        this.orderhistorysearcher.setTablesearch(orderhistorysearch);
    }
    setregion = (regionsearch) => {
        this.regionsearcher.setTablesearch(regionsearch);
    }
    settradecombined = (tradecombinedsearch) => {
        this.tradecombinedsearcher.setTablesearch(tradecombinedsearch);
    }
    setsystem1 = (systemsearch) => {
        this.system1searcher.setTablesearch(systemsearch);
    }
    setsystem2 = (systemsearch) => {
        this.system2searcher.setTablesearch(systemsearch);
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
                "marketgroupsearcher": null,
                "typegroupsearcher": null,
                "graphicsearcher": null,
                "stocksearcher": null,
                "orderhistorysearcher": null,
                "regionsearcher": null,
                "tradecombinedsearcher": null,
                "system1searcher": null,
                "system2searcher": null,
            }; 
            if(this.marketgroupsearcher!=null && this.marketgroupsearcher.used()) {
                kss.marketgroupsearcher = this.marketgroupsearcher.toJSON();
            }
            if(this.typegroupsearcher!=null && this.typegroupsearcher.used()) {
                kss.typegroupsearcher = this.typegroupsearcher.toJSON();
            }
            if(this.graphicsearcher!=null && this.graphicsearcher.used()) {
                kss.graphicsearcher = this.graphicsearcher.toJSON();
            }
            if(this.stocksearcher!=null && this.stocksearcher.used()) {
                kss.stocksearcher = this.stocksearcher.toJSON();
            }
            if(this.orderhistorysearcher!=null && this.orderhistorysearcher.used()) {
                kss.orderhistorysearcher = this.orderhistorysearcher.toJSON();
            }
            if(this.regionsearcher!=null && this.regionsearcher.used()) {
                kss.regionsearcher = this.regionsearcher.toJSON();
            }
            if(this.tradecombinedsearcher!=null && this.tradecombinedsearcher.used()) {
                kss.tradecombinedsearcher = this.tradecombinedsearcher.toJSON();
            }
            if(this.system1searcher!=null && this.system1searcher.used()) {
                kss.system1searcher = this.system1searcher.toJSON();
            }
            if(this.system2searcher!=null && this.system2searcher.used()) {
                kss.system2searcher = this.system2searcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Evetypesuper;
