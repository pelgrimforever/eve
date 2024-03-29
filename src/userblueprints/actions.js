//datamodels
import { Evetypepk } from '../data/eve/table/super/evetypesuper.js';
import Evetype from '../data/eve/table/evetype.js';
import Usersettings from '../data/eve/table/usersettings.js';
import { Userbppk } from '../data/eve/table/super/userbpsuper.js';
import Userbp from '../data/eve/table/userbp.js';
//services
import Store from '../services/store.js';
import Rsuserbp from '../services/eve/rest/table/rsuserbp.js';
import Rsviewuserbp from '../services/eve/rest/view/rsviewuserbp.js';
import Rsbpproduction from '../services/eve/rest/custom/rsbpproduction.js';

export const setSearchstring = (store, searchstring) => {
  store.setState({ searchstring: searchstring });
};

export const loadUserblueprints = async (store) => {
  const result = await Rsviewuserbp.get4user(Store.user, Store.user.username);
  store.setState({ userblueprintlist: result });
};

export const setBlueprint = async (store, viewblueprint) => {
  store.setState({ userblueprint: viewblueprint });
  loadPrices(store, viewblueprint);
};

export const loadPrices = async (store, viewblueprint) => {
  const result = await Rsbpproduction.calculateprices(Store.user, viewblueprint);
  store.setState({ bpprices: result });
}

export const addBlueprint = async (store, blueprint, original, amount, bpprice, researchcost, stationfee) => {
  const userbp = new Userbp();
  userbp.PK.init();
  userbp.PK.evetypePK.id = blueprint.id;
  userbp.PK.username = Store.user.username;
  userbp.original = original;
  userbp.totalamount = amount;
  userbp.bpprice = bpprice;
  userbp.researchcost = researchcost;
  userbp.stationfee = stationfee;
  const result = await Rsuserbp.addbp(Store.user, userbp);
  loadUserblueprints(store);
}

export const changeUserbp = async (store, totalamount, amountproduced, efficiency, researchcost) => {
  const userbp = new Userbp();
  userbp.PK.init();
  userbp.PK.evetypePK.id = store.state.userblueprint.bp;
  userbp.PK.username = store.state.userblueprint.username;
  userbp.PK.serialnumber = store.state.userblueprint.serialnumber;
  userbp.totalamount = totalamount;
  userbp.amountproduced = amountproduced;
  userbp.materialefficiency = efficiency;
  userbp.researchcost = researchcost;
  const result = await Rsuserbp.updateproperties(Store.user, userbp);
  loadUserblueprints(store);
}

export const removeBlueprint = async (store, blueprint) => {
  const userbp = new Userbp();
  userbp.PK.init();
  userbp.PK.evetypePK.id = blueprint.bp;
  userbp.PK.username = blueprint.username;
  userbp.PK.serialnumber = blueprint.serialnumber;
  const result = await Rsuserbp.del(Store.user, userbp);
  loadUserblueprints(store);
}

export const runUserbp = async (store, amount) => {
  const userbppk = new Userbppk();
  userbppk.init();
  userbppk.evetypePK.id = store.state.userblueprint.bp;
  userbppk.serialnumber = store.state.userblueprint.serialnumber;
  userbppk.username = Store.user.username;
  const result = await Rsuserbp.runbp(Store.user, userbppk, amount);
  loadUserblueprints(store);
}
