//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 14.0.2022 16:56
    Author     : Franky Laseure
*/

import Viewwishlist from '../../../../../data/eve/view/viewwishlist.js';
import Moment from 'moment';

class ViewwishlistJson {
	static toJSON = (viewwishlist) => {
		var jsonobj = {
			"username": viewwishlist.username,
			"maxprice": "" + viewwishlist.maxprice,
			"id": "" + viewwishlist.id,
			"name": viewwishlist.name,
			"typegroup": "" + viewwishlist.typegroup,
			"published": viewwishlist.published,
			"description": viewwishlist.description,
			"capacity": "" + viewwishlist.capacity,
			"graphic": "" + viewwishlist.graphic,
			"icon": "" + viewwishlist.icon,
			"market_group": "" + viewwishlist.market_group,
			"mass": "" + viewwishlist.mass,
			"packaged_volume": "" + viewwishlist.packaged_volume,
			"portion_size": viewwishlist.portion_size,
			"radius": "" + viewwishlist.radius,
			"volume": "" + viewwishlist.volume,
			"avg_buyorder": "" + viewwishlist.avg_buyorder,
			"avg_sellorder": "" + viewwishlist.avg_sellorder,
			"min_buyorder": "" + viewwishlist.min_buyorder,
			"max_buyorder": "" + viewwishlist.max_buyorder,
			"min_selorder": "" + viewwishlist.min_selorder,
			"max_selorder": "" + viewwishlist.max_selorder,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewwishlist => {
		let model = new Viewwishlist();
		model.username = jsonobj.username;
		model.maxprice = parseFloat(jsonobj.maxprice);
		model.id = "" + jsonobj.id;
		model.name = jsonobj.name;
		model.typegroup = "" + jsonobj.typegroup;
		model.published = jsonobj.published;
		model.description = jsonobj.description;
		model.capacity = parseFloat(jsonobj.capacity);
		model.graphic = "" + jsonobj.graphic;
		model.icon = "" + jsonobj.icon;
		model.market_group = "" + jsonobj.market_group;
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
		return model;
	}
}

export default ViewwishlistJson;
