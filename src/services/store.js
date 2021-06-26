import Appevents from './appevents.js';
import Codetables from './codetables.js';
import User from './user.js';
import Messages from './messages.js';

class Store {
	static appevents: null;
	static codetables: null;
	static user: null;
	static messages: null;

	static load = async () => {
		this.appevents = new Appevents();
		this.codetables = new Codetables();
		this.user = new User();
		this.messages = new Messages();
		await this.codetables.loadAll();
	}

}

export default Store;