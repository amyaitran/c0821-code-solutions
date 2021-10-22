import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { showMenu: false };
  }

  handleClick() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    const isClicked = this.state.showMenu;
    if (isClicked) {
      return (
        <>
        <i className="hidden fas fa-bars"></i>
        <div className="overlay" onClick={this.handleClick}>
          <i id="atom" className="fas fa-atom"></i>
          <div className="menu" onClick={this.handleClick}>
            <h1>Menu</h1>
            <a href='#'><h3>About</h3></a>
            <a href='#'><h3>Get Started</h3></a>
            <a href='#'><h3>Sign In</h3></a>
          </div>
        </div>
        </>
      );
    } else {
      return (
        <>
        <i id="bars" className="fas fa-bars" onClick={this.handleClick}></i>
        <i id="atom" className="fas fa-atom"></i>
        <div className="hidden overlay">
          <div className="hidden menu"/>
        </div>
        </>
      );
    }
  }
}

export default AppDrawer;
