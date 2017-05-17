import * as SessionActions from '../actions/session_actions';

const _nullUser = {
  id: null,
  username: null
};

const _errors = [];

const _emptyState = {
  currentUser: _nullUser,
  errors: _errors
};

const SessionReducer = (state = _emptyState, action) => {
  Object.freeze(state);
  console.log(action);
  switch (action.type) {
    case SessionActions.RECEIVE_USER:
      return Object.assign({}, state, { currentUser: action.user });
    case SessionActions.LOG_OUT:
      return _nullUser;
    default:
      return state;
  }
};

export default SessionReducer;
