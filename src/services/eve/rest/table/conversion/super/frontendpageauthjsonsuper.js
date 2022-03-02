//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 22.1.2022 10:55
    Author     : Franky Laseure
*/

import { Frontendpageauthpk } from '../../../../../../data/eve/table/super/frontendpageauthsuper.js';
import Frontendpageauth from '../../../../../../data/eve/table/frontendpageauth.js';
import { Frontendpagepk } from '../../../../../../data/eve/table/super/frontendpagesuper.js';
import FrontendpageJson from '../frontendpagejson.js';
import { Eveuserpk } from '../../../../../../data/eve/table/super/eveusersuper.js';
import EveuserJson from '../eveuserjson.js';
import Moment from 'moment';
import FrontendpageauthJson from '../frontendpageauthjson.js';

class FrontendpageauthJsonsuper {
	static PKtoJSON = (frontendpageauthPK) => {
		let jsonobj = {
			"frontendpage": frontendpageauthPK.frontendpagePK==null ? null : frontendpageauthPK.frontendpagePK.getName(),

			"username": frontendpageauthPK.eveuserPK==null ? null : frontendpageauthPK.eveuserPK.getUsername(),

		};
		if(frontendpageauthPK!=null) {
		}
		return jsonobj;
	}

	static PKtoJSONstring = (frontendpageauthPK) => {
		return JSON.stringify(this.PKtoJSON(frontendpageauthPK));
	}
	
	static toJSON = (frontendpageauth) => {
		var jsonobj = {
			"PK": this.PKtoJSON(frontendpageauth.PK),
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Frontendpageauthpk => {
		let frontendpageauthPK = new Frontendpageauthpk();
		if(jsonobj!=null) {
			let frontendpageproperties = {
				"name": jsonobj.frontendpage,
			}
			let frontendpagePK = FrontendpageJson.PKfromJSON(frontendpageproperties);
			frontendpageauthPK.frontendpagePK = frontendpagePK;
			let eveuserproperties = {
				"username": jsonobj.username,
			}
			let eveuserPK = EveuserJson.PKfromJSON(eveuserproperties);
			frontendpageauthPK.eveuserPK = eveuserPK;
		}
		return frontendpageauthPK;
	}
	static fromJSON = (jsonobj): Frontendpageauth => {
		let model = new Frontendpageauth();
		model.PK = this.PKfromJSON(jsonobj.PK);
		return model;
	}
}

export default FrontendpageauthJsonsuper;
