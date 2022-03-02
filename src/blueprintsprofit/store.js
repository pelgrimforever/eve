import React from "react";
import globalHook from "../utilities/useglobalhook.js";

import * as actions from "./actions.js";

//data models
import Viewbpprofitperregion from '../data/eve/view/viewbpprofitperregion.js';
import Viewevetypes from '../data/eve/view/viewevetypes.js';

const initialState = {
  bpcostlist: [],
  bpresult: new Viewevetypes(),
  viewbpprofitperregion: new Viewbpprofitperregion(),
  sellorders: []
};

const storeBlueprintsprofit = globalHook(React, initialState, actions);

export default storeBlueprintsprofit;