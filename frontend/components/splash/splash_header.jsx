import React from 'react';
import { Route, Link } from 'react-router-dom';
import Modal from 'react-modal';

import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import AuthFormContainer from '../sessions/auth_form_container';

class SplashHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      formType: ''
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(formType) {
    return e => {
      e.preventDefault();
      this.setState({ modalOpen: true, formType });
    };
  }

  closeModal() {
    this.setState({ modalOpen: false });
    this.props.clearErrors();
  }

  render() {
    return (
      <header className="splash-header">
        <button onClick={ this.openModal('signup') }>Sign Up</button>
        <br></br>
        <button onClick={ this.openModal('login') }>Log In</button>

        <Modal
          isOpen={ this.state.modalOpen }
          onRequestClose={ this.closeModal }
          contentLabel={ 'AuthModal' }>
          <AuthFormContainer formType={ this.state.formType }/>
        </Modal>
      </header>
    );
  }
}

export default SplashHeader;
