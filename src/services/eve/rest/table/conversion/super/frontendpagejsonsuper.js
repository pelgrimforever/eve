//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 22.1.2022 10:55
    Author     : Franky Laseure
*/

import { Frontendpagepk } from '../../../../../../data/eve/table/super/frontendpagesuper.js';
import Frontendpage from '../../../../../../data/eve/table/frontendpage.js';
import Moment from 'moment';
import FrontendpageJson from '../frontendpagejson.js';

class FrontendpageJsonsuper {
	static PKtoJSON = (frontendpagePK) => {
		let jsonobj = {
			"name": null,
		};
		if(frontendpagePK!=null) {
			jsonobj.name = frontendpagePK.name;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (frontendpagePK) => {
		return JSON.stringify(this.PKtoJSON(frontendpagePK));
	}
	
	static toJSON = (frontendpage) => {
		var jsonobj = {
			"PK": this.PKtoJSON(frontendpage.PK),
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Frontendpagepk => {
		let frontendpagePK = new Frontendpagepk();
		if(jsonobj!=null) {
			frontendpagePK.name = jsonobj.name;
		}
		return frontendpagePK;
	}
	static fromJSON = (jsonobj): Frontendpage => {
		let model = new Frontendpage();
		model.PK = this.PKfromJSON(jsonobj.PK);
		return model;
	}
}

export default FrontendpageJsonsuper;
