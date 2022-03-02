//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Dec 16, 2018, 18:32:01
    Generated on 22.1.2022 10:55
    Author     : Franky Laseure
*/

import Viewuserbp from '../../../../../data/eve/view/viewuserbp.js';
import Moment from 'moment';

class ViewuserbpJson {
	static toJSON = (viewuserbp) => {
		var jsonobj = {
			"blueprintname": viewuserbp.blueprintname,
			"typegroupname": viewuserbp.typegroupname,
			"username": viewuserbp.username,
			"bp": "" + viewuserbp.bp,
			"serialnumber": viewuserbp.serialnumber,
			"original": viewuserbp.original,
			"materialefficiency": viewuserbp.materialefficiency,
			"amountproduced": viewuserbp.amountproduced,
			"totalamount": viewuserbp.totalamount,
			"bpprice": "" + viewuserbp.bpprice,
			"researchcost": "" + viewuserbp.researchcost,
			"stationfee": "" + viewuserbp.stationfee,
		};
		return jsonobj;
	}

	static fromJSON = (jsonobj): Viewuserbp => {
		let model = new Viewuserbp();
		model.blueprintname = jsonobj.blueprintname;
		model.typegroupname = jsonobj.typegroupname;
		model.username = jsonobj.username;
		model.bp = "" + jsonobj.bp;
		model.serialnumber = jsonobj.serialnumber;
		model.original = jsonobj.original;
		model.materialefficiency = jsonobj.materialefficiency;
		model.amountproduced = jsonobj.amountproduced;
		model.totalamount = jsonobj.totalamount;
		model.bpprice = parseFloat(jsonobj.bpprice);
		model.researchcost = parseFloat(jsonobj.researchcost);
		model.stationfee = parseFloat(jsonobj.stationfee);
		return model;
	}
}

export default ViewuserbpJson;
