import React from "react";
import globalHook from "../utilities/useglobalhook.js";

import * as actions from "./actions.js";

const initialState = {
  secure: true,
  viasystems: [],
  avoidsystems: [],
};

const storeTradetracking = globalHook(React, initialState, actions);

export default storeTradetracking;