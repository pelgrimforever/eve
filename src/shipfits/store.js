import React from "react";
import globalHook from "../utilities/useglobalhook.js";

import * as actions from "./actions.js";

//data models
import Viewshipfit from '../data/eve/view/viewshipfit.js';
import Viewshipfitorder from '../data/eve/view/viewshipfitorder.js';

const initialState = {
  searchstring: '',
  shipfitlist: [],
  shipfitmodules: [],
  viewshipfit: null,
  modulelist: [],
  viewshipfitmodule: null,
  shipfitorderlist: [],
  shipfitorder: new Viewshipfitorder()
};

const storeShipfits = globalHook(React, initialState, actions);

export default storeShipfits;