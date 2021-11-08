//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 16, 2018, 17:04:01 PM
    Generated on 8.10.2021 7:21
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

export class Graphicpk {
    id: string = '';
    getId = () => {
        return this.id;
    }
	init = () => {
		this.id = '';
	}
}

class Graphicsuper {
	constructor() { }
	tablename: string = 'graphic';
	PK: Graphicpk = new Graphicpk();
	id = () => {
		if(this.PK===null) return '';
		else return this.PK.id;
	}
	tostring = () => {
		let result = "";
		if(this.PK!=null) {
			result += this.PK.getId();
		}
		return result;
	}
	collision_file = '';
	graphic_file = '';
	icon_folder = '';
	sof_dna = '';
	sof_fation_name = '';
	sof_hull_name = '';
	sof_race_name = '';
}

export class Graphicsearcher extends Tablesearch {
	constructor() { 
		super(); 
		this.addFieldsearcher(this.id);
		this.addFieldsearcher(this.collision_file);
		this.addFieldsearcher(this.graphic_file);
		this.addFieldsearcher(this.icon_folder);
		this.addFieldsearcher(this.sof_dna);
		this.addFieldsearcher(this.sof_fation_name);
		this.addFieldsearcher(this.sof_hull_name);
		this.addFieldsearcher(this.sof_race_name);
	}

    filtermodel: null;
    id: Numbersearcher = new Numbersearcher("graphic.id");
    collision_file: Stringsearcher = new Stringsearcher("graphic.collision_file");
    graphic_file: Stringsearcher = new Stringsearcher("graphic.graphic_file");
    icon_folder: Stringsearcher = new Stringsearcher("graphic.icon_folder");
    sof_dna: Stringsearcher = new Stringsearcher("graphic.sof_dna");
    sof_fation_name: Stringsearcher = new Stringsearcher("graphic.sof_fation_name");
    sof_hull_name: Stringsearcher = new Stringsearcher("graphic.sof_hull_name");
    sof_race_name: Stringsearcher = new Stringsearcher("graphic.sof_race_name");

    addids = (values, operators) => {
		  let numvalues = [values.length];
		  let i=0;
		  for(i=0; i<values.length; i++) {
		    numvalues[i] = parseFloat(values[i]);
		  }
    	this.id.values = this.id.values.concat(numvalues);
    	this.id.operators = this.id.operators.concat(operators);
    }
    addcollision_files = (values) => {
    	this.collision_file.values = this.collision_file.values.concat(values);
    }
    addgraphic_files = (values) => {
    	this.graphic_file.values = this.graphic_file.values.concat(values);
    }
    addicon_folders = (values) => {
    	this.icon_folder.values = this.icon_folder.values.concat(values);
    }
    addsof_dnas = (values) => {
    	this.sof_dna.values = this.sof_dna.values.concat(values);
    }
    addsof_fation_names = (values) => {
    	this.sof_fation_name.values = this.sof_fation_name.values.concat(values);
    }
    addsof_hull_names = (values) => {
    	this.sof_hull_name.values = this.sof_hull_name.values.concat(values);
    }
    addsof_race_names = (values) => {
    	this.sof_race_name.values = this.sof_race_name.values.concat(values);
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
            }; 
            jsonobj.keysearch = kss;
        }
        return jsonobj;
    }
}

export default Graphicsuper;
