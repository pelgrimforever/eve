import Appevents from './appevents.js';
import Codetables from './codetables.js';
import User from './user.js';
import Messages from './messages.js';
import Tradetrackingdata from '../tradetracking/tradetrackingdata.js';

class Store {
	static appevents: null;
	static codetables: null;
	static user: null;
	static messages: null;

  //persistent component data
	static tradetrackingdata: null;

	static load = async () => {
		this.appevents = new Appevents();
		this.codetables = new Codetables();
		this.user = new User();
		this.messages = new Messages();
		this.tradetrackingdata = new Tradetrackingdata();
		await this.codetables.loadAll();
	}

}

export default Store;