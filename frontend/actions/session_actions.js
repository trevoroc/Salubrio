import * as APIUtil from '../util/api_util';

export const CREATE_USER = 'CREATE_USER';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const createUser = user => dispatch => (
  APIUtil.createUser(user)
    .then(createdUser => dispatch(receiveUser(createdUser)))
);
