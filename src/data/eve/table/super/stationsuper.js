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
import {Racepk} from './racesuper.js';
import {Evetypepk} from './evetypesuper.js';
import {Systempk} from './systemsuper.js';

export class Stationpk {
    id: string = '';
    getId = () => {
        return this.id;
    }
	init = () => {
		this.id = '';
	}
}

class Stationsuper {
	constructor() { }
	tablename: string = 'station';
	PK: Stationpk = new Stationpk();
	id = () => {
		if(this.PK===null) return '';
		else return this.PK.id;
	}
	racePK: Racepk = null;
	evetypePK: Evetypepk = null;
	systemPK: Systempk = null;
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getId();
		}
		return result;
	}
	name = '';
	office_rental_cost: number = 0;
	reprocessing_efficiency: number = 0;
	reprocessing_stations_take: number = 0;
	max_dockable_ship_volume: number = 0;
	owner: string = '';
	downloaddate: string = '';
	downloaddateUI: string = '';
}

export class Stationsearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.id);
		this.addFieldsearcher(this.name);
		this.addFieldsearcher(this.office_rental_cost);
		this.addFieldsearcher(this.reprocessing_efficiency);
		this.addFieldsearcher(this.reprocessing_stations_take);
		this.addFieldsearcher(this.max_dockable_ship_volume);
		this.addFieldsearcher(this.owner);
		this.addFieldsearcher(this.downloaddate);
        this.addKeysearcher(this.racesearcher);
        this.addKeysearcher(this.evetypesearcher);
        this.addKeysearcher(this.systemsearcher);
        this.addKeysearcher(this.stationservicesearcher);
	}

    filtermodel: null;
    id: Numbersearcher = new Numbersearcher("station.id");
    name: Stringsearcher = new Stringsearcher("station.name");
    office_rental_cost: Numbersearcher = new Numbersearcher("station.office_rental_cost");
    reprocessing_efficiency: Numbersearcher = new Numbersearcher("station.reprocessing_efficiency");
    reprocessing_stations_take: Numbersearcher = new Numbersearcher("station.reprocessing_stations_take");
    max_dockable_ship_volume: Numbersearcher = new Numbersearcher("station.max_dockable_ship_volume");
    owner: Numbersearcher = new Numbersearcher("station.owner");
    downloaddate: Datesearcher = new Datesearcher("station.downloaddate");
    racesearcher: Foreignkeysearcher = new Foreignkeysearcher();
    evetypesearcher: Foreignkeysearcher = new Foreignkeysearcher();
    systemsearcher: Foreignkeysearcher = new Foreignkeysearcher();
    stationservicesearcher: Primarykeysearcher = new Primarykeysearcher();

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
    addoffice_rental_costs = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.office_rental_cost.values = this.office_rental_cost.values.concat(numvalues);
    	this.office_rental_cost.operators = this.office_rental_cost.operators.concat(operators);
    }
    addreprocessing_efficiencys = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.reprocessing_efficiency.values = this.reprocessing_efficiency.values.concat(numvalues);
    	this.reprocessing_efficiency.operators = this.reprocessing_efficiency.operators.concat(operators);
    }
    addreprocessing_stations_takes = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.reprocessing_stations_take.values = this.reprocessing_stations_take.values.concat(numvalues);
    	this.reprocessing_stations_take.operators = this.reprocessing_stations_take.operators.concat(operators);
    }
    addmax_dockable_ship_volumes = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.max_dockable_ship_volume.values = this.max_dockable_ship_volume.values.concat(numvalues);
    	this.max_dockable_ship_volume.operators = this.max_dockable_ship_volume.operators.concat(operators);
    }
    addowners = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.owner.values = this.owner.values.concat(numvalues);
    	this.owner.operators = this.owner.operators.concat(operators);
    }
    adddownloaddates = (values, operators) => {
    	this.downloaddate.values = this.downloaddate.values.concat(values);
    	this.downloaddate.operators = this.downloaddate.operators.concat(operators);
    }
    setrace = (racesearch) => {
        this.racesearcher.setTablesearch(racesearch);
    }
    setevetype = (evetypesearch) => {
        this.evetypesearcher.setTablesearch(evetypesearch);
    }
    setsystem = (systemsearch) => {
        this.systemsearcher.setTablesearch(systemsearch);
    }
    setstationservice = (stationservicesearch) => {
        this.stationservicesearcher.setTablesearch(stationservicesearch);
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
                "racesearcher": null,
                "evetypesearcher": null,
                "systemsearcher": null,
                "stationservicesearcher": null,
            }; 
            if(this.racesearcher!=null && this.racesearcher.used()) {
                kss.racesearcher = this.racesearcher.toJSON();
            }
            if(this.evetypesearcher!=null && this.evetypesearcher.used()) {
                kss.evetypesearcher = this.evetypesearcher.toJSON();
            }
            if(this.systemsearcher!=null && this.systemsearcher.used()) {
                kss.systemsearcher = this.systemsearcher.toJSON();
            }
            if(this.stationservicesearcher!=null && this.stationservicesearcher.used()) {
                kss.stationservicesearcher = this.stationservicesearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Stationsuper;
