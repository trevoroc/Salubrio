import { connect } from 'react-redux';

import SplashHeader from './splash_header';
import { clearErrors } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors())
});

export default connect(null, mapDispatchToProps)(SplashHeader);
