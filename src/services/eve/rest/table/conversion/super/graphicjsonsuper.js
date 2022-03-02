//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 22.1.2022 10:55
    Author     : Franky Laseure
*/

import { Graphicpk } from '../../../../../../data/eve/table/super/graphicsuper.js';
import Graphic from '../../../../../../data/eve/table/graphic.js';
import Moment from 'moment';
import GraphicJson from '../graphicjson.js';

class GraphicJsonsuper {
	static PKtoJSON = (graphicPK) => {
		let jsonobj = {
			"id": null,
		};
		if(graphicPK!=null) {
			jsonobj.id = "" + graphicPK.id;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (graphicPK) => {
		return JSON.stringify(this.PKtoJSON(graphicPK));
	}
	
	static toJSON = (graphic) => {
		var jsonobj = {
			"PK": this.PKtoJSON(graphic.PK),
			"collision_file": graphic.collision_file,
			"graphic_file": graphic.graphic_file,
			"icon_folder": graphic.icon_folder,
			"sof_dna": graphic.sof_dna,
			"sof_fation_name": graphic.sof_fation_name,
			"sof_hull_name": graphic.sof_hull_name,
			"sof_race_name": graphic.sof_race_name,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Graphicpk => {
		let graphicPK = new Graphicpk();
		if(jsonobj!=null) {
			graphicPK.id = jsonobj.id;
		}
		return graphicPK;
	}
	static fromJSON = (jsonobj): Graphic => {
		let model = new Graphic();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.collision_file = jsonobj.collision_file;
		model.graphic_file = jsonobj.graphic_file;
		model.icon_folder = jsonobj.icon_folder;
		model.sof_dna = jsonobj.sof_dna;
		model.sof_fation_name = jsonobj.sof_fation_name;
		model.sof_hull_name = jsonobj.sof_hull_name;
		model.sof_race_name = jsonobj.sof_race_name;
		return model;
	}
}

export default GraphicJsonsuper;
