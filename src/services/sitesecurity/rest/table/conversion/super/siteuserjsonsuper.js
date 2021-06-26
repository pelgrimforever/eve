//Auto generated code
//don't change things here, it will be overwritten
//change in siteuser-json.js
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 14.5.2021 13:42
    Author     : Franky Laseure
*/

import { Siteuserpk } from '../../../../../../data/sitesecurity/table/super/siteusersuper.js';
import Siteuser from '../../../../../../data/sitesecurity/table/siteuser.js';
import Moment from 'moment';
import SiteuserJson from '../siteuserjson.js';

class SiteuserJsonsuper {
	static PKtoJSON = (siteuserPK) => {
		let jsonobj = {
			"username": null,
		};
		if(siteuserPK!=null) {
			jsonobj.username = siteuserPK.username;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (siteuserPK) => {
		return JSON.stringify(this.PKtoJSON(siteuserPK));
	}
	
	static toJSON = (siteuser) => {
		var jsonobj = {
			"PK": this.PKtoJSON(siteuser.PK),
			"userpassword": siteuser.userpassword,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Siteuserpk => {
		let siteuserPK = new Siteuserpk();
		if(jsonobj!=null) {
			siteuserPK.username = jsonobj.username;
		}
		return siteuserPK;
	}
	static fromJSON = (jsonobj): Siteuser => {
		let model = new Siteuser();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.userpassword = jsonobj.userpassword;
		return model;
	}
}

export default SiteuserJsonsuper;
