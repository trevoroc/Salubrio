import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

// TODO: Code below this line for testing only
import { signup, login, logout } from './actions/session_actions';
window.signup = signup;
window.login = login;
window.logout = logout;
// TODO: Code above this line for testing only

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore({ currentUser: {} });
  window.store = store; // TODO: Testing only
  ReactDOM.render(<Root store={ store } />, root);
});
