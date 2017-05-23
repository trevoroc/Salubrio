import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import configureStore from './store/store';
import Root from './components/root';

// TODO: delete later
import * as Util from './util/api_util';
window.fetchWorkouts = Util.fetchWorkouts;
window.createWorkout = Util.createWorkout;
window.deleteWorkout = Util.deleteWorkout;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  Modal.setAppElement(document.body);

  let store;
  if (window.currentUser) {
    const preLoadedState = {
      session: {
        currentUser: window.currentUser,
        errors: []
      }
    };
    store = configureStore(preLoadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;

  ReactDOM.render(<Root store={ store } />, root);
});
