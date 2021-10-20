import React from 'react';
import ReactDOM from 'react-dom';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    const isClicked = this.state.isClicked;
    if (isClicked) {
      return (
        <div className="flex">
          <div className="rectangle">
            <button className="circle" onClick={this.handleClick}></button>
          </div>
          <div className="align-center">
            <span className="margin">ON</span>
          </div>
        </div>);
    } else {
      return (
        <div className="flex">
          <div className="rectangle off">
            <button className="circle" onClick={this.handleClick}></button>
          </div>
          <div className="align-center">
            <span className="margin">OFF</span>
          </div>
        </div>);
    }
  }
}

ReactDOM.render(
  <ToggleSwitch />,
  document.querySelector('#root')
);

export default ToggleSwitch;
