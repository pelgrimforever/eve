//Auto generated code
//don't change things here, it will be overwritten
//extend classes in constellationneighbour.ts for table class definitions
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 12.6.2021 13:57
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

export class Constellationneighbourpk {
	constellationNeighbourPK: Constellationpk = null;
	constellationConstellationPK: Constellationpk = null;
	constellation = () => {
		if(this.constellationConstellationPK===null) return '';
		else return this.constellationConstellationPK.getId();
	}
	getConstellation = () => {
		if(this.constellationConstellationPK===null) return '';
		else return this.constellationConstellationPK.getId();
	}
	neighbour = () => {
		if(this.constellationNeighbourPK===null) return '';
		else return this.constellationNeighbourPK.getId();
	}
	getNeighbour = () => {
		if(this.constellationNeighbourPK===null) return '';
		else return this.constellationNeighbourPK.getId();
	}
	init = () => {
		this.constellationNeighbourPK = new Constellationpk();
		this.constellationConstellationPK = new Constellationpk();
	}
}

class Constellationneighboursuper {
	constructor() { }
	tablename: string = 'constellationneighbour';
	PK: Constellationneighbourpk = new Constellationneighbourpk();
	constellation = () => {
		if(this.PK===null) return '';
		else return this.PK.constellation;
	}
	neighbour = () => {
		if(this.PK===null) return '';
		else return this.PK.neighbour;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getConstellation() + " " + this.PK.getNeighbour();
		}
		return result;
	}
}

export class Constellationneighboursearcher extends Tablesearch {
	constructor() { 
		super(); 
        this.addKeysearcher(this.constellationNeighboursearcher);
        this.addKeysearcher(this.constellationConstellationsearcher);
	}

    filtermodel: null;
    constellationNeighboursearcher: Foreignkeysearcher = new Foreignkeysearcher();
    constellationConstellationsearcher: Foreignkeysearcher = new Foreignkeysearcher();

    setconstellationNeighbour = (constellationsearch) => {
        this.constellationNeighboursearcher.setTablesearch(constellationsearch);
    }
    setconstellationConstellation = (constellationsearch) => {
        this.constellationConstellationsearcher.setTablesearch(constellationsearch);
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
                "constellationNeighboursearcher": null,
                "constellationConstellationsearcher": null,
            }; 
            if(this.constellationNeighboursearcher!=null && this.constellationNeighboursearcher.used()) {
                kss.constellationNeighboursearcher = this.constellationNeighboursearcher.toJSON();
            }
            if(this.constellationConstellationsearcher!=null && this.constellationConstellationsearcher.used()) {
                kss.constellationConstellationsearcher = this.constellationConstellationsearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Constellationneighboursuper;
