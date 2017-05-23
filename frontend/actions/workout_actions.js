import * as APIUtil from '../util/api_util';

export const RECEIVE_WORKOUTS = 'RECEIVE_WORKOUTS';
export const RECEIVE_WORKOUT = 'RECEIVE_WORKOUT';
export const DELETE_WORKOUT = 'DELETE_WORKOUT';

export const receiveWorkouts = workouts => ({
  type: RECEIVE_WORKOUTS,
  workouts
});

export const receiveWorkout = workout => ({
  type: RECEIVE_WORKOUT,
  workout
});

export const deleteWorkoutFrontend = id => ({
  type: DELETE_WORKOUT,
  id
});

export const fetchWorkouts = userId => dispatch => (
  APIUtil.fetchWorkouts(userId)
    .then(workouts => dispatch(receiveWorkouts(workouts)))
);

export const fetchWorkout = id => dispatch => (
  APIUtil.fetchWorkout(id)
    .then(workout => dispatch(receiveWorkout(workout)))
);

export const createWorkout = workout => dispatch => (
  APIUtil.createWorkout(workout)
    .then(createdWorkout => dispatch(receiveWorkout(createdWorkout)))
);

export const updateWorkout = workout => dispatch => (
  APIUtil.updateWorkout(workout)
    .then(updatedWorkout => dispatch(receiveWorkout(updatedWorkout)))
);

// TODO: Possibly need to dispatch an action to reducer to delete the frontend
// copies of the deleted workout
export const deleteWorkout = id => dispatch => (
  APIUtil.deleteWorkout(id)
    .then(() => dispatch(deleteWorkoutFrontend(id)))
);
