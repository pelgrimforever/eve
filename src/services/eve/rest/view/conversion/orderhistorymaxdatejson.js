//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 14.0.2022 16:56
    Author     : Franky Laseure
*/

import Orderhistorymaxdate from '../../../../../data/eve/view/orderhistorymaxdate.js';
import Moment from 'moment';

class OrderhistorymaxdateJson {
	static toJSON = (orderhistorymaxdate) => {
		var jsonobj = {
			"maxdate": "" + orderhistorymaxdate.maxdate,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Orderhistorymaxdate => {
		let model = new Orderhistorymaxdate();
		model.maxdate = jsonobj.maxdate;
		if(model.maxdate) {
			model.maxdateUI = Moment(new Date(jsonobj.maxdate)).format("YYYY MM DD");
		} else {
			model.maxdate = "";
		}
		return model;
	}
}

export default OrderhistorymaxdateJson;
