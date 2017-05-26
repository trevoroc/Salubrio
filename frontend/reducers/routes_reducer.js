import * as RouteActions from '../actions/route_actions';

const RoutesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RouteActions.RECEIVE_ROUTES:
      return action.routes;
    default:
      return state;
  }
};

export default RoutesReducer;
