import * as APIUtil from '../util/api_util';

export const RECEIVE_ROUTES = 'RECEIVE_ROUTES';

export const receiveRoutes = routes => ({
  type: RECEIVE_ROUTES,
  routes
});

export const createRoute = route => () => APIUtil.createRoute(route);

export const fetchRoutes = ids => dispatch => (
  APIUtil.fetchRoutes(ids).then(routes => dispatch(receiveRoutes(routes)))
);
