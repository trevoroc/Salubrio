import * as SessionActions from '../actions/session_actions';

const _nullUser = { id: null, username: null };

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  console.log(action.type);
  switch (action.type) {
    case SessionActions.RECEIVE_USER:
      return action.user;
    case SessionActions.LOG_OUT:
      return _nullUser;
    default:
      return state;
  }
};

export default SessionReducer;
