import React from "react";
import globalHook from "../utilities/useglobalhook.js";

import * as actions from "./actions.js";

//data models
import Eveuser from '../data/eve/table/eveuser.js';
import Frontendpage from '../data/eve/table/frontendpage.js';

const initialState = {
  searchstring: '',
  eveusers: [],
  eveuser: new Eveuser(),
  frontendpages: [],
  frontendpage: new Frontendpage(),
  frontendpageauth: [],
};

const storeUsers = globalHook(React, initialState, actions);

export default storeUsers;