import React from "react";
import globalHook from "../utilities/useglobalhook.js";

import * as actions from "./actions.js";
//data models
import Viewevetypes from '../data/eve/view/viewevetypes.js';

const initialState = {
  blueprint: new Viewevetypes(),
  bpresult: new Viewevetypes(),
  bpprice: 0,
  bpbreakeven: 20,
  bpmaterialefficiency: 10,
  researchcost: 0,
  stationfee: 0,
  userblueprintlist: [],
  bpsellorders: [],
  orderhistoryloading: false,
  orderhistory: [],
  resultsellordersloading: false,
  resultsellorders: [],
  pricesim: {
    bpresult: new Viewevetypes(),
    material: [],
    totalprice_market: 0,
    totalprice_user: 0,
  },
};

const storeBpmarketsim = globalHook(React, initialState, actions);

export default storeBpmarketsim;