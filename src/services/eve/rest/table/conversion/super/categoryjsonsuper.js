//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 16.11.2021 15:46
    Author     : Franky Laseure
*/

import { Categorypk } from '../../../../../../data/eve/table/super/categorysuper.js';
import Category from '../../../../../../data/eve/table/category.js';
import Moment from 'moment';
import CategoryJson from '../categoryjson.js';

class CategoryJsonsuper {
	static PKtoJSON = (categoryPK) => {
		let jsonobj = {
			"id": null,
		};
		if(categoryPK!=null) {
			jsonobj.id = "" + categoryPK.id;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (categoryPK) => {
		return JSON.stringify(this.PKtoJSON(categoryPK));
	}
	
	static toJSON = (category) => {
		var jsonobj = {
			"PK": this.PKtoJSON(category.PK),
			"name": category.name,
			"published": category.published,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Categorypk => {
		let categoryPK = new Categorypk();
		if(jsonobj!=null) {
			categoryPK.id = jsonobj.id;
		}
		return categoryPK;
	}
	static fromJSON = (jsonobj): Category => {
		let model = new Category();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.name = jsonobj.name;
		model.published = jsonobj.published;
		return model;
	}
}

export default CategoryJsonsuper;
