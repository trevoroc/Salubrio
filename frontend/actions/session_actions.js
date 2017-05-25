import * as APIUtil from '../util/api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const LOG_OUT = 'LOG_OUT';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const logoutUser = () => ({
  type: LOG_OUT
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then(createdUser => dispatch(receiveUser(createdUser)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(loggedInUser => dispatch(receiveUser(loggedInUser)),
                           err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.logout().then((res) => dispatch(logoutUser()))
);
