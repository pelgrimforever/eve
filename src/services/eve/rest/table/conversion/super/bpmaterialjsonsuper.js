//Auto generated code
//don't change things here, it will be overwritten
/* 
    Created on : Nov 19, 2018, 12:42:01 PM
    Generated on 24.0.2022 16:47
    Author     : Franky Laseure
*/

import { Bpmaterialpk } from '../../../../../../data/eve/table/super/bpmaterialsuper.js';
import Bpmaterial from '../../../../../../data/eve/table/bpmaterial.js';
import { Evetypepk } from '../../../../../../data/eve/table/super/evetypesuper.js';
import EvetypeJson from '../evetypejson.js';
import Moment from 'moment';
import BpmaterialJson from '../bpmaterialjson.js';

class BpmaterialJsonsuper {
	static PKtoJSON = (bpmaterialPK) => {
		let jsonobj = {
			"bp": bpmaterialPK.evetypeBpPK==null ? null : "" + bpmaterialPK.evetypeBpPK.getId(),

			"material": bpmaterialPK.evetypeMaterialPK==null ? null : "" + bpmaterialPK.evetypeMaterialPK.getId(),

		};
		if(bpmaterialPK!=null) {
		}
		return jsonobj;
	}

	static PKtoJSONstring = (bpmaterialPK) => {
		return JSON.stringify(this.PKtoJSON(bpmaterialPK));
	}
	
	static toJSON = (bpmaterial) => {
		var jsonobj = {
			"PK": this.PKtoJSON(bpmaterial.PK),
			"amount": "" + bpmaterial.amount,
		};
		return jsonobj;
	}

	static PKfromJSON = (jsonobj): Bpmaterialpk => {
		let bpmaterialPK = new Bpmaterialpk();
		if(jsonobj!=null) {
			let evetypeBpproperties = {
				"id": "" + jsonobj.bp,
			}
			let evetypeBpPK = EvetypeJson.PKfromJSON(evetypeBpproperties);
			bpmaterialPK.evetypeBpPK = evetypeBpPK;
			let evetypeMaterialproperties = {
				"id": "" + jsonobj.material,
			}
			let evetypeMaterialPK = EvetypeJson.PKfromJSON(evetypeMaterialproperties);
			bpmaterialPK.evetypeMaterialPK = evetypeMaterialPK;
		}
		return bpmaterialPK;
	}
	static fromJSON = (jsonobj): Bpmaterial => {
		let model = new Bpmaterial();
		model.PK = this.PKfromJSON(jsonobj.PK);
		model.amount = "" + jsonobj.amount;
		return model;
	}
}

export default BpmaterialJsonsuper;
