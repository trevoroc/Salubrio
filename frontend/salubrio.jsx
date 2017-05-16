import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';

// TODO: Code below this line for testing only
import { createUser } from './actions/session_actions';
window.createUser = createUser;
// TODO: Code above this line for testing only

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore({ currentUser: {} });
  window.store = store; // TODO: Testing only
  ReactDOM.render(<h1>Welcome to Salubrio</h1>, root);
});
