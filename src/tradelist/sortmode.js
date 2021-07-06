import React from 'react';

//app components

//services

//data models

class Sortmode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modes: props.modes,
      activemode: props.modes[props.sortmode_default],
    };
  }

  clickmode = (mode, index) => {
    this.setState({ activemode: mode} );
    this.props.onModeselected(mode);
  }

  render() {
    const activemode = this.state.activemode;
    var getClass = function(name, mode) {
      if(mode.name===activemode.name)
        return name + ' active';
      return name;
    };

    let modebuttons = this.state.modes.map((item, index) =>
  <button key={item.name} className={getClass("btn btn-primary", item)} onClick={() => this.clickmode(item, index)}>
    {item.text}
  </button>
    )

    return (
<div className="d-flex btn-group btn-group-sm p-0" role="group" data-toggle="button">
  <span className="mr-2">{this.props.title}</span>{modebuttons}
</div>
    );
  }
}

export default Sortmode;