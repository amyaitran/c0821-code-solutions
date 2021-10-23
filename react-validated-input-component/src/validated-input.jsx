import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    event.preventDefault();
    const password = this.state.password;
    const digits = /[0-9]/;
    const capitalLetters = /[A-Z]/;
    const specialCharacters = /[!@#$%^&*()]/;
    if (
      password.length >= 8 &&
      password.match(digits) &&
      password.match(capitalLetters) &&
      password.match(specialCharacters)
    ) {
      alert('Valid password! :)');
    } else {
      alert('Invalid password');
    }
  }

  validationIndicators() {
    if (this.state.password === '') {
      return (
        <>
          <i className="red fas fa-times"></i>
          <p className="red pt-8">A password is required.</p>
        </>
      );
    } else if (this.state.password.length < 8) {
      return (
        <>
        <i className="red fas fa-times"></i>
        <p className="red pt-8">Your password is too short.</p>
        </>
      );
    } else {
      return <i className="green fas fa-check"></i>;
    }
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <label>Password</label>
      <div>
        <input type="password" name="password" value={this.state.value} onChange={this.handleChange} required />
         <button type="submit" value="submit">Submit</button>
        { this.validationIndicators() }
      </div>
    </form>
    );
  }
}

export default ValidatedInput;
