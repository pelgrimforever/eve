//datamodels
import {Evetypesearcher} from '../data/eve/table/super/evetypesuper.js';
import { Evetypepk } from '../data/eve/table/super/evetypesuper.js';
import Evetype from '../data/eve/table/evetype.js';
import Usersettings from '../data/eve/table/usersettings.js';
import { Shipfitpk } from '../data/eve/table/super/shipfitsuper.js';
import Shipfit from '../data/eve/table/shipfit.js';
import Shipfitmodule from '../data/eve/table/shipfitmodule.js';
import { Shipfitorderpk } from '../data/eve/table/super/shipfitordersuper.js';
//services
import Store from '../services/store.js';
import Rsshipfit from '../services/eve/rest/table/rsshipfit.js';
import Rsshipfitmodule from '../services/eve/rest/table/rsshipfitmodule.js';
import Rsshipfitorder from '../services/eve/rest/table/rsshipfitorder.js';
import Rsviewshipfit from '../services/eve/rest/view/rsviewshipfit.js';
import Rsviewshipfitmodule from '../services/eve/rest/view/rsviewshipfitmodule.js';
import Rsviewshipfitorder from '../services/eve/rest/view/rsviewshipfitorder.js';

export const setViewshipfit = async (store, viewshipfit) => {
  store.setState({ viewshipfit: viewshipfit });
  loadShipfitmodules(store, viewshipfit);
};

export const setShipfitorder = async (store, shipfitorder) => {
  store.setState({ shipfitorder: shipfitorder });
};

export const loadShipfitmodules = async (store, viewshipfit) => {
  const result = await Rsviewshipfitmodule.get4shipfit(Store.user, viewshipfit.username, viewshipfit.shipname);
  store.setState({ shipfitmodules: result });
};

export const loadShipfits = async (store) => {
  const result = await Rsviewshipfit.get4user(Store.user, Store.user.username);
  result.sort((a, b) => (a.name<b.name) ? -1 : 1);
  store.setState({ shipfitlist: result });
};

export const loadShipfitorders = async (store) => {
  const result = await Rsviewshipfitorder.get4user(Store.user, Store.user.username);
  store.setState({ shipfitorderlist: result });
};

export const addShipfit = async (store, activeship, shipname ) => {
  let shipfit = new Shipfit();
  shipfit.PK.username = Store.user.username;
  shipfit.PK.shipname = shipname;
  shipfit.evetypePK = new Evetypepk();
  shipfit.evetypePK.id = activeship.id;
  const result = await Rsshipfit.insert(Store.user, shipfit);
  loadShipfits(store);
}

export const removeShipfit = async (store, viewshipfit ) => {
  let shipfit = new Shipfit();
  shipfit.PK.username = viewshipfit.username;
  shipfit.PK.shipname = viewshipfit.shipname;
  shipfit.evetypePK = new Evetypepk();
  shipfit.evetypePK.id = viewshipfit.evetype;
  const result = await Rsshipfit.del(Store.user, shipfit);
  loadShipfits(store);
}

export const orderShipfit = async (store, viewshipfit ) => {
  let shipfitpk = new Shipfitpk();
  shipfitpk.username = viewshipfit.username;
  shipfitpk.shipname = viewshipfit.shipname;
  const result = await Rsshipfit.orderShipfit(Store.user, shipfitpk);
  loadShipfitorders(store);
}

export const addShipmodule = async (store, activemodule, amount ) => {
  let shipmodule = new Shipfitmodule();
  shipmodule.PK.init();
  shipmodule.PK.shipfitPK.username = store.state.viewshipfit.username;
  shipmodule.PK.shipfitPK.shipname = store.state.viewshipfit.shipname;
  shipmodule.PK.evetypePK.id = activemodule.id;
  shipmodule.amount = amount;
  const result = await Rsshipfitmodule.insert(Store.user, shipmodule);
  loadShipfitmodules(store, store.state.viewshipfit);
}

export const removeShipmodule = async (store, viewshipfitmodule ) => {
  let shipmodule = new Shipfitmodule();
  shipmodule.PK.init();
  shipmodule.PK.shipfitPK.username = viewshipfitmodule.username;
  shipmodule.PK.shipfitPK.shipname = viewshipfitmodule.shipname;
  shipmodule.PK.evetypePK.id = viewshipfitmodule.moduletype;
  const result = await Rsshipfitmodule.del(Store.user, shipmodule);
  loadShipfitmodules(store, store.state.viewshipfit);
}

export const addstockShipfitorder = async (store, viewshipfitorder, amount ) => {
  let shipfitorderpk = new Shipfitorderpk();
  shipfitorderpk.shipfitPK = new Shipfitpk();
  shipfitorderpk.shipfitPK.username = viewshipfitorder.username;
  shipfitorderpk.shipfitPK.shipname = viewshipfitorder.shipname;
  shipfitorderpk.evetypePK = new Evetypepk();
  shipfitorderpk.evetypePK.id = viewshipfitorder.evetype;
  const result = await Rsshipfitorder.updateOrderaddstock(Store.user, shipfitorderpk, amount);
  loadShipfitorders(store);
}
