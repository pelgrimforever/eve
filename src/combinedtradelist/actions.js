//component state
import appstore from '../appstore.js';

export const setSystem = (store, startsystemid, startsystemname) => {
  store.setState({ 
    startsystemid: startsystemid,
    startsystemname: startsystemname 
  });
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

export const setViewcombinedtrade = (store, viewcombinedtrade) => {
  store.setState({ viewcombinedtrade: viewcombinedtrade });
};