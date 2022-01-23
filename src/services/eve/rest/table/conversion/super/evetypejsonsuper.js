//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 19.0.2022 22:13
    Author     : Franky Laseure
*/

import { Evetypepk } from '../../../../../../data/eve/table/super/evetypesuper.js';
import Evetype from '../../../../../../data/eve/table/evetype.js';
import { Marketgrouppk } from '../../../../../../data/eve/table/super/marketgroupsuper.js';
import MarketgroupJson from '../marketgroupjson.js';
import { Typegrouppk } from '../../../../../../data/eve/table/super/typegroupsuper.js';
import TypegroupJson from '../typegroupjson.js';
import { Graphicpk } from '../../../../../../data/eve/table/super/graphicsuper.js';
import GraphicJson from '../graphicjson.js';
import Moment from 'moment';
import EvetypeJson from '../evetypejson.js';

class EvetypeJsonsuper {
	static PKtoJSON = (evetypePK) => {
		let jsonobj = {
			"id": null,
		};
		if(evetypePK!=null) {
			jsonobj.id = "" + evetypePK.id;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (evetypePK) => {
		return JSON.stringify(this.PKtoJSON(evetypePK));
	}
	
	static toJSON = (evetype) => {
		var jsonobj = {
			"PK": this.PKtoJSON(evetype.PK),
			"marketgroupPK": null,
			"typegroupPK": null,
			"graphicPK": null,
			"name": evetype.name,
			"published": evetype.published,
			"description": evetype.description,
			"capacity": "" + evetype.capacity,
			"icon": "" + evetype.icon,
			"mass": "" + evetype.mass,
			"packaged_volume": "" + evetype.packaged_volume,
			"portion_size": evetype.portion_size,
			"radius": "" + evetype.radius,
			"volume": "" + evetype.volume,
			"avg_buyorder": "" + evetype.avg_buyorder,
			"avg_sellorder": "" + evetype.avg_sellorder,
			"min_buyorder": "" + evetype.min_buyorder,
			"max_buyorder": "" + evetype.max_buyorder,
			"min_selorder": "" + evetype.min_selorder,
			"max_selorder": "" + evetype.max_selorder,
			"average": "" + evetype.average,
			"highest": "" + evetype.highest,
			"lowest": "" + evetype.lowest,
			"order_count": "" + evetype.order_count,
		};
		if(evetype.marketgroupPK!=null) {
			jsonobj.marketgroupPK = MarketgroupJson.PKtoJSON(evetype.marketgroupPK);
		}
		if(evetype.typegroupPK!=null) {
			jsonobj.typegroupPK = TypegroupJson.PKtoJSON(evetype.typegroupPK);
		}
		if(evetype.graphicPK!=null) {
			jsonobj.graphicPK = GraphicJson.PKtoJSON(evetype.graphicPK);
		}
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Evetypepk => {
		let evetypePK = new Evetypepk();
		if(jsonobj!=null) {
			evetypePK.id = jsonobj.id;
		}
		return evetypePK;
	}
	static fromJSON = (jsonobj): Evetype => {
		let model = new Evetype();
		model.PK = this.PKfromJSON(jsonobj.PK);
		let marketgroupPK = MarketgroupJson.PKfromJSON(jsonobj.marketgroupPK);
		model.marketgroupPK = marketgroupPK;
		let typegroupPK = TypegroupJson.PKfromJSON(jsonobj.typegroupPK);
		model.typegroupPK = typegroupPK;
		let graphicPK = GraphicJson.PKfromJSON(jsonobj.graphicPK);
		model.graphicPK = graphicPK;
		model.name = jsonobj.name;
		model.published = jsonobj.published;
		model.description = jsonobj.description;
		model.capacity = parseFloat(jsonobj.capacity);
		model.icon = "" + jsonobj.icon;
		model.mass = parseFloat(jsonobj.mass);
		model.packaged_volume = parseFloat(jsonobj.packaged_volume);
		model.portion_size = jsonobj.portion_size;
		model.radius = parseFloat(jsonobj.radius);
		model.volume = parseFloat(jsonobj.volume);
		model.avg_buyorder = parseFloat(jsonobj.avg_buyorder);
		model.avg_sellorder = parseFloat(jsonobj.avg_sellorder);
		model.min_buyorder = parseFloat(jsonobj.min_buyorder);
		model.max_buyorder = parseFloat(jsonobj.max_buyorder);
		model.min_selorder = parseFloat(jsonobj.min_selorder);
		model.max_selorder = parseFloat(jsonobj.max_selorder);
		model.average = parseFloat(jsonobj.average);
		model.highest = parseFloat(jsonobj.highest);
		model.lowest = parseFloat(jsonobj.lowest);
		model.order_count = "" + jsonobj.order_count;
		return model;
	}
}

export default EvetypeJsonsuper;
