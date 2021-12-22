import React from "react";
import globalHook from "../utilities/useglobalhook.js";

import * as actions from "./actions.js";

//data models
import Viewshipfit from '../data/eve/view/viewshipfit.js';
import Viewshipfitorder from '../data/eve/view/viewshipfitorder.js';
import Viewshipfitorderselected from '../data/eve/view/viewshipfitorderselected.js';

const initialState = {
  shipfitorderlist: [],
  shipfitorder: null,
  orders: [],
  shipfitorderselectedlist: [],
  viewshipfitorderselected: new Viewshipfitorderselected(),
};

const storeShipfitsorderlist = globalHook(React, initialState, actions);

export default storeShipfitsorderlist;