//Auto generated code
//don't change things here, it will be overwritten
//change in siteusergroup-json.js
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 14.5.2021 13:42
    Author     : Franky Laseure
*/

import { Siteusergrouppk } from '../../../../../../data/sitesecurity/table/super/siteusergroupsuper.js';
import Siteusergroup from '../../../../../../data/sitesecurity/table/siteusergroup.js';
import { Siteuserpk } from '../../../../../../data/sitesecurity/table/super/siteusersuper.js';
import SiteuserJson from '../siteuserjson.js';
import { Sitegrouppk } from '../../../../../../data/sitesecurity/table/super/sitegroupsuper.js';
import SitegroupJson from '../sitegroupjson.js';
import Moment from 'moment';
import SiteusergroupJson from '../siteusergroupjson.js';

class SiteusergroupJsonsuper {
	static PKtoJSON = (siteusergroupPK) => {
		let jsonobj = {
			"username": siteusergroupPK.siteuserPK==null ? null : siteusergroupPK.siteuserPK.getUsername(),

			"groupname": siteusergroupPK.sitegroupPK==null ? null : siteusergroupPK.sitegroupPK.getGroupname(),

		};
		if(siteusergroupPK!=null) {
		}
		return jsonobj;
	}

	static PKtoJSONstring = (siteusergroupPK) => {
		return JSON.stringify(this.PKtoJSON(siteusergroupPK));
	}
	
	static toJSON = (siteusergroup) => {
		var jsonobj = {
			"PK": this.PKtoJSON(siteusergroup.PK),
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Siteusergrouppk => {
		let siteusergroupPK = new Siteusergrouppk();
		if(jsonobj!=null) {
			let siteuserproperties = {
				"username": jsonobj.username,
			}
			let siteuserPK = SiteuserJson.PKfromJSON(siteuserproperties);
			siteusergroupPK.siteuserPK = siteuserPK;
			let sitegroupproperties = {
				"groupname": jsonobj.groupname,
			}
			let sitegroupPK = SitegroupJson.PKfromJSON(sitegroupproperties);
			siteusergroupPK.sitegroupPK = sitegroupPK;
		}
		return siteusergroupPK;
	}
	static fromJSON = (jsonobj): Siteusergroup => {
		let model = new Siteusergroup();
		model.PK = this.PKfromJSON(jsonobj.PK);
		return model;
	}
}

export default SiteusergroupJsonsuper;
