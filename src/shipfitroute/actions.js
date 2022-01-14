//datamodels
import {Evetypesearcher} from '../data/eve/table/super/evetypesuper.js';
import { Evetypepk } from '../data/eve/table/super/evetypesuper.js';
import Evetype from '../data/eve/table/evetype.js';
import Usersettings from '../data/eve/table/usersettings.js';
import { Shipfitpk } from '../data/eve/table/super/shipfitsuper.js';
import Shipfit from '../data/eve/table/shipfit.js';
import Shipfitmodule from '../data/eve/table/shipfitmodule.js';
import { Shipfitorderpk } from '../data/eve/table/super/shipfitordersuper.js';
import { Shipfitorderselectedpk } from '../data/eve/table/super/shipfitorderselectedsuper.js';
import Shipfitorderselected from '../data/eve/table/shipfitorderselected.js';
//services
import Store from '../services/store.js';
import Rscreateshipfitroute from '../services/eve/rest/custom/rscreateshipfitroute.js';
import Rsevetype from '../services/eve/rest/table/rsevetype.js';
import Rsshipfit from '../services/eve/rest/table/rsshipfit.js';
import Rsshipfitmodule from '../services/eve/rest/table/rsshipfitmodule.js';
import Rsshipfitorder from '../services/eve/rest/table/rsshipfitorder.js';
import Rsviewshipfit from '../services/eve/rest/view/rsviewshipfit.js';
import Rsviewshipfitmodule from '../services/eve/rest/view/rsviewshipfitmodule.js';
import Rsviewshipfitorder from '../services/eve/rest/view/rsviewshipfitorder.js';
import Rsshipfitorderselected from '../services/eve/rest/table/rsshipfitorderselected.js';
import Rsviewshipfitorderselected from '../services/eve/rest/view/rsviewshipfitorderselected.js';

export const setStartsystemid = async (store, startsystemid) => {
  store.setState({ startsystemid: startsystemid });
  await loadShipfitroute(store);
};

export const setEndsystemid = async (store, endsystemid) => {
  store.setState({ endsystemid: endsystemid });
  await loadShipfitroute(store);
};

export const loadShipfitroute = async (store) => {
  if(store.state.startsystemid!=null && store.state.endsystemid!=null) {
    const result = await Rscreateshipfitroute.getroute(store.state.startsystemid, store.state.endsystemid, Store.user.username);
    store.setState({ shipfitroute: result });
  }
};

export const setSystem = async (store, viewsystem) => {
  store.setState({ viewsystem: viewsystem });
  loadOrders(store, viewsystem.id);
}

export const loadOrders = async (store, systemid) => {
  const result2 = await Rsviewshipfitorderselected.get4usersystem(Store.user.username, systemid);
  store.setState({ shipfitorderselectedlist: result2});  
}

export const setSecure = (store, secure) => {
  store.setState({ secure: secure });
};

export const setViasystems = (store, viasystems) => {
  store.setState({ viasystems: viasystems });
}

export const setAvoidsystems = (store, avoidsystems) => {
  store.setState({ avoidsystems: avoidsystems });
}

export const deleteShipfitorderlist = async (store, viewshipfitorderselected) => {
  const shipfitorderselectedpk = new Shipfitorderselectedpk();
  shipfitorderselectedpk.init();
  shipfitorderselectedpk.shipfitorderPK.init();
  shipfitorderselectedpk.shipfitorderPK.shipfitPK.username = viewshipfitorderselected.username;
  shipfitorderselectedpk.shipfitorderPK.shipfitPK.shipname = viewshipfitorderselected.shipname;
  shipfitorderselectedpk.shipfitorderPK.evetypePK.id = viewshipfitorderselected.evetype;
  shipfitorderselectedpk.ordersPK.id = viewshipfitorderselected.id;
  const shipfitorderselected = new Shipfitorderselected();
  shipfitorderselected.PK = shipfitorderselectedpk;
  const result = await Rsshipfitorderselected.del(shipfitorderselected);
  loadOrders(store, store.state.viewsystem.id);
}

export const setViewshipfitorderselected = (store, viewshipfitorderselected) => {
  store.setState({ viewshipfitorderselected: viewshipfitorderselected });
}

export const confirmShipfitorder = async (store, amount) => {
  const shipfitorderselectedpk = new Shipfitorderselectedpk();
  shipfitorderselectedpk.init();
  shipfitorderselectedpk.shipfitorderPK.init();
  shipfitorderselectedpk.shipfitorderPK.shipfitPK.username = store.state.viewshipfitorderselected.username;
  shipfitorderselectedpk.shipfitorderPK.shipfitPK.shipname = store.state.viewshipfitorderselected.shipname;
  shipfitorderselectedpk.shipfitorderPK.evetypePK.id = store.state.viewshipfitorderselected.evetype;
  shipfitorderselectedpk.ordersPK.id = store.state.viewshipfitorderselected.id;
  const result = await Rsshipfitorderselected.confirmShipfitorder(shipfitorderselectedpk, amount);
  loadOrders(store, store.state.viewsystem.id);
}
