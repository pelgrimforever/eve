import React from "react";
import globalHook from "../utilities/useglobalhook.js";

import * as actions from "./actions.js";

//data models
import Viewshipfitorderselected from '../data/eve/view/viewshipfitorderselected.js';

const initialState = {
  startsystemid: null,
  endsystemid: null,
  shipfitroute: [],
  viewsystem: null,
  secure: true,
  viasystems: [],
  avoidsystems: [],
  shipfitorderselectedlist: [],
  viewshipfitorderselected: new Viewshipfitorderselected(),
};

const storeShipfitroute = globalHook(React, initialState, actions);

export default storeShipfitroute;