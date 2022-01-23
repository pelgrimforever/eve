//datamodels
import {Evetypesearcher} from '../data/eve/table/super/evetypesuper.js';
import { Evetypepk } from '../data/eve/table/super/evetypesuper.js';
import Evetype from '../data/eve/table/evetype.js';
import Usersettings from '../data/eve/table/usersettings.js';
import { Materialinputpk } from '../data/eve/table/super/materialinputsuper.js';
import Materialinput from '../data/eve/table/materialinput.js';
//services
import Store from '../services/store.js';
import Rsevetype from '../services/eve/rest/table/rsevetype.js';
import Rsmaterialinput from '../services/eve/rest/table/rsmaterialinput.js';
import Rsviewmaterialinput from '../services/eve/rest/view/rsviewmaterialinput.js';
import Rsviewmaterialinputavg from '../services/eve/rest/view/rsviewmaterialinputavg.js';

export const loadMaterialinputlist = async (store) => {
  const result = await Rsviewmaterialinput.get4user(Store.user.username);
  result.sort((a, b) => (a.addtimestamp>b.addtimestamp) ? -1 : 1);
  store.setState({ materialinputlist: result });
};

export const loadViewmaterialinputavglist = async (store) => {
  const result = await Rsviewmaterialinputavg.get4user(Store.user.username);
  result.sort((a, b) => (a.name>b.name) ? -1 : 1);
  store.setState({ materialinputavglist: result });
}

export const addMaterial = async (store, material, amount, unitprice) => {
  const materialinput = new Materialinput();
  materialinput.PK.init();
  materialinput.PK.evetypePK.id = material.id;
  materialinput.PK.username = Store.user.username;
  materialinput.PK.addtimestamp = 0;
  materialinput.amount = amount;
  materialinput.unitprice = unitprice;
  const result = await Rsmaterialinput.insert(materialinput);
  loadMaterialinputlist(store);
  loadViewmaterialinputavglist(store);
}

export const changeMaterial = async (store, viewmaterialinput) => {
  const materialinput = new Materialinput();
  materialinput.PK.init();
  materialinput.PK.evetypePK.id = viewmaterialinput.evetype;
  materialinput.PK.username = viewmaterialinput.username;
  materialinput.PK.addtimestamp = viewmaterialinput.addtimestamp;
  materialinput.amount = viewmaterialinput.amount;
  materialinput.unitprice = viewmaterialinput.unitprice;
  const result = await Rsmaterialinput.save(materialinput);
  loadMaterialinputlist(store);
  loadViewmaterialinputavglist(store);
}
