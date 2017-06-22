import React from 'react';
import { withRouter } from 'react-router-dom';

class SplashHeader extends React.Component {
  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
  }

  // TODO: Update this with new modal implementation
  openModal(formType) {
    return e => {
      e.preventDefault();
      this.props.history.push(`/${formType}`);
    };
  }

  render() {

    return (
      <header className="splash-header header-opaque">
        <h1>Salubrio</h1>

        <button onClick={ this.openModal('signup') }>Sign Up</button>
        <button onClick={ this.openModal('login') }>Log In</button>
      </header>
    );
  }
}

export default withRouter(SplashHeader);
