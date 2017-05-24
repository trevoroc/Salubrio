import { connect } from 'react-redux';

import { fetchWorkouts } from '../../actions/workout_actions';
import ActivityFeed from './activity_feed';

const mapStateToProps = ({ session }) => ({
  username: session.currentUser.username
});

const mapDispatchToProps = dispatch => ({
  fetchWorkouts: userId => dispatch(fetchWorkouts(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivityFeed);
