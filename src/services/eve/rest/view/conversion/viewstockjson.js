//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 4.11.2021 14:51
    Author     : Franky Laseure
*/

import Viewstock from '../../../../../data/eve/view/viewstock.js';
import Moment from 'moment';

class ViewstockJson {
	static toJSON = (viewstock) => {
		var jsonobj = {
			"username": viewstock.username,
			"evetype": "" + viewstock.evetype,
			"amount": "" + viewstock.amount,
			"name": viewstock.name,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewstock => {
		let model = new Viewstock();
		model.username = jsonobj.username;
		model.evetype = "" + jsonobj.evetype;
		model.amount = "" + jsonobj.amount;
		model.name = jsonobj.name;
		return model;
	}
}

export default ViewstockJson;
