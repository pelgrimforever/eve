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
import appstore from './appstore.js';

import Menubar from './menubar/menubar.js';
import Clock from './utilities/clock.js';
import Popupmessage from './popups/popupmessage.js';

//app specific classes
import Eveservice from './services/eveservice.js';
import Users from './users/users.js';
import Trade from './trade/trade.js';
import Downloadcontracts from './downloadcontracts/downloadcontracts.js';
import Tradetypes from './tradetypes/tradetypes.js';
import Universe from './universe/universe.js';
import Markethistory from './markethistory/markethistory.js';
import Systemjumps from './universe/systemjumps.js';
import Tradelist from './tradelist/tradelist.js';
import Combinedtradelist from './combinedtradelist/combinedtradelist.js';
import Systemkills from './systemkills/systemkills.js';
import Sellstock from './sellstock/sellstock.js';
import Contractswitchprofit from './contractswithprofit/contractswitchprofit.js';
import Wishlist from './wishlist/wishlist.js';
import Tradetracking from './tradetracking/tradetracking.js';
import Combinedtradetracking from './combinedtradetracking/combinedtradetracking.js';
import Systemtradelist from './systemtradelist/systemtradelist.js';
import Systemtradetracking from './systemtradetracking/systemtradetracking.js';
import Sellorderslowprice from './sellorderslowprice/sellorderslowprice.js';
import Marketprice from './marketprice/marketprice.js';
import Typeorders from './typeorders/typeorders.js';
import Shipfits from './shipfits/shipfits.js';
import Shipfitsorderlist from './shipfitsorderlist/shipfitsorderlist.js';
import Shipfitroute from './shipfitroute/shipfitroute.js';
import Blueprints from './blueprints/blueprints.js';
import Materialinput from './materialinput/materialinput.js';
import Userblueprints from './userblueprints/userblueprints.js';
import Bpmarketsim from './bpmarketsim/bpmarketsim.js';
import Blueprintsprofit from './blueprintsprofit/blueprintsprofit.js';

//configured in .env and .env.production
const {REACT_APP_TEST} = process.env;
const {REACT_APP_CORS} = process.env;
const {REACT_APP_SERVERURL} = process.env;

export default function Page() {

  const [appState, appActions] = appstore();

  //set REST service paramaters
  Eveservice.test = REACT_APP_TEST;
  Eveservice.cors = REACT_APP_CORS;
  Eveservice.serverurl = REACT_APP_SERVERURL;
  Sitesecurityservice.test = REACT_APP_TEST;
  Sitesecurityservice.cors = REACT_APP_CORS;
  Sitesecurityservice.serverurl = REACT_APP_SERVERURL;

  useMemo(async () => {
    //document.getElementById('body').className='body';
    document.getElementById('root').className='root fullheight';
  }, []);

  useEffect(() => {
    document.title = "Eve trade/production tools";
    appActions.initMenu();
    Store.load();
  }, []);

  useEffect(() => {
    //Store.load();
  }, [Store.user]);

  return (
<HashRouter>      
<div className="root fullheight">

  <div className="containerheader">
    <Menubar navitems={appState.navitems} />
  </div>

  <div className="content containercontent">
    <Route exact path="/">
      <Redirect to="/systemkills" />
    </Route>
    <Route exact path="/users" component={Users}/>
    <Route exact path="/trade" component={Trade}/>
    <Route exact path="/contractsdownload" component={Downloadcontracts}/>
    <Route exact path="/markethistory" component={Markethistory}/>
    <Route exact path="/tradetypes" component={Tradetypes}/>
    <Route exact path="/universe" component={Universe}/>
    <Route exact path="/systemjumps" component={Systemjumps}/>
    <Route exact path="/tradelist" component={Tradelist}/>
    <Route exact path="/tradetracking" component={Tradetracking}/>
    <Route exact path="/combinedtradelist" component={Combinedtradelist}/>
    <Route exact path="/combinedtradetracking" component={Combinedtradetracking}/>
    <Route exact path="/systemtradelist" component={Systemtradelist}/>
    <Route exact path="/systemtradetracking" component={Systemtradetracking}/>
    <Route exact path="/sellstock" component={Sellstock}/>
    <Route exact path="/wishlist" component={Wishlist}/>
    <Route exact path="/lowprice" component={Sellorderslowprice}/>
    <Route exact path="/contractswitchprofit" component={Contractswitchprofit}/>
    <Route exact path="/marketprice" component={Marketprice}/>
    <Route exact path="/typeorders" component={Typeorders}/>
    <Route exact path="/shipfits" component={Shipfits}/>
    <Route exact path="/orderparts" component={Shipfitsorderlist}/>
    <Route exact path="/shipfitroute" component={Shipfitroute}/>
    <Route exact path="/blueprints" component={Blueprints}/>
    <Route exact path="/materialinput" component={Materialinput}/>
    <Route exact path="/userblueprints" component={Userblueprints}/>
    <Route exact path="/bpmarketsim" component={Bpmarketsim}/>
    <Route exact path="/systemkills" component={Systemkills}/>
    <Route exact path="/blueprintsprofit" component={Blueprintsprofit}/>
  </div>

  <div className="containerfooter bg-dark d-flex justify-content-end">
    <div className="text-light flex-grow-1"></div>
    <div className="text-light"><Clock/></div>
  </div>

  <Popupmessage />
</div>
</HashRouter>
    );

}
