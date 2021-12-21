//datamodels
import { Evetypepk } from '../data/eve/table/super/evetypesuper.js';
import { Shipfitorderpk } from '../data/eve/table/super/shipfitordersuper.js';
import { Orderspk } from '../data/eve/table/super/orderssuper.js';
import { Shipfitorderselectedpk } from '../data/eve/table/super/shipfitorderselectedsuper.js';
import Shipfitorderselected from '../data/eve/table/shipfitorderselected.js';
//services
import Store from '../services/store.js';
import Rsviewshipfitorder from '../services/eve/rest/view/rsviewshipfitorder.js';
import Rsshipfitorderselected from '../services/eve/rest/table/rsshipfitorderselected.js';
import Rsviewshipfitorderselected from '../services/eve/rest/view/rsviewshipfitorderselected.js';
import Rsvieworder from '../services/eve/rest/view/rsvieworder.js';

export const loadShipfitorders = async (store) => {
  const result = await Rsviewshipfitorder.get4user(Store.user.username);
  store.setState({ shipfitorderlist: result });
  const result2 = await Rsviewshipfitorderselected.get4user(Store.user.username);
  store.setState({ shipfitorderselectedlist: result2});
};

export const setShipfitorder = async (store, shipfitorder) => {
  store.setState({ shipfitorder: shipfitorder });
  const evetypepk = new Evetypepk();
  evetypepk.id = shipfitorder.evetype;
  const result = await Rsvieworder.getevetypesell(evetypepk);
  store.setState({ orders: result});
};

export const addShipfitorderlist = async (store, vieworder) => {
  const shipfitorderpk = new Shipfitorderpk();
  shipfitorderpk.init();
  shipfitorderpk.shipfitPK.username = store.state.shipfitorder.username;
  shipfitorderpk.shipfitPK.shipname = store.state.shipfitorder.shipname;
  shipfitorderpk.evetypePK.id = store.state.shipfitorder.evetype;
  const orderspk = new Orderspk();
  orderspk.id = vieworder.id;
  const result = await Rsshipfitorderselected.addOrder2Shipfitorder(shipfitorderpk, orderspk);
  loadShipfitorders(store);
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
  loadShipfitorders(store);
}


