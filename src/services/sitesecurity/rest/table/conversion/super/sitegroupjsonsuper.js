//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 1.5.2022 21:58
    Author     : Franky Laseure
*/

import { Sitegrouppk } from '../../../../../../data/sitesecurity/table/super/sitegroupsuper.js';
import Sitegroup from '../../../../../../data/sitesecurity/table/sitegroup.js';
import Moment from 'moment';
import SitegroupJson from '../sitegroupjson.js';

class SitegroupJsonsuper {
	static PKtoJSON = (sitegroupPK) => {
		let jsonobj = {
			"groupname": null,
		};
		if(sitegroupPK!=null) {
			jsonobj.groupname = sitegroupPK.groupname;
		}
		return jsonobj;
	}

	static PKtoJSONstring = (sitegroupPK) => {
		return JSON.stringify(this.PKtoJSON(sitegroupPK));
	}
	
	static toJSON = (sitegroup) => {
		var jsonobj = {
			"PK": this.PKtoJSON(sitegroup.PK),
			"groupdescription": sitegroup.groupdescription,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Sitegrouppk => {
		let sitegroupPK = new Sitegrouppk();
		if(jsonobj!=null) {
			sitegroupPK.groupname = jsonobj.groupname;
		}
		return sitegroupPK;
	}
	static fromJSON = (jsonobj): Sitegroup => {
		let model = new Sitegroup();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.groupdescription = jsonobj.groupdescription;
		return model;
	}
}

export default SitegroupJsonsuper;
