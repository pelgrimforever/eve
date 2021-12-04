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
import Tradetypes from './tradetypes/tradetypes.js';
import Tradelist from './tradelist/tradelist.js';
import Combinedtradelist from './combinedtradelist/combinedtradelist.js';
import Systemkills from './systemkills/systemkills.js';
import Sellstock from './sellstock/sellstock.js';
import Tradetracking from './tradetracking/tradetracking.js';
import Combinedtradetracking from './combinedtradetracking/combinedtradetracking.js';
import Systemtradelist from './systemtradelist/systemtradelist.js';
import Systemtradetracking from './systemtradetracking/systemtradetracking.js';

//configured in .env and .env.production
const {REACT_APP_TEST} = process.env;
const {REACT_APP_CORS} = process.env;
const {REACT_APP_SERVERURL} = process.env;

export default function Page() {

  const [navitems, setNavitems] = useState(
      [ 
        { name:'Eve download', link: '/evedownload',
          navitems: [
              { name:'Trade download', link: '/home' }, 
              { name:'Trade types', link: '/tradetypes' },
          ]
        }, 
          { name:'Trade tools', link: '/tradetools',
            navitems: [
              { name:'Trade', link: '/tradelist' }, 
              { name:'Trade tracking', link: '/tradetracking' }, 
              { name:'Combined trade', link: '/combinedtradelist' }, 
              { name:'Combined trade tracking', link: '/combinedtradetracking' }, 
              { name:'System trade', link: '/systemtradelist' }, 
              { name:'System trade tracking', link: '/systemtradetracking' },
              { name:'Sell stock', link: '/sellstock' },
            ]
        },         
        { name:'Routes', link: '/routes',
          navitems: [
              { name:'System kills', link: '/systemkills' }, 
          ]
        },         

      ]);

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
    Store.load();
  }, []);

  return (
<HashRouter>      
<div className="root fullheight">

  <div className="containerheader">
    <Menubar navitems={navitems} />
  </div>

  <div className="content containercontent">
    <Route exact path="/">
      <Redirect to="/home" />
    </Route>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/tradetypes" component={Tradetypes}/>
    <Route exact path="/tradelist" component={Tradelist}/>
    <Route exact path="/tradetracking" component={Tradetracking}/>
    <Route exact path="/combinedtradelist" component={Combinedtradelist}/>
    <Route exact path="/combinedtradetracking" component={Combinedtradetracking}/>
    <Route exact path="/systemtradelist" component={Systemtradelist}/>
    <Route exact path="/systemtradetracking" component={Systemtradetracking}/>
    <Route exact path="/sellstock" component={Sellstock}/>
    <Route exact path="/systemkills" component={Systemkills}/>
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
