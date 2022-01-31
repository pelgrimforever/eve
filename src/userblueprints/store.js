import React from "react";
import globalHook from "../utilities/useglobalhook.js";

import * as actions from "./actions.js";

//data models
import Viewuserbp from '../data/eve/view/viewuserbp.js';

const initialState = {
  searchstring: '',
  userblueprintlist: [],
  userblueprint: new Viewuserbp(),
  userbpmateriallist: [],
  bpprices: {
    material: [],
    totalprice_market: 0,
    totalprice_user: 0
  },
};

const storeUserblueprints = globalHook(React, initialState, actions);

export default storeUserblueprints;