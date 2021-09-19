//services
import Rsloadroute from '../services/eve/rest/custom/rsloadroute.js';

export const setStartsystem = (store, system) => {
  store.setState({ startsystem: system, startsystemid: system.PK.id });
};

export const setEndsystem = (store, system) => {
  store.setState({ endsystem: system, endsystemid: system.PK.id });
};

export const setSecure = (store, secure) => {
  store.setState({ secure: secure });
};

export const setViasystems = (store, viasystems) => {
  store.setState({ viasystems: viasystems });
}

export const setAvoidsystems = (store, avoidsystems) => {
  store.setState({ avoidsystems: avoidsystems });
}

export const loadRoute = async (store) => {
  if(store.state.startsystem!=null && store.state.endsystem!=null) {
    const resultroute = await Rsloadroute.getroute(store.state.startsystem.PK.id, store.state.endsystem.PK.id, store.state.viasystems, store.state.avoidsystems, store.state.secure);
    store.setState( { routelist: resultroute });
  }  
}