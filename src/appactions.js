export const setActivetrade = (store, viewtrade, sellorderid, buyorderid) => {
  store.setState({ sellorderid: sellorderid });
  store.setState({ buyorderid: buyorderid });
  store.setState({ viewtrade: viewtrade });
};