import React from "react";
import globalHook from "../utilities/useglobalhook.js";

import * as actions from "./actions.js";

import { Viewcombinedtrade } from '../data/eve/view/viewcombinedtrade.js';

export const sort_jumps = 'jumps';
export const sort_m3 = 'volume';
export const sort_profit = 'profit';
export const sort_profitperjump = 'profitperjump';
export const sortmodes = [ 
    { name:sort_jumps, text: 'jumps' }, 
    { name:sort_m3, text: 'cargo vol.' }, 
    { name:sort_profit, text: 'profit' }, 
    { name:sort_profitperjump, text: 'profit/jump' }, 
  ];
const sortmode_default = 3;

const maxpagecontrols = 15;

const paginationdefault = {
      pageLength: 0,
      totalPages: 1,
      currentPage: 1,
      pageLength: 15,
      showMax: maxpagecontrols,
      size: "sm",
      threeDots: true,
      prevNext: true,
    };

const initialState = {
  unfilteredtradelist: [],
  viewcombinedtrade: new Viewcombinedtrade(),
  startsystemid: null,
  startsystemname: null,
  filtersortfield: sortmodes[sortmode_default],
  filterstartsystemid: null,
  filterendsystemid: null,
  filtercargo: 0,
  paginationconfig: paginationdefault,
};

const storeTradelist = globalHook(React, initialState, actions);

export default storeTradelist;