import React from 'react';
import Title from './title.js';
import DoubleNavigationbar from './doublenavigationbar.js';
import Login from '../login/login.js';

export default function Menubar(props) {

return (
<nav className="navbar navbar-expand-sm p-0 bg-dark">
  <div className="container-fluid">
    <div className="navbar-header">
      <Title text='EVE trading' />
    </div>  

    <DoubleNavigationbar navitems={props.navitems} />

    <ul className="header nav navbar-nav navbar-right">
      <Login />
    </ul>

  </div>
</nav>
);
}