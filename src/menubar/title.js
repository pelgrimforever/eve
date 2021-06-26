import React from 'react';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <span className="navbar-brand text-light" href="#">{this.state.text}</span>
    );
  }
}

export default Title;