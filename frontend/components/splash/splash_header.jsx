import React from 'react';
import { withRouter } from 'react-router-dom';

class SplashHeader extends React.Component {
  constructor(props) {
    super(props);

    this.guestLogin = this.guestLogin.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  guestLogin(e) {
    e.preventDefault();

    // TODO: Directly login
  }

  openModal(formType) {
    return e => {
      e.preventDefault();

      let modalPromise = new Promise((resolve, reject) => {
        this.props.history.push(`/${formType}`);
        resolve('OK');
      });

      modalPromise.then(() => {
        const overlay = document.getElementsByClassName('overlay')[0];
        overlay.addEventListener('click', this.closeModal);
      });
    };
  }

  closeModal(e) {
    this.props.history.push('/');
  }

  render() {

    return (
      <header className="splash-header header-transparent">
        <h1>Salubrio</h1>

        <div className="button-container">
          <button onClick={ this.guestLogin }>Guest</button>
          <button onClick={ this.openModal('signup') }>Sign Up</button>
          <button onClick={ this.openModal('login') }>Log In</button>
        </div>
      </header>
    );
  }
}

export default withRouter(SplashHeader);
