import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import WorkoutsReducer from './workouts_reducer';
import WorkoutReducer from './workout_reducer';
import RoutesReducer from './routes_reducer';

export default combineReducers({
  session: SessionReducer,
  workouts: WorkoutsReducer,
  workout: WorkoutReducer,
  routes: RoutesReducer
});
