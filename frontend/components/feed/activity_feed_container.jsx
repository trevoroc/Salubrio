import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchWorkouts } from '../../actions/workout_actions';
import ActivityFeed from './activity_feed';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchWorkouts: userId => dispatch(fetchWorkouts(userId))
});

export default connect(null, mapDispatchToProps)(ActivityFeed);
