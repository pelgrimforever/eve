//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 23.5.2021 16:2
    Author     : Franky Laseure
*/

import Viewsecurityislandsystemcount from '../../../../../data/eve/view/viewsecurityislandsystemcount.js';
import Moment from 'moment';

class ViewsecurityislandsystemcountJson {
	static toJSON = (viewsecurityislandsystemcount) => {
		var jsonobj = {
			"id": "" + viewsecurityislandsystemcount.id,
			"name": viewsecurityislandsystemcount.name,
			"systems": "" + viewsecurityislandsystemcount.systems,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewsecurityislandsystemcount => {
		let model = new Viewsecurityislandsystemcount();
		model.id = "" + jsonobj.id;
		model.name = jsonobj.name;
		model.systems = "" + jsonobj.systems;
		return model;
	}
}

export default ViewsecurityislandsystemcountJson;
