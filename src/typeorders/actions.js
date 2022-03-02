//datamodels
import {Evetypesearcher} from '../data/eve/table/super/evetypesuper.js';
import Evetype from '../data/eve/table/evetype.js';
import Usersettings from '../data/eve/table/usersettings.js';
import Stock from '../data/eve/table/stock.js';
//services
import Store from '../services/store.js';
import Rsevetype from '../services/eve/rest/table/rsevetype.js';

export const setSearchstring = (store, searchstring) => {
  store.setState({ searchstring: searchstring });
};

export const loadTypes = async (store, searchstring) => {
  if(searchstring.length>2) {
    let searcher = new Evetypesearcher();
    searcher.addnames([searchstring + ':*:']);
    searcher.name.compareoperator = searcher.name.STRING_LIKE;
    const result = await Rsevetype.sec_search(Store.user, searcher);
    result.sort((a, b) => (a.name<b.name) ? -1 : 1);
    store.setState({ typelist: result });
  }
};
