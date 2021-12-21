//component state
import Store from '../services/store.js';
import appstore from '../appstore.js';
//services
import Rstrade from '../services/eve/rest/table/rstrade.js';
import Rsviewtrade from '../services/eve/rest/view/rsviewtrade.js';
//data models
import storeTradelist, { sort_jumps, sort_m3, sort_profit, sort_profitperjump, sort_profitperrun, sortmodes} from './store.js';
import { Systempk } from '../data/eve/table/super/systemsuper.js';
import { Orderspk } from '../data/eve/table/super/orderssuper.js';
import { Tradepk } from '../data/eve/table/super/tradesuper.js';

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

export const setFilterprofitperrun = (store, filterprofitperrun) => {
  store.setState({ filterprofitperrun: filterprofitperrun });
};

export const setFiltermaxlowsec = (store, filtermaxlowsec) => {
  store.setState({ filtermaxlowsec: filtermaxlowsec });
};

export const setPaginationconfig = (store, paginationconfig) => {
  store.setState({ paginationconfig: paginationconfig });
};

export const setUnfilteredtradelist = (store, unfilteredtradelist) => {
  store.setState({ unfilteredtradelist: unfilteredtradelist });
}

export const setViewcombinedtrade = (store, viewcombinedtrade) => {
  store.setState({ viewcombinedtrade: viewcombinedtrade });
}

export const loadTradelist = async (store) => {
  try {
    if(store.state.startsystemid!=null) {
      let systempk = new Systempk();
      systempk.id = store.state.startsystemid;
      const result = await Rsviewtrade.getall_startsystem(Store.user, systempk);
      setUnfilteredtradelist(store, result);
    }
  } catch (e) {
    console.log("loadTradelist failed");
  }
};

export const updateTrade = async (store, sell_id, buy_id, volume) => {
  let tradepk = new Tradepk();
  tradepk.ordersSellorderidPK = new Orderspk();
  tradepk.ordersSellorderidPK.id = sell_id;
  tradepk.ordersBuyorderidPK = new Orderspk();
  tradepk.ordersBuyorderidPK.id = buy_id;
  const traderesult = await Rstrade.executetrade(tradepk, volume);
};

export const filtertradelist = (store, list) => {
  let result = list.filter(obj => {
    const systemstartok = store.state.filterstartsystemid==null || obj.sell_systemid===store.state.filterstartsystemid;
    const systemendok = store.state.filterendsystemid==null || obj.buy_systemid===store.state.filterendsystemid;
    const cargook = store.state.filtercargo===0 || obj.total_volume * obj.packaged_volume<=store.state.filtercargo;
    const profitperrunok = store.state.filterprofitperrun===0 || obj.trade_singlerunprofit>=store.state.filterprofitperrun;
    const profitmaxlowsecok = obj.trade_jumpslowsec<=store.state.filtermaxlowsec;
    return systemstartok && systemendok && cargook && profitperrunok && profitmaxlowsecok;
  });
  return result;
}

export const sorttradelist = (store, listref) => {
  switch(store.state.filtersortfield.name) {
    case sort_jumps:
      listref.sort((a, b) => (a.start_system_jumps<b.start_system_jumps) ? -1 : 1);
      break;
    case sort_m3:
      listref.sort((a, b) => (a.total_volume * a.packaged_volume<b.total_volume * b.packaged_volume) ? 1 : -1);
      break;
    case sort_profit:
      listref.sort((a, b) => (a.trade_profit<b.trade_profit) ? 1 : -1);
      break;
    case sort_profitperjump:
      listref.sort((a, b) => (a.trade_profit_per_jump<b.trade_profit_per_jump) ? 1 : -1);
      break;
    case sort_profitperrun:
      listref.sort((a, b) => (a.trade_singlerunprofit<b.trade_singlerunprofit) ? 1 : -1);
      break;
  }
}

