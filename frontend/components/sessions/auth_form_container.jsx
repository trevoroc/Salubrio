import { connect } from 'react-redux';

import { signup, login } from '../../actions/session_actions';
import AuthForm from './auth_form';

const mapStateToProps = ({ currentUser }) => ({
  loggedIn: Boolean(currentUser.id)
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const sendForm = formType === 'login' ? login : signup;
  return {
    sendForm: user => dispatch(sendForm(user)),
    formType
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
