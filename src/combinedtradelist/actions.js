//component state
import Store from '../services/store.js';
import appstore from '../appstore.js';
//services
import Rsviewtradecombined from '../services/eve/rest/view/rsviewtradecombined.js';
//models
import { Systempk } from '../data/eve/table/super/systemsuper.js';

export const setSystem = async (store, startsystemid, startsystemname) => {
  store.setState({ 
    startsystemid: startsystemid,
    startsystemname: startsystemname 
  });
  const dummy = await loadTradelist(store);
};

export const setFiltersortfield = (store, filtersortfield) => {
  store.setState({ filtersortfield: filtersortfield });
};

export const setFilterstartsystemid = (store, filterstartsystemid) => {
  store.setState({ filterstartsystemid: filterstartsystemid });
};

export const setFilterendsystemid = (store, filterendsystemid) => {
  store.setState({ filterendsystemid: filterendsystemid });
};

export const setFiltercargo = (store, filtercargo) => {
  store.setState({ filtercargo: filtercargo });
};

export const setPaginationconfig = (store, paginationconfig) => {
  store.setState({ paginationconfig: paginationconfig });
};

export const setUnfilteredtradelist = (store, unfilteredtradelist) => {
  store.setState({ unfilteredtradelist: unfilteredtradelist });
}

export const loadTradelist = async (store) => {
  try {
    if(store.state.startsystemid!=null) {
      let systempk = new Systempk();
      systempk.id = store.state.startsystemid;
      const result = await Rsviewtradecombined.getall_startsystem(Store.user, systempk);
      setUnfilteredtradelist(store, result);
    }
  } catch (e) {
    console.log("loadTradelist failed");
  }
};

