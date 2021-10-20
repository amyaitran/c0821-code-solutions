import React from 'react';
import ReactDOM from 'react-dom';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { numberOfClicks: 0 };
  }

  handleClick() {
    this.setState({ numberOfClicks: this.state.numberOfClicks + 1 });
  }

  render() {
    const count = this.state.numberOfClicks;
    if (count < 3) {
      return <button className="hot-button-3" onClick={this.handleClick}>Hot Button</button>;
    } if (count >= 3 && count < 6) {
      return <button className="hot-button-6" onClick={this.handleClick}>Hot Button</button>;
    } if (count >= 6 && count < 9) {
      return <button className="hot-button-9" onClick={this.handleClick}>Hot Button</button>;
    } if (count >= 9 && count < 12) {
      return <button className="hot-button-12" onClick={this.handleClick}>Hot Button</button>;
    } if (count >= 12 && count < 15) {
      return <button className="hot-button-15" onClick={this.handleClick}>Hot Button</button>;
    } if (count >= 15) {
      return <button className="hot-button-18" onClick={this.handleClick}>Hot Button</button>;
    }
  }
}
ReactDOM.render(
  <HotButton/>,
  document.querySelector('#root')
);

export default HotButton;
