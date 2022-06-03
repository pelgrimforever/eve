//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 20.4.2022 10:3
    Author     : Franky Laseure
*/

import Viewstocktradesystem from '../../../../../data/eve/view/viewstocktradesystem.js';
import Moment from 'moment';

class ViewstocktradesystemJson {
	static toJSON = (viewstocktradesystem) => {
		var jsonobj = {
			"username": viewstocktradesystem.username,
			"id": "" + viewstocktradesystem.id,
			"name": viewstocktradesystem.name,
			"region": viewstocktradesystem.region,
			"sellprice": "" + viewstocktradesystem.sellprice,
			"totalvolume": "" + viewstocktradesystem.totalvolume,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewstocktradesystem => {
		let model = new Viewstocktradesystem();
		model.username = jsonobj.username;
		model.id = "" + jsonobj.id;
		model.name = jsonobj.name;
		model.region = jsonobj.region;
		model.sellprice = parseFloat(jsonobj.sellprice);
		model.totalvolume = parseFloat(jsonobj.totalvolume);
		return model;
	}
}

export default ViewstocktradesystemJson;
