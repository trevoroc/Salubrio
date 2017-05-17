import React from 'react';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.update = this.update.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render() {
    const buttonText = (
      this.props.formType === 'login'
    ) ? (
      'Log In'
    ) : (
      'Create Account'
    );

    return (
      <form>
        <input type="text" placeholder="Username"
          onChange={ this.update('username') }
          value={ this.state.username }></input>
        <input type="password" placeholder="Password"
          onChange={ this.update('password') }
          value={ this.state.password }></input>
        <button onClick={ this.handleSubmit }></button>
      </form>
    );
  }
}
