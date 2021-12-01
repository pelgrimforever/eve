import React, { useState, useEffect } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

export default function Navigationbar(props) {
  const [activepill, setActivepill] = useState(0);

  const clickPill = (item, index) => {
    setActivepill(index);
    props.navigateEvent(item);
  }

  const navbuttons = () => { 
    return props.navitems.map((item, index) =>
  <li key={item.name} className="nav-item" onClick={() => clickPill(item, index)}>
    <NavLink className='nav-link' data-toggle="pill" to={item.link}>{item.name}</NavLink>
  </li>
    )
  }

return (
<ul className="nav navbar-nav nav-pills mr-auto">
{navbuttons()}
</ul>
);

}
