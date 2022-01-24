import React from "react";
import globalHook from "../utilities/useglobalhook.js";

import * as actions from "./actions.js";

//data models
import Viewevetypes from '../data/eve/view/viewevetypes.js';

const initialState = {
  searchstring: '',
  blueprintlist: [],
  blueprint: new Viewevetypes(),
  bpmateriallist: [],
};

const storeBlueprints = globalHook(React, initialState, actions);

export default storeBlueprints;