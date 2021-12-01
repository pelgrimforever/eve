//datamodels
import {Evetypesearcher} from '../data/eve/table/super/evetypesuper.js';
import Evetype from '../data/eve/table/evetype.js';
import Usersettings from '../data/eve/table/usersettings.js';
import Stock from '../data/eve/table/stock.js';
//services
import Store from '../services/store.js';
import Rsevetype from '../services/eve/rest/table/rsevetype.js';
import Rsusersettings from '../services/eve/rest/table/rsusersettings.js';
import Rsstock from '../services/eve/rest/table/rsstock.js';
import Rsviewstock from '../services/eve/rest/view/rsviewstock.js';
import Rsviewstocktradesystem from '../services/eve/rest/view/rsviewstocktradesystem.js';

export const setSearchstring = (store, searchstring) => {
  store.setState({ searchstring: searchstring });
};

export const loadSettings = async (store) => {
  try {
    if(Store.user.loggedin) {
      let settings = await Rsusersettings.loadUsersettingss4user(Store.user.username);
      settings.map(setting => {
        if(setting.PK.getName()=="stocksystemid") {
          store.setState({ "stocksystemid": setting.value });
        }
      });
    }
  } catch (e) {
    console.log("Rsusersettings.loadUsersettingss4user failed");
  }  
}

export const loadTypes = async (store, searchstring) => {
  if(searchstring.length>2) {
    let searcher = new Evetypesearcher();
    searcher.addnames([searchstring + ':*:']);
    searcher.name.compareoperator = searcher.name.STRING_LIKE;
    const result = await Rsevetype.search(searcher);
    result.sort((a, b) => (a.name<b.name) ? -1 : 1);
    store.setState({ typelist: result });
  }
};

export const setStocksystem = async (store, stocksystemid) => {
  let usersetting = new Usersettings();
  usersetting.PK.init();
  usersetting.PK.username = Store.user.username;
  usersetting.PK.settingsPK.name = "stocksystemid";
  usersetting.value = stocksystemid;
  //always update for usersettings, server business logic assures these settings exist
  await Rsusersettings.save(usersetting);
  store.setState({ 
    stocksystemid: stocksystemid
  });
  loadStocktradesystems(store);
};

export const loadStocklist = async (store) => {
  const result = await Rsviewstock.get4user(Store.user.username);
  result.sort((a, b) => (a.name<b.name) ? -1 : 1);
  store.setState({ stocklist: result });
};

export const loadStocktradesystems = async (store) => {
  const result = await Rsviewstocktradesystem.get4user(Store.user.username);
  store.setState({ stocktradesystems: result });
};

export const addStock = async (store, evetype, volume ) => {
  let stock = new Stock();
  stock.PK.evetypePK = evetype.PK;
  stock.PK.username = Store.user.username;
  stock.amount = volume;
  const result = await Rsstock.addstock(stock);
  loadStocklist(store);
}

export const removeStock = async (store, evetype, volume ) => {
  let stock = new Stock();
  stock.PK.evetypePK = evetype.PK;
  stock.PK.username = Store.user.username;
  stock.amount = volume;
  const result = await Rsstock.removestock(stock);
  loadStocklist(store);
}