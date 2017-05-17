import { connect } from 'react-redux';

import { createUser, login } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => ({
  createUser: user => dispatch(createUser(user)),
  login: user => dispatch(login(user))
});
