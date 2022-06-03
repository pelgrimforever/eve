//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import { Typegrouppk } from '../../../../../../data/eve/table/super/typegroupsuper.js';
import Typegroup from '../../../../../../data/eve/table/typegroup.js';
import { Categorypk } from '../../../../../../data/eve/table/super/categorysuper.js';
import CategoryJson from '../categoryjson.js';
import Moment from 'moment';
import TypegroupJson from '../typegroupjson.js';

class TypegroupJsonsuper {
	static PKtoJSON = (typegroupPK) => {
		let jsonobj = {
			"id": null,
		};
		if(typegroupPK!=null) {
			jsonobj.id = "" + typegroupPK.id;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (typegroupPK) => {
		return JSON.stringify(this.PKtoJSON(typegroupPK));
	}
	
	static toJSON = (typegroup) => {
		var jsonobj = {
			"PK": this.PKtoJSON(typegroup.PK),
			"categoryPK": null,
			"name": typegroup.name,
			"published": typegroup.published,
		};
		if(typegroup.categoryPK!=null) {
			jsonobj.categoryPK = CategoryJson.PKtoJSON(typegroup.categoryPK);
		}
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Typegrouppk => {
		let typegroupPK = new Typegrouppk();
		if(jsonobj!=null) {
			typegroupPK.id = jsonobj.id;
		}
		return typegroupPK;
	}
	static fromJSON = (jsonobj): Typegroup => {
		let model = new Typegroup();
		model.PK = this.PKfromJSON(jsonobj.PK);
		let categoryPK = CategoryJson.PKfromJSON(jsonobj.categoryPK);
		model.categoryPK = categoryPK;
		model.name = jsonobj.name;
		model.published = jsonobj.published;
		return model;
	}
}

export default TypegroupJsonsuper;
