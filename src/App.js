import React from 'react';
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

//configured in .env and .env.production
const {REACT_APP_TEST} = process.env;
const {REACT_APP_CORS} = process.env;
const {REACT_APP_SERVERURL} = process.env;

class Page extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navitems: [ 
        { name:'Home', link: '/home' }, 
        { name:'Trade', link: '/tradelist' }, 
      ],
      navitem: null,
    };
    this.navigateEvent.bind(this);

    //set REST service paramaters
    Eveservice.test = REACT_APP_TEST;
    Eveservice.cors = REACT_APP_CORS;
    Eveservice.serverurl = REACT_APP_SERVERURL;
    Sitesecurityservice.test = REACT_APP_TEST;
    Sitesecurityservice.cors = REACT_APP_CORS;
    Sitesecurityservice.serverurl = REACT_APP_SERVERURL;
  }

  async componentWillMount(){
    //can only download data after server settings are initialized
    await Store.load();
  }

  async componentDidMount(){
    //document.getElementById('body').className='body';
    document.getElementById('root').className='root fullheight';
  }

  navigateEvent = (item) => {
    this.setState( { navitem: item } );
  }

  render() {

    return (
<HashRouter>      
<div className="root fullheight">

  <div className="containerheader">
    <Menubar navitems={this.state.navitems} navigateEvent={this.navigateEvent}/>
  </div>

  <div className="content containercontent">
    <Route exact path="/">
      <Redirect to="/home" />
    </Route>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/tradelist" component={Tradelist}/>
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

}

export default Page;