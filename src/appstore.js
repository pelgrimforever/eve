import React from "react";
import globalHook from "./utilities/useglobalhook.js";

import * as actions from "./appactions.js";

//data models
import { Viewtrade } from './data/eve/view/viewtrade.js';
import { Viewtradecombined } from './data/eve/view/viewtradecombined.js';
import { Viewtradesystem } from './data/eve/view/viewtradesystem.js';

const initialState = {
  viewtrade: new Viewtrade(),
  viewtradecombined: new Viewtradecombined(),
  viewtradesystem: new Viewtradesystem(),
  activemenu: null,
};

const appstore = globalHook(React, initialState, actions);

export default appstore;