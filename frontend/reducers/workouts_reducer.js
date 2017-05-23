import * as WorkoutActions from '../actions/workout_actions';

const merge = require('lodash.merge');

const WorkoutsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case WorkoutActions.RECEIVE_WORKOUTS:
      return action.workouts;
    case WorkoutActions.DELETE_WORKOUT:
      const newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default WorkoutsReducer;
