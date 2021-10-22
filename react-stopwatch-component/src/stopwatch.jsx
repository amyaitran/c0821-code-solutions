import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      isPaused: true,
      time: 0
    };
  }

  handleClick() {
    this.setState({ isPaused: !this.state.isPaused });
    if (this.state.isPaused) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }

  handleReset() {
    this.setState({ time: 0 });
  }

  startTimer() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  stopTimer() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.state.time + 1
    });
  }

  render() {
    if (this.state.isPaused) {
      return (
        <>
        <div className="center">
          <div onClick={this.handleReset} className="circle">
            <h1>{this.state.time}</h1>
          </div>
        </div>
        <div className="center">
          <i onClick={this.handleClick} className="fas fa-play"></i>
        </div>
        </>
      );
    } else {
      return (
        <>
        <div className="center">
          <div className="circle">
            <h1>{this.state.time}</h1>
          </div>
        </div>
        <div className="center">
          <i onClick={this.handleClick} className="fas fa-pause"></i>
        </div>
        </>
      );
    }
  }
}

export default Stopwatch;
