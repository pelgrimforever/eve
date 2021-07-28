//ProjectGenerator: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in rssystemsuper.js
/* 
    Created on : Nov 20, 2018, 10:39:01 AM
    Generated on 14.5.2021 13:35
    Author     : Franky Laseure
*/

import Rssystemsuper from './super/rssystemsuper.js';
import SystemJson from './conversion/systemjson.js';

class Rssystem extends Rssystemsuper {

    static extractDataArray = (jsonarray): System[] => {
        let systems: [] = [];
        for(let i = 0; i < jsonarray.length; i++) {
            systems.push(SystemJson.fromJSON(jsonarray[i]));
        }
        return systems;
    }

    static extractDataObject = (jsonobject): System => {
        return SystemJson.fromJSON(jsonobject);
    }

}

export default Rssystem;

