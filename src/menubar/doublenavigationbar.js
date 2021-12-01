import React, { useState, useEffect } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import "./doublenavigationbar.scss";

//component state
import appstore from '../appstore.js';
import {useHistory} from 'react-router-dom';

export default function DoubleNavigationbar(props) {
  //variables with App scope
  const [appState, appActions] = appstore();

  const [activepill1, setActivepill1] = useState(0);

  const clickPill1 = (item, index) => {
    setActivepill1(index);
  }

  let history = useHistory();
  
  useEffect(() => {
    if(appState.activemenu!=null) {
      activateitems(appState.activemenu.menu1, appState.activemenu.menu2);
    }
  }, [appState.activemenu]);

  const activateitems = (item1, item2) => {
    props.navitems.map((item, index) => {
      if(item.name===item1) {
        setActivepill1(index);
      }
    });
    let navitems2length = props.navitems[activepill1].navitems.length;
    for(let i=0; i < navitems2length; i++){
      if(props.navitems[activepill1].navitems[i].name===item2) {
        history.push(props.navitems[activepill1].navitems[i].link);
      }
    }
  }

  const navbuttons1 = () => { 
    return props.navitems.map((item, index) =>
  <li key={item.name} className="nav-item" onClick={() => clickPill1(item, index)}>
    <div className={index===activepill1 ? 'nav1 nav1active' : 'nav1 nav1inactive'}>{item.name}</div>
  </li>
    )
  }

  const navbuttons2 = () => { 
    return props.navitems[activepill1].navitems.map((item, index) =>
  <li key={item.name} className="nav-item" >
    <NavLink className='nav-link' data-toggle="pill" to={item.link}>{item.name}</NavLink>
  </li>
    )
  }

return (
<div className="mr-auto">  
  <ul className="nav navbar-nav nav-pills mr-auto">
  {navbuttons1()}
  </ul>
  <ul className="nav navbar-nav nav-pills mr-auto mt-1">
  {navbuttons2()}
  </ul>
</div>
);

}
