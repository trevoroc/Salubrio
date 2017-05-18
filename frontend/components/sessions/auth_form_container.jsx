import { connect } from 'react-redux';

import { signup, login, clearErrors } from '../../actions/session_actions';
import AuthForm from './auth_form';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser.id),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, { formType }) => {
  const sendForm = formType === 'login' ? login : signup;
  return {
    clearErrors: () => dispatch(clearErrors()),
    sendForm: user => dispatch(sendForm(user)),
    formType
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
