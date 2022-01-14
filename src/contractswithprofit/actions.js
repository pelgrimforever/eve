//datamodels
//services
import Store from '../services/store.js';
import Rsviewcontractswithprofit from '../services/eve/rest/view/rsviewcontractswithprofit.js';
import Rsviewcontractitem from '../services/eve/rest/view/rsviewcontractitem.js';
import { Contractpk } from '../data/eve/table/super/contractsuper.js';

export const loadContracts = async (store) => {
  const result = await Rsviewcontractswithprofit.getall(Store.user);
  store.setState({ viewcontractswithprofit: result });
};

export const setContract = async (store, item) => {
  store.setState({ viewcontract: item });
  const contractpk = new Contractpk();
  contractpk.id = item.id;
  const result = await Rsviewcontractitem.getcontract(contractpk);
  store.setState({ viewcontractitems: result});
};
