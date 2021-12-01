//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in system-json-base.js
/* 
    Created on : Nov 19, 2018, 17:23:01 PM
    Generated on 1.1.2016 17:37
    Author     : Franky Laseure
*/

import SystemJsonsuper from './super/systemjsonsuper';

class SystemJson extends SystemJsonsuper {

    static fromJSON = (jsonobj): System => {
        let model = super.fromJSON(jsonobj);
        model.npc_kills = jsonobj.npc_kills;
        model.pod_kills = jsonobj.pod_kills;
        model.ship_kills = jsonobj.ship_kills;
        model.killmailcount = jsonobj.killmailcount;
        model.killmailgatecount = jsonobj.killmailgatecount;
        model.killmaildata = jsonobj.killmaildata;
        return model;
    }
}

export default SystemJson;

