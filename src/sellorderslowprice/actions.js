//component state
import Store from '../services/store.js';
import appstore from '../appstore.js';
//services
import Rsvieworder from '../services/eve/rest/view/rsvieworder.js';
//data models
import storeSellorderslowprice, { sort_jumps, sort_m3, sort_profit, sort_profitperjump, sortmodes} from './store.js';
import { Systempk } from '../data/eve/table/super/systemsuper.js';
import { Orderspk } from '../data/eve/table/super/orderssuper.js';

export const setSystem = (store, startsystemid) => {
  store.setState({ 
    startsystemid: startsystemid,
  });
};

export const setActiveorderline = (store, orderline) => {
  store.setState({
    activeorderline: orderline
  });
}

export const setFiltersortfield = (store, filtersortfield) => {
  store.setState({ filtersortfield: filtersortfield });
};

export const setPaginationconfig = (store, paginationconfig) => {
  store.setState({ paginationconfig: paginationconfig });
};

export const setUnfilteredsellorderlist = (store, unfilteredsellorderlist) => {
  store.setState({ unfilteredsellorderlist: unfilteredsellorderlist });
}

export const setViewcombinedtrade = (store, viewcombinedtrade) => {
  store.setState({ viewcombinedtrade: viewcombinedtrade });
}

export const loadSellorderlist = async (store, systempk) => {
  try {
    if(store.state.startsystemid!=null) {
      let systempk = new Systempk();
      systempk.id = store.state.startsystemid;
      const result = await Rsvieworder.getordersselllowprice(Store.user, systempk);
      setUnfilteredsellorderlist(store, result);
    }
  } catch (e) {
    console.log("loadVieworderlist failed");
  }
};

/*export const updateTrade = async (store, sell_id, buy_id, volume) => {
  let tradepk = new Tradepk();
  tradepk.ordersSellorderidPK = new Orderspk();
  tradepk.ordersSellorderidPK.id = sell_id;
  tradepk.ordersBuyorderidPK = new Orderspk();
  tradepk.ordersBuyorderidPK.id = buy_id;
  const traderesult = await Rstrade.executetrade(tradepk, volume);
};
*/
export const filtersellorderlist = (store, list) => {
  return list;
}

export const sortsellorderlist = (store, listref) => {
  switch(store.state.filtersortfield.name) {
    case sort_jumps:
      listref.sort((a, b) => (a.startsystem_jumps<b.startsystem_jumps) ? -1 : 1);
      break;
    case sort_m3:
      listref.sort((a, b) => (a.volume_remain * a.packaged_volume<b.volume_remain * b.packaged_volume) ? 1 : -1);
      break;
    case sort_profit:
      listref.sort((a, b) => ((a.avg_buyorder-a.price)*a.volume_remain<(b.avg_buyorder-b.price)*b.volume_remain) ? 1 : -1);
      break;
  }
}

