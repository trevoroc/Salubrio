import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import ActivityFeed from './activity_feed';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(ActivityFeed);
