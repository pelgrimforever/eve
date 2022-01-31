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

export const setSearchstring = (store, searchstring) => {
  store.setState({ searchstring: searchstring });
};

export const loadBlueprints = async (store, searchstring) => {
  if(searchstring.length>2) {
    const result = await Rsviewevetypes.getblueprints(searchstring + ':*:');
    result.sort((a, b) => (a.name<b.name) ? -1 : 1);
    store.setState({ blueprintlist: result });
  }
};

export const setBlueprint = (store, viewblueprint) => {
  store.setState({ blueprint: viewblueprint });
  loadBlueprintmaterials(store, viewblueprint);
};

export const loadBlueprintmaterials = async (store, viewblueprint) => {
  const result = await Rsviewbpmaterial.get4blueprint(viewblueprint.id);
  result.sort((a, b) => (a.typegroupname<b.typegroupname && a.name<b.name) ? -1 : 1);
  store.setState({ bpmateriallist: result });
};

export const addMaterial = async (store, material, amount) => {
  const mat = new Bpmaterial();
  mat.PK.init();
  mat.PK.evetypeBpPK.id = store.state.blueprint.id;
  mat.PK.evetypeMaterialPK.id = material.id;
  mat.amount = amount;
  const result = await Rsbpmaterial.insert(mat);
  loadBlueprints(store, store.state.searchstring);
  loadBlueprintmaterials(store, store.state.blueprint);
}

export const changeMaterial = async (store, viewbpmaterial) => {
  const mat = new Bpmaterial();
  mat.PK.init();
  mat.PK.evetypeBpPK.id = store.state.blueprint.id;
  mat.PK.evetypeMaterialPK.id = viewbpmaterial.material;
  mat.amount = viewbpmaterial.amount;
  const result = await Rsbpmaterial.save(mat);
  loadBlueprints(store, store.state.searchstring);
  loadBlueprintmaterials(store, store.state.blueprint);
}
