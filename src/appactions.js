export const setActivetrade = (store, viewtrade) => {
  store.setState({ viewtrade: viewtrade });
};

export const setActivetradecombined = (store, viewtradecombined) => {
  store.setState({ viewtradecombined: viewtradecombined });
};

export const setActivetradesystem = (store, viewtradesystem) => {
  store.setState({ viewtradesystem: viewtradesystem });
};

export const setActivemenu = (store, activemenu1, activemenu2) => {
  store.setState({ activemenu: { menu1: activemenu1, menu2: activemenu2} });
}