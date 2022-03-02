//datamodels
import { Eveuserpk } from '../data/eve/table/super/eveusersuper.js';
import Eveuser from '../data/eve/table/eveuser.js';
import Frontendpage from '../data/eve/table/frontendpage.js';
import Frontendpageauth from '../data/eve/table/frontendpageauth.js';
import Usersettings from '../data/eve/table/usersettings.js';
//services
import Store from '../services/store.js';
import Rseveuser from '../services/eve/rest/table/rseveuser.js';
import Rsfrontendpage from '../services/eve/rest/table/rsfrontendpage.js';
import Rsfrontendpageauth from '../services/eve/rest/table/rsfrontendpageauth.js';

export const setSearchstring = (store, searchstring) => {
  store.setState({ searchstring: searchstring });
};

export const loadUsers = async (store) => {
  const result = await Rseveuser.sec_getall(Store.user);
  store.setState({ eveusers: result });
};

export const setUser = async (store, eveuser) => {
  store.setState({ eveuser: eveuser });
  const result2 = await loadFrontendpagesauth(store, eveuser);
};

export const addUser = async (store, username) => {
  const eveuser = new Eveuser();
  eveuser.PK.username = username;
  const result = await Rseveuser.sec_newuser(Store.user, eveuser);
  const result2 = await loadUsers(store);
}

export const resetUser = async (store, eveuser) => {
  const result = await Rseveuser.sec_userreset(Store.user, eveuser);
  return result.status;
}

export const removeUser = async (store, eveuser) => {
  const result = await Rseveuser.sec_deleteregistration(Store.user, eveuser);
  const result2 = await loadUsers(store);
  return result.status;
}

export const loadFrontendpages = async (store) => {
  const result = await Rsfrontendpage.sec_getall(Store.user);
  store.setState({ frontendpages: result });
};

export const addFrontendpage = async (store, pagename) => {
  const frontendpage = new Frontendpage();
  frontendpage.PK.name = pagename;
  const result = await Rsfrontendpage.sec_insert(Store.user, frontendpage);
  const result2 = await loadFrontendpages(store);
}

export const removeFrontendpage = async (store, frontendpage) => {
  const result = await Rsfrontendpage.sec_del(Store.user, frontendpage);
  const result2 = await loadFrontendpages(store);
}

export const loadFrontendpagesauth = async (store, eveuser) => {
  const result = await Rsfrontendpageauth.sec_loadFrontendpageauths4eveuser(Store.user, eveuser.PK);
  store.setState({ frontendpageauth: result });
};

export const addFrontendpagesauth = async (store, frontendpage) => {
  const frontendpageauth = new Frontendpageauth();
  frontendpageauth.PK.init();
  frontendpageauth.PK.eveuserPK.username = store.state.eveuser.PK.username;
  frontendpageauth.PK.frontendpagePK.name = frontendpage.PK.name;
  const result = await Rsfrontendpageauth.sec_insert(Store.user, frontendpageauth);
  const result2 = await loadFrontendpagesauth(store, store.state.eveuser);
};

export const removeFrontendpagesauth = async (store, frontendpageauth) => {
  const result = await Rsfrontendpageauth.sec_del(Store.user, frontendpageauth);
  const result2 = await loadFrontendpagesauth(store, store.state.eveuser);
};

