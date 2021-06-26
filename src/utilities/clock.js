import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    let hours = '' + this.state.date.getHours();
    if(hours.length<2) hours = '0' + hours;
    let mins = '' + this.state.date.getMinutes();
    if(mins.length<2) mins = '0' + mins;
    return (
      <>{hours}:{mins}</>
    );
  }
}

export default Clock;