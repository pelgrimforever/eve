import React, { useState, useEffect, useMemo } from 'react';
import {
  Route,
  BrowserRouter as Router,
  HashRouter,
  Redirect
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
//make sure the customized css comes after the 3rd party css to enable overriding
import './app.scss';
import './eve.scss';
import './glyphons.scss';

//general classes
import Sitesecurityservice from './services/sitesecurityservice.js';
import Store from './services/store.js';

import Menubar from './menubar/menubar.js';
import Clock from './utilities/clock.js';
import Popupmessage from './popups/popupmessage.js';

//app specific classes
import Eveservice from './services/eveservice.js';
import Home from './home/home.js';
import Tradelist from './tradelist/tradelist.js';
import Combinedtradelist from './combinedtradelist/combinedtradelist.js';
//import Systemtradelist from './systemtradelist/systemtradelist.js';
import Tradetracking from './tradetracking/tradetracking.js';
import { Viewtrade } from './data/eve/view/viewtrade.js';

//configured in .env and .env.production
const {REACT_APP_TEST} = process.env;
const {REACT_APP_CORS} = process.env;
const {REACT_APP_SERVERURL} = process.env;

const maxpagecontrols = 20;

const paginationdefault = {
      pageLength: 0,
      totalPages: 1,
      currentPage: 1,
      pageLength: 0,
      showMax: maxpagecontrols,
      size: "sm",
      threeDots: true,
      prevNext: true,
    };

export const AppContext = React.createContext();
const initialState = {
  startsystemid: null,
  startsystemname: null,
  filtersortfield: { name:'profitperjump', text: 'profit/jump' },
  filterstartsystemid: null,
  filterendsystemid: null,
  filtercargo: 0,
  tradelist_pagination: paginationdefault,
  tradelist_activeviewtrade: new Viewtrade(),
  combinedtradelist_filtersortfield: { name:'profit', text: 'profit' },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setStartsystem":
      return {
        ...state,
        startsystemid: action.startsystemid,
        startsystemname: action.startsystemname
      };
    case "setFiltersortfield":
      return {
        ...state,
        filtersortfield: action.filtersortfield
      };
    case "setFilterstartsystemid":
      return {
        ...state,
        filterstartsystemid: action.filterstartsystemid
      };
    case "setFilterendsystemid":
      return {
        ...state,
        filterendsystemid: action.filterendsystemid
      };
    case "setFiltercargo":
      return {
        ...state,
        filtercargo: action.filtercargo
      };
    case "setTradelist_pagination":
      return {
        ...state,
        tradelist_pagination: action.tradelist_pagination
      };
    case "setTradelist_activeviewtrade":
      return {
        ...state,
        tradelist_activeviewtrade: action.tradelist_activeviewtrade
      };
    case "setCombinedtradelist_Filtersortfield":
      return {
        ...state,
        combinedtradelist_filtersortfield: action.combinedtradelist_filtersortfield
      };
    default:
      return state;
  }
};

export default function Page() {

  const [appstate, dispatch] = React.useReducer(reducer, initialState);

  const [navitems, setNavitems] = useState(
      [ 
        { name:'Home', link: '/home' }, 
        { name:'Trade', link: '/tradelist' }, 
        { name:'Combined trade', link: '/combinedtradelist' }, 
//        { name:'Systemtrade', link: '/systemtradelist' }, 
        { name:'Trade tracking', link: '/tradetracking' }, 
      ]);
  const [navitem, setNavitem] = useState(null);

  //set REST service paramaters
  Eveservice.test = REACT_APP_TEST;
  Eveservice.cors = REACT_APP_CORS;
  Eveservice.serverurl = REACT_APP_SERVERURL;
  Sitesecurityservice.test = REACT_APP_TEST;
  Sitesecurityservice.cors = REACT_APP_CORS;
  Sitesecurityservice.serverurl = REACT_APP_SERVERURL;

  useMemo(async () => {
    await Store.load();
    //document.getElementById('body').className='body';
    document.getElementById('root').className='root fullheight';
  }, []);

  const navigateEvent = (item) => {
    setNavitem(item);
  };

//tradelist

  return (
<AppContext.Provider
      value={{
        appstate,
        dispatch
      }}
    >    
<HashRouter>      
<div className="root fullheight">

  <div className="containerheader">
    <Menubar navitems={navitems} navigateEvent={navigateEvent}/>
  </div>

  <div className="content containercontent">
    <Route exact path="/">
      <Redirect to="/home" />
    </Route>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/tradelist" component={Tradelist}/>
    <Route exact path="/combinedtradelist" component={Combinedtradelist}/>
{/*    <Route exact path="/systemtradelist" component={Systemtradelist}/> */}
    <Route exact path="/tradetracking" component={Tradetracking}/>
  </div>

  <div className="containerfooter bg-dark d-flex justify-content-end">
    <div className="text-light flex-grow-1"></div>
    <div className="text-light"><Clock/></div>
  </div>

  <Popupmessage />
</div>
</HashRouter>
</AppContext.Provider>
    );

}
