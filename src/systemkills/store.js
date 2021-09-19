import React from "react";
import globalHook from "../utilities/useglobalhook.js";

import * as actions from "./actions.js";

const initialState = {
  secure: true,
  startsystem: null,
  startsystemid: null,
  endsystem: null,
  endsystemid: null,
  viasystems: [],
  avoidsystems: [],
  routelist: [],
};

const storeSystemkills = globalHook(React, initialState, actions);

export default storeSystemkills;