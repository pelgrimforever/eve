import React from "react";
import globalHook from "../utilities/useglobalhook.js";

import * as actions from "./actions.js";

const initialState = {
  searchstring: '',
  typelist: [],
  stocklist: [],
  stocktradesystems: [],
};

const storeSellstock = globalHook(React, initialState, actions);

export default storeSellstock;