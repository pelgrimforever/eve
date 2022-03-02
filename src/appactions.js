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

export const initMenu = (store) => {
  store.state.navitems.map(navitem1 => {
    navitem1.navitems.map(navitem2 => {
      navitem2.auth = (typeof navitem2.default !== 'undefined');
    });
  });
}

export const authorizeMenu = (store, user) => {
  store.state.navitems.map(navitem1 => {
    navitem1.navitems.map(navitem2 => {
      navitem2.auth = user.ispageauthorized(navitem2.id) || (typeof navitem2.default !== 'undefined');
    });
  });
  store.setState({ navitems: store.state.navitems });
}

