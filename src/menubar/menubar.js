import React from 'react';
import Title from './title.js';
import Navigationbar from './navigationbar.js';
import Login from '../login/login.js';

class Menubar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navitems: props.navitems,
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
<nav className="navbar navbar-expand-sm p-0 bg-dark">
  <div className="container-fluid">
    <div className="navbar-header">
      <Title text='EVE trading' />
    </div>  
    <Navigationbar navitems={this.state.navitems} navigateEvent={this.props.navigateEvent} />

    <ul className="header nav navbar-nav navbar-right">
      <Login />
    </ul>

  </div>
</nav>
    );
  }
}

export default Menubar;