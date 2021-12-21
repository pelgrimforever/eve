//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 16.11.2021 15:46
    Author     : Franky Laseure
*/

import Vieworderregionevetype from '../../../../../data/eve/view/vieworderregionevetype.js';
import Moment from 'moment';

class VieworderregionevetypeJson {
	static toJSON = (vieworderregionevetype) => {
		var jsonobj = {
			"region": "" + vieworderregionevetype.region,
			"evetype": "" + vieworderregionevetype.evetype,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Vieworderregionevetype => {
		let model = new Vieworderregionevetype();
		model.region = "" + jsonobj.region;
		model.evetype = "" + jsonobj.evetype;
		return model;
	}
}

export default VieworderregionevetypeJson;
