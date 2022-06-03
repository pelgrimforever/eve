//datamodels
import { Evetypepk } from '../data/eve/table/super/evetypesuper.js';
import Evetype from '../data/eve/table/evetype.js';
import { Regionpk } from '../data/eve/table/super/regionsuper.js';
import Viewevetypes from '../data/eve/view/viewevetypes.js';
//services
import Store from '../services/store.js';
import Rsevetype from '../services/eve/rest/table/rsevetype.js';
import Rsviewevetypes from '../services/eve/rest/view/rsviewevetypes.js';
import Rsvieworder from '../services/eve/rest/view/rsvieworder.js';
import Rsviewbpprofitperregion from '../services/eve/rest/view/rsviewbpprofitperregion.js';

export const loadBlueprints = async (store) => {
  const result = await Rsviewbpprofitperregion.getlastmonth(Store.user);
  store.setState({ bpcostlist: result });
};

export const setviewbpprofitperregion = async (store, viewbpprofitperregion) => {
  store.setState({ viewbpprofitperregion: viewbpprofitperregion});
  //get BP result type
  const viewblueprint = new Viewevetypes();
  viewblueprint.id = viewbpprofitperregion.id;
  viewblueprint.name = viewbpprofitperregion.name;
  const bpresult = await Rsviewevetypes.getblueprintresult(Store.user, viewblueprint);
  store.setState({ bpresult: bpresult });
  //get prices
  const evetypepk = new Evetypepk();
  evetypepk.id = bpresult.id;
  const regionpk = new Regionpk();
  regionpk.id = viewbpprofitperregion.region;
  const result = await Rsvieworder.getevetyperegionsell(Store.user, evetypepk, regionpk);
  store.setState({ sellorders: result });
}

export const calculatebpproductioncost = async (store) => {
  const result = await Rsevetype.calculateestimatedproductioncost(Store.user);
  const dummy = await loadBlueprints(store);
}
