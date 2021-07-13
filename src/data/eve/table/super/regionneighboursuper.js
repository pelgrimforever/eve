//Auto generated code
//don't change things here, it will be overwritten
//extend classes in regionneighbour.ts for table class definitions
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

export class Regionneighbourpk {
	regionRegionPK: Regionpk = null;
	regionNeighbourPK: Regionpk = null;
	region = () => {
		if(this.regionRegionPK===null) return '';
		else return this.regionRegionPK.getId();
	}
	getRegion = () => {
		if(this.regionRegionPK===null) return '';
		else return this.regionRegionPK.getId();
	}
	neighbour = () => {
		if(this.regionNeighbourPK===null) return '';
		else return this.regionNeighbourPK.getId();
	}
	getNeighbour = () => {
		if(this.regionNeighbourPK===null) return '';
		else return this.regionNeighbourPK.getId();
	}
	init = () => {
		this.regionRegionPK = new Regionpk();
		this.regionNeighbourPK = new Regionpk();
	}
}

class Regionneighboursuper {
	constructor() { }
	tablename: string = 'regionneighbour';
	PK: Regionneighbourpk = new Regionneighbourpk();
	region = () => {
		if(this.PK===null) return '';
		else return this.PK.region;
	}
	neighbour = () => {
		if(this.PK===null) return '';
		else return this.PK.neighbour;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getRegion() + " " + this.PK.getNeighbour();
		}
		return result;
	}
}

export class Regionneighboursearcher extends Tablesearch {
	constructor() { 
		super(); 
        this.addKeysearcher(this.regionRegionsearcher);
        this.addKeysearcher(this.regionNeighboursearcher);
	}

    filtermodel: null;
    regionRegionsearcher: Foreignkeysearcher = new Foreignkeysearcher();
    regionNeighboursearcher: Foreignkeysearcher = new Foreignkeysearcher();

    setregionRegion = (regionsearch) => {
        this.regionRegionsearcher.setTablesearch(regionsearch);
    }
    setregionNeighbour = (regionsearch) => {
        this.regionNeighboursearcher.setTablesearch(regionsearch);
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
                "regionRegionsearcher": null,
                "regionNeighboursearcher": null,
            }; 
            if(this.regionRegionsearcher!=null && this.regionRegionsearcher.used()) {
                kss.regionRegionsearcher = this.regionRegionsearcher.toJSON();
            }
            if(this.regionNeighboursearcher!=null && this.regionNeighboursearcher.used()) {
                kss.regionNeighboursearcher = this.regionNeighboursearcher.toJSON();
            }
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Regionneighboursuper;
