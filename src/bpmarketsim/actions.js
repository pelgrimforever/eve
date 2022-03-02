//datamodels
import { Evetypepk } from '../data/eve/table/super/evetypesuper.js';
//services
import Rsviewevetypes from '../services/eve/rest/view/rsviewevetypes.js';
import Rsbpsimulatemarket from '../services/eve/rest/custom/rsbpsimulatemarket.js';
import Rsviewuserbp from '../services/eve/rest/view/rsviewuserbp.js';
import Rsvieworder from '../services/eve/rest/view/rsvieworder.js';
import Rsviewevetypeorderhistoryregionmonth from '../services/eve/rest/view/rsviewevetypeorderhistoryregionmonth.js';
import Store from '../services/store.js';

export const setBlueprint = async (store, viewblueprint) => {
  store.setState({ orderhistoryloading: true });
  store.setState({ resultsellordersloading: true });
  store.setState({ blueprint: viewblueprint });
  const bpresult = await Rsviewevetypes.getblueprintresult(Store.user, viewblueprint);
  store.setState({ bpresult: bpresult });
  const userblueprintlist = await Rsviewuserbp.get4userbp(Store.user, Store.user.username, viewblueprint.id);
  store.setState({ userblueprintlist: userblueprintlist });
  const evetypepk = new Evetypepk();
  evetypepk.id = viewblueprint.id;
  const bpsellorders = await Rsvieworder.getevetypesell(Store.user, evetypepk);
  store.setState({ bpsellorders: bpsellorders });
  evetypepk.id = bpresult.id;
  const orderhistory = await Rsviewevetypeorderhistoryregionmonth.get4evetype4lastmonth(Store.user, evetypepk);
  store.setState({ orderhistory: orderhistory });
  store.setState({ orderhistoryloading: false });
  const resultsellorders = await Rsvieworder.getevetypesell(Store.user, evetypepk);
  store.setState({ resultsellorders: resultsellorders });
  store.setState({ resultsellordersloading: false });
};

export const selectUserblueprint = async (store, userblueprint) => {
  setBpprice(store, userblueprint.bpprice);
  setResearchcost(store, userblueprint.researchcost);
  setBpmaterialefficiency(store, userblueprint.materialefficiency);
  setStationfee(store, userblueprint.stationfee);
  simulateprice(store);
}

export const selectBlueprintorder = async (store, blueprintorder) => {
  setBpprice(store, blueprintorder.price);
  setResearchcost(store, blueprintorder.price * 0.25);
  setBpmaterialefficiency(store, 10);
  setStationfee(store, blueprintorder.price * 0.01);
  simulateprice(store);
}

export const setBpprice = (store, bpprice) => {
  store.setState({ bpprice: bpprice});
}

export const setBpbreakeven = (store, bpbreakeven) => {
  let be = bpbreakeven;
  if(be<1) be = 1;
  store.setState({ bpbreakeven: be});
}

export const setBpmaterialefficiency = (store, bpmaterialefficiency) => {
  store.setState({ bpmaterialefficiency: bpmaterialefficiency});
}

export const setResearchcost = (store, researchcost) => {
  store.setState({ researchcost: researchcost});
}

export const setStationfee = (store, stationfee) => {
  store.setState({ stationfee: stationfee});
}

export const simulateprice = async (store) => {
  if(store.state.blueprint.name!='') {
    const simdata = await Rsbpsimulatemarket.simulateprice(
      Store.user,
      store.state.blueprint, 
      Store.user.username, 
      store.state.bpprice, 
      store.state.bpbreakeven, 
      store.state.bpmaterialefficiency, 
      store.state.researchcost, 
      store.state.stationfee);
    store.setState({ pricesim: simdata });
  }
}