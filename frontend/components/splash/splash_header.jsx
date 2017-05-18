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
    const modalStyle = {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(58, 60, 69, 0.92)',
        zIndex: 10
      },
      content: {
        position: 'fixed',
        top: '100px',
        left: '33%',
        right: '33%',
        bottom: '150px',
        border: '1px solid #ccc',
        padding: '20px',
        zIndex: 11
      }
    };

    return (
      <header className="splash-header">
        <button onClick={ this.openModal('signup') }>Sign Up</button>
        <br></br>
        <button onClick={ this.openModal('login') }>Log In</button>

        <Modal
          isOpen={ this.state.modalOpen }
          onRequestClose={ this.closeModal }
          contentLabel={ 'AuthModal' }
          style={ modalStyle }>
          <AuthFormContainer formType={ this.state.formType }/>
        </Modal>
      </header>
    );
  }
}

export default SplashHeader;
