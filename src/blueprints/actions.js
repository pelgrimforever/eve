//datamodels
import { Evetypepk } from '../data/eve/table/super/evetypesuper.js';
import Evetype from '../data/eve/table/evetype.js';
import Usersettings from '../data/eve/table/usersettings.js';
import { Bpmaterialpk } from '../data/eve/table/super/bpmaterialsuper.js';
import Bpmaterial from '../data/eve/table/bpmaterial.js';
//services
import Store from '../services/store.js';
import Rsevetype from '../services/eve/rest/table/rsevetype.js';
import Rsbpmaterial from '../services/eve/rest/table/rsbpmaterial.js';
import Rsviewbpmaterial from '../services/eve/rest/view/rsviewbpmaterial.js';
import Rsviewevetypes from '../services/eve/rest/view/rsviewevetypes.js';
import Rsvieworder from '../services/eve/rest/view/rsvieworder.js';

export const setSearchstring = (store, searchstring) => {
  store.setState({ searchstring: searchstring });
};

export const loadBlueprints = async (store) => {
  if(store.state.searchstring.length>2) {
    const result = await Rsviewevetypes.getblueprints(Store.user, store.state.searchstring + ':*:');
    result.sort((a, b) => (a.name<b.name) ? -1 : 1);
    store.setState({ blueprintlist: result });
  }
};

export const toggleConfiguredbp = async (store, viewblueprint) => {
  const evetypepk = new Evetypepk();
  evetypepk.id = viewblueprint.id;
  const result = await Rsevetype.toggleconfiguredbp(Store.user, evetypepk);
  const dummy = await loadBlueprints(store);
}

export const setBlueprint = async (store, viewblueprint) => {
  store.setState({ blueprint: viewblueprint });
  const dummy1 = await loadBlueprintmaterials(store, viewblueprint);
  const evetypepk = new Evetypepk();
  evetypepk.id = viewblueprint.id;
  const result_sellorders = await Rsvieworder.getevetypesell(Store.user, evetypepk);
  store.setState({ sellorders: result_sellorders });
};

export const loadBlueprintmaterials = async (store, viewblueprint) => {
  const result = await Rsviewbpmaterial.get4blueprint(Store.user, viewblueprint.id);
  result.sort((a, b) => (a.typegroupname<b.typegroupname && a.name<b.name) ? -1 : 1);
  store.setState({ bpmateriallist: result });
};

export const addMaterial = async (store, material, amount) => {
  const mat = new Bpmaterial();
  mat.PK.init();
  mat.PK.evetypeBpPK.id = store.state.blueprint.id;
  mat.PK.evetypeMaterialPK.id = material.id;
  mat.amount = amount;
  const result = await Rsbpmaterial.insert(Store.user, mat);
  loadBlueprints(store);
  loadBlueprintmaterials(store, store.state.blueprint);
}

export const changeMaterial = async (store, viewbpmaterial) => {
  const mat = new Bpmaterial();
  mat.PK.init();
  mat.PK.evetypeBpPK.id = store.state.blueprint.id;
  mat.PK.evetypeMaterialPK.id = viewbpmaterial.material;
  mat.amount = viewbpmaterial.amount;
  const result = await Rsbpmaterial.save(Store.user, mat);
  loadBlueprints(store);
  loadBlueprintmaterials(store, store.state.blueprint);
}

export const delMaterial = async (store, viewbpmaterial) => {
  const mat = new Bpmaterial();
  mat.PK.init();
  mat.PK.evetypeBpPK.id = store.state.blueprint.id;
  mat.PK.evetypeMaterialPK.id = viewbpmaterial.material;
  mat.amount = viewbpmaterial.amount;
  const result = await Rsbpmaterial.del(Store.user, mat);
  loadBlueprints(store);
  loadBlueprintmaterials(store, store.state.blueprint);
}
