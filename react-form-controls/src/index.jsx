import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    console.log('state:', this.state);
    event.preventDefault();
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <label>Email:
        <input type="text" name="name" value={this.state.value} onChange={this.handleChange}></input>
      </label>
      <button type="submit" value="submit">Sign Up</button>
    </form>
    );
  }
}

ReactDOM.render(
  <Form />,
  document.querySelector('#root')
);
