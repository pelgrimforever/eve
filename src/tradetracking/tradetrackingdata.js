//services
import Rsorders from '../services/eve/rest/table/rsorders.js';
//data models
import Viewtrade from '../data/eve/view/viewtrade.js';
import { Orderspk } from '../data/eve/table/super/orderssuper.js';

class Tradetrackingdata {
	sellorderid: null;
	buyorderid: null;
	viewtrade: null;

	constructor() { 
		this.viewtrade = new Viewtrade();
	}

	setOrders = (viewtrade, sell_id, buy_id) => {
		this.viewtrade = viewtrade;
		this.sellorderid = sell_id;
		this.buyorderid = buy_id;
	}
}

export default Tradetrackingdata;