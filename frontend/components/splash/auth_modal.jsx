import React from 'react';

import AuthFormContainer from '../sessions/auth_form_container';

const renderAuthModal = (formType) => {
  return (props) => {
    return (
      <div className="auth">
        <div className="overlay"></div>
        <div className="auth-modal">
          <AuthFormContainer formType={ formType } />
        </div>
      </div>
    );
  };
};

export default renderAuthModal;
