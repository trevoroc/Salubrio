import { connect } from 'react-redux';

import SplashHeader from './splash_header';
import { login, clearErrors } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(null, mapDispatchToProps)(SplashHeader);
