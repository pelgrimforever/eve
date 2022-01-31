import React from "react";
import globalHook from "../utilities/useglobalhook.js";

import * as actions from "./actions.js";

const initialState = {
  searchstring: '',
  typelist: [],
};

const storeTypeorders = globalHook(React, initialState, actions);

export default storeTypeorders;