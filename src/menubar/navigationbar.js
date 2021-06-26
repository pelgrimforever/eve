import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Navigationbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navitems: props.navitems,
      activepill: 0,
    };
  }

  componentDidMount() {
  }

  clickPill = (item, index) => {
    this.setState({ activepill: index} );
    this.props.navigateEvent(item);
  }

  render() {
    let navbuttons = this.state.navitems.map((item, index) =>
  <li key={item.name} className="nav-item" onClick={() => this.clickPill(item, index)}>
    <NavLink className='nav-link' data-toggle="pill" to={item.link}>{item.name}</NavLink>
  </li>
    )

    return (
<ul className="nav navbar-nav nav-pills">
{navbuttons}
</ul>
    );
  }
}

export default Navigationbar;