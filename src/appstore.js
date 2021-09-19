import React from "react";
import globalHook from "./utilities/useglobalhook.js";

import * as actions from "./appactions.js";

//data models
import { Viewtrade } from './data/eve/view/viewtrade.js';

const initialState = {
  sellorderid: null,
  buyorderid: null,
  viewtrade: new Viewtrade(),
};

const appstore = globalHook(React, initialState, actions);

export default appstore;