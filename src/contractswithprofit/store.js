import React from "react";
import globalHook from "../utilities/useglobalhook.js";

import * as actions from "./actions.js";

//data models
import Viewcontractswithprofit from '../data/eve/view/viewcontractswithprofit.js';

const initialState = {
  viewcontractswithprofit: [],
  viewcontract: new Viewcontractswithprofit(),
  viewcontractitems: [],
};

const storeViewcontractswithprofit = globalHook(React, initialState, actions);

export default storeViewcontractswithprofit;