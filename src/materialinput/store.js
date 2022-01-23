import React from "react";
import globalHook from "../utilities/useglobalhook.js";

import * as actions from "./actions.js";

//data models
import Viewmaterialinput from '../data/eve/view/viewmaterialinput.js';

const initialState = {
  searchstring: '',
  materialinputlist: [],
  materialinputavglist: [],
};

const storeMaterialinput = globalHook(React, initialState, actions);

export default storeMaterialinput;