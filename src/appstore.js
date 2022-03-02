import React from "react";
import globalHook from "./utilities/useglobalhook.js";

import * as actions from "./appactions.js";

//data models
import { Viewtrade } from './data/eve/view/viewtrade.js';
import { Viewtradecombined } from './data/eve/view/viewtradecombined.js';
import { Viewtradesystem } from './data/eve/view/viewtradesystem.js';

const initialState = {
  navitems : 
      [ 
        { name:'Routes',
          navitems: [
              { id: 'routes', name:'System kills', link: '/systemkills', auth: false, default: true }, 
          ]
        },         
        { name:'Trade tools',
          navitems: [
            { id: 'trade', name:'Trade', link: '/tradelist', auth: false }, 
            { id: 'tradetracking', name:'Trade tracking', link: '/tradetracking', auth: false }, 
            { id: 'combinedtrade', name:'Combined trade', link: '/combinedtradelist', auth: false }, 
            { id: 'combinedtradetracking', name:'Combined trade tracking', link: '/combinedtradetracking', auth: false }, 
            { id: 'systemtrade', name:'System trade', link: '/systemtradelist', auth: false }, 
            { id: 'systemtradetracking', name:'System trade tracking', link: '/systemtradetracking', auth: false },
          ]
        },         
        { name:'Market tools',
          navitems: [
            { id: 'lowprice', name:'Low price', link: '/lowprice', auth: false }, 
            { id: 'contractprofit', name:'Contract/profit', link: '/contractswitchprofit', auth: false },
            { id: 'marketprice', name:'Market price', link: '/marketprice', auth: false }, 
            { id: 'typeorders', name:'Type orders', link: '/typeorders', auth: false }, 
            { id: 'sellstock', name:'Sell stock', link: '/sellstock', auth: false },
            { id: 'wishlist', name:'Wish list', link: '/wishlist', auth: false },
          ]
        },         
        { name:'Fits',
          navitems: [
              { id: 'shipfits', name:'Ship fits', link: '/shipfits', auth: false }, 
              { id: 'shiporderparts', name:'Order parts', link: '/orderparts', auth: false }, 
              { id: 'shiporderroute', name:'Order route', link: '/shipfitroute', auth: false }, 
          ]
        },         
        { name:'Industry',
          navitems: [
              { id: 'blueprints', name:'Blueprints', link: '/blueprints', auth: false }, 
              { id: 'materialinput', name:'Material input', link: '/materialinput', auth: false }, 
              { id: 'userblueprints', name:'Userblueprints', link: '/userblueprints', auth: false }, 
              { id: 'blueprintsim', name:'BP market simulation', link: '/bpmarketsim', auth: false }, 
              { id: 'blueprintsprofit', name:'BP calculated profit', link: '/blueprintsprofit', auth: false }, 
          ]
        },         
        { name:'Admin',
          navitems: [
              { id: 'users', name:'Users', link: '/users', auth: false}, 
          ]
        }, 
        { name:'Eve download',
          navitems: [
              { id: 'downloadtrade', name:'Trade download', link: '/trade', auth: false }, 
              { id: 'downloadcontract', name:'Contract download', link: '/contractsdownload', auth: false }, 
              { id: 'downloadmarkethist', name:'Market history', link: '/markethistory', auth: false },
              { id: 'downloadtradetype', name:'Trade types', link: '/tradetypes', auth: false },
              { id: 'downloaduniverse', name:'Universe', link: '/universe', auth: false },
              { id: 'calcsystemjumps', name:'System jumps', link: '/systemjumps', auth: false },
          ]
        }, 

      ],
  viewtrade: new Viewtrade(),
  viewtradecombined: new Viewtradecombined(),
  viewtradesystem: new Viewtradesystem(),
  activemenu: null,
};

const appstore = globalHook(React, initialState, actions);

export default appstore;