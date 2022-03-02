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
import {Stationpk} from './stationsuper.js';

export class Stationservicepk {
	stationPK: Stationpk = null;
	station = () => {
		if(this.stationPK===null) return '';
		else return this.stationPK.getId();
	}
	getStation = () => {
		if(this.stationPK===null) return '';
		else return this.stationPK.getId();
	}
    service: string = '';
    getService = () => {
        return this.service;
    }
	init = () => {
		this.stationPK = new Stationpk();
		this.service = "";
	}
}

class Stationservicesuper {
	constructor() { }
	tablename: string = 'stationservice';
	PK: Stationservicepk = new Stationservicepk();
	station = () => {
		if(this.PK===null) return '';
		else return this.PK.station;
	}
	service = () => {
		if(this.PK===null) return '';
		else return this.PK.service;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getStation() + " " + this.PK.getService();
		}
		return result;
	}
}

export class Stationservicesearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.service);
        this.addKeysearcher(this.stationsearcher);
	}

    filtermodel: null;
    service: Stringsearcher = new Stringsearcher("stationservice.service");
    stationsearcher: Foreignkeysearcher = new Foreignkeysearcher();

    addservices = (values) => {
    	this.service.values = this.service.values.concat(values);
    }
    setstation = (stationsearch) => {
        this.stationsearcher.setTablesearch(stationsearch);
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
                "stationsearcher": null,
            }; 
            if(this.stationsearcher!=null && this.stationsearcher.used()) {
                kss.stationsearcher = this.stationsearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Stationservicesuper;
