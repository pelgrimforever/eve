//Metacoder: NO AUTHOMATIC UPDATE
//Change function definitions here, NOT in systembase.ts
/* 
    Created on : Dec 16, 2018, 18:55:01
    Generated on 14.5.2021 13:35
    Author     : Franky Laseure
*/

import Systemsuper, {Systempk} from './super/systemsuper'

class System extends Systemsuper {
    npc_kills: number = 0;
    pod_kills: number = 0;
    ship_kills: number = 0;
    killmailcount: number = 0;
    killmailgatecount: number = 0;
    killmaildata: null;

	constructor() { 
		super();
	}
	auth: string = null;

	tostring = () => {
		let result = super.tostring();
		return result;
	}
}

export default System;
