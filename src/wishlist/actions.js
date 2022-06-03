//datamodels
import {Evetypesearcher} from '../data/eve/table/super/evetypesuper.js';
import Evetype from '../data/eve/table/evetype.js';
import Usersettings from '../data/eve/table/usersettings.js';
import Wishlist from '../data/eve/table/wishlist.js';
//services
import Store from '../services/store.js';
import Rsevetype from '../services/eve/rest/table/rsevetype.js';
import Rswishlist from '../services/eve/rest/table/rswishlist.js';
import Rsviewwishlist from '../services/eve/rest/view/rsviewwishlist.js';
import Rsvieworder from '../services/eve/rest/view/rsvieworder.js';

export const setSearchstring = (store, searchstring) => {
  store.setState({ searchstring: searchstring });
};

export const loadTypes = async (store, searchstring) => {
  if(searchstring.length>2) {
    let searcher = new Evetypesearcher();
    searcher.addnames([searchstring + ':*:']);
    searcher.name.compareoperator = searcher.name.STRING_LIKE;
    const result = await Rsevetype.search(Store.user, searcher);
    result.sort((a, b) => (a.name<b.name) ? -1 : 1);
    store.setState({ typelist: result });
  }
};

export const loadWishlist = async (store) => {
  const result = await Rsviewwishlist.get4user(Store.user, Store.user.username);
  result.sort((a, b) => (a.name<b.name) ? -1 : 1);
  store.setState({ wishlist: result });
};

export const loadSellorderlist = async (store) => {
  const result = await Rsvieworder.getorders4wishlist(Store.user, Store.user.username);
  store.setState({ sellorders: result });
};

export const addWishlistitem = async (store, evetype, maxprice ) => {
  let wishlist = new Wishlist();
  wishlist.PK.evetypePK = evetype.PK;
  wishlist.PK.username = Store.user.username;
  wishlist.maxprice = maxprice;
  const result = await Rswishlist.addwishlist(Store.user, wishlist);
  loadWishlist(store);
  loadSellorderlist(store);
}

export const updateWishlist = async (store, viewwishlist ) => {
  let wishlist = new Wishlist();
  wishlist.PK.init();
  wishlist.PK.evetypePK.id = viewwishlist.id;
  wishlist.PK.username = Store.user.username;
  wishlist.maxprice = viewwishlist.maxprice;
  const result = await Rswishlist.save(Store.user, wishlist);
  loadWishlist(store);
  loadSellorderlist(store);
}

export const removeWishlist = async (store, viewwishlist ) => {
  let wishlist = new Wishlist();
  wishlist.PK.init();
  wishlist.PK.evetypePK.id = viewwishlist.id;
  wishlist.PK.username = Store.user.username;
  const result = await Rswishlist.del(Store.user, wishlist);
  loadWishlist(store);
  loadSellorderlist(store);
}
