import * as WorkoutActions from '../actions/workout_actions';

const WorkoutReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case WorkoutActions.RECEIVE_WORKOUT:
      return action.workout;
    case WorkoutActions.DELETE_WORKOUT:
      return action.id === state.id ? {} : state;
    default:
      return state;
  }
};

export default WorkoutReducer;
