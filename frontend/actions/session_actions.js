import * as APIUtil from '../util/api_util';

export const CREATE_USER = 'CREATE_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const logoutUser = () => ({
  type: LOG_OUT
});

// TODO: Add error handling callback
export const createUser = user => dispatch => (
  APIUtil.createUser(user)
    .then(createdUser => dispatch(receiveUser(createdUser)))
);

// TODO: Add error handling callback
export const login = user => dispatch => (
  APIUtil.login(user).then(loggedInUser => dispatch(receiveUser(loggedInUser)))
);

export const logout = () => dispatch => (
  APIUtil.logout().then((res) => dispatch(logoutUser()))
);
