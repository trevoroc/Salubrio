import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import RootReducer from '../reducers/root_reducer';

const initialState = {
  session: {
    currentUser: {
      id: null,
      username: null
    },
    errors: []
  }
};

const configureStore = (preLoadedState = initialState) => (
  createStore(RootReducer, preLoadedState, applyMiddleware(thunk))
);

export default configureStore;
