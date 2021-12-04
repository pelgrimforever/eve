//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 4.11.2021 14:51
    Author     : Franky Laseure
*/

import { Routepk } from '../../../../../../data/eve/table/super/routesuper.js';
import Route from '../../../../../../data/eve/table/route.js';
import { Routetypepk } from '../../../../../../data/eve/table/super/routetypesuper.js';
import RoutetypeJson from '../routetypejson.js';
import { Systempk } from '../../../../../../data/eve/table/super/systemsuper.js';
import SystemJson from '../systemjson.js';
import Moment from 'moment';
import RouteJson from '../routejson.js';

class RouteJsonsuper {
	static PKtoJSON = (routePK) => {
		let jsonobj = {
			"routetype": routePK.routetypePK==null ? null : "" + routePK.routetypePK.getId(),

			"system": routePK.systemPK==null ? null : "" + routePK.systemPK.getId(),

		};
		if(routePK!=null) {
		}
		return jsonobj;
	}

	static PKtoJSONstring = (routePK) => {
		return JSON.stringify(this.PKtoJSON(routePK));
	}
	
	static toJSON = (route) => {
		var jsonobj = {
			"PK": this.PKtoJSON(route.PK),
			"jsonroutes": route.jsonroutes,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Routepk => {
		let routePK = new Routepk();
		if(jsonobj!=null) {
			let routetypeproperties = {
				"id": "" + jsonobj.routetype,
			}
			let routetypePK = RoutetypeJson.PKfromJSON(routetypeproperties);
			routePK.routetypePK = routetypePK;
			let systemproperties = {
				"id": "" + jsonobj.system,
			}
			let systemPK = SystemJson.PKfromJSON(systemproperties);
			routePK.systemPK = systemPK;
		}
		return routePK;
	}
	static fromJSON = (jsonobj): Route => {
		let model = new Route();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.jsonroutes = jsonobj.jsonroutes;
		return model;
	}
}

export default RouteJsonsuper;
