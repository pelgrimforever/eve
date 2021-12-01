import React from "react";
import globalHook from "./utilities/useglobalhook.js";

import * as actions from "./appactions.js";

//data models
import { Viewtrade } from './data/eve/view/viewtrade.js';
import { Viewtradecombined } from './data/eve/view/viewtradecombined.js';

const initialState = {
  viewtrade: new Viewtrade(),
  viewtradecombined: new Viewtradecombined(),
  activemenu: null,
};

const appstore = globalHook(React, initialState, actions);

export default appstore;