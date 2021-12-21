//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 17.11.2021 15:34
    Author     : Franky Laseure
*/

import { Shipfitpk } from '../../../../../../data/eve/table/super/shipfitsuper.js';
import Shipfit from '../../../../../../data/eve/table/shipfit.js';
import { Evetypepk } from '../../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../evetypejson.js';
import Moment from 'moment';
import ShipfitJson from '../shipfitjson.js';

class ShipfitJsonsuper {
	static PKtoJSON = (shipfitPK) => {
		let jsonobj = {
			"username": null,
			"shipname": null,
		};
		if(shipfitPK!=null) {
			jsonobj.username = shipfitPK.username;
			jsonobj.shipname = shipfitPK.shipname;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (shipfitPK) => {
		return JSON.stringify(this.PKtoJSON(shipfitPK));
	}
	
	static toJSON = (shipfit) => {
		var jsonobj = {
			"PK": this.PKtoJSON(shipfit.PK),
			"evetypePK": null,
		};
		if(shipfit.evetypePK!=null) {
			jsonobj.evetypePK = EvetypeJson.PKtoJSON(shipfit.evetypePK);
		}
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Shipfitpk => {
		let shipfitPK = new Shipfitpk();
		if(jsonobj!=null) {
			shipfitPK.username = jsonobj.username;
			shipfitPK.shipname = jsonobj.shipname;
		}
		return shipfitPK;
	}
	static fromJSON = (jsonobj): Shipfit => {
		let model = new Shipfit();
		model.PK = this.PKfromJSON(jsonobj.PK);
		let evetypePK = EvetypeJson.PKfromJSON(jsonobj.evetypePK);
		model.evetypePK = evetypePK;
		return model;
	}
}

export default ShipfitJsonsuper;
