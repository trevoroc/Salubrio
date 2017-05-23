import { connect } from 'react-redux';

import WorkoutList from './workout_list';

const mapStateToProps = state => ({
  workouts: state.workouts
});

export default connect(mapStateToProps, null)(WorkoutList);
